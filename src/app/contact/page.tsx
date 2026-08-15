import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT, EMERGENCY_DISCLAIMER, SOCIAL_LINKS } from "@/content/shared";
import {
  CONTACT_DETAILS_HEADING,
  CONTACT_FACT_LABELS,
  CONTACT_HEADING,
  CONTACT_INTRO,
  FORM_HEADING,
} from "@/content/contact";
import ContactForm from "@/components/ui/ContactForm";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contact",
};

const GUTTER = "px-6 md:px-12 lg:px-[4.5rem]";

const ROW =
  "rule-seam grid gap-y-2 border-b py-5 lg:grid-cols-[7rem_1fr] lg:items-baseline lg:gap-x-6";

const KEY = "text-label uppercase text-muted";

const VALUE = "font-heading text-title font-light text-cream";

const VALUE_LINK = `${VALUE} transition-colors duration-micro ease-out hover:text-gold`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={CONTACT_HEADING}
        image="/images/calm-black-water.jpg"
        height="sm"
      />

      {/* The site's only --surface element: a different piece of stock from the
          program. Never gold, never --alert — this is a standing fact, not a
          warning about the website. DESIGN.md §10. */}
      <div className={`${GUTTER} rule-seam border-y bg-surface py-rhythm-hairline`}>
        <p className="mx-auto w-full max-w-index text-fine text-cream/85">
          {EMERGENCY_DISCLAIMER}
        </p>
      </div>

      <section className={`${GUTTER} pb-rhythm-open pt-rhythm-default`}>
        <div className="mx-auto grid w-full max-w-index gap-y-16 lg:grid-cols-[1fr_1.4fr] lg:gap-x-20 lg:gap-y-0">
          {/* Left: the facts, as a ruled index. Key hangs in the left margin,
              value carries the weight. Phone and email are real links. */}
          <div>
            <h2 className="font-heading text-display font-light text-cream">
              {CONTACT_DETAILS_HEADING}
            </h2>

            <p className="mt-8 max-w-prose font-heading text-verse font-light italic text-gold">
              {CONTACT_INTRO}
            </p>

            <div className="rule-seam mt-12 border-t">
              <div className={ROW}>
                <h3 className={KEY}>{CONTACT_FACT_LABELS.phone}</h3>
                <a href={CONTACT.phoneHref} className={`tabular ${VALUE_LINK}`}>
                  {CONTACT.phone}
                </a>
              </div>

              <div className={ROW}>
                <h3 className={KEY}>{CONTACT_FACT_LABELS.email}</h3>
                <a
                  href={CONTACT.emailHref}
                  className={`break-words ${VALUE_LINK}`}
                >
                  {CONTACT.email}
                </a>
              </div>

              <div className={ROW}>
                <h3 className={KEY}>{CONTACT_FACT_LABELS.location}</h3>
                <p className={VALUE}>{CONTACT.location}</p>
              </div>

              {/* SOCIAL_LINKS is empty by design — the practice has no social
                  presence to link to. Guarded so an empty array renders no
                  heading, no row, and no empty container. */}
              {SOCIAL_LINKS.length > 0 ? (
                <div className={ROW}>
                  <h3 className={KEY}>{CONTACT_FACT_LABELS.follow}</h3>
                  <div className="flex gap-5">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="opacity-70 transition-opacity duration-micro ease-out hover:opacity-100"
                      >
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={24}
                          height={24}
                          className="invert"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right: the form, on --measure-prose. */}
          <div>
            <h2 className="font-heading text-display font-light text-cream">
              {FORM_HEADING}
            </h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
