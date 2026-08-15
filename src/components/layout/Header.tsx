"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, BOOK_CTA_LABEL } from "@/content/shared";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => {
    setMenuOpen(false);
    // Return focus to the control that opened the panel.
    triggerRef.current?.focus();
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
      <header className="fixed top-0 left-0 right-0 z-50 h-header bg-deep/90 backdrop-blur-sm border-b border-gold/10">
        <nav
          aria-label="Primary"
          className="max-w-6xl mx-auto flex h-full items-center justify-between px-6"
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-trimmed-nobg.png"
              alt="Modern Ancient Psychiatry"
              width={400}
              height={209}
              className="opacity-90 hover:opacity-100 transition-opacity h-14 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`font-heading text-body-sm tracking-wide transition-colors hover:text-gold ${
                    pathname === item.href
                      ? "text-gold border-b border-gold/50"
                      : "text-cream/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {/* Ghost outline, not a solid fill: gold-as-field is reserved for
                  the single interruption block per page (DESIGN.md §4). */}
              <Link
                href="/contact"
                className="font-heading text-body-sm tracking-wide border border-gold text-gold px-5 py-2 transition-colors hover:bg-gold hover:text-deep"
              >
                {BOOK_CTA_LABEL}
              </Link>
            </li>
          </ul>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px bg-cream transition-transform duration-micro ease-out ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-opacity duration-micro ease-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-transform duration-micro ease-out ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        onClose={() => setMenuOpen(false)}
        onCancel={close}
        // Clicking the backdrop closes. ::backdrop is transparent because the
        // panel itself is full-bleed opaque.
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="md:hidden m-0 h-full max-h-none w-full max-w-none bg-deep p-0 backdrop:bg-transparent open:flex"
      >
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
              className={`font-heading text-display-sm transition-colors ${
                pathname === item.href ? "text-gold" : "text-cream/70 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* The primary conversion action was missing from the mobile panel
              entirely, so it was unreachable on a phone with the menu open. */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-heading text-body-sm tracking-wide border border-gold px-6 py-3 text-gold"
          >
            {BOOK_CTA_LABEL}
          </Link>
        </nav>
      </dialog>
    </>
  );
}
