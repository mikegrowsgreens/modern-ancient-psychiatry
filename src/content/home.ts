export const HERO = {
  title: "Modern Care\nwith Ancient Wisdom",
  subtitle: "Connecting you to your innate capacity to heal",
  tagline: "Honoring where you are, holding space for where you want to be",
} as const;

export const PHILOSOPHY = [
  "Modern Ancient Psychiatry is for people who want depth not just surface level care",
  "It was created for those who value intention, relational care",
  "Care that honors the connection between mind, body, and nervous system",
] as const;

export const INTRO = {
  name: "Brittany Khoury PMHNP-BC",
  bio: [
    "I\u2019m a board-certified Psychiatric Mental Health Nurse Practitioner with a heart for trauma healing, holistic wellness, and compassionate, human-centered care.",
    "My work is rooted in the belief that true healing happens when we feel seen, heard, and supported. I bring a presence of non-judgment, curiosity, and deep listening into every therapeutic relationship.",
  ],
  continuation: [
    "In our work together, you can expect warmth, presence, and a safe space to explore the full spectrum of your experience\u2014",
    "with no pressure to be anything other than exactly who you are.",
  ],
} as const;

export const WHY_DIFFERENT = {
  heading: "Why will this feel different for YOU",
  points: [
    "not just symptom relief",
    "care that isn\u2019t rushed or impersonal",
    "care is collaborative",
    "Integrates mindfulness, meditation, and holistic support",
  ],
  closing:
    "healing often begins when we feel safe enough to slow down, be honest, and fully human.",
} as const;

export const FAQ = [
  {
    question: "Does my religion, spirituality, or belief system matter?",
    answer:
      "Absolutely not in terms of whether you are welcome here - people of all belief systems, backgrounds, identities, and life experiences are respected and welcomed.",
  },
  {
    question:
      "Will my treatment plan focus only on my symptoms or diagnosis?",
    answer:
      "No. While symptoms and diagnoses can help guide treatment, they do not define who you are. Part of the therapeutic process involves identifying your existing strengths, values, coping abilities, and inner resources.",
  },
  {
    question: "Do I need to meditate to work with you?",
    answer:
      "Not at all. Meditation and mindfulness are simply optional tools that may be incorporated if they feel helpful and aligned with your goals. Many patients I work with have never meditated before, while others already have an established practice.",
  },
  {
    question: "What if I\u2019m unsure about medication",
    answer:
      "That is completely okay. Many people come into treatment with mixed feelings, prior negative experiences, uncertainty, or understandable concerns about psychiatric medications. These conversations are approached collaboratively and without pressure.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "At this time, services are self-pay/private pay. This allows for greater privacy, flexibility, and individualized care. Upon request, a superbill can be provided for potential out-of-network reimbursement.",
  },
  {
    question:
      "Can supplements or holistic approaches be discussed?",
    answer:
      "Yes. Evidence-based discussions about supplements, sleep, stress reduction, mindfulness practices, nervous system regulation, and lifestyle factors can be incorporated into treatment when appropriate.",
  },
  {
    question: "Do you prescribe controlled substances?",
    answer:
      "Yes, when clinically appropriate. For patients\u2019 safety, prescribing practices follow state guidelines, including the use of the Arizona Prescription Monitoring Program.",
  },
] as const;

export const VIDEO = {
  // Set to a YouTube or Vimeo embed URL when ready, e.g.:
  // url: "https://www.youtube.com/embed/VIDEO_ID"
  url: null as string | null,
  placeholderImage: "/images/IMG_4167.jpeg",
  placeholderText: "Video coming soon",
} as const;

export const BOOKING_CTA = {
  pretext:
    "I work with adults seeking a deeper, more intentional approach to mental health care.",
  heading: "Start your healing journey",
  subtext:
    "You do not need to have everything figured out to begin",
} as const;
