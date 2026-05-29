import { PHILOSOPHY } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function Philosophy() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative frame background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/decorative-frame-border.jpeg)" }}
      />

      {/* Content — 3-column grid */}
      <div className="relative z-10 max-w-5xl mx-auto px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PHILOSOPHY.map((statement, i) => (
            <FadeIn key={i} delay={i * 150}>
              <p className="font-heading text-subheading text-deep/90 font-light text-center md:text-left leading-snug">
                {i === 1 ? (
                  <span className="text-[#6B4C9A] italic">{statement}</span>
                ) : i === 2 ? (
                  <>
                    Care that honors the connection between{" "}
                    <em className="italic">mind</em>,{" "}
                    <em className="italic">body</em>, and{" "}
                    <em className="italic">nervous system</em>
                  </>
                ) : (
                  statement
                )}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
