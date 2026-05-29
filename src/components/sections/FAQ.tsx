import { FAQ as faqItems } from "@/content/home";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Sky/wheat background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/services-vertical-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Yellow header area */}
        <div className="bg-[#E8C840] rounded-t-lg px-8 py-6">
          <h2 className="font-heading text-display-sm text-deep text-center">
            Frequently asked questions
          </h2>
        </div>
        {/* White accordion cards */}
        <div className="bg-white/95 backdrop-blur-sm rounded-b-lg shadow-xl">
          <Accordion items={faqItems} variant="light" />
        </div>
      </div>
    </section>
  );
}
