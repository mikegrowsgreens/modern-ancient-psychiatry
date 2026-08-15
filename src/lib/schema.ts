import { CONTACT } from "@/content/shared";
import { SERVICES } from "@/content/services";
import { FAQ } from "@/content/home";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

/**
 * JSON-LD, generated from the content layer rather than restated.
 *
 * This is the payoff of keeping copy in src/content/: the 7 FAQs and the fee
 * schedule become structured data for free, and drifting the copy cannot
 * silently desync the markup from the page.
 *
 * `sameAs` is deliberately absent — SOCIAL_LINKS is empty because both entries
 * were dead "#" placeholders.
 */

const PRACTICE_ID = `${SITE_URL}/#practice`;
const PERSON_ID = `${SITE_URL}/#brittany`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Brittany Khoury",
  honorificSuffix: "PMHNP-BC",
  jobTitle: "Psychiatric Mental Health Nurse Practitioner",
  worksFor: { "@id": PRACTICE_ID },
};

const practice = {
  "@type": ["MedicalBusiness", "ProfessionalService"],
  "@id": PRACTICE_ID,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  medicalSpecialty: "Psychiatric",
  priceRange: "$150–$250",
  areaServed: { "@type": "AdministrativeArea", name: "Arizona" },
  availableService: SERVICES.map((s) => ({
    "@type": "MedicalTherapy",
    name: s.name,
    description: s.description,
  })),
  employee: { "@id": PERSON_ID },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": PRACTICE_ID },
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const offerCatalog = {
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/services#catalog`,
  name: "Appointments",
  itemListElement: SERVICES.filter((s) => s.price).map((s) => ({
    "@type": "Offer",
    priceCurrency: "USD",
    price: s.price?.replace(/[^0-9.]/g, ""),
    itemOffered: { "@type": "MedicalTherapy", name: s.name },
  })),
};

type Page = "home" | "about" | "services" | "contact";

export function graphFor(page: Page) {
  const nodes: object[] = [practice, person, website];
  if (page === "home") nodes.push(faqPage);
  if (page === "services") nodes.push(offerCatalog);
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Renders the graph as a script tag's dangerouslySetInnerHTML payload. */
export function jsonLd(page: Page) {
  return { __html: JSON.stringify(graphFor(page)) };
}
