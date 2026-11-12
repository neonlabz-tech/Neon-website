import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import {
  FOOTER_NAVIGATE_LINKS,
  FOOTER_SOLUTION_LINKS,
  ROUTES,
} from "@/constants/navigation";
import { COMPANY_INFO } from "@/data/company";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function SocialLogo({ name }: { name: string }) {
  switch (name) {
    case "LinkedIn":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const { lat, lng } = COMPANY_INFO.mapCoordinates;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <footer className="relative border-t border-[#0f0b24]/[0.08] bg-[#faf9fe] pt-10 pb-6 sm:pt-12 sm:pb-7">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 pb-7 sm:gap-8 lg:items-start">
          <div className="col-span-12 lg:col-span-4">
            <Link
              href={ROUTES.home}
              aria-label="NeonLabz Home"
              className="inline-block"
            >
              <BrandLogo tone="dark" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#474269]">
              {COMPANY_INFO.footerSummary}
            </p>

            <div className="mt-4 space-y-2 text-sm text-[#0f0b24]">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#6d3fea]" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#6d3fea]" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors hover:text-[#6d3fea]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#6d3fea]" />
                <a
                  href="tel:+94714312534"
                  className="transition-colors hover:text-[#6d3fea]"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-glass-btn-mint inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-[#0c7a56]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-5 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0b24]">
              Navigate
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#474269]">
              {FOOTER_NAVIGATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#6d3fea]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-7 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0b24]">
              Core Solutions
            </h3>
            <ul className="mt-3 space-y-2 text-[13.5px] sm:text-sm text-[#474269]">
              {FOOTER_SOLUTION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#6d3fea]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f0b24]">
                Location Map
              </h3>
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#6d3fea] transition-opacity hover:opacity-80"
              >
                <span>Open Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="relative mt-3 h-[175px] w-full overflow-hidden rounded-2xl border border-[#0f0b24]/[0.08] bg-white shadow-[0_12px_32px_-12px_rgba(15,11,36,0.08)]">
              <iframe
                title="Neon Labz Office Location — Jaffna"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#0f0b24]/[0.08] pt-5 text-center text-xs text-[#645e8a] md:flex-row md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:justify-start">
            <p>{COMPANY_INFO.copyright}</p>
            <div className="flex items-center gap-3 text-[11px]">
              <Link
                href={ROUTES.privacy}
                className="transition-colors hover:text-[#6d3fea]"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href={ROUTES.terms}
                className="transition-colors hover:text-[#6d3fea]"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {COMPANY_INFO.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="ios-glass-btn inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0f0b24] hover:text-[#6d3fea]"
              >
                <SocialLogo name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
