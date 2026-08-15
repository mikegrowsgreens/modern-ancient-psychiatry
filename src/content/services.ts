// Was a single string with an embedded "\n" that got rendered as one <p>, which
// is why this page had no <h1>. Split so the title can be a real heading.
export const SERVICES_HERO = {
  title: "A Personalized Approach",
  intro:
    "Treatment is collaborative and tailored to your unique needs and goals. Whether you are seeking symptom relief, deeper self-understanding, or a more authentic way of living, care is designed to support you in reconnecting with your own capacity for healing.",
} as const;

/**
 * `kind` is the discriminator the services page splits on. These seven entries
 * were never one list: four are bookable appointments carrying a fee and a
 * duration, three are modalities present in every appointment and have no fee
 * at all. Forcing them into one card grid is what produced three cards with an
 * empty price slot and an odd-card centering hack. The split is data-driven so
 * adding an eighth service cannot reintroduce it.
 */
export type ServiceKind = "appointment" | "modality";

export type Service = {
  name: string;
  kind: ServiceKind;
  price?: string;
  duration?: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    name: "Psychiatric Evaluation",
    kind: "appointment",
    price: "$250.00",
    duration: "90 minutes",
    description:
      "A comprehensive psychiatric assessment to understand your full story\u2014not just symptoms. This initial visit is designed to understand you as a whole person, not just a diagnosis, and to create a thoughtful, individualized treatment plan.",
  },
  {
    name: "Medication Management",
    kind: "appointment",
    price: "$150.00",
    duration: "30 minutes",
    description:
      "Ongoing, personalized care focused on optimizing your mental health through evidence-based medication management. Appointments include monitoring effectiveness, adjusting treatment as needed, and integrating a holistic perspective that considers sleep, stress, and overall well-being.",
  },
  {
    name: "Psychotherapy",
    kind: "appointment",
    price: "$200.00/hour",
    description:
      "I offer integrative, evidence-based therapy incorporating CBT, DBT, ACT, and mindfulness-based approaches to help you build practical skills, improve emotional regulation, and create meaningful, lasting change.",
  },
  {
    name: "Integration Sessions",
    kind: "appointment",
    price: "$150.00/hour",
    description:
      "Dedicated sessions to help you process and make sense of insights gained during ketamine or other transformative experiences. The focus is on translating those insights into real-life changes, increased clarity, and sustainable healing.",
  },
  {
    name: "Mindfulness & Somatic-Based Approaches",
    kind: "modality",
    description:
      "Incorporation of mindfulness, breathwork, and body-based awareness to support emotional regulation, resilience, and connection to self. These practices can help you develop greater capacity to navigate stress, anxiety, and overwhelming emotions.",
  },
  {
    name: "Trauma-Informed Care",
    kind: "modality",
    description:
      "All services are grounded in a trauma-informed approach, recognizing the impact of past experiences on the nervous system, relationships, and overall mental health. Care is provided in a safe, nonjudgmental space at a pace that feels manageable and respectful.",
  },
  {
    name: "Holistic & Integrative Psychiatry",
    kind: "modality",
    description:
      "Care that considers the full picture of your health\u2014mind, body, and environment. This may include discussion of lifestyle factors, nervous system regulation, and complementary approaches alongside traditional psychiatric treatment.",
  },
];

/**
 * The four appointments and the three modalities, split on `kind`. Derived
 * rather than hand-listed so the two views can never drift from SERVICES.
 */
export const APPOINTMENTS = SERVICES.filter((s) => s.kind === "appointment");
export const MODALITIES = SERVICES.filter((s) => s.kind === "modality");

/**
 * Section headings. The only two strings this file adds beyond the
 * practitioner's own copy, and both are structural names for content that
 * already existed, not marketing lines.
 */
export const APPOINTMENTS_HEADING = "Appointments";
export const MODALITIES_HEADING = "How care is delivered";
export const POLICIES_HEADING = "Practice Policies";

/** Wall labels — facts (a count, a term), never eyebrows. DESIGN.md §5. */
export const APPOINTMENTS_COUNT = "Four appointments";
export const MODALITIES_COUNT = "Three modalities";

/**
 * What survives of the old FEE_SCHEDULE. Every fee it listed is now stated once,
 * in the appointments index above; repeating the same four numbers underneath
 * them was the duplication this replaces. Only the two facts a per-appointment
 * row cannot hold remain: the combined-visit fee, and the administrative
 * charges (moved out of POLICIES for the same reason).
 */
export const FEE_ADDENDA = {
  combined: {
    item: "Medication Management Follow-Up (30 minutes) with psychotherapy 30 minutes",
    fee: "$200.00",
  },
  admin: {
    intro: "Additional fees may apply for:",
    rows: [
      { item: "Extensive paperwork, forms, or letters", fee: "$50.00" },
      { item: "Court-related services (if applicable)", fee: "$50/hour" },
    ],
    note: "These services are not covered by insurance.",
  },
} as const;

export const POLICIES_INTRO =
  "We aim to provide transparent, compassionate care while maintaining clear boundaries that support a sustainable and ethical practice.";

export const FEE_NOTICE =
  "All services are self-pay. Payment is due at the time of service.";

export const FEE_CHANGE_NOTICE = "Fees are subject to change with prior notice.";

export type Policy = {
  heading: string;
  text: string;
  points?: readonly string[];
  note?: string;
};

export const POLICIES: Record<string, Policy> = {
  insurance: {
    heading: "Insurance",
    text: "This practice does not bill insurance directly. However, upon request, a superbill can be provided for you to submit to your insurance company for potential out-of-network reimbursement.",
    note: "Please note:",
    points: [
      "Reimbursement is not guaranteed",
      "You are responsible for verifying your out-of-network benefits",
      "Full payment is required regardless of reimbursement status",
    ],
  },
  payment: {
    heading: "Payment Methods",
    text: "Accepted forms of payment include:",
    points: ["Credit/debit cards", "Cash"],
    note: "Payment will be securely processed at the time of service.",
  },
  cancellation: {
    heading: "Cancellation Policy",
    text: "Appointments must be canceled or rescheduled at least 24 hours in advance.",
    points: [
      "Late cancellations (<24 hours) will be charged a fee of $50.00",
      "This fee is not billable to insurance",
    ],
  },
  noShow: {
    heading: "No-Show Policy",
    text: "Failure to attend a scheduled appointment without notice will result in a no-show fee of $75.00",
    note: "Repeated missed appointments may result in discontinuation of services.",
  },
  goodFaith: {
    heading: "Good Faith Estimate (No Surprises Act)",
    text: "Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected charges for services.",
    points: [
      "You may request this estimate before scheduling",
      "If your final bill is at least $400 more than your estimate, you have the right to dispute the charges",
    ],
    note: "For questions or to request a Good Faith Estimate, please contact the office.",
  },
  outOfPocket: {
    heading: "Out-of-Pocket Responsibility",
    text: "By receiving services, you acknowledge:",
    points: [
      "You are financially responsible for all charges",
      "Payment is required regardless of insurance reimbursement",
      "Outstanding balances may result in suspension of services",
    ],
  },
  // `adminFees` moved to FEE_ADDENDA.admin — it is a fee, and stating it in
  // both the fee band and the policy index is the duplication being removed.
  controlledSubstances: {
    heading: "Controlled Substances & Monitoring",
    text: "For patient safety, this practice follows strict prescribing guidelines, including use of the Arizona Controlled Substances Prescription Monitoring Program when clinically indicated.",
  },
  emergency: {
    heading: "Emergencies",
    text: "This practice does not provide emergency services.",
    note: "If you are experiencing a medical or psychiatric emergency, please call 911 or go to the nearest emergency room.",
  },
  policyAcknowledgment: {
    heading: "Policy Acknowledgment",
    text: "By scheduling and attending services, you acknowledge that you have read, understood, and agree to this financial policy.",
  },
};
