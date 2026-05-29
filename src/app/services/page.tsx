import type { Metadata } from "next";
import Image from "next/image";
import {
  SERVICES_INTRO,
  SERVICES,
  FEE_SCHEDULE,
  FEE_NOTICE,
  FEE_CHANGE_NOTICE,
  POLICIES_INTRO,
  POLICIES,
} from "@/content/services";
import ServiceCard from "@/components/ui/ServiceCard";
import BookingCTA from "@/components/sections/BookingCTA";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services & Pricing",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero with butterfly image */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/butterfly.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-12">
          <p className="text-cream/85 leading-relaxed max-w-3xl whitespace-pre-line">
            {SERVICES_INTRO}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-deep">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-display-sm text-cream text-center mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <FadeIn
                key={service.name}
                delay={i * 100}
                className={
                  i === SERVICES.length - 1 && SERVICES.length % 2 !== 0
                    ? "md:col-span-2 md:max-w-xl md:mx-auto"
                    : ""
                }
              >
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Schedule */}
      <section className="section-padding bg-surface">
        <div className="content-width">
          <h2 className="font-heading text-heading text-gold text-center mb-4">
            Service Fees
          </h2>
          <p className="text-center text-muted mb-8">{FEE_NOTICE}</p>
          <div className="divide-y divide-gold/10">
            {FEE_SCHEDULE.map((item) => (
              <div key={item.service} className="py-4">
                <div className="flex justify-between items-center">
                  <span className="text-cream/85">{item.service}</span>
                  <span className="text-gold font-semibold shrink-0 ml-4">
                    {item.fee}
                  </span>
                </div>
                {"note" in item && (
                  <span className="text-body-sm text-muted/60 ml-1">
                    {item.note}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-body-sm text-muted/60 mt-4 italic">
            {FEE_CHANGE_NOTICE}
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-deep">
        <div className="content-width">
          <p className="font-heading text-heading text-gold text-center mb-10 italic leading-relaxed">
            {POLICIES_INTRO}
          </p>
          <div className="space-y-8">
            {Object.values(POLICIES).map((policy) => (
              <div key={policy.heading}>
                <h3 className="font-heading text-body-lg text-cream mb-2">
                  {policy.heading}
                </h3>
                <p className="text-body-sm text-muted leading-relaxed">
                  {policy.text}
                </p>
                {"points" in policy && (
                  <ul className="mt-2 space-y-1 ml-4">
                    {(policy.points as string[]).map((point) => (
                      <li
                        key={point}
                        className="text-body-sm text-muted leading-relaxed list-disc"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {"note" in policy && (
                  <p className="text-body-sm text-muted leading-relaxed mt-2">
                    {(policy as { note: string }).note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
