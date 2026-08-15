# Modern Ancient Psychiatry

A custom-designed website for an integrative psychiatric practice in Arizona. Built as a freelance project for a board-certified Psychiatric Mental Health Nurse Practitioner launching her solo practice.

**Status:** redesign in progress. The previous demo URL was reclaimed by another app; a new one is stood up in the deploy slice.

<!-- TODO: Replace with actual screenshots -->
<!-- ![Desktop and mobile views](docs/screenshots/hero-desktop-mobile.png) -->

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Language | TypeScript |
| Hosting | DigitalOcean (PM2 + Caddy) |
| Contact form | n8n webhook (serverless) |

## Design

The visual identity reflects the practice's philosophy: modern clinical care grounded in ancient healing traditions.

- **Typography:** Cormorant Garamond (serif headings) paired with Source Sans 3 (body) for a clinical-yet-warm feel
- **Palette:** Deep charcoal (`#0B0B0F`), cream (`#F2EDE4`), gold (`#C9A84C`), sage (`#7A8B6F`), warm surface (`#1A1A1E`)
- **Hero:** Full-viewport with Ken Burns animation (25s CSS keyframe), frosted-glass circle overlay with `backdrop-blur`
- **Animations:** Intersection Observer fade-ins that are purely additive -- content is always visible for SSR/no-JS compatibility
- **Responsive:** Mobile-first with animated hamburger (X transform), sticky mobile booking bar

## Architecture

```
src/
  app/              # Next.js App Router pages
    page.tsx        # Home (7 sections)
    about/          # Bio, approach, meditation philosophy
    services/       # Service cards, fee schedule, policies
    contact/        # Contact info + form
    api/contact/    # Form submission -> n8n webhook
  components/
    layout/         # Header, Footer, MobileBookingBar
    sections/       # Page-level sections (Hero, Philosophy, FAQ, etc.)
    ui/             # Reusable primitives (Button, Accordion, FadeIn, etc.)
  content/          # All copy as typed TS objects
    home.ts         # Hero, philosophy, FAQ, video, CTA
    about.ts        # Bio, personal, meditation, approach
    services.ts     # Services, fees, policies (fully typed)
    contact.ts      # Contact page copy
    shared.ts       # Nav, contact info, social links, footer
```

**Key pattern: Content-presentation separation.** All page copy, service definitions, fee schedules, and policies are typed TypeScript objects in `src/content/`. Components are purely presentational. This means:
- Copy updates require zero component changes
- Content is type-checked at build time
- Easy to hand off content editing to a non-developer

## Pages

| Page | Highlights |
|------|------------|
| **Home** | Ken Burns hero with frosted glass overlay, 3-column philosophy over decorative background, accordion FAQ, video placeholder, booking CTA |
| **About** | Circular portrait with gold border, staggered image grids, blockquote mantra, multi-section approach narrative |
| **Services** | 7 service cards (auto-centering last on odd count), structured fee table, 9 policy sections rendered from typed data |
| **Contact** | Two-column layout, social icons with CSS invert, validated form with n8n webhook backend |

## Features

- **Accessibility:** Skip-to-content link, semantic HTML, ARIA labels, keyboard navigation
- **Performance:** Next.js image optimization, `display: swap` fonts, priority hero loading
- **SEO:** Per-page `Metadata` API, Open Graph
- **Mobile:** Responsive grids, full-screen nav overlay, persistent booking bar

## Local Development

```bash
npm install
npm run dev
# http://localhost:3000
```

## License

Private client project. Code visible for portfolio purposes.
