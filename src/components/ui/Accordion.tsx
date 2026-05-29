"use client";

type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({
  items,
  variant = "dark",
}: {
  items: readonly AccordionItem[];
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <div className={isLight ? "divide-y divide-gray-200" : "divide-y divide-gold/20"}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary
            className={`flex items-center justify-between cursor-pointer list-none py-5 px-6 transition-colors ${
              isLight
                ? "font-body text-body text-deep/90 hover:text-deep"
                : "font-heading text-subheading text-cream hover:text-gold"
            }`}
          >
            <span className="pr-8">{item.question}</span>
            <span
              className={`shrink-0 transition-transform duration-300 group-open:rotate-180 ${
                isLight ? "text-deep/50" : "text-gold"
              }`}
            >
              {isLight ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current">
                  <path d="M5 8l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className="group-open:hidden">+</span>
              )}
              {!isLight && <span className="hidden group-open:inline">&minus;</span>}
            </span>
          </summary>
          <p
            className={`pb-5 px-6 leading-relaxed pr-12 ${
              isLight ? "text-deep/70 text-body-sm" : "text-muted text-body"
            }`}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
