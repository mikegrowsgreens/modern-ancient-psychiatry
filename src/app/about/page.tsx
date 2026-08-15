import type { Metadata } from "next";
import Image from "next/image";
import {
  HERO_TITLE,
  HERO_PLATE,
  BIO,
  PERSONAL,
  MEDITATION,
  APPROACH,
  CHAPTER,
} from "@/content/about";
import BookingCTA from "@/components/sections/BookingCTA";
import Mantra from "@/components/sections/Mantra";
import PageHero from "@/components/layout/PageHero";
import Plate from "@/components/ui/Plate";

export const metadata: Metadata = {
  title: "About Brittany Khoury, PMHNP-BC",
};

/** Page gutters, DESIGN.md §6: 1.5rem / 3rem / 4.5rem. Not a shared section-padding. */
const GUTTERS = "px-6 md:px-12 lg:px-[4.5rem]";
const LABEL = "font-body text-label font-semibold uppercase";
const HEADING = "font-heading text-display font-light text-cream";
const PROSE = "max-w-prose font-body text-body leading-[1.7] text-cream/85";

/** Folio numerals for the approach essay: 01, 02, 03 … */
const folio = (i: number) => String(i + 1).padStart(2, "0");

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={HERO_TITLE}
        image="/images/singing-bowls-hero.jpg"
        imageAlt={HERO_PLATE.alt}
        imageLabel={HERO_PLATE.label}
      />

      {/* ── Bio ──────────────────────────────────────────────────────────────
          The site's ONE circular portrait (DESIGN.md §8 reserves `rounded-full`
          for four uses and this is the fourth). 20rem, a single 1px gold ring,
          flush-left on the index grid, prose held to the prose measure. The
          home page's intro plate is square with a different photograph so this
          composition happens exactly once. */}
      <section className={`bg-deep py-rhythm-default ${GUTTERS}`}>
        <div className="mx-auto grid w-full max-w-index gap-y-12 lg:grid-cols-[20rem_1fr] lg:gap-x-24">
          <div>
            <div className="relative h-80 w-80 max-w-full overflow-hidden rounded-full border border-gold">
              <Image
                src={BIO.portrait.src}
                alt={BIO.portrait.alt}
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
            <p className={`${LABEL} mt-6 text-muted`}>{BIO.label}</p>
          </div>

          <div>
            <h2 className={HEADING}>{BIO.heading}</h2>
            <div className="mt-8 space-y-6">
              {BIO.paragraphs.map((p) => (
                <p key={p} className={PROSE}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Outside of my work ───────────────────────────────────────────────
          Previously ran with no heading at all and two content-bearing
          photographs behind empty alt attributes. Now a real h2, described
          photographs, and the `mt-6` nudge grown into a deliberate staggered
          plate pair — each plate carrying a wall label beneath it. */}
      <section className={`bg-deep py-rhythm-close ${GUTTERS}`}>
        <div className="mx-auto w-full max-w-index">
          <h2 className={HEADING}>{PERSONAL.heading}</h2>

          <div className="mt-10 grid gap-y-16 lg:grid-cols-[1fr_1fr] lg:gap-x-20">
            <div className="space-y-6">
              {PERSONAL.paragraphs.map((p) => (
                <p key={p} className={PROSE}>
                  {p}
                </p>
              ))}
              {/* Her practice, in her words — the passage the mantra answers. */}
              <p className={PROSE}>{MEDITATION.text}</p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 lg:pt-2">
              {PERSONAL.plates.map((plate, i) => (
                <Plate
                  key={plate.src}
                  src={plate.src}
                  alt={plate.alt}
                  label={plate.label}
                  ratio="4/5"
                  sizes="(max-width: 1024px) 45vw, 15rem"
                  className={i === 1 ? "mt-16 lg:mt-24" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Metta — the signature moment ─────────────────────────────── */}
      <Mantra />

      {/* ── My Approach ──────────────────────────────────────────────────────
          Five paragraphs under a centred h2 become a numbered essay: heading
          flush-left, hanging folio numerals in the left margin, prose on the
          prose measure. The sentence that was carrying the whole section is
          lifted out of its paragraph and set as a pull quote that breaks the
          left margin — every word of the original still reads, in her order. */}
      <section className={`bg-deep py-rhythm-default ${GUTTERS}`}>
        <div className="mx-auto w-full max-w-index">
          <h2 className={HEADING}>{APPROACH.heading}</h2>

          <div className="mt-12 flex flex-col gap-y-10 lg:mt-16">
            {APPROACH.sections.map((passage, i) => (
              <div key={passage} className="contents">
                {i === APPROACH.pullQuoteBefore ? (
                  <blockquote className="max-w-display py-6 font-heading text-display font-light leading-[1.08] tracking-[-0.015em] text-cream">
                    {APPROACH.pullQuote}
                  </blockquote>
                ) : null}

                <div className="grid grid-cols-[2.75rem_1fr] gap-x-4 lg:grid-cols-[3.5rem_1fr] lg:gap-x-8">
                  <p className={`${LABEL} tabular pt-[0.5em] text-gold`}>
                    {folio(i)}
                  </p>
                  <p className={PROSE}>{passage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter break ────────────────────────────────────────────────────
          Full-bleed, wordless, one per page. A 1px seam above, below, and
          between the two plates; no wall label, no scrim, no heading. The
          photograph is the gap (DESIGN.md §9, `--rhythm-chapter: 0`). */}
      {/* Side by side from `md` up. At 375 two columns made each plate a
          187px-wide sliver that cropped the dunes shot to a strip of shadow and
          cut the Sedona butte off entirely — so below `md` they stack, at half
          the height each, and the pair still totals one break's worth of gap. */}
      <div className="grid grid-cols-1 border-y border-cream/[0.12] md:grid-cols-2">
        {CHAPTER.map((plate, i) => (
          <div
            key={plate.src}
            className={`relative h-[34vh] md:h-[52vh] lg:h-[62vh] ${
              i === 0 ? "border-b border-cream/[0.12] md:border-b-0 md:border-r" : ""
            }`}
          >
            <Image
              src={plate.src}
              alt={plate.alt}
              fill
              // The pair stacks full-width below `md` now, so `50vw` alone
              // under-requested and both plates rendered soft at 375.
              sizes="(max-width: 767px) 100vw, 50vw"
              // These two are the heaviest assets on the site — wordless,
              // full-bleed, and dark, which is exactly the case where q=75 buys
              // nothing a reader can see. There is no type over them and no
              // fine detail carrying meaning.
              quality={60}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <BookingCTA />
    </>
  );
}
