export const SERVICES_INTRO =
  "A Personalized Approach\nTreatment is collaborative and tailored to your unique needs and goals. Whether you are seeking symptom relief, deeper self-understanding, or a more authentic way of living, care is designed to support you in reconnecting with your own capacity for healing.";

export type Service = {
  name: string;
  price?: string;
  duration?: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    name: "Psychiatric Evaluation",
    price: "$250.00",
    duration: "90 minutes",
    description:
      "A comprehensive psychiatric assessment to understand your full story\u2014not just symptoms. This initial visit is designed to understand you as a whole person, not just a diagnosis, and to create a thoughtful, individualized treatment plan.",
  },
  {
    name: "Medication Management",
    price: "$150.00",
    duration: "30 minutes",
    description:
      "Ongoing, personalized care focused on optimizing your mental health through evidence-based medication management. Appointments include monitoring effectiveness, adjusting treatment as needed, and integrating a holistic perspective that considers sleep, stress, and overall well-being.",
  },
  {
    name: "Psychotherapy",
    price: "$200.00/hour",
    description:
      "I offer integrative, evidence-based therapy incorporating CBT, DBT, ACT, and mindfulness-based approaches to help you build practical skills, improve emotional regulation, and create meaningful, lasting change.",
  },
  {
    name: "Integration Sessions",
    price: "$150.00/hour",
    description:
      "Dedicated sessions to help you process and make sense of insights gained during ketamine or other transformative experiences. The focus is on translating those insights into real-life changes, increased clarity, and sustainable healing.",
  },
  {
    name: "Mindfulness & Somatic-Based Approaches",
    description:
      "Incorporation of mindfulness, breathwork, and body-based awareness to support emotional regulation, resilience, and connection to self. These practices can help you develop greater capacity to navigate stress, anxiety, and overwhelming emotions.",
  },
  {
    name: "Trauma-Informed Care",
    description:
      "All services are grounded in a trauma-informed approach, recognizing the impact of past experiences on the nervous system, relationships, and overall mental health. Care is provided in a safe, nonjudgmental space at a pace that feels manageable and respectful.",
  },
  {
    name: "Holistic & Integrative Psychiatry",
    description:
      "Care that considers the full picture of your health\u2014mind, body, and environment. This may include discussion of lifestyle factors, nervous system regulation, and complementary approaches alongside traditional psychiatric treatment.",
  },
];

export const FEE_SCHEDULE = [
  {
    service: "Initial Psychiatric Evaluation (90 minutes)",
    fee: "$250.00",
  },
  {
    service: "Medication Management Follow-Up (30 minutes)",
    fee: "$150.00",
    note: "(with psychotherapy 30 minutes $200.00)",
  },
  { service: "Psychotherapy (1 hr)", fee: "$200.00" },
  { service: "Integration Sessions", fee: "$150.00/hr" },
];

export const POLICIES_INTRO =
  "We aim to provide transparent, compassionate care while maintaining clear boundaries that support a sustainable and ethical practice.";

export const FEE_NOTICE =
  "All services are self-pay. Payment is due at the time of service.";

export const FEE_CHANGE_NOTICE = "Fees are subject to change with prior notice.";

export const POLICIES = {
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
  adminFees: {
    heading: "Communication & Administrative Fees",
    text: "Additional fees may apply for:",
    points: [
      "Extensive paperwork, forms, or letters: $50.00",
      "Court-related services (if applicable): $50/hour",
    ],
    note: "These services are not covered by insurance.",
  },
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
