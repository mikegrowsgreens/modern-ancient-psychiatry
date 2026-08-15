export const HERO_TITLE = "The Person Behind the Practice";

/**
 * The opening plate. Subject only: place and year go in once Brittany confirms
 * them — a wall label invents nothing (DESIGN.md §9).
 */
export const HERO_PLATE = {
  alt: "A singing bowl engraved with a flower-of-life pattern, held in one hand with the striker in the other, in tall dry grass",
  label: "Singing bowl · flower of life",
} as const;

/**
 * Copy is Brittany's, verbatim (DESIGN.md §12). The only strings this file adds
 * are wall labels, alt text, and index numerals — facts (credential, subject,
 * place, year), never eyebrows and never prose she did not write.
 */

export const BIO = {
  heading: "About me",
  /** Wall label under the one circular portrait on the site. A fact, not a title. */
  label: "PMHNP-BC · ARIZONA",
  portrait: {
    src: "/images/final-07.jpg",
    alt: "Brittany Khoury outdoors in daylight, looking toward the camera",
  },
  paragraphs: [
    "Hi, I’m Brittany Khoury a board certified Psychiatric Mental Health Nurse Practitioner offering integrative and person-centered mental health care. My mission extends beyond symptom management. I strive to offer care that honors the full humanity of each individual.",
    "I weave psychopharmacology, psychotherapy, mindfulness based practices, and holistic wellness.",
    "At my core, I value living a life that is aligned with reducing suffering—both for people and for all living beings. I believe in the importance of kindness, not just as an idea, but as something we actively practice in how we show up for ourselves and each other.",
  ],
} as const;

export const PERSONAL = {
  /** Her own opening words, promoted to a heading — the section had none at all. */
  heading: "Outside of my work",
  paragraphs: [
    "Outside of my work, I’m someone who feels most grounded in nature. Being outdoors has always been a way for me to reset my nervous system and reconnect to what feels steady and real.",
    "I also have a deep love for animals and have spent time volunteering with animal rescue organizations—something that continues to bring a lot of meaning and joy into my life.",
  ],
  /** Staggered plate pair. One plate per paragraph: the outdoors, then the animals. */
  plates: [
    {
      src: "/images/IMG_4167.jpeg",
      alt: "Brittany sitting alone on a desert ridge at the end of the day, looking out over saguaro slopes toward a distant range",
      label: "SUPERSTITION RIDGE · ARIZONA · 2024",
    },
    {
      src: "/images/about-circle-1.jpeg",
      alt: "Brittany crouched on pale sand between two black rescue dogs, one of them leaning in to her cheek",
      label: "RESCUE DOGS · VOLUNTEER SHIFT · 2023",
    },
  ],
} as const;

export const MEDITATION = {
  text: "My personal meditation and mindfulness practices are a meaningful part of my daily life. They help me cultivate compassion, presence, and perspective, and I carry those qualities into my work. I believe that we can only truly guide others in ways that we are also willing to walk ourselves, which is why I place a strong emphasis on my own ongoing growth and self-awareness.",
  mantra:
    "“May all beings be happy and free from suffering. May they know peace, joy, and the causes of true happiness.”",
  /** Attribution beneath the mantra. Names the practice; it is a fact, not a caption. */
  attribution: "METTA · LOVING-KINDNESS PRACTICE",
} as const;

export const APPROACH = {
  heading: "My Approach",
  /**
   * Pulled verbatim out of the fourth passage and set as the page's pull quote.
   * Every word of the original paragraph survives — this sentence opened it, and
   * the remainder still reads in her order.
   */
  pullQuote: "I see this work as deeply human and, in many ways, sacred.",
  /** The pull quote is set immediately before this passage (0-based index). */
  pullQuoteBefore: 3,
  sections: [
    "I aim to create a space where you feel understood, where your experiences are met with compassion, and where you can begin to reconnect with your own inner wisdom. I believe that each person has an innate capacity to heal, and part of my role is to support you in learning to trust yourself and that process.",
    "At the same time, I don’t believe the process has to feel heavy all the time. When it’s appropriate, I value bringing in moments of lightness, humor, and ease.",
    "Sometimes being able to gently laugh, take a breath, or shift perspective can be just as important as working through the more difficult parts.",
    "Every person has their own unique story, and I feel a responsibility to honor that. My intention is not to see you as a diagnosis or a set of symptoms, but as a whole person—with strengths, resilience, and an inherent sense of worth and dignity.",
    "I’m also intentional about the space I bring into this work. I strive to cultivate a grounded and expansive presence—one that can hold whatever needs to be held, without judgment.",
  ],
} as const;

/**
 * Chapter break (DESIGN.md §9): full-bleed, wordless, one per page. No wall
 * labels here on purpose — a chapter break carries no type whatsoever.
 */
export const CHAPTER = [
  {
    src: "/images/IMG_0991.jpeg",
    alt: "Brittany seated cross-legged in meditation on rippled white dunes, long shadow running toward the camera",
  },
  {
    src: "/images/IMG_6057.jpeg",
    alt: "Brittany standing in tree pose on a red sandstone shelf below a layered Sedona butte",
  },
] as const;
