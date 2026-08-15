import Button from "@/components/ui/Button";
import { BOOKING_CTA } from "@/content/home";
import { CONTACT } from "@/content/shared";

export default function BookingCTA() {
  return (
    <section className="relative py-24 bg-[#E8C840]">
      <div className="relative z-10 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 items-start">
        <div>
          <p className="font-heading text-subheading text-deep/80 font-semibold mb-2">
            {BOOKING_CTA.subtext}
          </p>
          <p className="text-deep/80 italic font-heading text-body-lg leading-relaxed mb-6">
            {BOOKING_CTA.pretext}
          </p>
          <Button href="/contact" variant="dark">
            {BOOKING_CTA.cta}
          </Button>
        </div>

        {/* The practical facts someone weighing a first call needs. Replaces a
            second portrait of the practitioner, which duplicated the one
            directly above it on the homepage. */}
        <ul className="border-t border-deep/20">
          {BOOKING_CTA.facts.map((fact) => (
            <li key={fact} className="border-b border-deep/20 py-3 text-deep/80">
              {fact}
            </li>
          ))}
          <li className="border-b border-deep/20 py-3">
            <a
              href={CONTACT.phoneHref}
              className="font-heading text-subheading text-deep hover:underline"
            >
              {CONTACT.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
