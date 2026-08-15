import Image from "next/image";
import { FAQ as faqItems, FAQ_HEADING, FAQ_PLATE_ALT } from "@/content/home";
import Accordion from "@/components/ui/Accordion";

/**
 * The composition holds — photograph behind, contained plate in front — but the
 * `#E8C840` header cap is gone, the heading has moved out of the plate onto the
 * field above it with a wall label giving the question count, and the plate is
 * warm paper (`cream`) at radius 0 with no shadow rather than a clinical
 * `bg-white/95` rounded card.
 *
 * The photograph carries a `--deep/80` scrim so the cream heading clears the
 * 4.5:1 floor over it — the type is on a near-solid field, not on petals.
 */

const RANGE = `01 — ${String(faqItems.length).padStart(2, "0")}`;

export default function FAQ() {
  return (
    <section className="relative overflow-hidden px-6 pb-rhythm-open pt-rhythm-default md:px-12 lg:px-[4.5rem]">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/services-vertical-bg.jpg"
          alt={FAQ_PLATE_ALT}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-index">
        <p className="tabular font-body text-label font-semibold uppercase text-gold">
          {RANGE}
        </p>
        <h2 className="mt-5 max-w-display font-heading text-display font-light text-cream">
          {FAQ_HEADING}
        </h2>

        {/* Paper plate. Radius 0, no shadow, sitting directly on the field. */}
        <div className="mt-12 bg-cream px-6 py-2 md:px-10">
          <Accordion items={faqItems} variant="light" />
        </div>
      </div>
    </section>
  );
}
