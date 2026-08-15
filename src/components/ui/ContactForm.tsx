"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CONTACT_FACT_LABELS,
  FORM_DISCLAIMER,
  FORM_ERRORS,
  FORM_FAILURE,
  FORM_FIELDS,
  FORM_HONEYPOT,
  FORM_SUBMIT,
  FORM_SUCCESS,
  FORM_UNDELIVERED,
} from "@/content/contact";
import { CONTACT } from "@/content/shared";

/**
 * V–A–C Line Input (DESIGN.md §10). Transparent, one bottom border, no box, no
 * radius. `focus:outline-none` is deliberately absent — the global
 * :focus-visible ring in globals.css is the focus indicator, and the gold
 * bottom border is the second, non-color-only signal.
 */
const FIELD =
  "w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 py-3 pl-[2px] text-body text-cream transition-colors duration-micro ease-out placeholder:text-muted focus:border-gold";

/**
 * The border colour is applied per state rather than overridden. Two
 * `border-*` utilities on one element are the same specificity, so which one
 * wins is decided by stylesheet order, not by class order — the error border
 * silently lost to the resting one when they were both in the base string.
 */
const FIELD_RESTING = "border-cream/25";

const FIELD_INVALID = "border-alert";

const LABEL = "block text-label uppercase text-muted";

const DISCLAIMER_ID = "contact-form-disclaimer";

type Status = "idle" | "sending" | "sent" | "undelivered" | "failed";

type FieldName = "name" | "email";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const outcomeRef = useRef<HTMLParagraphElement>(null);

  /* Success and non-delivery both replace the form in place, so focus has to
     follow the content that replaced it or the reader is left in nothing. */
  useEffect(() => {
    if (status === "sent" || status === "undelivered" || status === "failed") {
      outcomeRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const found: Partial<Record<FieldName, string>> = {};
    if (!data.name?.trim()) found.name = FORM_ERRORS.name;
    if (!data.email?.trim()) {
      found.email = FORM_ERRORS.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      found.email = FORM_ERRORS.emailShape;
    }

    setErrors(found);

    if (found.name) {
      nameRef.current?.focus();
      return;
    }
    if (found.email) {
      emailRef.current?.focus();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await res.json().catch(() => null)) as {
        delivered?: boolean;
        reason?: string;
      } | null;

      if (res.ok && payload?.delivered) {
        setStatus("sent");
        form.reset();
        return;
      }

      // The route reports non-delivery honestly; the UI has to relay it.
      setStatus(payload?.reason === "not-configured" ? "undelivered" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="max-w-prose">
        <p
          ref={outcomeRef}
          tabIndex={-1}
          className="font-heading text-title font-light text-gold"
        >
          {FORM_SUCCESS.heading}
        </p>
        <p className="mt-4 text-body text-cream/85">{FORM_SUCCESS.body}</p>
      </div>
    );
  }

  if (status === "undelivered" || status === "failed") {
    const copy = status === "undelivered" ? FORM_UNDELIVERED : FORM_FAILURE;
    return (
      <div role="status" aria-live="polite" className="max-w-prose">
        <p
          ref={outcomeRef}
          tabIndex={-1}
          className="font-heading text-title font-light text-alert"
        >
          {copy.heading}
        </p>
        <p className="mt-4 text-body text-cream/85">{copy.body}</p>
        <dl className="mt-6">
          <div className="rule-seam flex flex-wrap items-baseline gap-x-6 border-t py-3">
            <dt className="text-label uppercase text-muted">
              {CONTACT_FACT_LABELS.phone}
            </dt>
            <dd>
              <a
                href={CONTACT.phoneHref}
                className="tabular font-heading text-title font-light text-cream transition-colors duration-micro ease-out hover:text-gold"
              >
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div className="rule-seam flex flex-wrap items-baseline gap-x-6 border-y py-3">
            <dt className="text-label uppercase text-muted">
              {CONTACT_FACT_LABELS.email}
            </dt>
            <dd>
              <a
                href={CONTACT.emailHref}
                className="break-all font-heading text-title font-light text-cream transition-colors duration-micro ease-out hover:text-gold"
              >
                {CONTACT.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={sending}
      className="max-w-prose space-y-8"
    >
      <div>
        <label htmlFor={FORM_FIELDS.name.id} className={LABEL}>
          {FORM_FIELDS.name.label}
        </label>
        <input
          ref={nameRef}
          id={FORM_FIELDS.name.id}
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={
            errors.name
              ? `${FORM_FIELDS.name.id}-error ${DISCLAIMER_ID}`
              : DISCLAIMER_ID
          }
          className={`mt-3 ${FIELD} ${errors.name ? FIELD_INVALID : FIELD_RESTING}`}
        />
        {errors.name ? (
          <p id={`${FORM_FIELDS.name.id}-error`} className="mt-2 text-fine text-alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={FORM_FIELDS.email.id} className={LABEL}>
          {FORM_FIELDS.email.label}
        </label>
        <input
          ref={emailRef}
          id={FORM_FIELDS.email.id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={
            errors.email
              ? `${FORM_FIELDS.email.id}-error ${DISCLAIMER_ID}`
              : DISCLAIMER_ID
          }
          className={`mt-3 ${FIELD} ${errors.email ? FIELD_INVALID : FIELD_RESTING}`}
        />
        {errors.email ? (
          <p
            id={`${FORM_FIELDS.email.id}-error`}
            className="mt-2 text-fine text-alert"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={FORM_FIELDS.phone.id} className={LABEL}>
          {FORM_FIELDS.phone.label}
        </label>
        <input
          id={FORM_FIELDS.phone.id}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-describedby={DISCLAIMER_ID}
          className={`tabular mt-3 ${FIELD} ${FIELD_RESTING}`}
        />
      </div>

      <div>
        <label htmlFor={FORM_FIELDS.preferredTimes.id} className={LABEL}>
          {FORM_FIELDS.preferredTimes.label}
        </label>
        <input
          id={FORM_FIELDS.preferredTimes.id}
          name="preferred_times"
          type="text"
          aria-describedby={DISCLAIMER_ID}
          className={`mt-3 ${FIELD} ${FIELD_RESTING}`}
        />
      </div>

      <div>
        <label htmlFor={FORM_FIELDS.message.id} className={LABEL}>
          {FORM_FIELDS.message.label}
        </label>
        <textarea
          id={FORM_FIELDS.message.id}
          name="message"
          rows={4}
          aria-describedby={DISCLAIMER_ID}
          className={`mt-3 resize-none ${FIELD} ${FIELD_RESTING}`}
        />
      </div>

      {/* Honeypot. Off-screen, hidden from assistive tech, out of the tab
          order — anything in it came from a bot and the route rejects it. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={FORM_HONEYPOT.id}>{FORM_HONEYPOT.label}</label>
        <input
          id={FORM_HONEYPOT.id}
          name={FORM_HONEYPOT.name}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p id={DISCLAIMER_ID} className="text-fine text-muted">
        {FORM_DISCLAIMER}
      </p>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-3 border border-gold px-8 py-3.5 text-label uppercase text-gold transition-colors duration-micro ease-out hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? (
          /* The one sanctioned `linear` animation on the site (DESIGN.md §11
             deviation 3): a rotating gold hairline circle. */
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 animate-spin rounded-full border border-gold/30 border-t-gold"
          />
        ) : null}
        {sending ? FORM_SUBMIT.sending : FORM_SUBMIT.idle}
      </button>
    </form>
  );
}
