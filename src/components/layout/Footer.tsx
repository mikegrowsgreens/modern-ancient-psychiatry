import Link from "next/link";
import Image from "next/image";
import {
  NAV_ITEMS,
  CONTACT,
  FOOTER_TAGLINE,
  FOOTER_LEGAL,
} from "@/content/shared";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-deep">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Modern Ancient Psychiatry"
              width={100}
              height={100}
              className="opacity-80 mb-4 h-16 w-auto"
            />
            <p className="text-body-sm text-muted italic font-heading">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-gold text-body-sm mb-4 tracking-wide">
              Pages
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-muted hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold text-body-sm mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-body-sm text-muted">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-cream transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-cream transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-muted/60">{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10">
          <p className="text-sm text-muted/50 text-center">{FOOTER_LEGAL}</p>
        </div>
      </div>
    </footer>
  );
}
