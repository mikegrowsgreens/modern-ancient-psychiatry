import { PHILOSOPHY } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function Philosophy() {
  return (
    <section className="section-padding bg-deep border-t border-sage/20">
      <div className="content-width text-center space-y-8">
        {PHILOSOPHY.map((statement, i) => (
          <FadeIn key={i} delay={i * 150}>
            <p className="font-heading text-subheading md:text-heading text-cream/90 font-light">
              {statement}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
