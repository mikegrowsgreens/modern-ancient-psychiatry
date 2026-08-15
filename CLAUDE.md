# Project: Modern Ancient Psychiatry (MAP) Website

> Extends `~/.claude/CLAUDE.md`. Project-specific overrides only.

## Stakes tier

- [x] **Vibe** (personal favor for a friend, hosted on MGG)

Demo site. It carries no real patient traffic and the contact form does not deliver
messages. `NEXT_PUBLIC_INDEXABLE=false` so it never competes with the practice's real
domain in search.

## Stack

Next.js 14 (App Router) + **Tailwind v3.4.1** + TypeScript. `output: "standalone"`,
deployed on MGG (DigitalOcean) behind Caddy + PM2.

**Do not write Tailwind v4 syntax.** This is v3: `tailwind.config.ts` is the config,
`@tailwind base/components/utilities` in `globals.css`, no `@theme`, no CSS-side
`@source`. An earlier version of this file wrongly said v4.

## Design

**`DESIGN.md` in the repo root is the hard gate for any UI work.** Read it before
touching a component. Direction is "Evening Program"; the palette and typeface are
Brittany's inherited brand and are not up for redesign.

Colors live in `src/app/globals.css` as **space-separated channel triplets**
(`--c-gold: 201 168 76`), bridged into Tailwind as `rgb(var(--c-gold) / <alpha-value>)`.
A hex value in that var silently flattens every `bg-gold/10`-style alpha modifier in the
codebase to full opacity.

Copy lives in `src/content/*.ts` and is preserved verbatim — it is the practitioner's own
voice. Components never hardcode copy; `react/jsx-no-literals` warns when they do.

## Repo conventions

- Branch prefix: `mike/`
- Direct push to main (personal repo)
- **This worktree has three git remotes and one is `dagster-io/internal`.** Never a bare
  `git push`. Site work goes to `map` explicitly: `git push map HEAD:main`.
  `origin` (claude-base) receives nothing further.

## Build & deploy

- **Never build on the droplet** — both `next build` and a full `npm ci` OOM the box.
  Build locally, ship `.next`. Deploys go through `deploy.sh`, never hand-edits on the
  server.
- `.next/standalone` excludes `.next/static` and `public/`; both must be copied
  explicitly or the site loads with no CSS, JS, or images.
- `sharp` must be installed **on the droplet** (prebuilt, no compile). Without it,
  standalone + production makes every `/_next/image` request return 500.

## What to read on session start

1. This file
2. `DESIGN.md`
3. `HANDOFF.md`
4. `git log -10`
