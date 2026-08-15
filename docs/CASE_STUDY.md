# Case Study: Modern Ancient Psychiatry

## The Client

A board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC) launching a solo integrative psychiatry practice in Arizona. She needed a professional web presence before opening to patients -- something that reflected her philosophy of blending modern evidence-based care with ancient healing traditions.

## The Problem

- No existing website or online presence
- Needed to communicate clinical credibility while feeling warm and approachable
- Required a contact/booking flow, service listings with pricing, detailed policies, and an about page that told her story
- Budget-conscious: needed to be built and deployed quickly without ongoing platform fees

## What I Built

A 4-page custom website with a design system built from scratch:

**Home** -- Full-viewport hero with Ken Burns animation and a frosted-glass circle overlay (`backdrop-blur-md`). Below the fold: a 3-column philosophy statement rendered over a decorative background image, video section (placeholder until client provides content), practitioner introduction with headshot, "Why Different" value propositions, accordion FAQ, and a booking CTA.

**About** -- Multi-section narrative page: circular portrait with gold border, personal story, meditation philosophy with blockquote mantra, staggered image grids, and a detailed approach section.

**Services** -- 7 service cards in a responsive grid that auto-centers the last card on odd counts. Below: a structured fee schedule table and 9 policy sections (insurance, payment, cancellation, no-show, Good Faith Estimate, etc.) all rendered from typed data objects.

**Contact** -- Two-column layout with contact info (phone, email, location, social links) alongside a validated contact form that submits through a Next.js API route to an n8n webhook for email delivery.

## Design Decisions

**Typography pairing.** Cormorant Garamond for headings (light weight, serif, clinical elegance) with Source Sans 3 for body (clean, readable sans-serif). This pairing says "medical professional who cares about the human experience."

**Color system.** Deep charcoal background (`#0B0B0F`) with cream text (`#F2EDE4`) and gold accents (`#C9A84C`). The dark palette feels calming and premium. Gold dividers and accents add warmth without being loud. A sage green (`#7A8B6F`) appears sparingly for nature-related elements.

**Content architecture.** All copy lives in typed TypeScript objects (`src/content/*.ts`), completely separate from components. Services, fees, and policies are structured data -- not hardcoded strings in JSX. This means the client (or anyone helping her) can update copy by editing a single file without touching component logic. Content is type-checked at build time.

**Animation philosophy.** The `FadeIn` component uses Intersection Observer to trigger a subtle upward fade, but content is always visible by default. The animation is additive -- it enhances the experience on capable browsers without hiding anything on SSR or no-JS. No layout shift, no flash of invisible content.

**Logo handling.** The client's logo had a black background. I used ImageMagick to remove the background and tightly crop it, then applied CSS `brightness-0` in the footer to create a dark silhouette against the gold background -- no separate logo file needed.

## Technical Highlights

- **Next.js 14 App Router** with per-page metadata for SEO
- **Intersection Observer** fade-in animations (SSR-safe, no layout shift)
- **Ken Burns hero** via pure CSS keyframes (25s cycle, no JS)
- **Frosted glass** circle overlay with `backdrop-blur-md` and semi-transparent borders
- **Animated mobile nav** with CSS transform hamburger-to-X transition
- **n8n webhook** integration for zero-cost contact form processing
- **Caddy** reverse proxy with automatic HTTPS on DigitalOcean

## Architecture

```
Content layer (TypeScript objects)
    |
    v
Presentational components (React/Tailwind)
    |
    v
Next.js App Router (pages + API routes)
    |
    v
PM2 + Caddy (DigitalOcean)
    |
    v
n8n (webhook for form submissions)
```

## Outcome

- Delivered a production site in under a week
- 4 pages, 20+ sections, fully responsive
- Zero ongoing platform costs (self-hosted on existing infrastructure)
- Client can update all content by editing TypeScript data files
- Accessibility: skip-to-content, semantic HTML, keyboard navigation, ARIA labels

## Stack

Next.js 14 | TypeScript | Tailwind CSS 3.4 | n8n | PM2 | Caddy | DigitalOcean
