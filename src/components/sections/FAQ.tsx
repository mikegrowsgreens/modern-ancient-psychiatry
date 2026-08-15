import { FAQ as faqItems, FAQ_HEADING } from "@/content/home";
import Accordion from "@/components/ui/Accordion";

/**
 * An index, not a widget — and now actually on the canvas.
 *
 * This was a cream plate floated over a photograph. DESIGN.md names that
 * pattern twice: §2 calls it "the single loudest element on the current home
 * page", and §10 says it "is deleted". It survived the redesign, and it cost
 * more than its own brightness:
 *
 *  - Gold measures ~2:1 on cream, so the folio numerals had to drop to
 *    `--deep/70`. Every other index on the site ranks with gold numerals, so
 *    the FAQ quietly left the family it belongs to.
 *  - The photograph behind it read as a dark smudge under a `--deep/70` scrim —
 *    neither a plate nor a chapter break, and §9 allows no third role.
 *
 * Both go. The rows sit straight on `--deep` with gold folios and gold
 * hairlines, exactly like the services index and "Why will this feel different"
 * above it, and the section is now the same object three times rather than two
 * plus an exception.
 */

const RANGE = `01 — ${String(faqItems.length).padStart(2, "0")}`;

export default function FAQ() {
  return (
    <section className="bg-deep px-6 pt-rhythm-default md:px-12 lg:px-[4.5rem]">
      <div className="mx-auto w-full max-w-index">
        <p className="tabular font-body text-label font-semibold uppercase text-gold">
          {RANGE}
        </p>
        <h2 className="mt-5 max-w-display font-heading text-display font-light text-cream">
          {FAQ_HEADING}
        </h2>

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
