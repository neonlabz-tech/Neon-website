"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Sparkles,
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { ROUTES } from "@/constants/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  theme: "blue" | "purple" | "pink" | "violet" | "fuchsia" | "emerald";
  graphicType: "website" | "fullstack" | "mobile" | "uiux" | "brand" | "marketing";
}

const IT_SERVICES: ServiceCardItem[] = [
  {
    id: "website-dev",
    number: "01",
    title: "Website Development",
    description:
      "Fast, responsive websites that build trust, engage visitors and drive real business growth with modern design and speed.",
    tags: ["WordPress", "Elementor", "React"],
    href: `${ROUTES.services}/website-development`,
    theme: "blue",
    graphicType: "website",
  },
  {
    id: "fullstack-dev",
    number: "02",
    title: "Full-Stack Development",
    description:
      "Scalable applications and digital systems engineered for performance, security, and seamless day-to-day business operations.",
    tags: ["Next.js", "Node.js", "Supabase"],
    href: `${ROUTES.services}/full-stack-development`,
    theme: "purple",
    graphicType: "fullstack",
  },
  {
    id: "mobile-apps",
    number: "03",
    title: "Mobile Applications",
    description:
      "User-friendly mobile experiences designed to delight customers and accelerate your product adoption across iOS and Android.",
    tags: ["React Native", "API", "Cloud"],
    href: `${ROUTES.services}/mobile-applications`,
    theme: "pink",
    graphicType: "mobile",
  },
];

const CREATIVE_SERVICES: ServiceCardItem[] = [
  {
    id: "ui-ux",
    number: "01",
    title: "UI/UX Design",
    description:
      "User-centric wireframes, prototypes, and high-fidelity design systems built for effortless adoption and intuitive digital experiences.",
    tags: ["Figma", "Design Systems", "Prototypes"],
    href: `${ROUTES.services}/ui-ux-design`,
    theme: "violet",
    graphicType: "uiux",
  },
  {
    id: "brand-identity",
    number: "02",
    title: "Brand Identity",
    description:
      "Distinct logo marks, typography systems, and cohesive brand guidelines that make your company unmistakable in competitive markets.",
    tags: ["Logo Design", "Typography", "Styleguide"],
    href: `${ROUTES.services}/brand-identity`,
    theme: "fuchsia",
    graphicType: "brand",
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    description:
      "Data-backed campaigns, search optimization, and growth funnels that turn visitors into paying customers and repeat brand advocates.",
    tags: ["Technical SEO", "Paid Search", "Analytics"],
    href: `${ROUTES.services}/digital-marketing-solutions`,
    theme: "emerald",
    graphicType: "marketing",
  },
];

const THEME_STYLES = {
  blue: {
    iconBg: "bg-sky-50 dark:bg-sky-500/10",
    iconBorder: "border-sky-200/80 dark:border-sky-400/25",
    iconColor: "text-sky-600 dark:text-sky-400",
    numBg: "bg-sky-50/80 dark:bg-sky-500/10",
    numBorder: "border-sky-200/60 dark:border-sky-400/25",
    numColor: "text-sky-600 dark:text-sky-300",
    glowFrom: "from-sky-50/70 via-sky-100/30 to-transparent dark:from-sky-950/30 dark:via-sky-900/10",
    cardBorder: "hover:border-sky-400/50 dark:hover:border-sky-400/40",
  },
  purple: {
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
    iconBorder: "border-purple-200/80 dark:border-purple-400/25",
    iconColor: "text-purple-600 dark:text-purple-400",
    numBg: "bg-purple-50/80 dark:bg-purple-500/10",
    numBorder: "border-purple-200/60 dark:border-purple-400/25",
    numColor: "text-purple-600 dark:text-purple-300",
    glowFrom: "from-purple-50/70 via-purple-100/30 to-transparent dark:from-purple-950/30 dark:via-purple-900/10",
    cardBorder: "hover:border-purple-400/50 dark:hover:border-purple-400/40",
  },
  pink: {
    iconBg: "bg-pink-50 dark:bg-pink-500/10",
    iconBorder: "border-pink-200/80 dark:border-pink-400/25",
    iconColor: "text-pink-600 dark:text-pink-400",
    numBg: "bg-pink-50/80 dark:bg-pink-500/10",
    numBorder: "border-pink-200/60 dark:border-pink-400/25",
    numColor: "text-pink-600 dark:text-pink-300",
    glowFrom: "from-pink-50/70 via-pink-100/30 to-transparent dark:from-pink-950/30 dark:via-pink-900/10",
    cardBorder: "hover:border-pink-400/50 dark:hover:border-pink-400/40",
  },
  violet: {
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    iconBorder: "border-indigo-200/80 dark:border-indigo-400/25",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    numBg: "bg-indigo-50/80 dark:bg-indigo-500/10",
    numBorder: "border-indigo-200/60 dark:border-indigo-400/25",
    numColor: "text-indigo-600 dark:text-indigo-300",
    glowFrom: "from-indigo-50/70 via-indigo-100/30 to-transparent dark:from-indigo-950/30 dark:via-indigo-900/10",
    cardBorder: "hover:border-indigo-400/50 dark:hover:border-indigo-400/40",
  },
  fuchsia: {
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    iconBorder: "border-fuchsia-200/80 dark:border-fuchsia-400/25",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    numBg: "bg-fuchsia-50/80 dark:bg-fuchsia-500/10",
    numBorder: "border-fuchsia-200/60 dark:border-fuchsia-400/25",
    numColor: "text-fuchsia-600 dark:text-fuchsia-300",
    glowFrom: "from-fuchsia-50/70 via-fuchsia-100/30 to-transparent dark:from-fuchsia-950/30 dark:via-fuchsia-900/10",
    cardBorder: "hover:border-fuchsia-400/50 dark:hover:border-fuchsia-400/40",
  },
  emerald: {
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconBorder: "border-emerald-200/80 dark:border-emerald-400/25",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    numBg: "bg-emerald-50/80 dark:bg-emerald-500/10",
    numBorder: "border-emerald-200/60 dark:border-emerald-400/25",
    numColor: "text-emerald-600 dark:text-emerald-300",
    glowFrom: "from-emerald-50/70 via-emerald-100/30 to-transparent dark:from-emerald-950/30 dark:via-emerald-900/10",
    cardBorder: "hover:border-emerald-400/50 dark:hover:border-emerald-400/40",
  },
};

function getCardIcon(graphicType: ServiceCardItem["graphicType"]) {
  switch (graphicType) {
    case "website":
      return Globe;
    case "fullstack":
      return Layers;
    case "mobile":
      return Smartphone;
    case "uiux":
      return Palette;
    case "brand":
      return Sparkles;
    case "marketing":
      return TrendingUp;
  }
}

function CardGraphicIllustration({ type }: { type: ServiceCardItem["graphicType"] }) {
  if (type === "website") {
    return (
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-contain"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="web-card-bg" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0f2fe" stopOpacity="0.85" />
            <stop offset="1" stopColor="#bae6fd" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="web-pane" x1="40" y1="30" x2="220" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#f0f9ff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="web-btn" x1="160" y1="80" x2="230" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="web-shadow" x="15" y="15" width="270" height="150" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0284c7" floodOpacity="0.16" />
          </filter>
          <filter id="pill-shadow" x="140" y="70" width="110" height="70" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0284c7" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <ellipse cx="160" cy="110" rx="120" ry="50" fill="#38bdf8" fillOpacity="0.18" />

        {/* Main 3D Browser Window with soft perspective */}
        <g filter="url(#web-shadow)">
          <rect x="35" y="24" width="210" height="126" rx="18" fill="url(#web-pane)" stroke="#bae6fd" strokeWidth="1.5" />
          {/* Browser header bar */}
          <rect x="35" y="24" width="210" height="28" rx="18" fill="#f8fafc" fillOpacity="0.9" />
          <path d="M35 44 H245 V52 H35 Z" fill="#f8fafc" fillOpacity="0.9" />
          <circle cx="53" cy="38" r="3.5" fill="#f87171" />
          <circle cx="65" cy="38" r="3.5" fill="#fbbf24" />
          <circle cx="77" cy="38" r="3.5" fill="#34d399" />
          <rect x="96" y="33" width="90" height="10" rx="5" fill="#e2e8f0" fillOpacity="0.75" />

          {/* Body Content Placeholder */}
          <rect x="52" y="64" width="70" height="66" rx="12" fill="#e0f2fe" fillOpacity="0.75" />
          <rect x="134" y="64" width="92" height="10" rx="5" fill="#cbd5e1" fillOpacity="0.7" />
          <rect x="134" y="82" width="72" height="7" rx="3.5" fill="#e2e8f0" />
          <rect x="134" y="95" width="54" height="7" rx="3.5" fill="#e2e8f0" />
        </g>

        {/* Floating 3D Action Pill with <-> code arrows */}
        <g filter="url(#pill-shadow)">
          <rect x="156" y="82" width="76" height="42" rx="21" fill="url(#web-btn)" />
          {/* Arrow / Switch indicator */}
          <path
            d="M178 103 L173 103 M173 103 L176 100 M173 103 L176 106 M210 103 L215 103 M215 103 L212 100 M215 103 L212 106"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="194" cy="103" r="5" fill="#ffffff" />
        </g>
      </svg>
    );
  }

  if (type === "fullstack") {
    return (
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-contain"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="purple-glow" x1="160" y1="50" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" stopOpacity="0.22" />
            <stop offset="1" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="layer-bottom" x1="60" y1="80" x2="200" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f3e8ff" />
            <stop offset="1" stopColor="#e9d5ff" />
          </linearGradient>
          <linearGradient id="layer-mid" x1="70" y1="65" x2="210" y2="125" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e9d5ff" />
            <stop offset="1" stopColor="#d8b4fe" />
          </linearGradient>
          <linearGradient id="code-window" x1="130" y1="70" x2="270" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="1" stopColor="#faf5ff" stopOpacity="0.88" />
          </linearGradient>
          <filter id="purple-shadow" x="30" y="30" width="260" height="140" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#7c3aed" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <ellipse cx="160" cy="105" rx="110" ry="46" fill="url(#purple-glow)" />

        {/* Stacked isometric layers in background */}
        <g transform="translate(10, 0)">
          {/* Bottom plate */}
          <path
            d="M75 105 L145 74 L195 95 L125 126 Z"
            fill="url(#layer-bottom)"
            stroke="#d8b4fe"
            strokeWidth="1.2"
          />
          {/* Middle plate */}
          <path
            d="M85 90 L155 59 L205 80 L135 111 Z"
            fill="url(#layer-mid)"
            stroke="#c084fc"
            strokeWidth="1.2"
          />
        </g>

        {/* Front 3D Code Window with </> */}
        <g filter="url(#purple-shadow)">
          <rect x="140" y="44" width="130" height="92" rx="18" fill="url(#code-window)" stroke="#d8b4fe" strokeWidth="1.5" />
          <circle cx="158" cy="60" r="3.5" fill="#f87171" />
          <circle cx="170" cy="60" r="3.5" fill="#fbbf24" />
          <circle cx="182" cy="60" r="3.5" fill="#34d399" />

          {/* </> Big Code Symbol */}
          <path
            d="M174 94 L162 104 L174 114 M196 94 L208 104 L196 114 M190 90 L180 118"
            stroke="#7c3aed"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect x="222" y="98" width="32" height="5" rx="2.5" fill="#e9d5ff" />
          <rect x="222" y="108" width="22" height="5" rx="2.5" fill="#e9d5ff" />
        </g>
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-contain"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pink-glow" x1="160" y1="50" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f43f5e" stopOpacity="0.2" />
            <stop offset="1" stopColor="#fb7185" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="phone-body" x1="160" y1="20" x2="230" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="1" stopColor="#fff1f2" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="cloud-pill" x1="60" y1="70" x2="140" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#ffe4e6" />
          </linearGradient>
          <filter id="phone-shadow" x="120" y="15" width="150" height="160" filterUnits="userSpaceOnUse">
            <feDropShadow dx="4" dy="12" stdDeviation="14" floodColor="#e11d48" floodOpacity="0.18" />
          </filter>
          <filter id="cloud-shadow" x="50" y="60" width="100" height="70" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#f43f5e" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <ellipse cx="160" cy="110" rx="110" ry="46" fill="url(#pink-glow)" />

        {/* 3D Smartphone Frame (Angled / Upright) */}
        <g filter="url(#phone-shadow)">
          <rect x="146" y="24" width="98" height="136" rx="22" fill="url(#phone-body)" stroke="#fecdd3" strokeWidth="2" />
          {/* Dynamic Island / Speaker notch */}
          <rect x="175" y="32" width="40" height="6" rx="3" fill="#fda4af" />

          {/* Screen Wireframe Blocks */}
          <rect x="158" y="48" width="74" height="42" rx="12" fill="#ffe4e6" fillOpacity="0.8" />
          <rect x="158" y="98" width="34" height="28" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />
          <rect x="198" y="98" width="34" height="28" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />

          {/* Home indicator pill */}
          <rect x="177" y="146" width="36" height="4" rx="2" fill="#fda4af" />
        </g>

        {/* Floating 3D Cloud Badge */}
        <g filter="url(#cloud-shadow)">
          <rect x="68" y="74" width="68" height="46" rx="16" fill="url(#cloud-pill)" stroke="#fecdd3" strokeWidth="1.5" />
          {/* Cloud Icon in pink */}
          <path
            d="M93 102 H111 A6 6 0 0 0 111 90 A9 9 0 0 0 94 92 A5.5 5.5 0 0 0 93 102 Z"
            fill="#f43f5e"
          />
        </g>
      </svg>
    );
  }

  if (type === "uiux") {
    return (
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-contain"
        aria-hidden="true"
      >
        <defs>
          <filter id="uiux-shadow" x="35" y="25" width="250" height="140" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#6366f1" floodOpacity="0.2" />
          </filter>
        </defs>
        <ellipse cx="160" cy="110" rx="110" ry="46" fill="#818cf8" fillOpacity="0.18" />
        <g filter="url(#uiux-shadow)">
          {/* Artboard Frame */}
          <rect x="55" y="30" width="210" height="120" rx="16" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
          <rect x="70" y="44" width="70" height="40" rx="8" fill="#e0e7ff" />
          <rect x="70" y="92" width="110" height="8" rx="4" fill="#c7d2fe" />
          <rect x="70" y="106" width="80" height="8" rx="4" fill="#e0e7ff" />

          {/* Color palette chips */}
          <circle cx="164" cy="54" r="9" fill="#6366f1" />
          <circle cx="188" cy="54" r="9" fill="#a855f7" />
          <circle cx="212" cy="54" r="9" fill="#ec4899" />

          {/* Design cursor pointer */}
          <path
            d="M200 90 L200 115 L206 109 L213 118 L217 115 L210 106 L218 106 Z"
            fill="#4338ca"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    );
  }

  if (type === "brand") {
    return (
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full object-contain"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="brand-canvas-bg"
            x1="40"
            y1="20"
            x2="280"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffffff" stopOpacity="0.96" />
            <stop offset="1" stopColor="#fdf4ff" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient
            id="brand-gem-top"
            x1="166"
            y1="52"
            x2="230"
            y2="88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f472b6" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
          <linearGradient
            id="brand-gem-left"
            x1="166"
            y1="72"
            x2="198"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ec4899" />
            <stop offset="1" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient
            id="brand-gem-right"
            x1="198"
            y1="72"
            x2="230"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <filter
            id="brand-canvas-shadow"
            x="25"
            y="15"
            width="270"
            height="150"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#d946ef"
              floodOpacity="0.18"
            />
          </filter>
          <filter
            id="brand-gem-shadow"
            x="145"
            y="35"
            width="105"
            height="110"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="12"
              floodColor="#c026d3"
              floodOpacity="0.32"
            />
          </filter>
          <filter
            id="brand-typo-shadow"
            x="50"
            y="52"
            width="80"
            height="70"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="8"
              floodColor="#9333ea"
              floodOpacity="0.16"
            />
          </filter>
        </defs>

        {/* Ambient background glow */}
        <ellipse
          cx="160"
          cy="110"
          rx="115"
          ry="46"
          fill="#f0abfc"
          fillOpacity="0.22"
        />

        {/* Main 3D Brand Guidelines Artboard Canvas */}
        <g filter="url(#brand-canvas-shadow)">
          <rect
            x="42"
            y="24"
            width="236"
            height="126"
            rx="18"
            fill="url(#brand-canvas-bg)"
            stroke="#f5d0fe"
            strokeWidth="1.5"
          />
          {/* Header bar */}
          <rect
            x="42"
            y="24"
            width="236"
            height="26"
            rx="18"
            fill="#fdf4ff"
            fillOpacity="0.8"
          />
          <path d="M42 42 H278 V50 H42 Z" fill="#fdf4ff" fillOpacity="0.8" />
          <circle cx="58" cy="37" r="3.5" fill="#f43f5e" />
          <circle cx="70" cy="37" r="3.5" fill="#d946ef" />
          <circle cx="82" cy="37" r="3.5" fill="#8b5cf6" />
          <rect
            x="100"
            y="33"
            width="70"
            height="8"
            rx="4"
            fill="#f5d0fe"
            fillOpacity="0.8"
          />

          {/* Construction grid circles */}
          <circle
            cx="198"
            cy="90"
            r="38"
            fill="none"
            stroke="#f5d0fe"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle
            cx="198"
            cy="90"
            r="22"
            fill="none"
            stroke="#fae8ff"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <line
            x1="160"
            y1="90"
            x2="236"
            y2="90"
            stroke="#f5d0fe"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          <line
            x1="198"
            y1="52"
            x2="198"
            y2="128"
            stroke="#f5d0fe"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
        </g>

        {/* Left Column: Typography Specimen Chip ("Aa") */}
        <g filter="url(#brand-typo-shadow)">
          <rect
            x="58"
            y="60"
            width="64"
            height="52"
            rx="12"
            fill="#ffffff"
            stroke="#e9d5ff"
            strokeWidth="1.2"
          />
          <text
            x="90"
            y="88"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="20"
            fill="#7c3aed"
            letterSpacing="-0.5"
          >
            Aa
          </text>
          <rect x="68" y="97" width="44" height="4" rx="2" fill="#e9d5ff" />
        </g>

        {/* Color Palette Chips */}
        <circle
          cx="68"
          cy="126"
          r="6"
          fill="#7c3aed"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        <circle
          cx="84"
          cy="126"
          r="6"
          fill="#d946ef"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="126"
          r="6"
          fill="#f43f5e"
          stroke="#ffffff"
          strokeWidth="1.5"
        />

        {/* Center-Right: Floating 3D Geometric Brand Emblem */}
        <g filter="url(#brand-gem-shadow)">
          <path
            d="M198 52 L230 72 L230 108 L198 128 L166 108 L166 72 Z"
            fill="#ffffff"
            stroke="#f0abfc"
            strokeWidth="1.5"
          />
          <path
            d="M198 52 L230 72 L198 88 Z"
            fill="url(#brand-gem-top)"
          />
          <path
            d="M198 52 L166 72 L198 88 Z"
            fill="url(#brand-gem-top)"
            fillOpacity="0.8"
          />
          <path
            d="M166 72 L166 108 L198 128 L198 88 Z"
            fill="url(#brand-gem-left)"
          />
          <path
            d="M230 72 L230 108 L198 128 L198 88 Z"
            fill="url(#brand-gem-right)"
          />
          <path
            d="M166 72 L198 88 L230 72"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.75"
          />
          <path
            d="M198 88 L198 128"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.75"
          />
        </g>

        {/* Sparkle Highlights */}
        <path
          d="M236 50 Q236 55 241 55 Q236 55 236 60 Q236 55 231 55 Q236 55 236 50 Z"
          fill="#ffffff"
          stroke="#e879f9"
          strokeWidth="0.75"
        />
        <path
          d="M158 58 Q158 61 161 61 Q158 61 158 64 Q158 61 155 61 Q158 61 158 58 Z"
          fill="#ffffff"
          stroke="#c084fc"
          strokeWidth="0.75"
        />
        <circle cx="198" cy="88" r="3" fill="#ffffff" />
      </svg>
    );
  }

  // marketing
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full object-contain"
      aria-hidden="true"
    >
      <defs>
        <filter id="mkt-shadow" x="45" y="25" width="230" height="140" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#10b981" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse cx="160" cy="110" rx="110" ry="46" fill="#6ee7b7" fillOpacity="0.18" />
      <g filter="url(#mkt-shadow)">
        <rect x="60" y="32" width="200" height="116" rx="18" fill="#ffffff" stroke="#a7f3d0" strokeWidth="1.5" />
        {/* Ascending chart bars */}
        <rect x="85" y="104" width="18" height="26" rx="4" fill="#a7f3d0" />
        <rect x="115" y="86" width="18" height="44" rx="4" fill="#6ee7b7" />
        <rect x="145" y="70" width="18" height="60" rx="4" fill="#34d399" />
        <rect x="175" y="52" width="18" height="78" rx="4" fill="#10b981" />

        {/* Growth upward line curve */}
        <path
          d="M80 108 Q125 90 155 64 T225 44"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="225" cy="44" r="5" fill="#059669" stroke="#ffffff" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function ServicesSplitScrollSection() {
  const [activeCategory, setActiveCategory] = useState<"it-solutions" | "creative">("it-solutions");

  const activeServices = activeCategory === "it-solutions" ? IT_SERVICES : CREATIVE_SERVICES;

  return (
    <section id="services" className="relative bg-white py-10 sm:py-12 lg:py-12 dark:bg-[#09061a]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 2xl:max-w-[1560px]">
        {/* Top Centered Pill Switcher (Matching screenshot [ </> IT Solutions ] [ Creative ]) */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Service categories"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] p-1.5 shadow-[0_8px_24px_-8px_rgba(15,11,36,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "it-solutions"}
              onClick={() => setActiveCategory("it-solutions")}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm ${
                activeCategory === "it-solutions"
                  ? "bg-gradient-to-r from-[#3b1682] via-[#6d3fea] to-[#8c2bff] text-white shadow-[0_6px_20px_-4px_rgba(109,63,234,0.5)]"
                  : "text-[#474269] hover:text-[#0f0b24] dark:text-white/70 dark:hover:text-white"
              }`}
            >
              <Code2 className="h-4 w-4" />
              <span>IT Solutions</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "creative"}
              onClick={() => setActiveCategory("creative")}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm ${
                activeCategory === "creative"
                  ? "bg-gradient-to-r from-[#3b1682] via-[#6d3fea] to-[#8c2bff] text-white shadow-[0_6px_20px_-4px_rgba(109,63,234,0.5)]"
                  : "text-[#474269] hover:text-[#0f0b24] dark:text-white/70 dark:hover:text-white"
              }`}
            >
              <Palette className="h-4 w-4" />
              <span>Creative</span>
            </button>
          </div>
        </div>

        {/* Section Heading: Centered clean editorial title */}
        <div className="mx-auto mt-4 max-w-3xl text-center sm:mt-5">
          <Eyebrow label="OUR SERVICES" />
          <h2 className="mt-2.5 text-2xl font-bold tracking-[-0.03em] text-[#0f0b24] sm:text-4xl lg:text-[42px] dark:text-white">
            Technology built around your{" "}
            <span className="neon-gradient-text">business</span>.
          </h2>
        </div>

        {/* Top-right Directory Link */}
        <div className="mt-3 flex justify-center sm:mt-4 lg:justify-end">
          <Link
            href={ROUTES.services}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5b2ee0] transition-colors hover:text-[#0f0b24] dark:text-[#a78bfa] dark:hover:text-white"
          >
            <span>Browse Complete Service Directory</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Card Grid (PC responsive: 3 across in 1 row; mobile responsive: clean vertical/stacked flow) */}
        <div className="mt-4 grid grid-cols-1 gap-5 sm:mt-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => {
            const styles = THEME_STYLES[service.theme];
            const CardIcon = getCardIcon(service.graphicType);

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#0f0b24]/[0.1] bg-white p-5 shadow-[0_16px_40px_-16px_rgba(15,11,36,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_-16px_rgba(109,63,234,0.16)] dark:border-white/10 dark:bg-white/[0.03] sm:p-6 ${styles.cardBorder}`}
              >
                {/* Subtle top card accent shine */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${styles.glowFrom} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  {/* Top Header Row: Icon badge + Number pill */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${styles.iconBorder} ${styles.iconBg} ${styles.iconColor} shadow-sm transition-transform duration-300 group-hover:scale-105`}
                    >
                      <CardIcon className="h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-semibold ${styles.numColor} rounded-full border ${styles.numBorder} ${styles.numBg} px-2.5 py-0.5`}
                      >
                        {service.number}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#0f0b24]/10 bg-[#faf9fe] text-[#474269] transition-all duration-300 group-hover:border-[#6d3fea] group-hover:bg-[#6d3fea] group-hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80 dark:group-hover:bg-[#6d3fea]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0f0b24] transition-colors duration-200 group-hover:text-[#5b2ee0] dark:text-white dark:group-hover:text-[#a78bfa] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-sm leading-relaxed text-[#474269] dark:text-white/70">
                    {service.description}
                  </p>

                  {/* Tech Tags Row */}
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0f0b24]/[0.08] bg-[#faf9fe] px-3 py-1 text-xs font-medium text-[#474269] transition-colors duration-200 group-hover:border-[#6d3fea]/20 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom 3D Graphic Area */}
                <div className="relative mt-4 flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-40">
                  <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                    <CardGraphicIllustration type={service.graphicType} />
                  </div>
                </div>

                {/* Bottom Navigate Action Link */}
                <div className="relative z-10 mt-3.5 flex items-center justify-between border-t border-[#0f0b24]/[0.08] pt-3 dark:border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5b2ee0] transition-colors group-hover:text-[#0f0b24] dark:text-[#a78bfa] dark:group-hover:text-white">
                    <span>Explore Service Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="font-mono text-[11px] text-[#645e8a] dark:text-white/50">
                    {service.number} / 03
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
