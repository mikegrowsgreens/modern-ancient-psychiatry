import Button from "@/components/ui/Button";
import { BOOKING_CTA } from "@/content/home";
import { CONTACT } from "@/content/shared";
import { BOOKING_CTA_ID } from "@/lib/site";

/**
 * The one gold field on the page (DESIGN.md §10), and the only place on the
 * site where the roles invert: the canvas is `--gold-deep`, the ink is `--deep`
 * throughout, and the button becomes a solid fill.
 *
 * The field is `--gold-deep` (#A8873A), not the deleted `#E8C840` highlighter —
 * a program cover is printed on stock, not drawn with a marker. `--deep` on
 * this field measures 5.8:1; `--gold` on it measures 1.5:1 and never appears.
 */
type Props = {
  /**
   * Set where the field follows a chapter break. §9 gives the chapter
   * photograph `--rhythm-chapter: 0` on both sides — the photograph *is* the
   * gap — so adding `open` above the field there would put 176px of empty
   * canvas between the picture and the poster and undo the seam.
   */
  flush?: boolean;
};

export default function BookingCTA({ flush = false }: Props) {
  return (
    <section
      id={BOOKING_CTA_ID}
      // `mt` is the `open` gap §10 requires above the field; `py` is the air
      // inside it. Using padding for both would let the gold swallow the gap.
      className={`bg-gold-deep px-6 py-rhythm-default md:px-12 lg:px-[4.5rem] ${
        flush ? "" : "mt-rhythm-open"
      }`}
    >
      <div className="mx-auto grid w-full max-w-index gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <div>
          <h2 className="max-w-display font-heading text-display font-light text-deep">
            {BOOKING_CTA.subtext}
          </h2>
          <p className="mt-8 max-w-prose font-body text-body leading-[1.7] text-deep">
            {BOOKING_CTA.pretext}
          </p>
          <div className="mt-12">
            <Button href="/contact" variant="solid">
              {BOOKING_CTA.cta}
            </Button>
          </div>
        </div>

        {/* The practical facts someone weighing a first call needs, as a
            hairline-ruled list. Replaces a second portrait that duplicated the
            one further up the same page. */}
        <ul className="border-t border-deep/30">
          {BOOKING_CTA.facts.map((fact) => (
            <li
              key={fact}
              className="tabular border-b border-deep/30 py-4 font-body text-label font-semibold uppercase text-deep"
            >
              {fact}
            </li>
          ))}
          <li className="border-b border-deep/30 py-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex min-h-11 items-center font-heading text-title lining-nums tabular-nums text-deep underline-offset-[6px] hover:underline"
            >
              {CONTACT.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
