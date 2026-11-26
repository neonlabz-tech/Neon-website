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
  { label: "Services", href: ROUTES.services, iconName: "services" },
  { label: "Portfolio", href: ROUTES.portfolio, iconName: "folder" },
  { label: "Insights", href: ROUTES.blog, iconName: "book" },
] as const;

export const NAV_FEATURED_SERVICES = [
  {
    title: "Website Development",
    description: "Fast, responsive corporate & CMS websites",
    href: "/services/website-development",
    iconName: "globe",
  },
  {
    title: "Full-Stack Development",
    description: "Scalable custom software, portals & APIs",
    href: "/services/full-stack-development",
    iconName: "layers",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform iOS & Android experiences",
    href: "/services/mobile-applications",
    iconName: "smartphone",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces & scalable design systems",
    href: "/services/ui-ux-design",
    iconName: "palette",
  },
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
