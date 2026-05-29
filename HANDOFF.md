# HANDOFF — MAP Website (bk-2)

> Per-worktree state. Update before every `/clear`. Resume prompt reads this first.

## State

Site deployed and live at https://map.mikegrowsgreens.com. All 4 pages verified on desktop + mobile. PM2 process `map` running on port 3007, Caddy reverse proxy configured, Cloudflare DNS already set.

## Next

- Wire contact form to n8n webhook (currently POSTs to `/api/contact` but needs a real webhook URL)
- When Brittany gets her own domain, update Caddy + Cloudflare to point there
- Optional: ask Brittany for a transparent/lighter logo version

## Blocked on

- n8n webhook URL for contact form submissions
- Brittany's feedback on the live site

## Recent decisions

- Deployed to `map.mikegrowsgreens.com` (MGG server, personal repo)
- PM2 process name: `map`, port 3007
- GitHub repo: `mikegrowsgreens/modern-ancient-psychiatry` (private)
- Mobile nav overlay moved outside `<header>` to fix stacking context — uses inline bg color + z-[60]
- BookingCTA overlay at 40% opacity (was 60%) so portrait shows through

## Resume prompt

```
Read HANDOFF + CLAUDE.md + `git log -10`. Report state. Begin the next slice without asking which one.
```
