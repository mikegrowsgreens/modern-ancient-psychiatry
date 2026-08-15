import Image from "next/image";
import type { ReactNode } from "react";
import { BOOKING_CTA, HERO, PHILOSOPHY } from "@/content/home";

/* ------------------------------------------------------------------ *
 * B — NIGHTWATER
 * The photograph is the page. Type floats in it.
 * Legibility is bought with scrims, never with opacity on the text.
 * ------------------------------------------------------------------ */

const [TITLE_TOP, TITLE_BOTTOM] = HERO.title.split("\n");
const HERO_GOLD = "Ancient Wisdom";
const TITLE_BOTTOM_LEAD = TITLE_BOTTOM.slice(0, TITLE_BOTTOM.indexOf(HERO_GOLD));

/**
 * Renders `*word*` as <em>, and lifts exactly one phrase per panel into gold.
 * The gold phrase may itself be emphasised — then it renders gold *and* italic.
 */
function statement(text: string, gold: string): ReactNode[] {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const inner = part.slice(1, -1);
        return (
          <em
            key={i}
            className={inner === gold ? "italic text-gold" : "italic text-cream"}
          >
            {inner}
          </em>
        );
      }
      if (part.includes(gold)) {
        const at = part.indexOf(gold);
        return (
          <span key={i}>
            {part.slice(0, at)}
            <span className="text-gold">{gold}</span>
            {part.slice(at + gold.length)}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
}

const PANELS = [
  {
    numeral: "I",
    text: PHILOSOPHY[0].text,
    gold: "depth",
    src: "/images/butterfly-on-flowers.jpg",
    alt: "A butterfly resting on green leaves in low light",
    position: "object-[60%_center]",
    /* text sits in the right third */
    place: "items-center justify-end",
    field:
      "bg-[radial-gradient(ellipse_60%_70%_at_78%_50%,rgba(11,11,15,0.94),rgba(11,11,15,0.55)_55%,rgba(11,11,15,0.18)_100%)]",
  },
  {
    numeral: "II",
    text: PHILOSOPHY[1].text,
    gold: "intention",
    src: "/images/singing-bowls-hero.jpg",
    alt: "Hands cradling an engraved singing bowl",
    position: "object-[40%_center]",
    /* text sits low and left */
    place: "items-end justify-start",
    field:
      "bg-[radial-gradient(ellipse_70%_65%_at_20%_78%,rgba(11,11,15,0.95),rgba(11,11,15,0.55)_55%,rgba(11,11,15,0.15)_100%)]",
  },
  {
    numeral: "III",
    text: PHILOSOPHY[2].text,
    gold: "nervous system",
    src: "/images/IMG_6057.jpeg",
    alt: "Still nature at dusk",
    position: "object-[50%_40%]",
    /* text sits high and left */
    place: "items-start justify-start pt-[22vh]",
    field:
      "bg-[radial-gradient(ellipse_65%_70%_at_26%_32%,rgba(11,11,15,0.95),rgba(11,11,15,0.55)_55%,rgba(11,11,15,0.15)_100%)]",
  },
] as const;

const SERVICES = [
  { name: "Psychiatric Evaluation", price: "$250.00", meta: "90 minutes" },
  { name: "Medication Management", price: "$150.00", meta: "30 minutes" },
  { name: "Psychotherapy", price: "$200.00", meta: "per hour" },
  { name: "Integration Sessions", price: "$150.00", meta: "per hour" },
] as const;

export default function NightwaterMock() {
  return (
    <main className="relative w-full bg-deep">
      {/* identifying label */}
      <p className="pointer-events-none fixed right-5 top-5 z-50 font-body text-[0.625rem] uppercase tracking-[0.42em] text-cream/70 [text-shadow:0_1px_14px_rgba(0,0,0,0.95)] lg:right-8 lg:top-8">
        B — Nightwater
      </p>

      {/* ============================== HERO ============================== */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/calm-black-water.jpg"
          alt="Still black water threaded with reeds"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_center]"
        />
        {/* scrims: a field for the type, not a box around it */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_18%_82%,rgba(11,11,15,0.95),rgba(11,11,15,0.5)_52%,rgba(11,11,15,0.1)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/25"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent"
        />

        <div className="relative z-10 flex min-h-[100svh] w-full items-end px-6 pb-24 pt-32 sm:px-10 lg:px-24 lg:pb-32">
          <div className="max-w-[44rem]">
            <p className="font-body text-[0.6875rem] uppercase tracking-[0.44em] text-cream/70">
              Brittany Khoury · PMHNP-BC · Arizona
            </p>

            <h1 className="mt-10 font-heading text-[2.75rem] font-light leading-[1.26] tracking-[-0.005em] text-cream/95 sm:text-[3.5rem] lg:text-[4.5rem] lg:leading-[1.22]">
              {TITLE_TOP}
              <br />
              {TITLE_BOTTOM_LEAD}
              <span className="text-gold">{HERO_GOLD}</span>
            </h1>

            <p className="mt-10 max-w-[30rem] font-body text-[1.0625rem] leading-[1.85] tracking-[0.015em] text-cream/85 lg:text-[1.125rem]">
              {HERO.subtitle}
            </p>

            <p className="mt-6 max-w-[32rem] font-heading text-[1.25rem] font-light italic leading-[1.6] text-cream/70 lg:text-[1.375rem]">
              {HERO.tagline}
            </p>
          </div>
        </div>

        {/* the only chrome on the page: a breath of a scroll cue */}
        <div
          aria-hidden
          className="absolute bottom-0 right-8 z-10 hidden h-24 w-px bg-gradient-to-b from-transparent via-cream/25 to-cream/45 lg:block"
        />
      </section>

      {/* =========================== PHILOSOPHY =========================== */}
      {PANELS.map((panel) => (
        <section
          key={panel.numeral}
          className="relative isolate w-full overflow-hidden"
        >
          <Image
            src={panel.src}
            alt={panel.alt}
            fill
            sizes="100vw"
            className={`object-cover ${panel.position}`}
          />
          <div aria-hidden className={`absolute inset-0 ${panel.field}`} />
          {/* mobile carries a flat scrim so the type never lands on texture */}
          <div
            aria-hidden
            className="absolute inset-0 bg-deep/70 lg:bg-deep/25"
          />
          {/* seams: each panel dissolves into black top and bottom */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep to-transparent"
          />

          <div
            className={`relative z-10 flex min-h-[100svh] w-full px-6 py-32 sm:px-10 lg:px-24 ${panel.place}`}
          >
            <div className="max-w-[34rem]">
              <p className="font-body text-[0.625rem] uppercase tracking-[0.5em] text-cream/65">
                {panel.numeral}
              </p>
              <p className="mt-8 font-heading text-[1.875rem] font-light leading-[1.5] tracking-[-0.005em] text-cream/90 sm:text-[2.25rem] lg:text-[2.625rem] lg:leading-[1.48]">
                {statement(panel.text, panel.gold)}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ============================ SERVICES ============================ */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/final-07.jpg"
          alt="Brittany Khoury"
          fill
          sizes="100vw"
          className="object-cover object-[22%_top]"
        />
        {/* the information field: near-solid black that fades, never an edge */}
        <div
          aria-hidden
          className="absolute inset-0 bg-deep/88 lg:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(to_left,rgba(11,11,15,0.97)_0%,rgba(11,11,15,0.96)_42%,rgba(11,11,15,0.72)_62%,rgba(11,11,15,0.25)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep to-transparent"
        />

        <div className="relative z-10 flex min-h-[100svh] w-full items-center justify-end px-6 py-32 sm:px-10 lg:px-24">
          <div className="w-full max-w-[36rem]">
            <p className="font-body text-[0.625rem] uppercase tracking-[0.5em] text-cream/70">
              Sessions
            </p>

            <p className="mt-8 max-w-[30rem] font-heading text-[1.5rem] font-light leading-[1.55] text-cream/90 lg:text-[1.75rem]">
              {BOOKING_CTA.pretext}
            </p>

            <div className="mt-16 space-y-12 lg:mt-20 lg:space-y-14">
              {SERVICES.map((service) => (
                <div
                  key={service.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6"
                >
                  <h3 className="font-heading text-[1.625rem] font-light leading-[1.3] text-cream/95 sm:text-[1.875rem] lg:text-[2.125rem]">
                    {service.name}
                  </h3>
                  <p className="font-heading text-[1.375rem] font-light tabular-nums leading-[1.3] text-gold sm:text-[1.5rem] lg:text-[1.75rem]">
                    {service.price}
                  </p>
                  <p className="col-span-2 mt-3 font-body text-[0.6875rem] uppercase tracking-[0.34em] text-muted">
                    {service.meta}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 space-y-3">
              {BOOKING_CTA.facts.map((fact) => (
                <p
                  key={fact}
                  className="font-body text-[0.75rem] uppercase tracking-[0.26em] text-cream/70"
                >
                  {fact}
                </p>
              ))}
            </div>

            <p className="mt-12 font-heading text-[1.5rem] font-light italic leading-[1.5] text-cream/85 lg:text-[1.75rem]">
              {BOOKING_CTA.subtext}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
