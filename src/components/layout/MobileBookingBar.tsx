"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_CTA } from "@/content/home";
import { BOOKING_CTA_ID } from "@/lib/site";

/**
 * Sticky booking bar, phones only.
 *
 * Two things were wrong with it. It appeared at a fixed 65% scroll depth, which
 * on every page is exactly where the gold field already is — so the reader got
 * "Start your healing journey" twice on one screen, once as the field's own
 * button and once pinned under their thumb. And it hard-popped into existence
 * with no transition, which is the single loudest event on a site whose first
 * promise is that nothing will jump at you.
 *
 * Now it watches the gold field itself and stands down whenever the field is on
 * screen, and it fades rather than appears. `backdrop-blur` is also gone: §8
 * permits it in exactly one place and the header already has it.
 */
export default function MobileBookingBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Don't show on contact page (they're already there)
  const hidden = pathname === "/contact";

  useEffect(() => {
    if (hidden) return;

    const field = document.getElementById(BOOKING_CTA_ID);

    /*
     * Two conditions, both required. Scroll depth says the reader is far enough
     * in that an offer is not an interruption; the observer says the gold field
     * is not currently on screen. The second is the one that was missing — the
     * old bar fired on depth alone, and on every page the depth it fired at was
     * the depth the field itself occupies.
     */
    let deep = false;
    let fieldOnScreen = false;
    let ticking = false;

    function apply() {
      setVisible(deep && !fieldOnScreen);
    }

    function update() {
      ticking = false;
      const max = document.body.scrollHeight - window.innerHeight;
      deep = max > 0 && window.scrollY / max > 0.5;
      apply();
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    const observer = field
      ? new IntersectionObserver(
          ([entry]) => {
            fieldOnScreen = entry.isIntersecting;
            apply();
          },
          { threshold: 0 },
        )
      : null;

    if (field && observer) observer.observe(field);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      // Kept mounted so the fade has something to animate, and hidden from the
      // tab order and from assistive tech while it is invisible.
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-deep p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-opacity duration-standard ease-out md:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Link
        href="/contact"
        tabIndex={visible ? undefined : -1}
        // Ghost outline, radius 0. A solid gold fill here made a third gold
        // field on the page; gold-as-field is reserved for the one CTA block.
        className="block w-full border border-gold py-3 text-center font-heading text-body-sm tracking-wide text-gold"
      >
        {BOOKING_CTA.cta}
      </Link>
    </div>
  );
}
