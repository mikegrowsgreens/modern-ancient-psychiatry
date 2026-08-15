# HANDOFF — MAP Website (bk-2)

> Per-worktree state. Update before every `/clear`.

## State

Full redesign shipped and live at **https://map.mikegrowsgreens.com** (PM2 `map-site`, port 3023).

Direction is **Evening Program** — see `DESIGN.md`, which is now the hard gate for any UI
work. It was chosen from three built mocks (`/mocks/{a,b,c}`, since deleted); the bake-off
and the reasoning are recorded in DESIGN.md §2b.

Brittany already has the `map.` link, which is why the site took that subdomain. The
Dagster GTM training app was **not** moved — it already lived at
`training.mikegrowsgreens.com`; `map.` had only been a stale second alias to the same
port. `postdemo.mikegrowsgreens.com` is still a third alias to it.

## What shipped

- Design token layer in `globals.css` (channel triplets — see the warning in CLAUDE.md),
  four measures, content-weighted rhythm, motion tokens, global `:focus-visible` and
  `prefers-reduced-motion`.
- Every page restyled. Services card grid became a ruled index; About gained the Metta
  mantra as the signature moment; the footer is deep, not a second gold field.
- Production image optimization fixed (`sharp` was never installed — Next was silently
  serving untouched originals). 554KB → 36KB AVIF, verified live.
- `public/` 16M → 6M; 10.2M of unreferenced originals parked in gitignored `assets-source/`.
- a11y: native `<dialog>` mobile menu, real form labels and states, heading order fixed on
  every page, `tel:` links on 911/988.
- SEO: metadataBase, per-page metadata, sitemap, robots, JSON-LD from the content layer,
  OG image. **Indexing is off** (`NEXT_PUBLIC_INDEXABLE=false`) so this demo never competes
  with her real Wix site at modernancient-psychiatry.com.
- GA4 `G-LCRF7SMS2P` added (was entirely absent).

## Deploy

`./deploy.sh` — builds locally, ships `.next`, verifies all four routes, the image
optimizer, and that `training.mikegrowsgreens.com` is still up. Never build on the droplet.

**Gotcha, learned the hard way:** rsync must exclude BOTH `node_modules/sharp` and
`node_modules/@img`. sharp's native binary lives under `@img/sharp-<platform>`; shipping
the macOS one over the droplet's linux one silently reverts image optimization to serving
full-size originals. The deploy script's image gate catches it.

## Post-deploy design review — done 2026-08-15

The `design-review` gate ran against the deployed build, plus an `avoid-ai-design` detect
pass and a scripted sweep (contrast on every text node, hit targets, heading order, alt
text, overflow, CLS, line-length, gutters, rhythm, motion) at 1440 / 1024 / 900 / 768 /
640 / 375. **DESIGN.md §16 is the full list of what it found and what changed.**

Headlines: the mobile menu had no way to close on a phone; §11's signature scroll moment
had never been built; `PageHero` broke §9's absolute rule on three of four routes; and the
FAQ light-card-over-photograph that §10 says is deleted was still shipping. All fixed.

Clean going in and still clean: contrast (every text node, all routes, all viewports),
CLS 0.0000, zero horizontal overflow, no infinite or scroll-gated motion, and zero P0/P1
AI-slop tells.

## Next

- Mike to look at the live site and decide what he wants changed.
- 768 got the deepest scrutiny this round; it was the weakest breakpoint and is now level
  with 1440 and 375.

## Blocked on Brittany

- Vector logo, if she has one — kills a 325KB PNG rendered at 80px.
- The intro video. Her Wix site hosts a real 2:33 one
  (`video.wixstatic.com/video/a7e4ef_69263461d9e147faaf5e29d7575edda9/1080p/mp4/file.mp4`,
  82MB) — transcode and drop it into the chapter-break slot rather than rebuilding a
  placeholder.
- Whether she wants social links at all (`SOCIAL_LINKS` is empty; both were dead `#`).

## Resume prompt

```
Read HANDOFF + DESIGN.md + CLAUDE.md + `git log -10`. Report state. Begin the next slice
without asking which one.
```
