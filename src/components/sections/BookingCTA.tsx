import Button from "@/components/ui/Button";
import { BOOKING_CTA } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function BookingCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/brittany-portrait.jpg)" }}
        />
        <div className="absolute inset-0 bg-deep/40" />
      </div>

      <FadeIn className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-muted text-body mb-6">{BOOKING_CTA.pretext}</p>
        <h2 className="font-heading text-display-sm md:text-display text-cream mb-6">
          {BOOKING_CTA.heading}
        </h2>
        <Button href="/contact" className="mb-6">
          Request a Consultation
        </Button>
        <p className="text-muted/70 text-body-sm italic font-heading">
          {BOOKING_CTA.subtext}
        </p>
      </FadeIn>
    </section>
  );
}
