# HANDOFF — MAP Website (bk-2)

> Per-worktree state. Update before every `/clear`. Resume prompt reads this first.

## State

Site deployed and live at https://map.mikegrowsgreens.com. Visual audit complete — home page now matches the original site (modernancient-psychiatry.com) with frosted glass hero circle, decorative vine philosophy section, yellow/gold FAQ + CTA + footer.

## What shipped this session

- Hero: frosted glass circle overlay (matches original)
- Philosophy section: cream bg with decorative Celtic vine border + 3-column layout
- FAQ: yellow header + white accordion cards with chevrons on sky/wheat bg
- BookingCTA: yellow/gold bg with circular Brittany photo
- Footer: yellow/gold bg with dark text
- Button: added dark variant for CTA
- Accordion: added light variant with chevron icons

## Next

- Wire contact form to n8n webhook (still POSTs to `/api/contact` but needs a real webhook URL)
- When Brittany gets her own domain, update Caddy + Cloudflare to point there
- Optional remaining gaps (lower priority):
  - Social media links (Facebook, Instagram) on Contact page
  - Video section on home page (if Brittany has a video to embed)

## Blocked on

- n8n webhook URL for contact form submissions
- Brittany's feedback on the updated design
- Whether Brittany has a video to embed

## Recent decisions

- Matched original site's yellow/gold (#E8C840) color scheme for FAQ, CTA, and footer
- Used `final-20.jpg` for CTA circular photo (matches original's round headshot)
- Skipped video section — original's video was a placeholder ("Your Video Title", 0:00)
- Deployed to `map.mikegrowsgreens.com` (MGG server, personal repo)
- PM2 process name: `map`, port 3007
- GitHub repos: `mikegrowsgreens/modern-ancient-psychiatry` (deploy) + `mikegrowsgreens/claude-base` branch `bk-2` (dev)

## Resume prompt

```
Read HANDOFF + CLAUDE.md + `git log -10`. Report state. Begin the next slice without asking which one.
```
