import Image from "next/image";
import { HERO } from "@/content/home";

/**
 * The split composition from the approved direction (mocks/a).
 *
 * Left is the ink field and carries every word; right is a contained plate with
 * a wall label. A 1px gold hairline circle straddles the seam between them — it
 * is the only thing that crosses. Type never sits on the photograph: the old
 * build set gold italic over bright sunflower petals, which measured well under
 * the 4.5:1 floor.
 *
 * Motion: this is the site's ONE orchestrated entrance (DESIGN.md §11). Three
 * staggered steps — monument, verse, seam circle — 80ms of stagger over a 420ms
 * token, so the last pixel lands at 500ms. Nothing else on the site animates on
 * load, and the global prefers-reduced-motion block collapses this to nothing.
 */

const STEP = [{ animationDelay: "0ms" }, { animationDelay: "40ms" }, { animationDelay: "80ms" }];

const LABEL = "font-body text-label font-semibold uppercase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-header lg:pt-0">
      <div className="grid lg:min-h-screen lg:grid-cols-[55fr_45fr]">
        {/* Plate. On mobile it sits on top and carries no type at all. */}
        <div className="relative flex flex-col lg:order-2">
          <div className="relative h-[42vh] w-full lg:h-auto lg:flex-1">
            <Image
              src="/images/sunflower-hero.jpg"
              alt={HERO.plateAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            {/* Seam circle — mobile. Straddles the bottom edge of the plate.
                Sized in vw so it can never overflow a 375 viewport the way the
                previous fixed 420px circle did. Positioning lives on the
                wrapper because animate-enter animates `transform` and would
                otherwise clobber the centering translate. */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[min(78vw,22rem)] -translate-x-1/2 translate-y-1/2 lg:hidden"
            >
              <div
                style={STEP[2]}
                className="animate-enter h-full w-full rounded-full border border-gold/60"
              />
            </div>
          </div>

          {/* Wall label. A fact — subject, place, year. Never a mood word. */}
          <div className="border-t border-cream/[0.12] px-6 py-5 md:px-12 lg:px-10">
            <p className={`${LABEL} text-muted`}>{HERO.plateLabel}</p>
          </div>
        </div>

        {/* Ink field. Flush-left, hung off the page gutter. */}
        <div className="flex flex-col justify-center px-6 pb-20 pt-16 md:px-12 lg:order-1 lg:px-[4.5rem] lg:pb-28 lg:pt-32">
          <p style={STEP[0]} className={`${LABEL} animate-enter text-gold`}>
            {HERO.label}
          </p>

          <h1
            style={STEP[0]}
            className="animate-enter mt-8 max-w-display whitespace-pre-line font-heading text-monument font-light text-cream lg:mt-10"
          >
            {HERO.title}
          </h1>

          {/* Verse. The one italic here, and it sits on ink — over the
              photograph it was unreadable. */}
          <p
            style={STEP[1]}
            className="animate-enter mt-8 max-w-[26ch] font-heading text-verse font-light italic text-gold lg:mt-10"
          >
            {HERO.subtitle}
          </p>

          {/* Rule runs the measure. Not centered, not decorative. */}
          <div
            style={STEP[1]}
            className="animate-enter mt-12 h-px w-full max-w-prose bg-cream/[0.12] lg:mt-16"
          />
          <p style={STEP[1]} className={`${LABEL} animate-enter mt-5 max-w-[46ch] text-muted`}>
            {HERO.tagline}
          </p>
        </div>
      </div>

      {/* Seam circle — desktop. Centred on the vertical seam at 55%. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[55%] top-1/2 hidden aspect-square w-[min(34vw,30rem)] -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <div
          style={STEP[2]}
          className="animate-enter h-full w-full rounded-full border border-gold/60"
        />
      </div>
    </section>
  );
}
