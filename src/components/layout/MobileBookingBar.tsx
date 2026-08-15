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
        // Ghost outline, radius 0. A solid gold fill here made a third gold
        // field on the page; gold-as-field is reserved for the one CTA block.
        className="block w-full border border-gold py-3 text-center font-heading text-body-sm tracking-wide text-gold"
      >
        {BOOKING_CTA.cta}
      </Link>
    </div>
  );
}
