import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // TODO: Replace with n8n webhook URL
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK;

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        preferred_times: data.preferred_times || "",
        message: data.message || "",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }
  } else {
    // Dev mode: log to console
    console.log("Contact form submission:", data);
  }

  return NextResponse.json({ success: true });
}
