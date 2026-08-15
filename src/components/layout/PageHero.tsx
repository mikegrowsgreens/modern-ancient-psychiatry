import Image from "next/image";

type Props = {
  /**
   * Rendered as the page's <h1>. Required and non-optional on purpose: /services
   * previously had no <h1> at all because its intro copy was passed as a <p>.
   * Making the title mandatory makes that state unrepresentable.
   */
  title: string;
  image: string;
  /** Describes the photograph. A plate is content, so it is never `alt=""`. */
  imageAlt: string;
  /** The plate's wall label. A fact about the photograph, never a mood word. */
  imageLabel: string;
  /** Optional standfirst. Sits below the h1, in the ink field. */
  intro?: string;
  /** Visual weight of the plate. */
  height?: "sm" | "md";
};

const HEIGHT = {
  sm: "h-[34vh] min-h-[240px]",
  md: "h-[42vh] min-h-[300px]",
} as const;

/** Page gutters, DESIGN.md §6: 1.5rem / 3rem / 4.5rem. */
const GUTTERS = "px-6 md:px-12 lg:px-[4.5rem]";

/**
 * Page opener: plate above, ink field below, a hairline as the seam.
 *
 * This used to stack the <h1> and its standfirst on top of an `inset-0` image
 * behind a linear scrim — the exact pattern DESIGN.md §9 calls "the absolute
 * rule" against, and names as "the reason the headings read as unconfident".
 * The home hero was the only route that got it right; About, Services and
 * Contact all layered. Now none of them do: the photograph carries no type at
 * all, and the title sits in the `--deep` field beneath it.
 *
 * The plate runs under the fixed header on purpose — that is the transparent-
 * over-the-photograph relationship §10 asks for, and the header's own scrim
 * carries the nav's contrast.
 */
export default function PageHero({
  title,
  image,
  imageAlt,
  imageLabel,
  intro,
  height = "md",
}: Props) {
  return (
    <section>
      <div className={`relative w-full ${HEIGHT[height]}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
      </div>

      {/* The seam. One hairline, full width, doing all the structural work. */}
      <div className="h-px w-full bg-cream/[0.12]" />

      <div className={`${GUTTERS} pb-rhythm-close pt-8`}>
        <div className="mx-auto max-w-index">
          <p className="text-label font-semibold uppercase text-muted">
            {imageLabel}
          </p>
          <h1 className="mt-6 max-w-display text-balance font-heading text-display font-light text-cream">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-prose text-body leading-relaxed text-cream/85">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
