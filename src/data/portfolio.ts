import type { PortfolioItem } from "@/types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "rkf-distributors",
    title: "RKF Distributors",
    category: "E-Commerce & Wholesale",
    projectTitle: "RKF Distributors — Wholesale & Retail Importer Storefront",
    tagline:
      "Multi-category direct-importer storefront with wholesale pricing tiers, live search, wishlist, and island-wide delivery.",
    overview:
      "Engineered a high-volume wholesale and retail e-commerce platform for RKF Distributors (Pvt) Ltd in Jaffna, Sri Lanka—serving everyday household shoppers and bulk retail buyers across toys, party supplies, home & kitchen, stationery, and electronics with tiered wholesale savings, deal countdown timers, and island-wide delivery.",
    image: "/images/portfolio/rkf-distributors-hero.png",
    liveUrl: "https://www.rkfdistributors.lk/",
    whatWeDid: [
      "Architected a Next.js storefront featuring a full-width hero slider, All Categories mega menu, category carousels, and live search drawer",
      "Built direct-importer wholesale pricing tiers (up to 40% bulk discounts), wishlist saving, account order updates, and cart drawer workflows",
      "Added weekend deal countdown timers, personalized & recently viewed feeds, Kopay South location map, and floating WhatsApp support",
    ],
    results: [
      "Unified B2C retail convenience and B2B wholesale bulk ordering under a single fast, conversion-focused storefront",
      "Streamlined catalog discovery across hundreds of everyday products with popular search tags and instant category filtering",
      "Trusted nationwide ordering experience backed by quality-checked inventory and fast island-wide delivery",
    ],
    metrics: [
      { label: "Pricing Model", value: "Retail & Wholesale" },
      { label: "Wholesale Tier", value: "Up to 40% Off" },
      { label: "Delivery", value: "Island-Wide" },
    ],
    accent: "#7975FF",
  },
  {
    slug: "magnify-creations",
    title: "Magnify Creations",
    category: "E-Commerce Solutions",
    projectTitle: "Magnify Creations — Custom Photo Magnets Storefront",
    tagline:
      "Personalized fridge magnet e-commerce platform with live framing sets and island-wide Cash on Delivery.",
    overview:
      "Designed and developed the direct-to-consumer e-commerce platform for Magnify Creations in Sri Lanka, allowing customers to turn cherished photographs into vibrant custom fridge magnets and magnetic frame sets through an approachable Shop, Gallery, and streamlined checkout flow.",
    image: "/images/portfolio/magnify-creations-hero.png",
    liveUrl: "https://www.magnifycreation.lk/",
    whatWeDid: [
      "Built a fast, mobile-first Next.js e-commerce storefront with dedicated Shop, Gallery, Cart, Login, and Register flows",
      "Structured transparent LKR product tiers including 6 & 12 photo magnet packs and black/white magnetic frame sets",
      "Integrated a 3-step customization workflow, verified Google Reviews carousel, shipping policies, and embedded location map",
    ],
    results: [
      "Trusted by 1,000+ happy customers across weddings, graduations, birthdays, families, and corporate gifting",
      "Frictionless island-wide Cash on Delivery ordering backed by 7-day customer support availability",
      "Clean, conversion-focused hero storytelling highlighting magnetic hold and vibrant print quality",
    ],
    metrics: [
      { label: "Trusted By", value: "1,000+ Clients" },
      { label: "Checkout", value: "Island-Wide COD" },
      { label: "Platform", value: "D2C E-Commerce" },
    ],
    accent: "#7975FF",
  },
  {
    slug: "eva-glowing-skin",
    title: "Eva Glowing Skin",
    category: "E-Commerce Solutions",
    projectTitle: "Eva Glowing Skin — Skincare & Beauty E-Commerce Store",
    tagline:
      "Curated skincare retail storefront with skin-type discovery, 6 curated combos, and 1-click WhatsApp checkout.",
    overview:
      "Created an inviting digital storefront for Eva Glowing Skin in Jaffna, Sri Lanka—helping beauty shoppers browse by skin type (Dry, Normal, Oily, Combination, Brightening, and Acne) and order curated multi-step skincare bundles effortlessly via pre-filled WhatsApp checkout.",
    image: "/images/portfolio/eva-glowing-skin-hero.png",
    liveUrl: "https://www.evaglowingskin.com/",
    whatWeDid: [
      "Crafted a soft blush-and-terracotta visual identity with full-bleed hero slides and intuitive skin-type category browsing",
      "Engineered six Skin Care Combo cards featuring curated routine essentials and transparent LKR promotional pricing",
      "Integrated 1-click 'Order on WhatsApp' deep links carrying each bundle's title and discounted total directly into chat",
    ],
    results: [
      "Simplified routine discovery by guiding shoppers to complete kits matched to their skin concerns",
      "Higher mobile conversion speed by connecting catalog browsing directly to conversational WhatsApp fulfillment",
      "Strong customer trust anchored by verified reviews and Jaffna retail storefront details",
    ],
    metrics: [
      { label: "Catalog", value: "6 Skin-Type Sets" },
      { label: "Ordering", value: "1-Click WhatsApp" },
      { label: "Experience", value: "Mobile-First" },
    ],
    accent: "#E10AFA",
  },
  {
    slug: "jenthu-nail-and-bridal",
    title: "Jenthu Nail & Bridal",
    category: "Branding & UI/UX Design",
    projectTitle: "Jenthu Nail & Bridal — Luxury Bridal & Beauty Studio Website",
    tagline:
      "Boutique bridal makeup and nail artistry showcase with service-specific WhatsApp appointment booking.",
    overview:
      "Designed an editorial, luxury web presence for Jenthu Nail & Bridal Studio in Kokuvil, Jaffna—presenting signature bridal makeup, graduation styling, guest makeup, hairstyling, and nail artistry alongside instant WhatsApp booking and interactive client enquiry forms.",
    image: "/images/portfolio/jenthu-nail-bridal-hero.png",
    liveUrl: "https://www.jenthunailandbridal.com/",
    whatWeDid: [
      "Established a refined editorial typography system paired with rose-magenta accents and soft ivory surfaces",
      "Built individual service showcases—each wired to pre-filled WhatsApp appointment booking links",
      "Integrated client review highlights, daily studio hours, an interactive MetForm enquiry workflow, and embedded Jaffna map",
    ],
    results: [
      "Elevated online brand positioning tailored to brides-to-be, graduates, and salon clients in Northern Sri Lanka",
      "Shorter path from discovering beauty packages to booking appointments directly on WhatsApp",
      "Consistent luxury presentation across desktop, tablet, and smartphone viewports",
    ],
    metrics: [
      { label: "Booking", value: "WhatsApp + Form" },
      { label: "Services", value: "Bridal & Nails" },
      { label: "Identity", value: "Editorial UI" },
    ],
    accent: "#C312FB",
  },
  {
    slug: "templateza",
    title: "Templateza",
    category: "SaaS Solutions",
    projectTitle: "Templateza — Subscription Design Assets Marketplace",
    tagline:
      "Multi-tier SaaS template library spanning 15+ design categories, licensing workflows, and instant source downloads.",
    overview:
      "Built a modern subscription marketplace and digital asset library for Templateza, uniting a dark navy interactive hero showcase with 15+ creative template categories, tiered monthly membership plans (Starter, Pro, and Unlimited), customer account management, licensing documentation, and a design blog.",
    image: "/images/portfolio/templateza-hero.png",
    liveUrl: "https://www.templateza.com/",
    whatWeDid: [
      "Architected a structured multi-category catalog covering 15+ design niches from Branding Kits to App UI and Print",
      "Implemented 3-tier SaaS pricing (Starter, Pro, and Unlimited) with download quotas, re-download access, and account portals",
      "Designed a crisp 4-step workflow (Browse -> Choose -> Download -> Customize), licensing FAQ hub, and blog engine",
    ],
    results: [
      "Delivered a polished SaaS marketplace experience bridging dark-mode hero depth with clean white catalog readability",
      "Streamlined self-serve subscription upgrades and instant editable file downloads for designers and founders",
      "Scalable category taxonomy built to support ongoing template expansions across formats",
    ],
    metrics: [
      { label: "Categories", value: "15+ Niches" },
      { label: "Billing", value: "3-Tier SaaS" },
      { label: "Access", value: "Instant Source" },
    ],
    accent: "#8C2BFF",
  },
  {
    slug: "ceylon-thamizhachi",
    title: "Ceylon Thamizhachi",
    category: "Web & Creative Platform",
    projectTitle: "Ceylon Thamizhachi — Women's Masterclasses & Events Platform",
    tagline:
      "Community masterclasses, upcoming event registration, and 7-district impact showcase empowering women across Sri Lanka.",
    overview:
      "Crafted a warm, dignified digital platform for Ceylon Thamizhachi (Pvt) Ltd to showcase one-day vocational masterclasses across Sri Lanka—highlighting 750+ seminar participants across 7 districts alongside arched event galleries, upcoming workshop sliders, and district-based WhatsApp & form registrations.",
    image: "/images/portfolio/ceylon-thamizhachi-hero.png",
    liveUrl: "https://www.ceylonthamizhachi.com/",
    whatWeDid: [
      "Designed an emerald, crimson, and warm ivory visual language featuring custom arched photography frames",
      "Built dedicated showcases for 6 vocational skill tracks (Malai Kaduthal, Nail Art, Jewellery, Mehendi, Saree Pleating) and Upcoming Events",
      "Created a multi-field workshop enquiry form with district selection, floating WhatsApp quick chat, and outreach counters",
    ],
    results: [
      "Clear storytelling of real-world impact across 750+ participants and 7 Northern & Eastern Sri Lankan districts",
      "Faster workshop and competition registrations via dual form-submission and instant WhatsApp channels",
      "Credible digital foundation supporting nationwide expansion toward Colombo and Kandy",
    ],
    metrics: [
      { label: "Participants", value: "750+ Trained" },
      { label: "Outreach", value: "7 Districts" },
      { label: "Skills", value: "6 Masterclasses" },
    ],
    accent: "#6d3fea",
  },
  {
    slug: "smart-business-software-solutions",
    title: "Smart Business Software Solutions",
    category: "Custom Software Development",
    projectTitle: "Advanced Business Software System",
    tagline:
      "Custom workflow automation and unified business operations platform.",
    overview:
      "Engineered a tailored business operations platform uniting internal workflows, reporting, and team permissions so growing teams can replace fragmented spreadsheets with a single reliable system.",
    image: "/images/portfolio/smart-business-software.svg",
    whatWeDid: [
      "Mapped operational workflows and designed custom ERP/CRM modules",
      "Built role-based dashboards with automated task & status tracking",
      "Implemented secure cloud hosting and automated data backups",
    ],
    results: [
      "Reduced manual administrative workload across daily operations",
      "Improved cross-team visibility with real-time operational reporting",
      "Delivered a scalable codebase ready for multi-department expansion",
    ],
    metrics: [
      { label: "Delivery Focus", value: "Automation" },
      { label: "Architecture", value: "Modular ERP" },
      { label: "Reliability", value: "98% Success" },
    ],
    accent: "#7975FF",
  },
  {
    slug: "powerful-ecommerce-platforms",
    title: "Powerful E-Commerce Platforms",
    category: "E-Commerce Solutions",
    projectTitle: "Modern E-Commerce Platform",
    tagline:
      "Responsive online storefront with payment integration and inventory control.",
    overview:
      "Created a conversion-focused e-commerce platform combining fast product discovery, seamless payment gateway integration, and streamlined order & catalog management.",
    image: "/images/portfolio/ecommerce-platforms.svg",
    whatWeDid: [
      "Designed a mobile-first shopping and checkout flow",
      "Integrated secure payment gateways and order status notifications",
      "Built inventory, pricing, and product catalog management tools",
    ],
    results: [
      "Faster mobile browsing and smoother checkout completion",
      "Centralized inventory tracking reducing fulfillment errors",
      "SEO-ready storefront structure built for organic growth",
    ],
    metrics: [
      { label: "Checkout Flow", value: "Frictionless" },
      { label: "Payments", value: "Verified" },
      { label: "Experience", value: "Mobile-First" },
    ],
    accent: "#8C2BFF",
  },
  {
    slug: "scalable-mobile-app-solutions",
    title: "Scalable Mobile App Solutions",
    category: "Mobile App Development",
    projectTitle: "Smart Mobile Application Solution",
    tagline:
      "Cross-platform mobile application built for speed and intuitive daily use.",
    overview:
      "Developed a responsive cross-platform mobile experience engineered for smooth navigation, real-time API synchronization, and reliable performance across devices.",
    image: "/images/portfolio/scalable-mobile-apps.svg",
    whatWeDid: [
      "Designed intuitive mobile user journeys and clean dark/light interfaces",
      "Built cross-platform mobile modules connected to scalable cloud APIs",
      "Optimized startup speed, responsiveness, and offline resilience",
    ],
    results: [
      "Consistent user experience across modern iOS and Android devices",
      "Streamlined user onboarding and faster in-app task completion",
      "Foundation ready for rapid feature iteration",
    ],
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Sync", value: "Real-Time API" },
      { label: "Quality", value: "QA Verified" },
    ],
    accent: "#9b76ff",
  },
  {
    slug: "creative-branding-ui-ux-design",
    title: "Creative Branding & UI/UX Design",
    category: "Branding & UI/UX Design",
    projectTitle: "Creative Brand Identity Design",
    tagline:
      "Cohesive visual identity, brand guidelines, and digital product UI/UX.",
    overview:
      "Crafted a complete brand identity and UI/UX design system designed to establish instant credibility, visual clarity, and memorable digital touchpoints.",
    image: "/images/portfolio/branding-ui-ux.svg",
    whatWeDid: [
      "Developed logo systems, typography hierarchies, and color tokens",
      "Created interactive wireframes and high-fidelity UI prototypes",
      "Delivered reusable component guidelines for engineering handoff",
    ],
    results: [
      "Unified brand presence across web, mobile, and marketing channels",
      "Faster development handoff through structured design systems",
      "Stronger user engagement and visual differentiation",
    ],
    metrics: [
      { label: "Deliverable", value: "Design System" },
      { label: "Brand Clarity", value: "Unified" },
      { label: "Usability", value: "User-Tested" },
    ],
    accent: "#C312FB",
  },
  {
    slug: "reliable-software-testing-services",
    title: "Reliable Software Testing Services",
    category: "QA & Testing",
    projectTitle: "Software Quality Assurance Testing",
    tagline:
      "Comprehensive QA testing covering stability, security, and performance.",
    overview:
      "Executed structured manual and cross-platform quality assurance testing to catch edge-case defects, validate security posture, and verify production performance before launch.",
    image: "/images/portfolio/software-qa-testing.svg",
    whatWeDid: [
      "Authored end-to-end test plans covering core user flows and edge cases",
      "Conducted cross-browser, responsive, and performance bottleneck checks",
      "Verified bug fixes and release stability across staging builds",
    ],
    results: [
      "Higher release confidence with critical defects resolved pre-launch",
      "Consistent UI and functional stability across desktop and mobile",
      "Reduced post-release support interruptions",
    ],
    metrics: [
      { label: "Coverage", value: "End-to-End" },
      { label: "Stability", value: "98% Target" },
      { label: "Checks", value: "Cross-Device" },
    ],
    accent: "#6d3fea",
  },
  {
    slug: "result-driven-digital-marketing",
    title: "Result-Driven Digital Marketing Solutions",
    category: "Digital Marketing Solutions",
    projectTitle: "Performance Marketing Campaign",
    tagline:
      "SEO, social campaigns, paid ads, and analytics built to drive leads.",
    overview:
      "Planned and executed a multi-channel digital marketing strategy combining search optimization, targeted social media campaigns, and paid acquisition to grow qualified business leads.",
    image: "/images/portfolio/digital-marketing.svg",
    whatWeDid: [
      "Implemented technical SEO improvements and keyword-aligned landing pages",
      "Launched targeted social media content and paid advertising funnels",
      "Tracked conversion performance and refined campaign targeting",
    ],
    results: [
      "Stronger organic search visibility and consistent lead generation",
      "Improved campaign ROI through data-backed audience refinement",
      "Cohesive digital presence supporting sales conversations",
    ],
    metrics: [
      { label: "Channels", value: "SEO & Paid" },
      { label: "Focus", value: "Lead Growth" },
      { label: "Tracking", value: "Data-Driven" },
    ],
    accent: "#E10AFA",
  },
];
