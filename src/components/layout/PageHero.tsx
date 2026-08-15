import Image from "next/image";

type Props = {
  /**
   * Rendered as the page's <h1>. Required and non-optional on purpose: /services
   * previously had no <h1> at all because its intro copy was passed as a <p>.
   * Making the title mandatory makes that state unrepresentable.
   */
  title: string;
  image: string;
  /** Optional standfirst. Sits below the h1, never on top of the photograph. */
  intro?: string;
  /** Visual weight of the banner. Titles sit in the dark lower third either way. */
  height?: "sm" | "md";
};

const HEIGHT = {
  sm: "h-[40vh] min-h-[300px]",
  md: "h-[50vh] min-h-[360px]",
} as const;

export default function PageHero({ title, image, intro, height = "md" }: Props) {
  return (
    <section className={`relative flex items-end overflow-hidden ${HEIGHT[height]}`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
        {/* Scrim in the lower third, where the type sits. */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
      </div>

      <div className="relative z-10 section-padding pb-12">
        <h1 className="font-heading text-display text-cream font-light text-balance">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-prose text-cream/85 leading-relaxed">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
