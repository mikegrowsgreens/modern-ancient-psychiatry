import type { Metadata } from "next";
import {
  SERVICES_HERO,
  APPOINTMENTS,
  MODALITIES,
  APPOINTMENTS_HEADING,
  APPOINTMENTS_COUNT,
  MODALITIES_HEADING,
  MODALITIES_COUNT,
  FEE_ADDENDA,
  FEE_NOTICE,
  FEE_CHANGE_NOTICE,
  POLICIES_INTRO,
  POLICIES_HEADING,
  POLICIES,
} from "@/content/services";
import BookingCTA from "@/components/sections/BookingCTA";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Services & Pricing",
};

/* Page gutters. Flush-left; content hangs off the left gutter (DESIGN.md §6). */
const GUTTER = "px-6 md:px-12 lg:px-[4.5rem]";

/* Hanging folio numerals for the modality columns — position without a bar. */
const FOLIOS = ["I", "II", "III"] as const;

/**
 * Hairline verticals between the three modality columns, exactly as the
 * Philosophy band: a rule separates them, nothing encloses them.
 */
const COLUMN_RULES = [
  "lg:pr-12",
  "border-t border-gold/20 pt-10 lg:border-t-0 lg:border-l lg:px-12 lg:pt-0",
  "border-t border-gold/20 pt-10 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={SERVICES_HERO.title}
        intro={SERVICES_HERO.intro}
        image="/images/butterfly-on-flowers.jpg"
      />

      {/* ================= APPOINTMENTS =====================================
          An index, not a grid. A grid asks a dysregulated reader to
          comparison-shop seven boxes; a ruled index ranks four facts and asks
          nothing. Fees and durations align on one tabular column. */}
      <section className={`${GUTTER} pt-rhythm-default`}>
        <div className="mx-auto w-full max-w-index">
          <div className="grid gap-y-10 lg:grid-cols-[1fr_2.4fr] lg:gap-x-16 lg:gap-y-0">
            <div className="lg:pt-2">
              <h2 className="font-heading text-display font-light text-cream">
                {APPOINTMENTS_HEADING}
              </h2>
              <p className="tabular mt-6 text-label uppercase text-gold">
                {APPOINTMENTS_COUNT}
              </p>
              <p className="mt-4 max-w-prose text-fine text-muted">
                {FEE_NOTICE}
              </p>
            </div>

            <div className="rule-seam border-t">
              {APPOINTMENTS.map((service, i) => (
                <div
                  key={service.name}
                  className="rule-seam grid grid-cols-[2.75rem_1fr] items-baseline gap-x-4 gap-y-5 border-b py-7 transition-colors duration-micro ease-out hover:border-gold/60 lg:grid-cols-[3.5rem_1fr_9rem] lg:gap-x-8 lg:py-8"
                >
                  <p className="tabular text-label uppercase text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <h3 className="font-heading text-title font-light text-cream">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-prose text-body text-cream/85">
                      {service.description}
                    </p>
                  </div>

                  <div className="col-start-2 lg:col-start-3 lg:row-start-1 lg:text-right">
                    {service.price ? (
                      <p className="tabular text-label uppercase text-gold">
                        {service.price}
                      </p>
                    ) : null}
                    {service.duration ? (
                      <p className="tabular mt-2 text-label uppercase text-gold/80">
                        {service.duration}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Fee addenda -------------------------------------------------
              Belongs to the index directly above it, so it takes the hairline
              rhythm rather than a section gap. It carries only the two facts a
              per-appointment row cannot hold; the four appointment fees are
              stated once, above, and are not repeated here. */}
          <div className="py-rhythm-hairline lg:grid lg:grid-cols-[1fr_2.4fr] lg:gap-x-16">
            <div className="lg:col-start-2">
              <dl className="max-w-prose">
                <div className="rule-seam flex items-baseline justify-between gap-x-6 border-b py-3">
                  <dt className="text-fine text-muted">
                    {FEE_ADDENDA.combined.item}
                  </dt>
                  <dd className="tabular shrink-0 text-fine text-gold">
                    {FEE_ADDENDA.combined.fee}
                  </dd>
                </div>

                <div className="pt-5">
                  <p className="text-fine text-muted">
                    {FEE_ADDENDA.admin.intro}
                  </p>
                </div>

                {FEE_ADDENDA.admin.rows.map((row) => (
                  <div
                    key={row.item}
                    className="rule-seam flex items-baseline justify-between gap-x-6 border-b py-3"
                  >
                    <dt className="text-fine text-muted">{row.item}</dt>
                    <dd className="tabular shrink-0 text-fine text-gold">
                      {row.fee}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 max-w-prose text-fine text-muted">
                {FEE_ADDENDA.admin.note}
              </p>
              <p className="mt-2 max-w-prose text-fine text-muted">
                {FEE_CHANGE_NOTICE}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW CARE IS DELIVERED ============================
          Three principles, not three products. No fee, no box, no numeral in a
          fee column — the Philosophy band's treatment, because that is what
          these actually are. */}
      <section className={`${GUTTER} py-rhythm-default`}>
        <div className="mx-auto w-full max-w-index">
          <h2 className="font-heading text-display font-light text-cream">
            {MODALITIES_HEADING}
          </h2>
          <p className="tabular mt-6 text-label uppercase text-gold">
            {MODALITIES_COUNT}
          </p>

          <div className="mt-14 grid gap-y-10 lg:grid-cols-3 lg:gap-y-0">
            {MODALITIES.map((service, i) => (
              <div key={service.name} className={COLUMN_RULES[i]}>
                <p className="tabular text-label uppercase text-gold">
                  {FOLIOS[i]}
                </p>
                <h3 className="mt-6 font-heading text-title font-light text-cream">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-prose text-body text-cream/85">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POLICIES =========================================
          Fine print, set as fine print by design. Heading hangs in the left
          margin at label size; body sits at --measure-prose on the right; a
          hairline between each. Honest about its own weight, and it takes the
          visual mass off nine blocks that were carrying the same rhythm as the
          practitioner's own narrative. */}
      <section className={`${GUTTER} pb-rhythm-open pt-rhythm-close`}>
        <div className="mx-auto w-full max-w-index">
          <h2 className="font-heading text-display font-light text-cream">
            {POLICIES_HEADING}
          </h2>
          <p className="mt-8 max-w-display font-heading text-verse font-light italic text-gold">
            {POLICIES_INTRO}
          </p>

          <div className="rule-seam mt-12 border-t">
            {Object.values(POLICIES).map((policy) => (
              <div
                key={policy.heading}
                className="rule-seam grid gap-y-3 border-b py-6 lg:grid-cols-[16rem_1fr] lg:gap-x-12"
              >
                <h3 className="text-label uppercase text-muted">
                  {policy.heading}
                </h3>

                <div className="max-w-prose">
                  <p className="text-fine text-cream/85">{policy.text}</p>

                  {policy.points ? (
                    <ul className="mt-3 space-y-1">
                      {policy.points.map((point) => (
                        <li
                          key={point}
                          className="rule-seam border-l pl-4 text-fine text-muted"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {policy.note ? (
                    <p className="mt-3 text-fine text-muted">{policy.note}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
