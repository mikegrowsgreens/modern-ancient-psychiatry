/**
 * Site-level constants. NEXT_PUBLIC_* is inlined at build time, so .env.production
 * must exist locally before `npm run build` — setting it on the server does nothing.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://map.mikegrowsgreens.com";

/**
 * DOM id on the gold booking field. The sticky mobile bar observes it and
 * stands down while it is on screen, so the same call to action never appears
 * twice on one viewport. Lives here rather than on the section so the client
 * bar can import it without pulling a server component into the browser bundle.
 */
export const BOOKING_CTA_ID = "booking-cta";

/**
 * Indexing is opt-in and currently off. This is a demo build of a practice that
 * already has a real public site; letting search engines index it would put a
 * second copy of her content in the results competing with her own domain.
 */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const GA4_ID = "G-LCRF7SMS2P";

export const SITE_NAME = "Modern Ancient Psychiatry";

export const SKIP_LINK_LABEL = "Skip to Main Content";

export const SITE_DESCRIPTION =
  "Integrative, trauma-informed psychiatric care for Arizona adults. Virtual appointments with Brittany Khoury, PMHNP-BC. Modern care with ancient wisdom.";
