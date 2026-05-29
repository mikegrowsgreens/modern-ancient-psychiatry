"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Don't show on contact page (they're already there)
  const hidden = pathname === "/contact";

  useEffect(() => {
    if (hidden) return;

    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  if (hidden || !visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-deep/95 backdrop-blur-sm border-t border-gold/20">
      <Link
        href="/contact"
        className="block w-full text-center bg-gold text-deep font-body font-semibold py-3 rounded-sm text-body-sm"
      >
        Start your healing journey
      </Link>
    </div>
  );
}
