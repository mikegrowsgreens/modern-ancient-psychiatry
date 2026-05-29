"use client";

type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: readonly AccordionItem[] }) {
  return (
    <div className="divide-y divide-gold/20">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex items-center justify-between cursor-pointer list-none font-heading text-subheading text-cream hover:text-gold transition-colors">
            <span className="pr-8">{item.question}</span>
            <span className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-muted text-body leading-relaxed pr-12">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
