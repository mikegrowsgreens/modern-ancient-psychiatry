import { MEDITATION } from "@/content/about";

/**
 * The Metta — the About page's signature moment (DESIGN.md §2b, §8).
 *
 * Two elements and nothing else: one 1px gold hairline circle (the second of
 * the four reserved circles on the site), and the mantra set as four authored
 * verse lines inside it. No heading, no photograph, no button, no rule.
 *
 * The verse treatment is the one element promoted out of the rejected Sutra
 * mock: the clauses are indented with the quote marks stripped, the lines break
 * on MEANING rather than on the container, and the final clause is *rubricated*
 * in gold — a manuscript convention, not an invented flourish. It reads as one
 * held breath, which is the whole reason the page exists.
 *
 * Motion: none. DESIGN.md §11 budgets the site one orchestrated entrance (spent
 * on the home hero) and one scroll moment (spent on the header seam). This is a
 * static composition on purpose — a server component with no scroll listener,
 * no client boundary, and nothing to degrade. The reader arriving here is meant
 * to find the page already still.
 *
 * The circle is a flow element rather than an absolutely positioned one so that
 * it can never overlap the sections above or below it at any viewport.
 */

/** Authored breaks: after "happy", after "suffering.", after "joy,". */
const MANTRA_LINES = MEDITATION.mantra
  .replace(/[“”]/g, "")
  .split(/(?<=happy)\s|(?<=suffering\.)\s|(?<=joy,)\s/);

const LAST_LINE = MANTRA_LINES.length - 1;

export default function Mantra() {
  return (
    <section className="bg-deep px-6 pt-rhythm-open md:px-12 lg:px-[4.5rem]">
      <div className="flex w-full justify-center">
        {/* The one gold hairline circle. Centre left completely empty; the
            verse sits inside it. 60% opacity keeps it a ring of light rather
            than a drawn outline. */}
        <div className="grid aspect-square w-[min(86vw,34rem)] place-items-center rounded-full border border-gold/60 md:w-[min(84vw,44rem)] lg:w-[48rem] xl:w-[54rem]">
          <div>
            <blockquote className="font-heading font-light italic tracking-[-0.015em]">
              {MANTRA_LINES.map((line, i) => (
                <span
                  key={line}
                  className={`block text-[clamp(1.25rem,4.2vw,3.5rem)] leading-[1.34] ${
                    i === LAST_LINE ? "text-gold" : "text-cream"
                  }`}
                >
                  {line}
                </span>
              ))}
            </blockquote>

            <p className="mt-8 font-body text-label font-semibold uppercase text-muted lg:mt-12">
              {MEDITATION.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
