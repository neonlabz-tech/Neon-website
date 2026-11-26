import type { ServiceCategory, ServiceItem } from "@/types";

export interface ServiceCategoryMeta {
  id: ServiceCategory;
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryMeta[] = [
  {
    id: "it-solutions",
    label: "IT Solutions",
    eyebrow: "ENGINEERING & SYSTEMS",
    heading: "Scalable Software, Cloud & Business Systems",
    description:
      "End-to-end engineering spanning responsive web applications, native and cross-platform mobile builds, multi-tenant SaaS, custom ERP/CRM automation, resilient cloud hosting, e-commerce, and quality assurance.",
  },
  {
    id: "creative",
    label: "Creative",
    eyebrow: "BRAND, DESIGN & DIGITAL GROWTH",
    heading: "Distinct Brand Systems & Growth-Focused Experiences",
    description:
      "Strategic brand identity, intuitive UI/UX product design, graphic systems, technical SEO, and data-backed digital campaigns crafted to make your product unmistakable and drive measurable conversions.",
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "website-dev",
    slug: "website-development",
    category: "it-solutions",
    title: "Website Development",
    shortTitle: "Web Dev",
    eyebrow: "CUSTOM WEB PLATFORMS",
    headline: "Fast, Responsive Websites Built for Growth",
    heroSubheadline:
      "From conversion-focused corporate websites and WordPress solutions to high-performance custom React & Next.js platforms, we build fast, accessible web experiences that engage visitors and convert.",
    description:
      "Fast, responsive websites that build trust, engage visitors and drive real business growth with modern design and speed.",
    image: "/images/services/mobile-web.jpg",
    highlights: [
      "High-performance responsive websites tailored for business growth",
      "WordPress, Elementor, and custom Next.js architectures",
      "Conversion-optimized landing pages and fast load speeds",
    ],
    deliverables: [
      "Custom responsive website architecture & development",
      "WordPress / Headless CMS content management integration",
      "Core Web Vitals & technical SEO optimization",
      "Contact forms, WhatsApp integrations & analytics setup",
    ],
    techTags: ["WordPress", "Elementor", "React", "Next.js", "Tailwind CSS", "TypeScript"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Websites Engineered to Convert Visitors Into Customers",
    biggerPictureBody:
      "A great website is your company's strongest digital ambassador. We blend clean layout hierarchy, lightning-fast performance, and accessible responsive design to ensure your audience finds information effortlessly and takes action with complete confidence.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Front-End & Corporate Websites",
        summary:
          "Clean, accessible interfaces built for instant responsiveness, search discoverability, and clear user journeys across every screen.",
        points: [
          "Next.js & React web platforms with server-side rendering",
          "Mobile-first layouts with accessible typography",
          "Fast page transitions and smooth micro-interactions",
        ],
      },
      {
        title: "WordPress & CMS Handover",
        summary:
          "Manageable publishing workflows and clean technical documentation so internal teams can update key pages effortlessly.",
        points: [
          "Custom WordPress and Elementor workflows for easy in-house editing",
          "Structured content models tailored for marketing teams",
          "Secure plugin ecosystems and automated backups",
        ],
      },
      {
        title: "High-Converting Landing Pages",
        summary:
          "Targeted promotional and campaign landing pages designed to drive inquiries, demo bookings, and sales conversions.",
        points: [
          "Lead capture forms and 1-click WhatsApp deep links",
          "Clear call-to-action hierarchies and social proof blocks",
          "A/B test ready structure for campaign traffic",
        ],
      },
      {
        title: "Speed & Technical SEO",
        summary:
          "Fine-tuned Core Web Vitals, semantic markup, and metadata architecture to rank higher on search engines.",
        points: [
          "Sub-second page loads tuned for Google Core Web Vitals",
          "Semantic HTML5 and structured JSON-LD schema",
          "Compressed image pipelines and clean bundle sizing",
        ],
      },
    ],
    advantages: [
      {
        title: "Performance-First Speed",
        description:
          "Optimized bundles and edge caching keep your site responsive on every mobile and desktop connection.",
      },
      {
        title: "Effortless Content Handover",
        description:
          "We provide straightforward CMS controls and walkthrough documentation so your team can publish updates smoothly.",
      },
      {
        title: "Built for Conversion",
        description:
          "Strategic layout choices and prominent touchpoints guide visitors directly toward inquiries and sales.",
      },
      {
        title: "Dedicated SLA Support",
        description:
          "Ongoing maintenance, dependency updates, and security monitoring keep your website dependable.",
      },
    ],
    relatedPortfolioSlugs: [
      "magnify-creations",
      "templateza",
      "ceylon-thamizhachi",
    ],
    diagramType: "apps",
  },
  {
    id: "fullstack-dev",
    slug: "full-stack-development",
    category: "it-solutions",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    eyebrow: "SYSTEMS & BACK-END",
    headline: "Scalable Applications & Digital Systems",
    heroSubheadline:
      "Engineered back-end architectures, secure relational databases, and interactive web portals built for business reliability, security, and long-term scalability.",
    description:
      "Scalable applications and digital systems engineered for performance, security, and seamless day-to-day business operations.",
    image: "/images/services/saas.jpg",
    highlights: [
      "Scalable full-stack application architecture",
      "Role-based authentication & data security",
      "Custom client portals, dashboards & API webhooks",
    ],
    deliverables: [
      "Full-stack web application & portal development",
      "Relational database modeling with PostgreSQL & Supabase",
      "REST & GraphQL API design with third-party webhooks",
      "Role-based access control (RBAC) & user account portals",
    ],
    techTags: ["Next.js", "Node.js", "Supabase", "PostgreSQL", "Prisma", "TypeScript"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Unifying Data, Logic & Business Workflows",
    biggerPictureBody:
      "Modern businesses require software that connects user interfaces with resilient back-end foundations. We architect full-stack platforms where data integrity, user permissions, and background automation work together flawlessly so your operations run without bottlenecks.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Back-End & Database Architecture",
        summary:
          "Secure server-side logic, relational database modeling, and modular APIs powering portals, bookings, and customer dashboards.",
        points: [
          "PostgreSQL & Supabase data modeling with strict validation",
          "High-performance Node.js & Next.js server actions",
          "Automated database migrations and secure backups",
        ],
      },
      {
        title: "Client Portals & Admin Dashboards",
        summary:
          "High-clarity product interfaces that transform complex datasets into actionable insights and effortless daily tasks.",
        points: [
          "Role-based permissions for staff, clients, and admins",
          "Interactive data tables with search, filtering, and exports",
          "Clean user onboarding and activity audit logs",
        ],
      },
      {
        title: "API Integration & Webhooks",
        summary:
          "Asynchronous workers and partner-facing webhooks that handle heavy automation cleanly without blocking users.",
        points: [
          "Secure REST API endpoints with rate limiting",
          "Payment gateway integration (Stripe, local payment processors)",
          "Third-party service bridges and automated notifications",
        ],
      },
      {
        title: "Automated Workflows & Jobs",
        summary:
          "Reliable background processing, queued tasks, and event pipelines ensuring sub-second response times.",
        points: [
          "Scheduled background tasks and batch email queues",
          "File upload pipelines and cloud asset optimization",
          "Real-time updates via WebSockets and event triggers",
        ],
      },
    ],
    advantages: [
      {
        title: "Rock-Solid Architecture",
        description:
          "Typed TypeScript across front and back ensures minimal runtime bugs and predictable code maintenance.",
      },
      {
        title: "Strict Data Protection",
        description:
          "Encrypted transport, scoped user roles, and parameterized queries protect company records.",
      },
      {
        title: "Built to Scale",
        description:
          "Clean architectural boundaries let you expand features and handle higher traffic without rewrites.",
      },
      {
        title: "Rapid Development Velocity",
        description:
          "Modern full-stack frameworks deliver working software faster with dependable release cycles.",
      },
    ],
    relatedPortfolioSlugs: [
      "templateza",
      "rkf-distributors",
    ],
    diagramType: "saas",
  },
  {
    id: "mobile-apps",
    slug: "mobile-applications",
    category: "it-solutions",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    eyebrow: "IOS & ANDROID APPS",
    headline: "User-Friendly Mobile Experiences That Scale",
    heroSubheadline:
      "We design and engineer high-performance cross-platform iOS and Android mobile apps from unified codebases—tailored for touch, smooth 60fps animations, and offline reliability.",
    description:
      "User-friendly mobile experiences designed to delight customers and accelerate your product adoption across iOS and Android.",
    image: "/images/services/mobile-web.jpg",
    highlights: [
      "Cross-platform iOS and Android mobile applications",
      "Native-grade 60fps touch gestures & smooth UI",
      "Offline sync, push notifications & hardware integration",
    ],
    deliverables: [
      "Cross-platform mobile app development (Flutter / React Native)",
      "API integration with authentication & local state caching",
      "Push notification workflows & background services",
      "App Store & Google Play deployment readiness",
    ],
    techTags: ["React Native", "Flutter", "iOS", "Android", "API", "Cloud"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Putting Your Business in Every Customer's Pocket",
    biggerPictureBody:
      "Great mobile applications feel instant and intuitive. We create mobile experiences with fluid gestures, offline-ready caching, and dependable cloud syncing so your users stay connected wherever they are.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Cross-Platform Mobile Apps",
        summary:
          "Fluid iOS and Android mobile experiences engineered from unified codebases for faster launches and consistent performance.",
        points: [
          "Unified iOS and Android development from a single codebase",
          "Tailored gesture navigation and fluid screen transitions",
          "Responsive layout scaling across phone and tablet screens",
        ],
      },
      {
        title: "Offline Sync & Local Cache",
        summary:
          "Robust caching patterns allowing users to browse, draft, and queue actions even when offline.",
        points: [
          "Offline-aware data storage and background sync",
          "Instant UI responsiveness even on spotty cellular connections",
          "Optimized battery and memory consumption",
        ],
      },
      {
        title: "Push Notifications & Hardware",
        summary:
          "Engage users with timely alerts and utilize on-device capabilities securely.",
        points: [
          "Targeted push messaging via Firebase Cloud Messaging",
          "Camera, geolocation, and biometric authentication support",
          "Seamless deep linking from web and messaging channels",
        ],
      },
      {
        title: "Store Submission & Launch Support",
        summary:
          "Comprehensive store listing configuration, compliance validation, and ongoing release support.",
        points: [
          "App Store and Google Play guideline compliance review",
          "Asset preparation, metadata optimization, and signing",
          "Post-launch crash monitoring and update cycles",
        ],
      },
    ],
    advantages: [
      {
        title: "Cost-Effective Unified Code",
        description:
          "Launch on both iOS and Android simultaneously without doubling your budget or team overhead.",
      },
      {
        title: "Delightful User Retention",
        description:
          "Fast startup times and intuitive touch ergonomics keep users returning to your app.",
      },
      {
        title: "Secure Device Storage",
        description:
          "Encrypted local key storage and secure token transmission protect customer credentials.",
      },
      {
        title: "Complete Lifecycle Support",
        description:
          "From initial design to App Store approval and version upgrades, we support you all the way.",
      },
    ],
    relatedPortfolioSlugs: [
      "magnify-creations",
      "eva-glowing-skin",
    ],
    diagramType: "apps",
  },
  {
    id: "mobile-web",
    slug: "mobile-web-applications",
    category: "it-solutions",
    title: "Mobile & Web Applications",
    shortTitle: "Web & Mobile",
    eyebrow: "CUSTOM ENGINEERING",
    headline: "Fast, Scalable Web & Mobile Experiences",
    heroSubheadline:
      "From responsive web platforms and full-stack business portals to cross-platform iOS and Android apps, we architect fast, maintainable software built around real user workflows.",
    description:
      "We build fast, scalable websites and mobile apps tailored to your business, ensuring smooth user experience, cross-platform compatibility, and secure performance.",
    image: "/images/services/mobile-web.jpg",
    highlights: [
      "Responsive web platforms engineered for speed",
      "Cross-platform iOS and Android mobile apps",
      "Clean, security-hardened API integrations",
    ],
    deliverables: [
      "Full-stack web application architecture",
      "Cross-platform mobile app builds (iOS & Android)",
      "Secure REST & GraphQL API integration",
      "Core Web Vitals & SEO speed optimization",
    ],
    techTags: ["Next.js", "React", "TypeScript", "Flutter", "Node.js", "PostgreSQL"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Connecting Interface, Logic & Daily Operations",
    biggerPictureBody:
      "Great applications go far beyond surface screens. At Neon Labz, we unite responsive front-end craftsmanship, dependable back-end APIs, and cross-platform mobile reliability into a cohesive system—so your customers get effortless speed while your team gains clean, scalable infrastructure that grows without rewrites.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Front-End & Web Platforms",
        summary:
          "Clean, accessible interfaces built for instant responsiveness, search discoverability, and clear user journeys across every screen.",
        points: [
          "Server-rendered Next.js websites & custom React web apps",
          "Mobile-first responsive layouts with accessibility compliance",
          "Intuitive state management & rapid page transitions",
        ],
      },
      {
        title: "Back-End & Full-Stack Systems",
        summary:
          "Secure server-side logic, relational database modeling, and modular APIs powering portals, bookings, and customer dashboards.",
        points: [
          "Role-based user accounts & authentication security",
          "Structured databases with automated validation & auditing",
          "Custom admin portals & third-party payment/webhook bridges",
        ],
      },
      {
        title: "Cross-Platform Mobile Apps",
        summary:
          "Fluid iOS and Android mobile experiences engineered from unified codebases for faster launches and consistent performance.",
        points: [
          "Offline-aware local sync & push notification workflows",
          "Smooth 60fps gestures tailored for touch navigation",
          "App Store & Google Play deployment readiness",
        ],
      },
      {
        title: "Content & Handover Control",
        summary:
          "Manageable publishing workflows and clean technical documentation so internal teams can update key pages effortlessly.",
        points: [
          "Flexible CMS integrations & structured content models",
          "Clear training, technical handoff, and post-launch support",
          "Continuous uptime and dependency monitoring",
        ],
      },
    ],
    advantages: [
      {
        title: "Performance-First Speed",
        description:
          "Lean bundles, edge caching, and tuned database queries keep interactions crisp even on cellular networks.",
      },
      {
        title: "Security Hardened",
        description:
          "Strict input validation, encrypted transport, and scoped permissions protect sensitive user and company data.",
      },
      {
        title: "Built to Evolve",
        description:
          "Modular TypeScript components and typed API contracts let you add new features smoothly as your roadmap expands.",
      },
      {
        title: "Single-Team Accountability",
        description:
          "Designers, web engineers, mobile builders, and QA specialists collaborate directly without agency silos.",
      },
    ],
    relatedPortfolioSlugs: [
      "magnify-creations",
      "ceylon-thamizhachi",
    ],
    diagramType: "apps",
  },
  {
    id: "saas",
    slug: "saas-solutions",
    category: "it-solutions",
    title: "SaaS Solutions",
    shortTitle: "SaaS Solutions",
    eyebrow: "PRODUCT PLATFORMS",
    headline: "Multi-Tenant SaaS Built to Scale",
    heroSubheadline:
      "We help founders and enterprises turn product concepts into resilient, subscription-ready SaaS platforms with clean tenant isolation, billing automation, and live analytics.",
    description:
      "We develop scalable SaaS applications tailored to your business, ensuring secure architecture, easy access, and efficient performance.",
    image: "/images/services/saas.jpg",
    highlights: [
      "Modular multi-tenant cloud architecture",
      "Role-based access control & subscription workflows",
      "Analytics-ready dashboards built for growth",
    ],
    deliverables: [
      "MVP to enterprise SaaS platform architecture",
      "Auth, subscription billing & tenant isolation layers",
      "Real-time telemetry & workspace admin portals",
      "API documentation & customer onboarding flows",
    ],
    techTags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Docker"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "From Early Validation to Enterprise Multi-Tenancy",
    biggerPictureBody:
      "Sustainable SaaS products balance fast market validation with rock-solid underlying data boundaries. We architect platforms where onboarding a tenth or ten-thousandth customer feels seamless—combining clean subscription billing, granular team roles, and reliable background processing from day one.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Multi-Tenant Core & Auth",
        summary:
          "Isolated organization workspaces with invite flows, granular role permissions, and enterprise-ready session security.",
        points: [
          "Organization scoping & strict tenant data boundaries",
          "Team member invitations, RBAC roles, and activity trails",
          "SSO / OAuth login support & secure API key generation",
        ],
      },
      {
        title: "Subscriptions & Billing Engine",
        summary:
          "Automated plan tiers, usage limits, upgrades, and invoice histories tightly synced with payment providers.",
        points: [
          "Recurring billing, trials, and plan-gated feature flags",
          "Webhook-driven license activation & renewal handling",
          "Self-serve billing portals and downloadable receipts",
        ],
      },
      {
        title: "Customer Workspaces & Dashboards",
        summary:
          "High-clarity product interfaces that transform complex datasets into actionable insights and effortless daily tasks.",
        points: [
          "Real-time operational charts & KPI summary views",
          "Fast filtering, bulk actions, and CSV/PDF reporting",
          "Guided empty states and first-run onboarding flows",
        ],
      },
      {
        title: "Platform APIs & Background Jobs",
        summary:
          "Asynchronous workers and partner-facing webhooks that handle heavy automation cleanly without blocking users.",
        points: [
          "Queued email notifications, exports, and scheduled syncs",
          "Rate-limited REST endpoints for customer integrations",
          "Structured logging & observability dashboards",
        ],
      },
    ],
    advantages: [
      {
        title: "Rapid MVP Execution",
        description:
          "Launch focused core value quickly while retaining clean architecture ready for later enterprise modules.",
      },
      {
        title: "Predictable Scalability",
        description:
          "Indexed relational schemas and caching strategies prevent slowdowns as tenant counts multiply.",
      },
      {
        title: "Zero Billing Drift",
        description:
          "Idempotent payment hooks keep workspace entitlements accurate across upgrades, cancellations, and renewals.",
      },
      {
        title: "Long-Term Product Partner",
        description:
          "We stay alongside your roadmap for iterative sprints, user feedback enhancements, and version releases.",
      },
    ],
    relatedPortfolioSlugs: [
      "rkf-distributors",
      "dr-k-umashankar",
    ],
    diagramType: "saas",
  },
  {
    id: "erp-crm",
    slug: "erp-crm-solutions",
    category: "it-solutions",
    title: "ERP / CRM Solutions",
    shortTitle: "ERP / CRM",
    eyebrow: "OPERATIONS AUTOMATION",
    headline: "Streamlined Internal Operations & Sales Pipelines",
    heroSubheadline:
      "Replace disconnected spreadsheets and manual approvals with custom ERP and CRM platforms tailored around how your sales, inventory, finance, and service teams actually operate.",
    description:
      "We create customized ERP and CRM systems to streamline operations, improve customer management, and enhance business efficiency.",
    image: "/images/services/erp-crm.jpg",
    highlights: [
      "Custom workflows matching your exact operations",
      "Centralized customer pipelines & inventory sync",
      "Automated reporting to cut manual overhead",
    ],
    deliverables: [
      "Tailored ERP & CRM data architecture",
      "Department permission matrices & audit logs",
      "Automated invoicing, dispatch & reporting pipelines",
      "Legacy spreadsheet migration & team training",
    ],
    techTags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Python", "REST APIs"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Unified Data Across Sales, Stock & Leadership",
    biggerPictureBody:
      "Off-the-shelf software often forces growing companies into rigid workarounds or runaway per-seat fees. We design bespoke internal software around your exact approvals, pricing rules, and reporting hierarchies—connecting departments in real time and turning scattered updates into instant operational clarity.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Custom CRM & Lead Pipelines",
        summary:
          "Track every inquiry, follow-up, quotation, and renewal across your sales pipeline without leads slipping through.",
        points: [
          "Visual deal stages, reminders, and interaction timelines",
          "Customer profiles linked directly to quotes and invoices",
          "Performance visibility by representative or region",
        ],
      },
      {
        title: "Inventory, Procurement & Order Control",
        summary:
          "Live visibility into stock levels, supplier orders, branches, and fulfillment milestones with automated threshold alerts.",
        points: [
          "Multi-location stock movement & batch tracking",
          "Purchase requests, supplier approvals & GRN workflows",
          "Barcode-friendly dispatch and return reconciliation",
        ],
      },
      {
        title: "Automated Invoicing & Finance Sync",
        summary:
          "Eliminate double entry with automated quotations, tax calculations, payment status updates, and export-ready ledgers.",
        points: [
          "One-click PDF invoice, quote, and receipt generation",
          "Partial payment, credit note & aging balance tracking",
          "Role-restricted financial summaries for management",
        ],
      },
      {
        title: "Executive Dashboards & Audit Trails",
        summary:
          "Real-time operational health metrics combined with complete change histories for accountability.",
        points: [
          "Daily, weekly, and monthly revenue & throughput views",
          "Granular department access rules and approval logs",
          "One-click Excel/CSV exports and scheduled digests",
        ],
      },
    ],
    advantages: [
      {
        title: "Zero Per-Seat Bloat",
        description:
          "Own software aligned cleanly with your team structure instead of paying escalating licensing fees.",
      },
      {
        title: "Built Around Your Rules",
        description:
          "Custom approval steps, regional tax formats, and domain-specific fields reflect your business accurately.",
      },
      {
        title: "Clean Data Migration",
        description:
          "We sanitize and import historical customer and stock records from Excel or legacy systems with zero downtime.",
      },
      {
        title: "Fast Staff Adoption",
        description:
          "Clear interfaces reduce training overhead so operations teams become productive from week one.",
      },
    ],
    relatedPortfolioSlugs: [
      "rkf-distributors",
      "dr-k-umashankar",
    ],
    diagramType: "erp",
  },
  {
    id: "cloud",
    slug: "cloud-solutions",
    category: "it-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud Solutions",
    eyebrow: "INFRASTRUCTURE & CONTINUITY",
    headline: "Resilient Cloud Infrastructure & Safe Backups",
    heroSubheadline:
      "Deploy, scale, and safeguard critical applications with automated cloud pipelines, encrypted backups, proactive monitoring, and zero-downtime disaster recovery strategies.",
    description:
      "We provide reliable cloud solutions to manage, store, and scale your applications, ensuring security, flexibility, and high performance.",
    image: "/images/services/cloud.jpg",
    highlights: [
      "High-availability deployment & auto-scaling",
      "Automated data backup and disaster recovery",
      "Continuous monitoring & proactive maintenance",
    ],
    deliverables: [
      "Cloud migration & zero-downtime deployment setup",
      "Automated multi-region backup & recovery pipelines",
      "Security hardening, SSL & firewall configuration",
      "Uptime alerting, log aggregation & SLA maintenance",
    ],
    techTags: ["Docker", "AWS", "Linux", "Cloudflare", "PostgreSQL", "GitHub Actions"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Reliability Built Into Every Layer Beneath Your App",
    biggerPictureBody:
      "Software performance means little if outages, lost backups, or insecure server configurations halt business operations. Neon Labz designs repeatable cloud environments where code ships safely via automated checks, databases stay backed up on schedule, and infrastructure adapts automatically to traffic spikes.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Cloud Architecture & Migration",
        summary:
          "Move brittle local or legacy hosting onto streamlined, containerized cloud environments built for predictable growth.",
        points: [
          "Serverless & Dockerized container workloads",
          "Staging and production parity for safer updates",
          "Right-sized cloud spend without over-provisioning",
        ],
      },
      {
        title: "Automated CI/CD Delivery",
        summary:
          "Ship updates smoothly through automated build validation, zero-downtime rollouts, and instant rollback capability.",
        points: [
          "Automated testing & linting gates before release",
          "Managed secrets, environment isolation & TLS automation",
          "Instant preview deployments for team sign-off",
        ],
      },
      {
        title: "Backup & Disaster Recovery",
        summary:
          "Scheduled encrypted snapshots and tested restore procedures protect vital business records from human or hardware failure.",
        points: [
          "Point-in-time database recovery & offsite storage",
          "Automated integrity checks on backup archives",
          "Documented recovery playbooks with fast RTO targets",
        ],
      },
      {
        title: "Security Hardening & Monitoring",
        summary:
          "Continuous visibility into server health, traffic anomalies, and vulnerability patches before issues affect customers.",
        points: [
          "CDN caching, DDoS protection & rate-limiting rules",
          "24/7 uptime health checks & instant incident alerts",
          "Routine OS, dependency & database maintenance",
        ],
      },
    ],
    advantages: [
      {
        title: "High Uptime Confidence",
        description:
          "Redundant routing and health-monitored containers keep essential digital touchpoints consistently online.",
      },
      {
        title: "Verified Backups",
        description:
          "We do not just enable backups—we verify restoration reliability so business continuity stays protected.",
      },
      {
        title: "Cost-Aware Scaling",
        description:
          "Caching and resource tuning maximize throughput while avoiding unexpected monthly cloud bills.",
      },
      {
        title: "Proactive Support",
        description:
          "Real-time engineering assistance handles patches, domain shifts, and traffic surges calmly.",
      },
    ],
    relatedPortfolioSlugs: [
      "rkf-distributors",
      "ceylon-thamizhachi",
    ],
    diagramType: "cloud",
  },
  {
    id: "ecommerce",
    slug: "ecommerce-solutions",
    category: "it-solutions",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    eyebrow: "DIGITAL COMMERCE",
    headline: "High-Converting Online Storefronts",
    heroSubheadline:
      "We craft fast, trustworthy online stores combining intuitive product discovery, local and global payment gateways, real-time stock control, and conversion-tuned checkout flows.",
    description:
      "We build secure and scalable online stores with payment gateway integration, product management, and optimized performance to maximize conversions and sales.",
    image: "/images/services/ecommerce.jpg",
    highlights: [
      "Seamless checkout & payment gateway integration",
      "Real-time inventory, order & catalog management",
      "Mobile-first storefront speed built for conversions",
    ],
    deliverables: [
      "Custom responsive storefront & variant catalog engine",
      "Secure local & international payment gateway integration",
      "Order tracking, courier & inventory admin console",
      "Structured product SEO & conversion event tracking",
    ],
    techTags: ["Next.js", "React", "Stripe / PayHere", "PostgreSQL", "Tailwind CSS"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Turning First-Time Browsers Into Repeat Buyers",
    biggerPictureBody:
      "Slow pages and confusing checkouts quietly drain revenue. We pair high-speed storefront architecture with frictionless mobile product discovery and streamlined back-office fulfillment—so shoppers buy with confidence in seconds while your staff manages orders, promotions, and stock effortlessly.",
    offeringsTitle: "What We Build",
    offerings: [
      {
        title: "Conversion-Focused Storefronts",
        summary:
          "Crisp product showcases with smart search, attribute filters, quick-view drawers, and sub-second page navigation.",
        points: [
          "Mobile-thumb-friendly cart drawers and sticky CTAs",
          "Size/color variants, bundles, promo codes & flash deals",
          "Rich product media galleries engineered for fast loading",
        ],
      },
      {
        title: "Payments & Checkout Reliability",
        summary:
          "Trusted multi-currency and local payment integrations designed to minimize cart abandonment at the final step.",
        points: [
          "Guest checkout plus returning customer address books",
          "Card, bank transfer & regional wallet gateway integrations",
          "Automated order confirmations via email & WhatsApp/SMS",
        ],
      },
      {
        title: "Inventory & Fulfillment Portal",
        summary:
          "A unified merchant dashboard to update SKUs, adjust stock counts, print packing slips, and track delivery status.",
        points: [
          "Live inventory locking to prevent overselling drops",
          "Tiered shipping rules by region, weight, or cart value",
          "Bulk catalog updates & low-stock alerts",
        ],
      },
      {
        title: "Organic Discovery & Analytics",
        summary:
          "Clean technical SEO and pixel/funnel tracking built right into every product and category page.",
        points: [
          "Structured product schema markup & canonical URLs",
          "Add-to-cart and checkout drop-off analytics events",
          "Landing page templates tailored for seasonal campaigns",
        ],
      },
    ],
    advantages: [
      {
        title: "Sub-Second Speed",
        description:
          "Optimized storefront rendering boosts both Google search rankings and mobile shopper conversion rates.",
      },
      {
        title: "Secure Transactions",
        description:
          "PCI-compliant payment handoffs and server-side order verification protect both customers and revenue.",
      },
      {
        title: "Easy Merchant Control",
        description:
          "Non-technical team members can launch products, banners, and discount codes without developer help.",
      },
      {
        title: "Omnichannel Ready",
        description:
          "Ready to connect directly with ERP stock ledgers, CRM lists, and social ad product feeds.",
        },
    ],
    relatedPortfolioSlugs: [
      "magnify-creations",
      "eva-glowing-skin",
    ],
    diagramType: "ecommerce",
  },
  {
    id: "qa-testing",
    slug: "qa-testing-services",
    category: "it-solutions",
    title: "Quality Assurance & Testing",
    shortTitle: "QA & Testing",
    eyebrow: "RELIABILITY ENGINEERING",
    headline: "Bug-Free Performance Across Every Platform",
    heroSubheadline:
      "Protect user trust and accelerate confident releases with structured functional testing, cross-device compatibility checks, security reviews, and repeatable QA automation.",
    description:
      "Our quality assurance team ensures your applications and systems are reliable, bug-free, and perform optimally across all platforms.",
    image: "/images/services/qa-testing.jpg",
    highlights: [
      "End-to-end functional & cross-device testing",
      "Performance, load & security vulnerability checks",
      "Structured bug verification before every release",
    ],
    deliverables: [
      "Comprehensive test plans & regression test suites",
      "Cross-browser & real-device stability audits",
      "API contract, load & security check reports",
      "Actionable defect reproduction & release sign-off",
    ],
    techTags: ["Playwright", "Vitest", "Postman", "Lighthouse", "OWASP Checks"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Confidence Before Every Deployment Hits Production",
    biggerPictureBody:
      "Unchecked regressions cost far more after launch than during development. Our QA specialists embed right alongside product cycles—uncovering edge-case state failures, layout breaks on smaller viewports, and slow API endpoints early so every update goes live calmly.",
    offeringsTitle: "What We Verify",
    offerings: [
      {
        title: "End-to-End Functional & UI QA",
        summary:
          "Rigorous verification of user sign-ups, checkouts, role permissions, form edge cases, and visual responsiveness.",
        points: [
          "Critical user journey test cases across desktop & mobile",
          "Boundary-value, empty-state, and error-recovery validation",
          "Pixel and interaction checks across iOS, Android, Chrome, Safari",
        ],
      },
      {
        title: "Regression & Test Automation",
        summary:
          "Automated browser and API suites that verify core workflows stay unbroken whenever new code is merged.",
        points: [
          "Repeatable Playwright end-to-end smoke suites",
          "Automated API payload, status & schema assertions",
          "CI-integrated checks catching regressions pre-deploy",
        ],
      },
      {
        title: "Performance & Load Profiling",
        summary:
          "Identify rendering bottlenecks, memory leaks, and slow endpoints before traffic peaks slow users down.",
        points: [
          "Core Web Vitals (LCP, CLS, INP) & bundle audits",
          "Stress simulation across high-concurrency routes",
          "Prioritized speed remediation checklists",
        ],
      },
      {
        title: "Security & Release Readiness",
        summary:
          "Practical validation of auth boundaries, access controls, and production hygiene prior to launch sign-off.",
        points: [
          "Role escalation & unauthorized endpoint access checks",
          "XSS, injection, and sensitive data exposure reviews",
          "Structured bug triage logs with clear reproduction steps",
        ],
      },
    ],
    advantages: [
      {
        title: "Reduced Production Risk",
        description:
          "Catch broken checkouts, auth leaks, and layout defects in staging long before real customers encounter them.",
      },
      {
        title: "Clear Bug Reporting",
        description:
          "Developers receive concise reproduction steps, environment specs, screenshots, and severity ratings.",
      },
      {
        title: "Faster Engineering Velocity",
        description:
          "Automated sanity suites free product teams to ship frequently without fear of breaking working code.",
      },
      {
        title: "Independent Quality Lens",
        description:
          "Dedicated QA engineers evaluate real-world usability without developer blind spots.",
      },
    ],
    relatedPortfolioSlugs: [
      "rkf-distributors",
      "eva-glowing-skin",
    ],
    diagramType: "qa",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    category: "creative",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    eyebrow: "PRODUCT & INTERFACE DESIGN",
    headline: "Intuitive Interfaces & Scalable Design Systems",
    heroSubheadline:
      "We design accessible, human-centered UI/UX interfaces and tokenized Figma design systems that turn complex digital products into effortless, high-converting customer experiences.",
    description:
      "User-centric wireframes, prototypes, and high-fidelity design systems built for effortless adoption and intuitive digital experiences.",
    image: "/images/services/ui-ux-design.jpg",
    highlights: [
      "User-first wireframes, prototypes & design systems",
      "Interactive Figma prototypes for rapid validation",
      "Accessible, responsive tokenized component libraries",
    ],
    deliverables: [
      "User journey mapping & information architecture",
      "Interactive Figma wireframes & high-fidelity prototypes",
      "Tokenized design system with light and dark mode specs",
      "Clean engineering handoff documentation and developer notes",
    ],
    techTags: ["Figma", "Design Systems", "Prototypes", "Wireframing", "User Research"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Designing for Clarity, Conversion & Effortless Usability",
    biggerPictureBody:
      "Great software feels effortless because every interaction has been deliberately considered. We eliminate visual clutter and cognitive friction so your customers accomplish their goals quickly with complete confidence.",
    offeringsTitle: "What We Craft",
    offerings: [
      {
        title: "UX Architecture & Wireframing",
        summary:
          "Simplify complex user flows and dashboard workflows through clear structural hierarchy.",
        points: [
          "User journey mapping & task completion optimization",
          "Low- and mid-fidelity interactive wireframes",
          "Navigation structures tuned for conversion and clarity",
        ],
      },
      {
        title: "High-Fidelity UI & Prototypes",
        summary:
          "Polished visual interfaces with realistic interactions, transitions, and micro-animations.",
        points: [
          "Production-ready Figma screen specs across all breakpoints",
          "Clickable prototypes for client and stakeholder testing",
          "Micro-interaction and motion design guidelines",
        ],
      },
      {
        title: "Scalable Design Systems",
        summary:
          "Modular token libraries that ensure visual consistency and speed up engineering velocity.",
        points: [
          "Reusable button, form, modal, and navigation components",
          "Tokenized color, typography, elevation, and spacing scales",
          "Direct mapping to Tailwind CSS and React component specs",
        ],
      },
      {
        title: "Usability Testing & Design Audits",
        summary:
          "Evaluate real customer interactions to identify friction and increase conversion rates.",
        points: [
          "Heuristic UX audits of existing applications and websites",
          "WCAG accessibility contrast and keyboard navigation checks",
          "Iterative usability feedback synthesis and recommendations",
        ],
      },
    ],
    advantages: [
      {
        title: "Higher Product Adoption",
        description:
          "Intuitive layouts and clear calls to action help new users onboard without confusion.",
      },
      {
        title: "Faster Engineering Velocity",
        description:
          "Pre-built design tokens and specs eliminate developer guesswork during implementation.",
      },
      {
        title: "Consistent Across Devices",
        description:
          "Responsive component rules guarantee a unified look from mobile screens to ultrawide monitors.",
      },
      {
        title: "Built to Evolve",
        description:
          "Modular Figma systems allow your internal team to create new screens seamlessly as features grow.",
      },
    ],
    relatedPortfolioSlugs: [
      "templateza",
      "magnify-creations",
    ],
    diagramType: "design",
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    category: "creative",
    title: "Brand Identity",
    shortTitle: "Brand Identity",
    eyebrow: "VISUAL SYSTEMS & STRATEGY",
    headline: "Distinct Visual Identities & Brand Guidelines",
    heroSubheadline:
      "We shape memorable brand strategies, cohesive logo systems, color palettes, and brand guidelines that make your company unmistakable in competitive markets.",
    description:
      "Distinct logo marks, typography systems, and cohesive brand guidelines that make your company unmistakable in competitive markets.",
    image: "/images/services/ui-ux-design.jpg",
    highlights: [
      "Consistent visual identity & brand guidelines",
      "Custom logo systems, monograms & typography scales",
      "Digital, social, and print marketing collateral kits",
    ],
    deliverables: [
      "Brand positioning & creative direction strategy",
      "Vector logo suite (primary, icon, monochrome lockups)",
      "Curated typography pairings & brand color token palette",
      "Comprehensive brand guidelines book & social media starter pack",
    ],
    techTags: ["Logo Design", "Typography", "Styleguide", "Vector Systems", "Brand Kits"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Building an Unmistakable Presence That Commands Trust",
    biggerPictureBody:
      "Your brand is more than a logo—it is the lasting emotional impression your company leaves across every customer touchpoint. We craft visual identities with timeless distinction so your business stands out effortlessly.",
    offeringsTitle: "What We Craft",
    offerings: [
      {
        title: "Brand Strategy & Positioning",
        summary:
          "Define what makes your company stand apart through clear audience alignment and market positioning.",
        points: [
          "Audience persona mapping & competitor visual landscape audits",
          "Core brand personality, messaging pillars & tone of voice",
          "Clear creative direction guiding all future design assets",
        ],
      },
      {
        title: "Logo Systems & Monograms",
        summary:
          "Versatile, scalable vector logo assets engineered for digital screens, merchandise, and print.",
        points: [
          "Primary horizontal, vertical, and compact icon marks",
          "Light, dark, and monochrome inverted asset suites",
          "Export packages in SVG, PNG, PDF, and EPS formats",
        ],
      },
      {
        title: "Color & Typography Systems",
        summary:
          "Harmonious color palettes and complementary font pairings that create visual resonance.",
        points: [
          "Primary, accent, and neutral palette tokens with contrast validation",
          "Web font hierarchy specs for headings, body, and mono data",
          "Digital accessibility compliance for legibility on all backgrounds",
        ],
      },
      {
        title: "Brand Guidelines & Collateral",
        summary:
          "Actionable rulebooks and versatile templates empowering your marketing team to maintain consistency.",
        points: [
          "Complete brand styleguide documenting logo clear space and misuse rules",
          "Social media post and story templates in Figma",
          "Business stationery, email signatures, and presentation slide decks",
        ],
      },
    ],
    advantages: [
      {
        title: "Instant Market Credibility",
        description:
          "A polished visual presentation signals established authority and quality from the very first impression.",
      },
      {
        title: "Cohesive Across All Channels",
        description:
          "Your website, pitch decks, social presence, and print collateral speak with one unified voice.",
      },
      {
        title: "Clear Rules for Growth",
        description:
          "Straightforward guidelines ensure future team members and external partners stay strictly on-brand.",
      },
      {
        title: "Ready for Production",
        description:
          "Organized vector asset packages ready for immediate use by developers, printers, and marketers.",
      },
    ],
    relatedPortfolioSlugs: [
      "jenthu-nail-and-bridal",
      "ceylon-thamizhachi",
    ],
    diagramType: "design",
  },
  {
    id: "ui-ux",
    slug: "branding-ui-ux-design",
    category: "creative",
    title: "Branding & UI/UX Design",
    shortTitle: "UI/UX & Brand",
    eyebrow: "CREATIVE & DESIGN SYSTEMS",
    headline: "Distinct Brand Identities & Intuitive Interfaces",
    heroSubheadline:
      "We shape memorable brand strategies, cohesive visual and graphic systems, and friction-free digital product UI/UX that earn instant trust across every screen and touchpoint.",
    description:
      "We craft unique brand identities and intuitive UI/UX designs that deliver seamless experiences, strengthen your brand, and engage your audience.",
    image: "/images/services/ui-ux-design.jpg",
    highlights: [
      "Consistent visual identity & brand guidelines",
      "User-first wireframes, prototypes & design systems",
      "Accessible, responsive component libraries",
    ],
    deliverables: [
      "Brand strategy, positioning & visual language",
      "Custom logo systems, typography & graphic collateral",
      "Interactive Figma wireframes & high-fidelity UI",
      "Tokenized component systems ready for development",
    ],
    techTags: ["Figma", "Design Systems", "Brand Guidelines", "Prototyping", "Visual Identity"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Clarity That Differentiates Your Brand & Simplifies Every Click",
    biggerPictureBody:
      "Strong visual identity attracts attention, while thoughtful UX keeps people engaged. We bring brand strategy, graphic craftsmanship, and interface architecture together in one creative process—resulting in products that feel unmistakably yours and effortless for customers to navigate.",
    offeringsTitle: "What We Craft",
    offerings: [
      {
        title: "Brand Strategy & Positioning",
        summary:
          "Define what makes your company stand apart through clear audience alignment, tone of voice, and cohesive market positioning.",
        points: [
          "Audience persona mapping & competitor visual audit",
          "Brand personality, messaging pillars & voice direction",
          "Clear creative direction guiding digital and print assets",
        ],
      },
      {
        title: "Visual Identity & Graphic Systems",
        summary:
          "Memorable logos, balanced color palettes, typography hierarchies, and versatile graphic assets built for digital and print.",
        points: [
          "Primary, icon-mark & monochrome logo lockups",
          "Curated brand color tokens & pairing typography scales",
          "Social templates, pitch decks, packaging & print collateral",
        ],
      },
      {
        title: "UX Architecture & Wireframing",
        summary:
          "Simplify complex customer and dashboard flows before visual polish begins through structured information hierarchy.",
        points: [
          "User journey mapping & task-completion optimization",
          "Low- and mid-fidelity interactive wireframes",
          "Navigation structures tuned for conversion and clarity",
        ],
      },
      {
        title: "High-Fidelity UI & Design Systems",
        summary:
          "Developer-friendly Figma libraries spanning Light and Dark surfaces, interactive states, and accessible spacing rules.",
        points: [
          "Reusable button, form, card & modal component specs",
          "Interactive clickable prototypes for stakeholder testing",
          "Clean engineering handoff notes & responsive breakpoints",
        ],
      },
    ],
    advantages: [
      {
        title: "Cohesive Across Channels",
        description:
          "Your website, web app, mobile app, and social graphics share one unmistakable visual voice.",
      },
      {
        title: "Higher User Conversion",
        description:
          "Removing friction and visual clutter helps visitors act faster with greater confidence.",
      },
      {
        title: "Faster Engineering Handoff",
        description:
          "Structured Figma components and variables align directly with modern Tailwind and React workflows.",
      },
      {
        title: "Built to Scale With You",
        description:
          "Comprehensive brand guidelines empower your internal marketing and tech teams long after launch.",
      },
    ],
    relatedPortfolioSlugs: [
      "jenthu-nail-and-bridal",
      "templateza",
    ],
    diagramType: "design",
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing-solutions",
    category: "creative",
    title: "Digital Marketing Solutions",
    shortTitle: "Digital Growth",
    eyebrow: "CREATIVE GROWTH & VISIBILITY",
    headline: "Data-Backed Campaigns That Generate Leads",
    heroSubheadline:
      "Turn attention into measurable business pipeline through search visibility, engaging creative content, targeted social campaigns, and disciplined conversion optimization.",
    description:
      "We offer full-service digital marketing including SEO, social media campaigns, paid ads, and content strategies to grow your online presence and generate leads.",
    image: "/images/services/digital-marketing.jpg",
    highlights: [
      "Technical & on-page SEO for organic discovery",
      "Targeted social media & paid ad campaigns",
      "Conversion analytics & ongoing optimization",
    ],
    deliverables: [
      "Technical SEO audits & search content roadmap",
      "Creative social media calendars & campaign assets",
      "Meta & Google Ads setup, targeting & A/B testing",
      "Monthly conversion dashboards & lead-funnel tuning",
    ],
    techTags: ["Technical SEO", "Google Ads", "Meta Ads", "GA4", "Content Strategy"],
    biggerPictureEyebrow: "THE BIGGER PICTURE",
    biggerPictureTitle: "Connecting Creative Storytelling With Quantifiable ROI",
    biggerPictureBody:
      "Great technology deserves an audience. We align search engineering, scroll-stopping visual creatives, and conversion-focused landing experiences under clear performance metrics—making sure every click pushes qualified prospects closer to inquiry or checkout.",
    offeringsTitle: "What We Execute",
    offerings: [
      {
        title: "Search Engine Optimization (SEO)",
        summary:
          "Capture high-intent search traffic sustainably with clean technical structure, local visibility, and authoritative content.",
        points: [
          "On-page metadata, schema markup & Core Web Vitals fixes",
          "Commercial keyword research & service-page alignment",
          "Google Business Profile optimization for regional discovery",
        ],
      },
      {
        title: "Social Media & Creative Campaigns",
        summary:
          "Maintain an active, credible digital presence with tailored visual storytelling across LinkedIn, Instagram, Facebook, and TikTok.",
        points: [
          "Consistent branded reels, carousels & campaign graphics",
          "Content calendars synced with launches and seasonal moments",
          "Audience engagement insights & format experimentation",
        ],
      },
      {
        title: "Paid Search & Performance Ads",
        summary:
          "Accelerate qualified lead flow with disciplined audience segmentation, creative split-testing, and budget control.",
        points: [
          "High-intent Google Search & Meta retargeting funnels",
          "Multiple ad copy and visual variants to curb ad fatigue",
          "Cost-per-lead optimization across active ad sets",
        ],
      },
      {
        title: "Analytics & Conversion Tuning",
        summary:
          "Measure what actually converts so ad spend and creative time concentrate on channels driving real sales.",
        points: [
          "GA4 event tracking across forms, calls & WhatsApp clicks",
          "Landing page headline, CTA & form friction improvements",
          "Clear monthly performance reports without vanity metrics",
        ],
      },
    ],
    advantages: [
      {
        title: "Full-Funnel Alignment",
        description:
          "Campaign creatives, ad targeting, and website landing pages are tuned together by one team.",
      },
      {
        title: "Transparent ROI Metrics",
        description:
          "Track cost per lead, organic ranking gains, and actual inquiries rather than empty impressions.",
      },
      {
        title: "Creative + Technical Hybrid",
        description:
          "Our marketers sit directly alongside web developers and UI designers to ship landing tweaks rapidly.",
      },
      {
        title: "Compounding Organic Value",
        description:
          "SEO foundations continue driving free qualified visitors alongside paid campaign bursts.",
      },
    ],
    relatedPortfolioSlugs: [
      "ceylon-thamizhachi",
      "eva-glowing-skin",
    ],
    diagramType: "marketing",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return CORE_SERVICES.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return CORE_SERVICES.filter((service) => service.category === category);
}

export function getServiceCategoryMeta(
  category: ServiceCategory = "it-solutions"
): ServiceCategoryMeta {
  return (
    SERVICE_CATEGORIES.find((item) => item.id === category) ??
    SERVICE_CATEGORIES[0]
  );
}
