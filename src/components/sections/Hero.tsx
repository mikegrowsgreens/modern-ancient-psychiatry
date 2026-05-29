import { HERO } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-sunflower.jpg)" }}
        />
        <div className="absolute inset-0 bg-deep/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-display md:text-[4.5rem] font-light text-cream mb-6 whitespace-pre-line">
          {HERO.title}
        </h1>
        <div className="gold-divider mb-6" />
        <p className="font-heading text-subheading md:text-heading text-gold italic font-light mb-4">
          {HERO.subtitle}
        </p>
        <p className="font-heading text-body-lg text-cream/70 italic font-light">
          {HERO.tagline}
        </p>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
      </div>
    </section>
  );
}
