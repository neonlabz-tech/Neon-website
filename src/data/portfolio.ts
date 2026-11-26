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
    slug: "techna-technical-institute",
    title: "Techna Technical Institute",
    category: "Education & Web Platform",
    projectTitle: "Techna Technical Institute — A/L Technology Stream Platform",
    tagline:
      "Modern academic portal for Sri Lanka's A/L Technology stream featuring 7 core subjects, top achievers, and student registration.",
    overview:
      "Designed and engineered the digital platform for Techna Technical Institute in Jaffna, Sri Lanka—presenting G.C.E. Advanced Level Technology stream programs across 7 core subjects alongside top achiever showcases, student testimonials, and streamlined online registration & WhatsApp support.",
    image: "/images/portfolio/techna-hero.png",
    liveUrl: "https://www.techna.lk/",
    whatWeDid: [
      "Built a dynamic academic web platform with dedicated Home, Subjects, Contact, Login, and Student Registration flows",
      "Highlighted key institute milestones (6+ years, 7 core subjects, 700+ students, 98% pass rate) and interactive program cards",
      "Integrated Top Achievers result showcases, a student testimonial carousel, and instant WhatsApp enquiry support",
    ],
    results: [
      "Positioned Techna as a leading digital-first A/L Technology education hub in Northern Sri Lanka",
      "Simplified subject discovery across Engineering Technology, Bio Systems Technology, SFT, ICT, and more",
      "Faster prospective student enquiries and online registrations via integrated Apply Now and WhatsApp channels",
    ],
    metrics: [
      { label: "Students", value: "700+ Enrolled" },
      { label: "Curriculum", value: "7 Core Subjects" },
      { label: "Pass Rate", value: "98% Achieved" },
    ],
    accent: "#6d3fea",
  },
];
