import Image from "next/image";
import { INTRO } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function IntroCard() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Headshot */}
        <FadeIn className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-gold/20">
            <Image
              src="/images/brittany-headshot.jpg"
              alt="Brittany Khoury, PMHNP-BC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 288px"
            />
          </div>
        </FadeIn>

        {/* Bio text */}
        <FadeIn delay={200}>
          <h2 className="font-heading text-heading md:text-display-sm text-gold mb-6">
            {INTRO.name}
          </h2>
          <div className="space-y-4">
            {INTRO.bio.map((paragraph, i) => (
              <p key={i} className="text-cream/85 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gold/10 space-y-3">
            {INTRO.continuation.map((line, i) => (
              <p key={i} className="text-cream/85 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
