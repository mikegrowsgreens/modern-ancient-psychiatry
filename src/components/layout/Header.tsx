"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/content/shared";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep/90 backdrop-blur-sm border-b border-gold/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
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
            <Link
              href="/contact"
              className="font-heading text-body-sm tracking-wide bg-gold text-deep px-5 py-2 rounded-sm hover:bg-gold/90 transition-colors"
            >
              Book a Consultation
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

    </header>

    {/* Mobile overlay — rendered outside header to avoid stacking context issues */}
    {menuOpen && (
      <div
        className="md:hidden fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10"
        style={{ backgroundColor: "#0B0B0F", top: "89px" }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`font-heading text-display-sm transition-colors ${
              pathname === item.href ? "text-gold" : "text-cream/70 hover:text-cream"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
    </>
  );
}
