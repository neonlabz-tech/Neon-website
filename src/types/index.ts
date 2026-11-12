export type ServiceCategory = "it-solutions" | "creative";

export type ServiceDiagramType =
  | "apps"
  | "saas"
  | "erp"
  | "cloud"
  | "ecommerce"
  | "marketing"
  | "design"
  | "qa";

export interface ServiceOffering {
  title: string;
  summary: string;
  points: string[];
}

export interface ServiceAdvantage {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  shortTitle: string;
  eyebrow: string;
  headline: string;
  heroSubheadline: string;
  description: string;
  image: string;
  highlights: string[];
  deliverables: string[];
  techTags: string[];
  biggerPictureEyebrow: string;
  biggerPictureTitle: string;
  biggerPictureBody: string;
  offeringsTitle: string;
  offerings: ServiceOffering[];
  advantages: ServiceAdvantage[];
  relatedPortfolioSlugs: string[];
  diagramType: ServiceDiagramType;
}

export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  projectTitle: string;
  tagline: string;
  overview: string;
  image: string;
  liveUrl?: string;
  whatWeDid: string[];
  results: string[];
  metrics: PortfolioMetric[];
  accent: string;
}

export interface EstimatorTrack {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  baseWeeks: number;
  fillPercent: number;
  highlightLabel: string;
  summary: string;
}

export interface EstimatorScale {
  id: "mvp" | "growth" | "enterprise";
  label: string;
  multiplier: number;
  sprintLabel: string;
}

export interface EstimatorAddon {
  id: string;
  label: string;
  weeks: number;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  sections: BlogSection[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface TechStackPathSegment {
  d: string;
  fill?: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  category: string;
  color: string;
  paths: TechStackPathSegment[];
  rounded?: boolean;
}

export interface StatMetricItem {
  id: string;
  target: number;
  decimals?: number;
  padZero?: boolean;
  suffix?: string;
  label: string;
}

export interface ClientLogoItem {
  id: string;
  name: string;
  logoSrc: string;
  width: number;
  height: number;
}
