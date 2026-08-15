import { WHY_DIFFERENT } from "@/content/home";

/**
 * The page's `open` centerpiece.
 *
 * The four lowercase fragments used to be gold-dot bullets in a centered
 * max-w-2xl column. They are now a hairline-ruled index: one full-measure row
 * each, hanging folio numeral, and a deliberately empty right column. The empty
 * column is the point — the copy promises unrushed, unhurried care, and held
 * space is the layout's way of saying it. Copy is verbatim; the lowercase is
 * hers and is preserved.
 */
export default function WhyDifferent() {
  return (
    <section className="bg-deep px-6 pt-rhythm-open md:px-12 lg:px-[4.5rem]">
      <div className="mx-auto w-full max-w-index">
        <h2 className="max-w-display font-heading text-display font-light text-cream">
          {WHY_DIFFERENT.heading}
        </h2>

        <div className="mt-14 border-t border-cream/[0.12]">
          {WHY_DIFFERENT.points.map((point, i) => (
            <div
              key={point}
              className="grid grid-cols-[2.75rem_1fr] items-start gap-x-4 border-b border-cream/[0.12] py-8 lg:grid-cols-[3.5rem_1fr_14rem] lg:gap-x-8 lg:py-10"
            >
              <p className="tabular pt-2 font-body text-label font-semibold uppercase text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-heading text-verse font-light text-cream">{point}</p>
              {/* Third column intentionally empty on desktop. */}
            </div>
          ))}
        </div>

        {/* Pull quote. Full width, flush-left, rule above — not a centered
            blockquote under a centered mx-auto divider. */}
        <div aria-hidden className="mt-rhythm-close h-px w-full bg-gold/[0.28]" />
        <blockquote className="mt-8">
          <p className="max-w-display font-heading text-display font-light text-gold">
            {WHY_DIFFERENT.closing}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
