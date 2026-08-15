import { PHILOSOPHY } from "@/content/home";
import { em } from "@/content/emphasis";

/**
 * Three statements in Brittany's voice, stacked.
 *
 * This was a three-column grid inside `max-w-5xl` — a fifth container width
 * (DESIGN.md §13 caps it at four) hung off its own `px-12/16/24` gutters, so it
 * sat at a third left edge that matched neither the hero nor any other section.
 * Worse, each column measured 21ch at 1440 and **16ch at 768**: a twelve-word
 * sentence broken over five lines. Cormorant at `--t-subheading` needs a real
 * measure to read as a voice rather than as a column of fragments.
 *
 * Stacked at `--measure-display` it runs ~64ch at every breakpoint, and the
 * rhythm drops to `close` so this section and the IntroCard below it do not
 * share both rhythm and background (§7 rule 2) — that pairing was the one
 * metronome beat on the page.
 */
export default function Philosophy() {
  return (
    <section className="bg-deep px-6 py-rhythm-close md:px-12 lg:px-[4.5rem]">
      <div className="mx-auto max-w-index">
        <div className="flex max-w-display flex-col gap-rhythm-hairline">
          {PHILOSOPHY.map((statement, i) => (
            <p
              key={i}
              className={`font-heading text-subheading font-light leading-snug ${
                "tone" in statement && statement.tone === "accent"
                  ? "italic text-gold"
                  : "text-cream"
              }`}
            >
              {em(statement.text)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
