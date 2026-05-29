import { WHY_DIFFERENT } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyDifferent() {
  return (
    <section className="section-padding bg-deep">
      <div className="content-width">
        <FadeIn>
          <h2 className="font-heading text-display-sm md:text-display text-cream text-center mb-12">
            {WHY_DIFFERENT.heading}
          </h2>
        </FadeIn>

        <ul className="space-y-5 mb-12 max-w-2xl mx-auto">
          {WHY_DIFFERENT.points.map((point, i) => (
            <FadeIn key={i} delay={i * 100}>
              <li className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="font-heading text-subheading text-cream/85 font-light">
                  {point}
                </span>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={400}>
          <div className="gold-divider mb-8" />
          <blockquote className="text-center">
            <p className="font-heading text-heading md:text-display-sm text-gold/80 italic font-light max-w-2xl mx-auto">
              {WHY_DIFFERENT.closing}
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
