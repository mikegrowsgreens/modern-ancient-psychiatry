import { NextResponse } from "next/server";

/**
 * Public, unauthenticated POST. Everything below assumes the body is hostile:
 * the JSON parse is guarded (it used to throw an unhandled rejection on a
 * malformed body), required fields and email shape are validated server-side
 * rather than trusted from the client, every field is length-capped before it
 * is forwarded anywhere, and a honeypot field rejects the trivial bot case.
 *
 * The route NEVER reports delivery it did not perform. With no webhook
 * configured this is a demonstration site that cannot deliver messages, and it
 * says so — the previous version returned `{ success: true }` in that case,
 * which made the UI tell a person in distress that Brittany had their message.
 */

const MAX_LENGTH = {
  name: 120,
  email: 254,
  phone: 40,
  preferred_times: 300,
  message: 4000,
} as const;

/** Deliberately permissive: shape check only, never a deliverability claim. */
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "invalid-body" },
      { status: 400 }
    );
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json(
      { delivered: false, reason: "invalid-body" },
      { status: 400 }
    );
  }

  const body = parsed as Record<string, unknown>;

  // Honeypot. A human never sees this field, so anything in it is a bot.
  // Answered with the same shape as a validation failure, no explanation.
  if (text(body, "company") !== "") {
    return NextResponse.json(
      { delivered: false, reason: "rejected" },
      { status: 400 }
    );
  }

  const fields = {
    name: text(body, "name"),
    email: text(body, "email"),
    phone: text(body, "phone"),
    preferred_times: text(body, "preferred_times"),
    message: text(body, "message"),
  };

  const overLength = (Object.keys(MAX_LENGTH) as Array<keyof typeof MAX_LENGTH>)
    .some((key) => fields[key].length > MAX_LENGTH[key]);

  if (!fields.name || !EMAIL_SHAPE.test(fields.email) || overLength) {
    return NextResponse.json(
      { delivered: false, reason: "invalid-fields" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK;

  if (!webhookUrl) {
    return NextResponse.json(
      { delivered: false, reason: "not-configured" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { delivered: false, reason: "upstream-error" },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { delivered: false, reason: "upstream-error" },
      { status: 502 }
    );
  }

  return NextResponse.json({ delivered: true });
}
