"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_CTA } from "@/content/home";

export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);
  const pathname = usePathname();

  // Don't show on contact page (they're already there)
  const hidden = pathname === "/contact";

  useEffect(() => {
    if (hidden) return;

    function update() {
      ticking.current = false;
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      // Reveal deep into the page rather than at half a viewport, so it doesn't
      // interrupt someone still reading.
      setVisible(scrolled > 0.65);
    }

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  if (hidden || !visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-deep/95 backdrop-blur-sm border-t border-gold/20">
      <Link
        href="/contact"
        className="block w-full text-center bg-gold text-deep font-body font-semibold py-3 rounded-sm text-body-sm"
      >
        {BOOKING_CTA.cta}
      </Link>
    </div>
  );
}
