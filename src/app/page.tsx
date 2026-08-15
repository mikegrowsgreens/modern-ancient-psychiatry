import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import IntroCard from "@/components/sections/IntroCard";
import WhyDifferent from "@/components/sections/WhyDifferent";
import FAQ from "@/components/sections/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import EmergencyBanner from "@/components/sections/EmergencyBanner";

/**
 * Rhythm reads down the page rather than repeating one `.section-padding`:
 * hero -> hairline (emergency) -> default -> default -> open (WhyDifferent) ->
 * default into open (FAQ) -> open (the gold field). The `open` gap before the
 * booking CTA is the "you may stop here" gap.
 *
 * VideoSection was removed rather than restyled: it rendered a "Video coming
 * soon" card over a still, and placeholder media is banned (DESIGN.md §9).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <Philosophy />
      <IntroCard />
      <WhyDifferent />
      <FAQ />
      <BookingCTA />
    </>
  );
}
