#!/usr/bin/env bash
#
# Deploy Modern Ancient Psychiatry to map.mikegrowsgreens.com.
#
# Build happens HERE, never on the droplet — both `next build` and a full
# `npm ci` OOM that box. We ship the standalone bundle.
#
# Note: .next/standalone deliberately excludes .next/static and public/. Both
# are copied explicitly below; without them the site loads with no CSS, no JS
# and no images.
set -euo pipefail

HOST=root@167.172.119.28
TARGET=/var/www/map-site
PORT=3023
PM2_NAME=map-site
URL=https://map.mikegrowsgreens.com

cd "$(dirname "$0")"

echo "==> Gates"
# Direction mocks must never reach production.
test ! -d src/app/mocks || { echo "FAIL: src/app/mocks still present"; exit 1; }
# Symlinks in public/ silently inflate the payload on any dereferencing copy.
test -z "$(find public -type l)" || { echo "FAIL: symlinks in public/"; exit 1; }
test -f .env.production || { echo "FAIL: .env.production missing (NEXT_PUBLIC_* is inlined at build time)"; exit 1; }

npm run lint
npx tsc --noEmit

echo "==> Build (local only)"
npm run build

echo "==> Stage"
rm -rf deploy && mkdir -p deploy/.next
cp -a .next/standalone/. deploy/
cp -a .next/static deploy/.next/static
cp -a public deploy/public

SIZE=$(du -sm deploy | cut -f1)
echo "    payload: ${SIZE}MB"
test "$SIZE" -lt 60 || { echo "FAIL: payload ${SIZE}MB too large"; exit 1; }

echo "==> Ship"
# --exclude sharp: it is a native binary. The one installed on the droplet is
# linux-x64; ours is darwin-arm64 and would not run there. Excluding it also
# stops --delete from wiping the server's copy.
rsync -az --delete --exclude 'node_modules/sharp' deploy/ "$HOST:$TARGET/"

echo "==> sharp (once, prebuilt — no compile, does not violate no-build-on-droplet)"
ssh "$HOST" "cd $TARGET && [ -d node_modules/sharp ] || npm i sharp --omit=dev --no-audit --no-fund"

echo "==> Restart"
ssh "$HOST" "cd $TARGET && (HOSTNAME=127.0.0.1 PORT=$PORT pm2 restart $PM2_NAME --update-env || HOSTNAME=127.0.0.1 PORT=$PORT pm2 start server.js --name $PM2_NAME) && pm2 save"

echo "==> Verify"
sleep 3
for p in "" about services contact; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$URL/$p")
  echo "    $code /$p"
  [ "$code" = "200" ] || { echo "FAIL: /$p returned $code"; exit 1; }
done

# Proves the LINUX sharp binary is actually present — local testing cannot.
img=$(curl -s -o /dev/null -w '%{http_code} %{content_type} %{size_download}' \
  -H 'Accept: image/avif,image/webp,*/*' \
  "$URL/_next/image?url=%2Fimages%2Ffinal-07.jpg&w=640&q=75")
echo "    image optimizer: $img"
case "$img" in
  200\ image/avif*|200\ image/webp*) ;;
  *) echo "FAIL: image optimization not working ($img)"; exit 1 ;;
esac

# The Dagster GTM training app shares this droplet and must be untouched.
train=$(curl -s -o /dev/null -w '%{http_code}' https://training.mikegrowsgreens.com)
echo "    training.mikegrowsgreens.com: $train (must stay 200)"
[ "$train" = "200" ] || { echo "FAIL: training app disturbed"; exit 1; }

echo "==> Done: $URL"
