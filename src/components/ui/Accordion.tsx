"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

/**
 * An index row that discloses, not a widget.
 *
 * Was a `<details>` with a chevron glyph on the light variant and a `+`/`−`
 * character swap on the dark one — two different visual languages for one
 * component. Both now share the same object: hanging folio numeral, the
 * question in Cormorant --t-title, and an indicator built from two 1px rules
 * whose vertical stroke scales to zero on open.
 *
 * The panel animates `grid-template-rows: 0fr -> 1fr`, which is not a transform
 * or an opacity. Documented deviation, DESIGN.md §11.4 — it is the only
 * technique that animates to intrinsic content height without a measured pixel
 * value, and it is scoped to this panel.
 *
 * The `light` variant is gone with the cream plate it existed for. It swapped
 * the gold folios and hairlines for `--deep` at alpha because gold measures
 * ~2:1 on cream — which meant the FAQ was the one index on the site that did
 * not rank in gold. One index, one set of tokens.
 */
const RULE = "border-gold/[0.28]";

export default function Accordion({
  items,
  idPrefix = "faq",
}: {
  items: readonly AccordionItem[];
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`border-t ${RULE}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-question-${i}`;

        return (
          <div key={item.question} className={`border-b ${RULE}`}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="grid w-full grid-cols-[2.75rem_1fr_1.5rem] items-start gap-x-4 py-6 text-left lg:grid-cols-[3.5rem_1fr_1.5rem] lg:gap-x-8"
              >
                <span
                  className="tabular pt-2 font-body text-label font-semibold uppercase text-gold"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-heading text-title font-light text-cream">
                  {item.question}
                </span>

                {/* Two 1px rules forming a +. The vertical stroke scales to 0. */}
                <span aria-hidden className="relative mt-2 block h-3 w-3 justify-self-end">
                  <span className="absolute left-0 top-1/2 h-px w-3 bg-gold" />
                  <span
                    className={`absolute left-1/2 top-0 h-3 w-px origin-center -translate-x-1/2 transition-transform duration-standard ease-out bg-gold ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-standard ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className="max-w-prose pb-8 pl-[3.75rem] font-body text-body leading-[1.7] text-cream/85 lg:pl-[4.5rem]"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
