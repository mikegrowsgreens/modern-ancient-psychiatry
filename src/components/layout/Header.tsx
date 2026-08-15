"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, BOOK_CTA_LABEL, MENU_LABELS } from "@/content/shared";
import Button from "@/components/ui/Button";

/**
 * Nav link. Cormorant, `--t-prose`, cream/85 in every state — DESIGN.md §10 is
 * explicit that hover and current page are signalled by a 1px gold hairline
 * underneath, `scaleX(0 → 1)` from the left, and by nothing else. No colour
 * change, no background, no pill.
 *
 * The 44px minimum touch target lives on the <a>; the hairline is pinned to the
 * inner span so it hugs the word rather than the bottom of the target box.
 */
const NAV_LINK = "group inline-flex min-h-[44px] items-center px-1";
const NAV_UNDERLINE =
  "relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full " +
  "after:origin-left after:bg-gold after:transition-transform after:duration-micro after:ease-out";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const ticking = useRef(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setMenuOpen(false);
    // Return focus to the control that opened the panel.
    triggerRef.current?.focus();
  }, []);

  // The site's ONE signature scroll moment (DESIGN.md §11): the header crossing
  // the hero seam. Transparent-over-photograph until 64px, then the deep field,
  // the 12px blur, and the gold hairline all arrive together.
  useEffect(() => {
    function update() {
      ticking.current = false;
      setScrolled(window.scrollY > 64);
    }
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Native <dialog>.showModal() supplies the focus trap, Escape handling,
  // aria-modal, and background inertness. Hand-rolling those was ~40 lines of
  // a11y plumbing the previous overlay simply didn't have.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (menuOpen && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!menuOpen && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-header border-b transition-colors duration-standard ease-out ${
          scrolled
            ? "border-gold/[0.22] bg-deep/[0.72] backdrop-blur-[12px]"
            : "border-transparent bg-transparent"
        }`}
      >
        {/*
          Unscrolled, the bar is transparent so it floats on the hero the way
          §10 asks. But at `lg` the home nav sits over the plate, and cream on
          sunlit petals is nowhere near the 4.5:1 floor §15 sets as a minimum —
          a minimum outranks the aesthetic clause. A scrim confined to the
          header's own height buys the contrast without drawing an edge, which
          is the same device §2b promoted for type near photography. It fades
          out as the solid field fades in, so only one of the two is ever doing
          the work.
        */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-deep/90 via-deep/60 to-transparent transition-opacity duration-standard ease-out ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        <nav
          aria-label="Primary"
          className="mx-auto flex h-full max-w-index items-center justify-between px-6 md:px-12 lg:px-[4.5rem]"
        >
          {/* No aria-label here: the Image's alt already names the link, and an
              aria-label would silently override it. */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-trimmed-nobg.png"
              alt="Modern Ancient Psychiatry"
              width={400}
              height={209}
              className="h-12 w-auto opacity-90 transition-opacity duration-micro ease-out hover:opacity-100"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={NAV_LINK}
                  >
                    <span
                      className={`${NAV_UNDERLINE} font-heading text-body-sm text-cream/85 ${
                        current
                          ? "after:scale-x-100"
                          : "after:scale-x-0 [@media(hover:hover)]:group-hover:after:scale-x-100"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li>
              {/* The shared ghost Button, not a second hand-rolled one. The
                  previous inline copy filled solid gold on hover, which made a
                  second solid button on a site that permits exactly one. */}
              <Button href="/contact">{BOOK_CTA_LABEL}</Button>
            </li>
          </ul>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-mr-3 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={MENU_LABELS.open}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
            <span className="block h-px w-6 bg-cream" />
          </button>
        </nav>
      </header>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        onClose={() => setMenuOpen(false)}
        onCancel={close}
        className="m-0 h-full max-h-none w-full max-w-none bg-deep p-0 backdrop:bg-transparent open:flex md:hidden"
      >
        {/*
          The panel is full-bleed and opaque, so it covers the header and the
          hamburger that opened it — and with no backdrop left to tap, Escape
          was previously the only way out. On a phone that is a trap. This is
          the close control, sat where the hamburger was.
        */}
        <button
          type="button"
          onClick={close}
          aria-label={MENU_LABELS.close}
          className="absolute right-3 top-[calc((var(--header-h)-2.75rem)/2)] flex h-11 w-11 items-center justify-center"
        >
          <span className="relative block h-6 w-6">
            <span className="absolute left-0 top-1/2 block h-px w-6 rotate-45 bg-cream" />
            <span className="absolute left-0 top-1/2 block h-px w-6 -rotate-45 bg-cream" />
          </span>
        </button>

        <nav
          aria-label="Mobile"
          className="flex w-full flex-col items-center justify-center gap-8 pt-header"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`${NAV_LINK} px-4`}
            >
              <span
                className={`${NAV_UNDERLINE} font-heading text-display-sm text-cream/85 ${
                  pathname === item.href ? "after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}

          {/* The primary conversion action was missing from the mobile panel
              entirely, so it was unreachable on a phone with the menu open. */}
          <Button href="/contact" className="mt-4" >
            {BOOK_CTA_LABEL}
          </Button>
        </nav>
      </dialog>
    </>
  );
}
