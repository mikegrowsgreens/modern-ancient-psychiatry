import Image from "next/image";
import Button from "@/components/ui/Button";
import { INTRO } from "@/content/home";

/**
 * Differentiated from /about by role, not by decoration.
 *
 * This card used to duplicate the About page's composition AND its photograph
 * (final-07.jpg) exactly, so scrolling from one to the other read as a bug. The
 * circular gold-ringed portrait and the long narrative now belong to About
 * alone (a circular crop is one of the four reserved circles — DESIGN.md §8).
 * Here Brittany is a square plate with a wall label, two sentences, and a ghost
 * link out. Introduction, not biography.
 */
export default function IntroCard() {
  return (
    <section className="bg-deep px-6 py-rhythm-default md:px-12 lg:px-[4.5rem]">
      <div className="mx-auto grid w-full max-w-index gap-10 md:grid-cols-[18rem_1fr] md:gap-16">
        <figure className="m-0">
          <div className="relative aspect-square w-full border border-cream/[0.12]">
            <Image
              src="/images/final-20.jpg"
              alt={INTRO.portraitAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 18rem"
            />
          </div>
          <figcaption className="mt-4 font-body text-label font-semibold uppercase text-muted">
            {INTRO.credentials}
          </figcaption>
        </figure>

        <div>
          <h2 className="max-w-display font-heading text-display font-light text-cream">
            {INTRO.name}
          </h2>

          <div className="mt-8 max-w-prose space-y-5">
            {INTRO.bio.slice(0, 2).map((sentence) => (
              <p key={sentence} className="font-body text-body leading-[1.7] text-cream/85">
                {sentence}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/about">{INTRO.aboutLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
