# HANDOFF — MAP Website (bk-2)

> Per-worktree state. Update before every `/clear`. Resume prompt reads this first.

## State

Site deployed and live at https://map.mikegrowsgreens.com. Logo swapped to transparent-bg version (`logo-trimmed-nobg.png`). Header: full-color logo on dark bg. Footer: `brightness-0` filter for dark silhouette on gold bg. All 4 pages styled to match original site.

## What shipped this session

- Logo: created `logo-trimmed-nobg.png` (transparent bg, tightly cropped 1308x683)
- Header: transparent logo, no blend mode needed, h-14/h-20
- Footer: transparent logo with `brightness-0` for dark silhouette on gold
- Previous uncommitted work also committed: social links, video section, header CTA, skip-to-content

## Next

- Deploy updated build to production (`map.mikegrowsgreens.com`)
- Wire contact form to n8n webhook (needs a real webhook URL)
- When Brittany gets her own domain, update Caddy + Cloudflare

## Blocked on

- n8n webhook URL for contact form submissions
- Brittany's feedback on the updated design
- Whether Brittany has a video to embed (placeholder currently shown)

## Recent decisions

- Used ImageMagick `fuzz 5% -transparent black` + `-trim` to remove logo black bg
- Header: transparent logo renders naturally on dark bg
- Footer: `brightness-0` CSS filter converts all logo colors to black silhouette on gold bg
- `logo-trimmed.png` (with black bg) kept as source; `logo-trimmed-nobg.png` used in components
- PM2 process name: `map`, port 3007
- GitHub repos: `mikegrowsgreens/modern-ancient-psychiatry` (deploy) + `mikegrowsgreens/claude-base` branch `bk-2` (dev)

## Resume prompt

```
Read HANDOFF + CLAUDE.md + `git log -10`. Report state. Begin the next slice without asking which one.
```
