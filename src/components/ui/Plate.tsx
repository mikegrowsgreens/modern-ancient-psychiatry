import Image from "next/image";

/**
 * Plate — DESIGN.md §9.
 *
 * Contained, sharp-cornered photography sitting directly on the canvas, with a
 * wall label beneath it. The label is a FACT (subject, place, year), never a
 * mood word, and it is the only type allowed near a photograph: type never sits
 * *on* one. No radius, no shadow, no card.
 *
 * Ratios are restricted to the three the direction allows; a pair keeps one
 * ratio between them.
 */
const RATIO = {
  "4/5": "aspect-[4/5]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
} as const;

type Props = {
  src: string;
  /** A description, matching the wall-label discipline. Never a filename. */
  alt: string;
  /** Wall label: subject · place · year. */
  label: string;
  ratio?: keyof typeof RATIO;
  sizes?: string;
  /** Layout only — offsets that stagger a pair live at the call site. */
  className?: string;
};

export default function Plate({
  src,
  alt,
  label,
  ratio = "4/5",
  sizes = "(max-width: 768px) 45vw, 22vw",
  className = "",
}: Props) {
  return (
    <figure className={className}>
      <div className={`relative w-full ${RATIO[ratio]}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <figcaption className="mt-4 border-t border-cream/[0.12] pt-3 font-body text-label font-semibold uppercase text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
