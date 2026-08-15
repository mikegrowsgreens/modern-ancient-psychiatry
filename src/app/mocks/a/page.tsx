import Image from "next/image";
import { HERO, PHILOSOPHY } from "@/content/home";
import { em } from "@/content/emphasis";

/**
 * DIRECTION A — "EVENING PROGRAM"  (throwaway mock)
 *
 * A printed program for a small hall. Matte black stock, gold used as light
 * rather than decoration, hairline rules doing every bit of structural work,
 * photography set as plates with wall labels.
 *
 * Rules of this direction, held everywhere below:
 *   - Flush-left. No centered headings, no mx-auto dividers, no cards, no shadows.
 *   - Radius is 0 or fully round. Nothing between.
 *   - Type never sits on a busy photograph.
 *   - Italic is confined to verse. It is never a garnish on one word of a headline.
 *   - Every label carries a FACT (a place, a year, a fee, a count) — never an eyebrow.
 */

/* Type roles. Extreme contrast: 6rem monument down to a 0.75rem wall label (~5.6x). */
const MONUMENT =
  "font-heading font-light text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em]";
const VERSE = "font-heading font-light leading-[1.45]";
const LABEL =
  "font-body text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em]";
const TITLE = "font-heading text-[1.375rem] font-light leading-[1.3]";

/* Strings live here rather than inline in JSX (react/jsx-no-literals). */
const PLATE = {
  alt: "Sunflowers and cosmos in full sun, photographed close, Arizona",
  label: "Sunflowers, Sonoran foothills — Arizona, 2025",
};

const MARK = "A — EVENING PROGRAM";

const FOLIOS = ["I", "II", "III"] as const;

const PROGRAM = {
  count: "Four services",
  terms: "Self-pay — superbill on request",
  place: "Virtual — Arizona residents only",
};

/**
 * The index that replaces a card grid. A grid asks the reader to comparison-shop;
 * an index ranks and lets them stop. Fees and units align on one tabular column.
 */
const INDEX = [
  {
    folio: "01",
    name: "Psychiatric Evaluation",
    note: "A comprehensive assessment of your full story — not just symptoms.",
    fee: "$250.00",
    unit: "90 minutes",
  },
  {
    folio: "02",
    name: "Medication Management",
    note: "Ongoing care that counts sleep, stress, and well-being as part of the picture.",
    fee: "$150.00",
    unit: "30 minutes",
  },
  {
    folio: "03",
    name: "Psychotherapy",
    note: "Integrative CBT, DBT, ACT, and mindfulness-based work.",
    fee: "$200.00",
    unit: "Per hour",
  },
  {
    folio: "04",
    name: "Integration Sessions",
    note: "Making sense of insights from ketamine or other transformative experiences.",
    fee: "$150.00",
    unit: "Per hour",
  },
] as const;

/* Philosophy columns: hairline gold verticals on desktop, hairline horizontals stacked. */
const COLUMN_RULES = [
  "lg:pr-12",
  "border-t border-gold/20 pt-10 lg:border-t-0 lg:border-l lg:px-12 lg:pt-0",
  "border-t border-gold/20 pt-10 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0",
];

export default function DirectionA() {
  return (
    <div className="bg-deep text-cream">
      {/* Identifier, so the direction is legible in a screenshot. */}
      <p
        className={`${LABEL} fixed bottom-24 left-5 z-[60] border border-gold/40 bg-deep/90 px-3 py-2 text-gold lg:bottom-5`}
      >
        {MARK}
      </p>

      {/* ================= I. HERO ==================================================
          Split composition. Left is the ink field and carries every word; right is a
          contained plate. A 1px gold hairline circle straddles the seam — half on
          ink, half on photograph. It is the only thing that crosses. */}
      <section className="relative overflow-hidden">
        <div className="grid lg:min-h-screen lg:grid-cols-[55fr_45fr]">
          {/* Plate. On mobile it sits on top and carries no type at all. */}
          <div className="relative flex flex-col lg:order-2">
            <div className="relative h-[42vh] w-full lg:h-auto lg:flex-1">
              <Image
                src="/images/sunflower-hero.jpg"
                alt={PLATE.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            {/* Wall label. A fact — subject, place, year. Never a mood word. */}
            <div className="border-t border-cream/[0.12] px-6 py-5 lg:px-10">
              <p className={`${LABEL} text-muted`}>{PLATE.label}</p>
            </div>
          </div>

          {/* Ink field. Flush-left, hung off the page gutter. */}
          <div className="flex flex-col justify-center px-6 pb-20 pt-16 lg:order-1 lg:px-[4.5rem] lg:pb-28 lg:pt-32">
            <p className={`${LABEL} text-gold`}>{PROGRAM.place}</p>

            <h1 className={`${MONUMENT} mt-8 whitespace-pre-line text-cream lg:mt-10`}>
              {HERO.title}
            </h1>

            {/* Verse. The one italic on the page, and it sits on ink — on the
                photograph it would be illegible. */}
            <p
              className={`${VERSE} mt-8 max-w-[26ch] text-[clamp(1.25rem,2vw,1.75rem)] italic text-gold lg:mt-10`}
            >
              {HERO.subtitle}
            </p>

            {/* Rule runs the measure. It is not centered and it is not decorative. */}
            <div className="mt-12 h-px w-full max-w-[34rem] bg-cream/[0.12] lg:mt-16" />
            <p className={`${LABEL} mt-5 max-w-[46ch] text-muted`}>{HERO.tagline}</p>
          </div>
        </div>

        {/* Seam circle — desktop. Centred on the vertical seam at 55%. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[55%] top-1/2 hidden aspect-square w-[min(34vw,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60 lg:block"
        />
        {/* Seam circle — mobile. Centred on the horizontal seam at the plate's edge. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42vh] aspect-square w-[min(78vw,22rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60 lg:hidden"
        />
      </section>

      {/* ================= II. PHILOSOPHY ===========================================
          No heading, no cards, no icons. Three hanging folio numerals and three
          hairline gold verticals are the entire structure. This is the most
          confident piece of typography on the page and it is allowed to be. */}
      <section className="px-6 py-[7rem] lg:px-[4.5rem] lg:py-[11rem]">
        <div className="mx-auto grid w-full max-w-[68rem] gap-y-10 lg:grid-cols-3 lg:gap-y-0">
          {PHILOSOPHY.map((statement, i) => {
            const accent = "tone" in statement && statement.tone === "accent";
            return (
              <div key={FOLIOS[i]} className={`border-gold/20 ${COLUMN_RULES[i]}`}>
                <p className={`${LABEL} tabular-nums text-gold`}>{FOLIOS[i]}</p>
                <p
                  className={`${VERSE} mt-8 text-[clamp(1.35rem,2.2vw,1.9rem)] lg:mt-10 ${
                    accent ? "italic text-gold" : "text-cream"
                  }`}
                >
                  {em(statement.text)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= III. THE INDEX ===========================================
          A concert programme's schedule listing. The left column holds three facts
          and is then deliberately empty for the full height of the index — the held
          space is the point. Ruled rows, hanging numerals, one tabular fee column. */}
      <section className="border-t border-cream/[0.12] px-6 py-[7rem] lg:px-[4.5rem] lg:pb-[11rem] lg:pt-[7rem]">
        <div className="mx-auto grid w-full max-w-[68rem] gap-y-12 lg:grid-cols-[1fr_2.4fr] lg:gap-x-16 lg:gap-y-0">
          <div className="lg:pt-2">
            <p className={`${LABEL} text-gold`}>{PROGRAM.count}</p>
            <p className={`${LABEL} mt-4 text-muted`}>{PROGRAM.terms}</p>
            <p className={`${LABEL} mt-2 text-muted`}>{PROGRAM.place}</p>
          </div>

          <div className="border-t border-cream/[0.12]">
            {INDEX.map((row) => (
              <div
                key={row.folio}
                className="grid grid-cols-[2.75rem_1fr] items-baseline gap-x-4 gap-y-5 border-b border-cream/[0.12] py-7 transition-colors duration-200 hover:border-gold/60 lg:grid-cols-[3.5rem_1fr_9rem] lg:gap-x-8 lg:py-8"
              >
                <p className={`${LABEL} tabular-nums text-gold`}>{row.folio}</p>

                <div>
                  <h3 className={`${TITLE} text-cream`}>{row.name}</h3>
                  <p className="mt-3 max-w-[34rem] font-body text-[0.9375rem] leading-[1.7] text-cream/70">
                    {row.note}
                  </p>
                </div>

                <div className="col-start-2 lg:col-start-3 lg:row-start-1 lg:text-right">
                  <p className={`${LABEL} tabular-nums text-gold`}>{row.fee}</p>
                  <p className={`${LABEL} mt-2 tabular-nums text-gold/60`}>{row.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
