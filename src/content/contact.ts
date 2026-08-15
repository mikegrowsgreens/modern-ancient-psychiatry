export const CONTACT_HEADING = "Contact Me";

export const FORM_DISCLAIMER =
  "Please do not include sensitive personal or medical information via this form. This form is not monitored 24/7.";

export const CONTACT_INTRO =
  "I work with adults seeking a deeper, more intentional approach to mental health care.";

/**
 * The page's four <h3>s (Call / Email / Location / Follow) used to precede its
 * only <h2>, so the document outline started at level three. This heading is
 * the missing parent; the keys below stay third-level under it.
 */
export const CONTACT_DETAILS_HEADING = "Practice Details";

export const CONTACT_FACT_LABELS = {
  phone: "Call",
  email: "Email",
  location: "Location",
  follow: "Follow",
} as const;

export const FORM_HEADING = "Request a Consultation";

/**
 * Field labels. These were placeholders — the question vanished the moment the
 * reader started answering. They are real <label> text now (DESIGN.md §10).
 */
export const FORM_FIELDS = {
  name: { id: "contact-name", label: "Name" },
  email: { id: "contact-email", label: "Email" },
  phone: { id: "contact-phone", label: "Phone (optional)" },
  preferredTimes: {
    id: "contact-preferred-times",
    label: "Preferred days/times for a consultation",
  },
  message: { id: "contact-message", label: "Brief reason for reaching out" },
} as const;

/** Honeypot. Rendered visually hidden; a human never sees or fills it. */
export const FORM_HONEYPOT = {
  name: "company",
  id: "contact-company",
  label: "Company",
};

export const FORM_SUBMIT = {
  idle: "Request a Consultation",
  sending: "Sending",
};

export const FORM_ERRORS = {
  name: "Please enter your name.",
  email: "Please enter your email address.",
  emailShape: "Please enter an email address in the form name@example.com.",
};

export const FORM_SUCCESS = {
  heading: "Thank you",
  body: "Your message has been received. Brittany will be in touch soon.",
};

/**
 * The honest non-delivery state. This is a demonstration build with no message
 * delivery configured; the form used to claim the message had been received
 * while it was dropped on the floor. It now says so and hands over the two
 * channels that do reach the practice.
 */
export const FORM_UNDELIVERED = {
  heading: "This message was not sent",
  body: "This demonstration site cannot deliver messages. Please reach the practice directly:",
};

export const FORM_FAILURE = {
  heading: "This message was not sent",
  body: "Something went wrong on the way. Please reach the practice directly:",
};
