import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT, EMERGENCY_DISCLAIMER } from "@/content/shared";
import { CONTACT_HEADING, CONTACT_INTRO } from "@/content/contact";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with sand/water image */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/calm-water.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-12">
          <h1 className="font-heading text-display text-cream font-light">
            {CONTACT_HEADING}
          </h1>
        </div>
      </section>

      {/* Emergency banner */}
      <div className="bg-surface/80 border-y border-gold/10 px-6 py-5">
        <p className="text-sm text-muted/80 text-center max-w-3xl mx-auto leading-relaxed">
          {EMERGENCY_DISCLAIMER}
        </p>
      </div>

      {/* Contact content */}
      <section className="section-padding bg-deep">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-16">
          {/* Left: contact info */}
          <div className="space-y-8">
            <p className="text-cream/85 leading-relaxed font-heading text-body-lg italic">
              {CONTACT_INTRO}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-body text-gold mb-1">Call</h3>
                <a
                  href={CONTACT.phoneHref}
                  className="text-cream/85 text-body-lg hover:text-gold transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div>
                <h3 className="font-heading text-body text-gold mb-1">
                  Email
                </h3>
                <a
                  href={CONTACT.emailHref}
                  className="text-cream/85 text-body-sm hover:text-gold transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <h3 className="font-heading text-body text-gold mb-1">
                  Location
                </h3>
                <p className="text-muted">{CONTACT.location}</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="font-heading text-heading text-cream mb-6">
              Request a Consultation
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
