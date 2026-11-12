import type { ContactPayload } from "@/types";

export interface ValidatedContact {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactPayload(
  payload: ContactPayload
):
  | { valid: true; data: ValidatedContact }
  | { valid: false; error: string } {
  const name = (payload.name ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const email = (payload.email ?? "").trim();
  const subject = (payload.subject ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !phone || !email || !subject) {
    return {
      valid: false,
      error: "Please fill in your name, phone number, email, and subject.",
    };
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return {
      valid: false,
      error: "Please provide a valid email address.",
    };
  }

  return {
    valid: true,
    data: { name, phone, email, subject, message },
  };
}
