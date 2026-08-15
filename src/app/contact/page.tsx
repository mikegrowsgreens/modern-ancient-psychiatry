import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT, SOCIAL_LINKS } from "@/content/shared";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import {
  CONTACT_DETAILS_HEADING,
  CONTACT_FACT_LABELS,
  CONTACT_HEADING,
  CONTACT_INTRO,
  CONTACT_PLATE,
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

/* `min-h-11` lifts the phone and email anchors to the 44px target §15 asks
   for; the ruled rows keep their own padding, so the rhythm does not move. */
const VALUE_LINK = `${VALUE} inline-flex min-h-11 items-center transition-colors duration-micro ease-out hover:text-gold`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={CONTACT_HEADING}
        image="/images/calm-black-water.jpg"
        imageAlt={CONTACT_PLATE.alt}
        imageLabel={CONTACT_PLATE.label}
        height="sm"
      />

      {/* The shared strip, not a local copy of it. The local one set the same
          sentence as inert text at the index measure — 174 characters a line at
          13px — and, worse, left 911 and 988 unlinked, so the one page a reader
          is most likely to be on when they need them was the one page they
          could not tap them from. */}
      <EmergencyBanner />

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
