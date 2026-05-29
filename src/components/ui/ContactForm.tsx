"use client";

import { useState, type FormEvent } from "react";
import { FORM_DISCLAIMER } from "@/content/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      // TODO: Replace with actual n8n webhook URL
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-surface border border-sage/30 rounded-sm p-8 text-center">
        <p className="font-heading text-subheading text-gold mb-2">
          Thank you
        </p>
        <p className="text-muted">
          Your message has been received. Brittany will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          className="w-full bg-surface border border-gold/15 rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full bg-surface border border-gold/15 rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
        />
      </div>
      <input
        name="phone"
        type="tel"
        placeholder="Phone (optional)"
        className="w-full bg-surface border border-gold/15 rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
      />
      <input
        name="preferred_times"
        type="text"
        placeholder="Preferred days/times for a consultation"
        className="w-full bg-surface border border-gold/15 rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Brief reason for reaching out"
        className="w-full bg-surface border border-gold/15 rounded-sm px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
      />
      <p className="text-body-sm text-muted/70 italic">{FORM_DISCLAIMER}</p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold text-deep font-body font-semibold py-3 px-8 rounded-sm hover:bg-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending\u2026" : "Request a Consultation"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-body-sm text-center">
          Something went wrong. Please call{" "}
          <a href="tel:+16026335917" className="underline">
            602-633-5917
          </a>{" "}
          or email directly.
        </p>
      )}
    </form>
  );
}
