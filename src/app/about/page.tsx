import type { Metadata } from "next";
import Image from "next/image";
import {
  HERO_TITLE,
  BIO,
  PERSONAL,
  MEDITATION,
  APPROACH,
} from "@/content/about";
import BookingCTA from "@/components/sections/BookingCTA";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Brittany Khoury, PMHNP-BC",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/singing-bowls-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-12">
          <h1 className="font-heading text-display text-cream font-light">
            {HERO_TITLE}
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="section-padding bg-deep">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
          <FadeIn className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-gold/20">
              <Image
                src="/images/final-07.jpg"
                alt="Brittany Khoury"
                fill
                className="object-cover object-top"
                sizes="256px"
              />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="font-heading text-heading text-gold mb-6">
              {BIO.heading}
            </h2>
            <div className="space-y-4">
              {BIO.paragraphs.map((p, i) => (
                <p key={i} className="text-cream/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Personal / Nature section */}
      <section className="section-padding bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_240px] gap-12 items-center">
          <FadeIn>
            <div className="space-y-4">
              {PERSONAL.paragraphs.map((p, i) => (
                <p key={i} className="text-cream/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/about-circle-1.jpeg"
                  alt="Brittany in nature"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-6">
                <Image
                  src="/images/about-circle-2.jpeg"
                  alt="Outdoors"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Meditation quote */}
      <section className="section-padding bg-deep">
        <div className="content-width text-center space-y-10">
          <FadeIn>
            <p className="text-cream/85 leading-relaxed max-w-3xl mx-auto">
              {MEDITATION.text}
            </p>
          </FadeIn>
          <div className="gold-divider" />
          <FadeIn delay={200}>
            <blockquote className="font-heading text-heading md:text-display-sm text-gold/80 italic font-light max-w-2xl mx-auto">
              {MEDITATION.mantra}
            </blockquote>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/IMG_0991.jpeg"
                alt="Meditation practice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* My Approach */}
      <section className="section-padding bg-surface">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-display-sm text-gold text-center mb-12">
              {APPROACH.heading}
            </h2>
          </FadeIn>
          <div className="content-width space-y-6">
            {APPROACH.sections.map((text, i) => (
              <FadeIn key={i} delay={i * 100}>
                <p className="text-cream/85 leading-relaxed">{text}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={300}>
            <div className="grid grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/IMG_4167.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/IMG_6057.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
