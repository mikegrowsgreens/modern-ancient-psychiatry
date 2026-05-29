import { FAQ as faqItems } from "@/content/home";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section className="section-padding bg-surface">
      <div className="content-width">
        <h2 className="font-heading text-display-sm text-cream text-center mb-12">
          Frequently asked questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
