import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types";
import { validateContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const validation = validateContactPayload(body);

    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        { status: 400 }
      );
    }

    const { name, phone, email, subject, message } = validation.data;

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@theneonlabz.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "NeonLabz Website <onboarding@resend.dev>";

    if (resendKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `[NeonLabz Inquiry] ${subject}`,
          text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message || "(No message body)"}`,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Unable to forward email right now. Please contact us via WhatsApp or info@theneonlabz.com.",
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
