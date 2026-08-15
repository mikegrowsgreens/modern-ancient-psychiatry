import Image from "next/image";
import type { ReactNode } from "react";

import { MEDITATION } from "@/content/about";
import { em } from "@/content/emphasis";
import { BOOKING_CTA, HERO, INTRO, PHILOSOPHY } from "@/content/home";

/**
 * DIRECTION C — "SUTRA"
 *
 * A modern scholarly edition of a contemplative text. The whole page is type.
 * Verse, not layout: lines break where meaning breaks, sections are numbered
 * like suttas, folios hang in the margin, and photography appears exactly once
 * — full-bleed, wordless — as silence between passages.
 *
 * Throwaway. Deleted before deploy.
 */

/* ------------------------------------------------------------------ tokens */

const TABULAR = { fontVariantNumeric: "tabular-nums" } as const;

const SMALLCAPS =
  "font-body text-[0.625rem] font-normal uppercase leading-[1.9] tracking-[0.34em] text-muted/75";

const RULE = "h-px w-full bg-cream/10";

/* ----------------------------------------------------------------- content */

const RUNNING_HEAD = {
  left: "Modern Ancient Psychiatry",
  right: "Arizona · Telehealth · Adults",
};

const SECTIONS = {
  one: { numeral: "I", title: "The Opening" },
  two: { numeral: "II", title: "On the Nature of the Work" },
  three: { numeral: "III", title: "What Is Offered" },
};

/** Authored breaks: the verse breaks on meaning, never on the container. */
const METTA_LINES = MEDITATION.mantra
  .replace(/[“”]/g, "")
  .split(/(?<=happy)\s|(?<=suffering\.)\s|(?<=joy,)\s/);

const METTA_LABEL = "The Metta";
const METTA_ATTRIBUTION =
  "Loving-kindness · carried daily, not decoratively";
const METTA_GLOSS =
  "I believe that we can only truly guide others in ways that we are also willing to walk ourselves.";

const CATALOG = [
  {
    name: "Psychiatric Evaluation",
    price: "250.00",
    unit: "90 minutes",
    note: "The first hour and a half is yours. Your history, in your order, at your pace.",
  },
  {
    name: "Medication Management",
    price: "150.00",
    unit: "30 minutes",
    note: "Ongoing, collaborative, and never a conversation you are rushed through.",
  },
  {
    name: "Psychotherapy",
    price: "200.00",
    unit: "per hour",
    note: "Depth work, held with non-judgment, curiosity, and deep listening.",
  },
  {
    name: "Integration Sessions",
    price: "150.00",
    unit: "per hour",
    note: "For making sense of what surfaced, and carrying it back into a life.",
  },
];

const CURRENCY = "$";
const COLOPHON =
  "Set in Cormorant Garamond · Brittany Khoury, PMHNP-BC · Licensed in Arizona";
const GLOSS_ATTRIBUTION = "From the practitioner's note";
const CATALOG_HEAD = { left: "Offering", right: "Fee · Duration" };
const OPENING_ATTRIBUTION = "Brittany Khoury, PMHNP-BC · Board-certified";
const PHILOSOPHY_PREFACE = "Three statements of intent";

/* -------------------------------------------------------------- primitives */

function Folio({ numeral, title }: { numeral: string; title: string }) {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex items-center gap-4 lg:block">
        <span
          className="font-heading text-[1.25rem] font-light leading-none text-gold"
          style={TABULAR}
        >
          {numeral}
        </span>
        <span
          aria-hidden="true"
          className="block h-px w-10 bg-gold/40 lg:my-5 lg:h-16 lg:w-px"
        />
        <span className={`${SMALLCAPS} block lg:[writing-mode:vertical-rl]`}>
          {title}
        </span>
      </div>
    </div>
  );
}

function Passage({
  numeral,
  title,
  children,
}: {
  numeral: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-[86rem] px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-x-12">
        <Folio numeral={numeral} title={title} />
        <div className="mt-10 lg:mt-0">{children}</div>
      </div>
    </section>
  );
}

/** Hanging verse numeral + a line permitted to sit alone. */
function Verse({
  n,
  children,
  className = "",
}: {
  n: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-2 lg:grid-cols-[2.75rem_minmax(0,1fr)]">
      <span
        className="pt-[0.55em] font-heading text-[0.8125rem] font-light leading-none text-gold/70"
        style={TABULAR}
      >
        {n}
      </span>
      <p className={className}>{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------- page */

export default function DirectionCSutra() {
  const [heroFirst, heroSecond] = HERO.title.split("\n");
  const [connector, ...rest] = heroSecond.split(" ");

  return (
    <main className="relative bg-deep pb-32 text-cream antialiased">
      <span className="pointer-events-none fixed bottom-5 left-5 z-50 font-body text-[0.625rem] uppercase tracking-[0.32em] text-gold/70">
        {"C — Sutra"}
      </span>

      {/* running head */}
      <header className="mx-auto w-full max-w-[86rem] px-6 pt-10 md:px-10 lg:px-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <span className={SMALLCAPS}>{RUNNING_HEAD.left}</span>
          <span className={SMALLCAPS}>{RUNNING_HEAD.right}</span>
        </div>
        <div aria-hidden="true" className={`mt-4 ${RULE}`} />
      </header>

      {/* ------------------------------------------------- I. the opening */}
      <div className="pt-24 lg:pt-40">
        <Passage numeral={SECTIONS.one.numeral} title={SECTIONS.one.title}>
          <h1 className="font-heading font-light tracking-[-0.02em] text-cream">
            <span className="block text-[2.5rem] leading-[0.98] sm:text-[3.75rem] md:text-[4.75rem] lg:text-[6rem] xl:text-[7rem]">
              {heroFirst}
            </span>
            <span className="mt-1 block text-[2.5rem] leading-[0.98] sm:text-[3.75rem] md:text-[4.75rem] lg:text-[6rem] xl:text-[7rem]">
              <span className="italic text-muted">{connector}</span>{" "}
              {rest.join(" ")}
            </span>
          </h1>

          <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-x-16">
            <div className="space-y-6">
              <Verse
                n={1}
                className="font-heading text-[1.375rem] font-light italic leading-[1.45] text-cream/90 sm:text-[1.5rem] lg:text-[1.75rem]"
              >
                {HERO.subtitle}
              </Verse>
              <Verse
                n={2}
                className="font-heading text-[1.375rem] font-light italic leading-[1.45] text-cream/90 sm:text-[1.5rem] lg:text-[1.75rem]"
              >
                {HERO.tagline}
              </Verse>

              <div className="pt-8 pl-[1.75rem] lg:pl-[2.75rem]">
                <span className={SMALLCAPS}>{OPENING_ATTRIBUTION}</span>
              </div>
            </div>

            {/* marginal gloss — a scribe's note, kept in her own words */}
            <aside className="mt-14 border-l border-gold/25 pl-6 lg:mt-2">
              <p className="font-heading text-[1.0625rem] font-light italic leading-[1.6] text-muted">
                {INTRO.continuation[1]}
              </p>
              <p className={`${SMALLCAPS} mt-4`}>{GLOSS_ATTRIBUTION}</p>
            </aside>
          </div>
        </Passage>
      </div>

      {/* -------------------------------------- II. the nature of the work */}
      <div className="pt-32 lg:pt-52">
        <Passage numeral={SECTIONS.two.numeral} title={SECTIONS.two.title}>
          <p className={`${SMALLCAPS} mb-12`}>{PHILOSOPHY_PREFACE}</p>

          <div className="max-w-[36rem] space-y-12">
            {PHILOSOPHY.map((statement, i) => {
              const accent = "tone" in statement && statement.tone === "accent";
              return (
                <Verse
                  key={statement.text}
                  n={i + 1}
                  className={`font-heading text-[1.5rem] font-light leading-[1.38] tracking-[-0.01em] sm:text-[1.875rem] lg:text-[2.375rem] ${
                    accent ? "italic text-gold" : "text-cream"
                  }`}
                >
                  {em(statement.text)}
                </Verse>
              );
            })}
          </div>
        </Passage>
      </div>

      {/* ------------------------------------------- the metta — the spine */}
      <section className="mx-auto mt-28 w-full max-w-[86rem] px-6 md:px-10 lg:mt-44 lg:px-20">
        <div aria-hidden="true" className={RULE} />

        <div className="py-16 lg:py-24">
          <div className="lg:grid lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-x-12">
            <span className={`${SMALLCAPS} block lg:pt-3`}>{METTA_LABEL}</span>

            <div className="mt-10 lg:mt-0">
              <p className="max-w-[52ch] font-body text-[0.9375rem] leading-[1.85] text-muted">
                {METTA_GLOSS}
              </p>

              {/* mantra: indented, no quote marks, final line rubricated */}
              <div className="mt-12 lg:mt-16 lg:pl-[5rem]">
                {METTA_LINES.map((line, i) => (
                  <span
                    key={line}
                    className={`block font-heading text-[1.375rem] font-light italic leading-[1.34] tracking-[-0.015em] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] xl:text-[3.5rem] ${
                      i === METTA_LINES.length - 1 ? "text-gold" : "text-cream"
                    }`}
                  >
                    {line}
                  </span>
                ))}

                <div className="mt-10 flex items-center gap-5">
                  <span aria-hidden="true" className="h-px w-10 bg-gold/40" />
                  <span className={SMALLCAPS}>{METTA_ATTRIBUTION}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className={RULE} />
      </section>

      {/* ------------------------------------------------------- the breath */}
      <div className="relative mt-28 h-[62vh] min-h-[340px] w-full lg:mt-44 lg:h-[86vh]">
        <Image
          src="/images/calm-black-water.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-deep via-transparent to-deep"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-deep/20" />
      </div>

      {/* ------------------------------------------- III. what is offered */}
      <div className="pt-28 lg:pt-44">
        <Passage numeral={SECTIONS.three.numeral} title={SECTIONS.three.title}>
          <div className="mb-6 flex items-baseline justify-between gap-6">
            <span className={SMALLCAPS}>{CATALOG_HEAD.left}</span>
            <span className={SMALLCAPS}>{CATALOG_HEAD.right}</span>
          </div>

          <div className="border-t border-cream/10">
            {CATALOG.map((item, i) => (
              <div
                key={item.name}
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 border-b border-cream/10 py-9 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] sm:gap-x-8 lg:py-11"
              >
                <span
                  className="col-start-1 row-start-1 pt-[0.7em] font-heading text-[0.8125rem] font-light leading-none text-gold/70"
                  style={TABULAR}
                >
                  {i + 1}
                </span>

                <div className="col-start-2 row-start-1">
                  <h2 className="font-heading text-[1.5rem] font-light leading-[1.2] tracking-[-0.01em] text-cream sm:text-[1.75rem] lg:text-[2rem]">
                    {item.name}
                  </h2>
                  <p className="mt-3 max-w-[46ch] font-body text-[0.9375rem] leading-[1.8] text-muted">
                    {item.note}
                  </p>
                </div>

                <div className="col-start-2 row-start-2 mt-4 sm:col-start-3 sm:row-start-1 sm:mt-0 sm:pl-8 sm:text-right">
                  <span
                    className="block font-heading text-[1.375rem] font-light leading-none text-cream lg:text-[1.75rem]"
                    style={TABULAR}
                  >
                    {CURRENCY}
                    {item.price}
                  </span>
                  <span className={`${SMALLCAPS} mt-3 block`}>{item.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* the one line permitted to sit alone */}
          <p className="mx-auto mt-24 max-w-[24ch] text-center font-heading text-[1.625rem] font-light italic leading-[1.4] tracking-[-0.01em] text-cream sm:text-[2rem] lg:mt-32 lg:text-[2.75rem]">
            {BOOKING_CTA.subtext}
          </p>

          <div className="mt-14 flex justify-center lg:mt-20">
            <a
              href="#book"
              className="border-b border-gold/50 pb-2 font-body text-[0.6875rem] uppercase tracking-[0.34em] text-gold"
            >
              {BOOKING_CTA.cta}
            </a>
          </div>

          <div className="mt-24 lg:mt-32">
            <div aria-hidden="true" className={RULE} />
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-5">
              {BOOKING_CTA.facts.map((fact) => (
                <span key={fact} className={SMALLCAPS}>
                  {fact}
                </span>
              ))}
            </div>
            <p className={`${SMALLCAPS} mt-12`}>{COLOPHON}</p>
          </div>
        </Passage>
      </div>
    </main>
  );
}
