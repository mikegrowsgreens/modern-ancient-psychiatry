import { HERO } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: "url(/images/sunflower-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-deep/40" />
      </div>

      {/* Frosted glass circle */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-cream/15 backdrop-blur-md border border-cream/10 flex items-center justify-center">
          <div className="text-center px-10 max-w-md">
            <h1 className="font-heading text-display md:text-[4rem] font-light text-cream mb-4 whitespace-pre-line">
              {HERO.title}
            </h1>
            <p className="font-heading text-subheading md:text-heading text-gold italic font-light mb-3">
              {HERO.subtitle}
            </p>
            <p className="font-heading text-body text-cream/70 italic font-light">
              {HERO.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  );
}
