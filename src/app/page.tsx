import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import IntroCard from "@/components/sections/IntroCard";
import WhyDifferent from "@/components/sections/WhyDifferent";
import FAQ from "@/components/sections/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import EmergencyBanner from "@/components/sections/EmergencyBanner";

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
