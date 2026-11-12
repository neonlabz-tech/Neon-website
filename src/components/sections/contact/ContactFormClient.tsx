"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ActionPill } from "@/components/ui/ActionPill";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function ContactFormClient() {
  const searchParams = useSearchParams();

  const initialPlan = searchParams.get("plan");
  const initialService = searchParams.get("service");
  const initialIdea = searchParams.get("idea");

  const defaultSubject = initialPlan
    ? `Custom Plan: ${initialPlan}`
    : initialService
      ? `Inquiry: ${initialService}`
      : initialIdea
        ? "New Software Project Idea"
        : "";

  const defaultMessage = initialPlan
    ? `Hi Neon Labz team, I would like to discuss a custom project plan for: ${initialPlan}.`
    : initialService
      ? `Hi Neon Labz team, I'm interested in learning more about ${initialService}.`
      : initialIdea
        ? `Project Idea: ${initialIdea}`
        : "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState(defaultMessage);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, subject, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorText(
          data.error ?? "Please double-check your details and try again."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorText("Network error. You can also reach us directly on WhatsApp.");
    }
  };

  const whatsappDirectUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hi Neon Labz! ${subject ? `Subject: ${subject}. ` : ""}${
      message || "I would like to discuss a software project."
    }`
  )}`;

  if (status === "success") {
    return (
      <div className="glass-card-strong rounded-3xl p-8 text-center sm:p-10">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#0c7a56]/25 bg-[#0c7a56]/10 text-[#0c7a56]">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-2xl font-medium text-[#0f0b24]">
          Message Received
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-[#474269]">
          Thank you, {name}. Our team at Neon Labz will get back to you shortly
          via email or phone. Need an immediate response? Reach us on WhatsApp.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-glass-btn-mint inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#0c7a56]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Continue on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setName("");
              setPhone("");
              setEmail("");
              setSubject("");
              setMessage("");
            }}
            className="ios-glass-btn rounded-full px-5 py-3 text-sm font-medium text-[#0f0b24]"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card-strong space-y-5 rounded-3xl p-7 sm:p-10"
    >
      <div>
        <h2 className="text-2xl font-medium text-[#0f0b24]">
          Send Us a Message
        </h2>
        <p className="mt-1 text-sm text-[#645e8a]">
          Share your project goals and we will arrange a meeting with a tailored
          plan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-medium text-[#0f0b24]"
          >
            Your name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-xl border border-[#0f0b24]/15 bg-white px-4 py-3 text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:border-[#6d3fea] focus:outline-none sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-xs font-medium text-[#0f0b24]"
          >
            Phone number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+94 7X XXX XXXX"
            className="w-full rounded-xl border border-[#0f0b24]/15 bg-white px-4 py-3 text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:border-[#6d3fea] focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-xs font-medium text-[#0f0b24]"
          >
            Your email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-[#0f0b24]/15 bg-white px-4 py-3 text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:border-[#6d3fea] focus:outline-none sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-xs font-medium text-[#0f0b24]"
          >
            Subject *
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Web App, SaaS, ERP/CRM, UI/UX..."
            className="w-full rounded-xl border border-[#0f0b24]/15 bg-white px-4 py-3 text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:border-[#6d3fea] focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-xs font-medium text-[#0f0b24]"
        >
          Write your message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your business goals, key features, or timeline..."
          className="w-full rounded-xl border border-[#0f0b24]/15 bg-white px-4 py-3 text-base text-[#0f0b24] placeholder:text-[#645e8a] focus:border-[#6d3fea] focus:outline-none sm:text-sm"
        />
      </div>

      {status === "error" && errorText ? (
        <div
          role="alert"
          className="rounded-xl border border-red-500/35 bg-red-500/10 px-4 py-3 text-xs text-red-700"
        >
          {errorText}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <ActionPill
          type="submit"
          label={status === "submitting" ? "Sending..." : "Send Message"}
          disabled={status === "submitting"}
        />

        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#0c7a56] transition-opacity hover:opacity-85"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>Or connect directly on WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
