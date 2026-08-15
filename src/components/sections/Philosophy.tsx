import { PHILOSOPHY } from "@/content/home";
import { em } from "@/content/emphasis";

export default function Philosophy() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-deep">
      <div className="relative z-10 max-w-5xl mx-auto px-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PHILOSOPHY.map((statement, i) => (
            <p
              key={i}
              className={`font-heading text-subheading font-light leading-snug ${
                "tone" in statement && statement.tone === "accent"
                  ? "text-gold italic"
                  : "text-cream"
              }`}
            >
              {em(statement.text)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
