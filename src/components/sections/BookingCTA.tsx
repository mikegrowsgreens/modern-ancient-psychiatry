import Image from "next/image";
import Button from "@/components/ui/Button";
import { BOOKING_CTA } from "@/content/home";
import FadeIn from "@/components/ui/FadeIn";

export default function BookingCTA() {
  return (
    <section className="relative py-24 bg-[#E8C840]">
      <div className="relative z-10 max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 items-center">
        <FadeIn>
          <p className="font-heading text-subheading text-deep/80 font-semibold mb-2">
            {BOOKING_CTA.subtext}
          </p>
          <p className="text-deep/80 italic font-heading text-body-lg leading-relaxed mb-6">
            {BOOKING_CTA.pretext}
          </p>
          <Button href="/contact" variant="dark">
            Start your healing journey
          </Button>
        </FadeIn>

        <FadeIn delay={200} className="flex justify-center">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cream/50 shadow-lg">
            <Image
              src="/images/final-20.jpg"
              alt="Brittany Khoury"
              fill
              className="object-cover object-top"
              sizes="256px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
