import type { EstimatorAddon, EstimatorScale, EstimatorTrack } from "@/types";

export const ESTIMATOR_TRACKS: EstimatorTrack[] = [
  {
    id: "apps",
    title: "Web & Mobile Apps",
    tag: "Fastest Launch",
    subtitle: "Websites, portals & cross-platform mobile apps",
    baseWeeks: 5,
    fillPercent: 78,
    highlightLabel: "Typical 4–8 wks",
    summary: "Ideal for customer-facing web apps, portals, and mobile products.",
  },
  {
    id: "saas-erp",
    title: "SaaS / ERP / CRM",
    tag: "Scalable Core",
    subtitle: "Custom business systems & cloud SaaS platforms",
    baseWeeks: 8,
    fillPercent: 64,
    highlightLabel: "Typical 8–14 wks",
    summary: "Tailored multi-user workflows, dashboards, and automation.",
  },
  {
    id: "ecommerce-growth",
    title: "E-Commerce & Growth",
    tag: "Conversion Ready",
    subtitle: "Online stores, brand UI/UX & digital marketing",
    baseWeeks: 4,
    fillPercent: 86,
    highlightLabel: "Typical 3–6 wks",
    summary: "Storefront engineering paired with branding and lead generation.",
  },
];

export const ESTIMATOR_SCALES: EstimatorScale[] = [
  { id: "mvp", label: "MVP", multiplier: 1, sprintLabel: "Focused Core" },
  {
    id: "growth",
    label: "Growth",
    multiplier: 1.4,
    sprintLabel: "Full Feature Set",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    multiplier: 1.9,
    sprintLabel: "Custom Scale",
  },
];

export const ESTIMATOR_ADDONS: EstimatorAddon[] = [
  { id: "uiux", label: "UI/UX Design", weeks: 1 },
  { id: "cloud", label: "Cloud & Backups", weeks: 1 },
  { id: "qa", label: "QA & Testing", weeks: 1 },
  { id: "marketing", label: "SEO & Growth", weeks: 1 },
];
