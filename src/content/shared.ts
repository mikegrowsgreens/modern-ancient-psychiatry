export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const BOOK_CTA_LABEL = "Book a Consultation";

export const EMERGENCY_DISCLAIMER =
  "If you are experiencing a mental health emergency, suicidal thoughts, or are in crisis, call 911, go to your nearest emergency room, or contact 988 immediately. Messages submitted through this website are not monitored 24/7.";

/**
 * The same sentence, split at the two numbers so they can be real `tel:` links.
 * Wording is identical to EMERGENCY_DISCLAIMER above, verbatim — the split is a
 * typesetting concern, not a copy change. The full string is kept because
 * /contact renders it as one paragraph.
 */
export const EMERGENCY = {
  lead: "If you are experiencing a mental health emergency, suicidal thoughts, or are in crisis, call",
  emergency: { number: "911", href: "tel:911" },
  middle: ", go to your nearest emergency room, or contact",
  crisis: { number: "988", href: "tel:988" },
  tail: "immediately.",
  note: "Messages submitted through this website are not monitored 24/7.",
} as const;

export const CONTACT = {
  phone: "602-633-5917",
  phoneHref: "tel:+16026335917",
  email: "info@modernancient-psychiatry.com",
  emailHref: "mailto:info@modernancient-psychiatry.com",
  location: "Virtual in Arizona",
} as const;

/**
 * Empty on purpose. Both entries were `href: "#"` placeholders rendering as
 * dead links in the footer and on /contact, and the practice's own live site
 * has no social presence to link to. Add real URLs here and both render again.
 */
export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: string;
}> = [];

export const FOOTER_TAGLINE =
  "Psychiatry rooted in science, guided by presence, and grounded in compassion.";

export const FOOTER_LEGAL =
  "\u00A9 2026 Modern Ancient Psychiatry PLLC. Services provided to Arizona residents only. Website content is informational and does not establish a provider-patient relationship.";
