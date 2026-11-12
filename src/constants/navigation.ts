export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  portfolio: "/portfolio",
  blog: "/blog",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms",
} as const;

export const MAIN_NAV_LINKS = [
  { label: "Home", href: ROUTES.home, iconName: "home" },
  { label: "About", href: ROUTES.about, iconName: "sparkles" },
  { label: "Portfolio", href: ROUTES.portfolio, iconName: "folder" },
  { label: "Insights", href: ROUTES.blog, iconName: "book" },
] as const;

export const FOOTER_NAVIGATE_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Portfolio", href: ROUTES.portfolio },
  { label: "Insights", href: ROUTES.blog },
] as const;

export const FOOTER_SOLUTION_LINKS = [
  { label: "Mobile & Web Apps", href: "/services/mobile-web-applications" },
  { label: "SaaS & Cloud Platforms", href: "/services/saas-solutions" },
  { label: "Custom ERP / CRM", href: "/services/erp-crm-solutions" },
  { label: "E-Commerce Solutions", href: "/services/ecommerce-solutions" },
  { label: "Creative & Digital Growth", href: "/services?category=creative" },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { label: "Let’s Connect", href: ROUTES.contact },
  // { label: "Scope Estimator", href: "/#estimator" },
  { label: "FAQs", href: "/#faq" },
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Terms of Use", href: ROUTES.terms },
] as const;
