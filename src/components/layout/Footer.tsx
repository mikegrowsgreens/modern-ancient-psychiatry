import Link from "next/link";
import Image from "next/image";
import {
  NAV_ITEMS,
  CONTACT,
  SOCIAL_LINKS,
  FOOTER_TAGLINE,
  FOOTER_LEGAL,
} from "@/content/shared";

/**
 * `#E8C840` is gone; the field is `--gold-deep`. Ink is `--deep` at full
 * strength throughout — the legal line was `text-deep/50` centered, which
 * measured ~2.4:1 on gold and was the worst contrast on the site.
 *
 * The three-equal-column grid is gone too. A footer is not three peer columns:
 * the logo and the tagline are the statement, the contact facts are an index,
 * the nav is a single inline row, and the legal line is a footnote. The
 * `brightness-0` logo silhouette is kept — printing the mark as solid ink on
 * the stock is real craft, not a filter hack.
 */
export default function Footer() {
  return (
    <footer className="mt-rhythm-default border-t border-cream/[0.12] bg-deep px-6 py-rhythm-default md:px-12 lg:px-[4.5rem]">
      <div className="mx-auto w-full max-w-index">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div>
            <Image
              src="/images/logo-trimmed-nobg.png"
              alt="Modern Ancient Psychiatry"
              width={400}
              height={209}
              sizes="128px"
              className="h-16 w-auto opacity-90"
            />
            <p className="mt-8 max-w-display font-heading text-verse font-light text-cream">
              {FOOTER_TAGLINE}
            </p>

            {/* SOCIAL_LINKS is empty by design (both entries were `href: "#"`).
                Guarded so it renders nothing at all rather than an empty flex
                container holding a stray 1rem of margin. */}
            {SOCIAL_LINKS.length > 0 && (
              <div className="mt-8 flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="opacity-70 transition-opacity duration-micro ease-out hover:opacity-100"
                  >
                    <Image src={link.icon} alt="" width={24} height={24} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact facts as a hairline-ruled index, not a labelled column. */}
          {/* `cream/12`, not `deep/30`: this rule sits on the deep canvas, where a
              deep hairline is invisible. The gold field's deep rules are correct
              on gold; this one was copied onto the wrong ground. */}
          <ul className="border-t border-cream/[0.12]">
            <li className="border-b border-cream/[0.12] py-1">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex min-h-11 items-center font-heading text-title lining-nums tabular-nums text-cream underline-offset-[6px] hover:underline"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="border-b border-cream/[0.12] py-1">
              <a
                href={CONTACT.emailHref}
                className="inline-flex min-h-11 items-center break-all font-body text-fine text-cream underline-offset-[6px] hover:underline"
              >
                {CONTACT.email}
              </a>
            </li>
            <li className="border-b border-cream/[0.12] py-4 font-body text-label font-semibold uppercase text-muted">
              {CONTACT.location}
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="mt-14 border-t border-cream/[0.12] pt-6">
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center font-heading text-body text-cream underline-offset-[6px] hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 max-w-prose font-body text-fine leading-[1.6] text-muted">
          {FOOTER_LEGAL}
        </p>
      </div>
    </footer>
  );
}
