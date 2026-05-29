import Link from "next/link";
import Image from "next/image";
import {
  NAV_ITEMS,
  CONTACT,
  SOCIAL_LINKS,
  FOOTER_TAGLINE,
  FOOTER_LEGAL,
} from "@/content/shared";

export default function Footer() {
  return (
    <footer className="bg-[#E8C840]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/images/logo-trimmed-nobg.png"
              alt="Modern Ancient Psychiatry"
              width={400}
              height={209}
              className="mb-4 h-16 w-auto brightness-0"
            />
            <p className="text-body-sm text-deep/70 italic font-heading">
              {FOOTER_TAGLINE}
            </p>
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-deep text-body-sm mb-4 tracking-wide">
              Pages
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-deep/80 hover:text-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-deep text-body-sm mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-body-sm text-deep/80">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-deep transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-deep transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-deep/60">{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-deep/20">
          <p className="text-sm text-deep/50 text-center">{FOOTER_LEGAL}</p>
        </div>
      </div>
    </footer>
  );
}
