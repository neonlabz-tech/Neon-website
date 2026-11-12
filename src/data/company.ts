import type {
  FaqItem,
  PillarItem,
  ProcessStep,
  StatMetricItem,
  TestimonialItem,
} from "@/types";

export const COMPANY_INFO = {
  legalName: "Neon Labz (Pvt) Ltd.",
  wordmark: "NeonLabz.",
  tagline: "Turning Ideas into Digital Reality",
  heroEyebrow: "MODERN IT SOLUTIONS FOR DIGITAL GROWTH",
  heroTitle: "Innovative IT Solutions for Modern Businesses",
  heroDescription:
    "We build scalable systems and deliver reliable solutions that help businesses grow and perform efficiently. Our team ensures fast support and smooth digital operations.",
  footerSummary:
    "We deliver innovative IT solutions, combining software, digital services, and creative strategies to help businesses grow in the digital era.",
  aboutHeadline: "We are a leading IT and digital solutions provider",
  aboutSummary:
    "We deliver innovative software and digital services to businesses worldwide, helping them improve efficiency and achieve sustainable growth.",
  companyIntro:
    "NEON LABZ was established with the vision of helping businesses succeed through innovative software solutions.",
  mission:
    "To build innovative software products and digital solutions that solve real-world problems, empower entrepreneurs and businesses, and create lasting value through technology.",
  vision:
    "To become a globally most trusted product-driven technology company, transforming ideas into impactful innovations that empower businesses, inspire entrepreneurs, and improve lives.",
  innovationCopy:
    "We create modern digital solutions that help businesses improve their online presence, streamline operations, and achieve long-term growth, while our expert team delivers innovative, scalable, and user-focused solutions tailored to meet your unique business needs.",
  trustedPartnerCopy:
    "We provide reliable, innovative, and efficient IT services that meet your business needs with a client-focused approach. Our team leverages the latest technologies to deliver scalable and secure solutions. With a commitment to excellence and continuous improvement, we ensure every project drives measurable results and long-term business growth.",
  email: "info@theneonlabz.com",
  phone: "+94 714312534",
  whatsappUrl: "https://wa.me/94714312534",
  address: "Ramanathan Road, Jaffna, Sri Lanka",
  mapCoordinates: { lat: 9.68307, lng: 80.022737 },
  youtubeEmbedUrl: "https://www.youtube.com/embed/Jzl9SXnO3No",
  copyright: "Copyright © 2026 Neon Labz (Pvt) Ltd. All rights reserved.",
  logoWhiteSrc: "/images/brand/neonlabz-logo-white.png",
  logoDarkSrc: "/images/brand/neonlabz-logo-dark.png",
  logoMarkSrc: "/images/brand/neonlabz-mark.png",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/neonlabz/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/neon_labz/",
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/NeonLab/",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@NeonLabz",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@neon_labz?lang=en",
    },
  ],
};

export const CAPABILITY_MARQUEE: string[] = [
  "Web & Mobile Apps",
  "SaaS Architecture",
  "Custom ERP & CRM",
  "Cloud Engineering",
  "E-Commerce Systems",
  "Branding & UI/UX",
  "QA & Test Automation",
  "Performance Marketing",
];

export { TECH_STACK_MARQUEE } from "@/data/techStack";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "01. Choose a Service",
    description:
      "Select the software, cloud, design, or digital growth solution that best fits your business needs.",
  },
  {
    step: "02",
    title: "02. Request a Meeting",
    description:
      "Discuss your requirements, goals, and timeline with our engineering team at a convenient time.",
  },
  {
    step: "03",
    title: "03. Get Custom Plans",
    description:
      "Receive tailored technical strategies, clear milestones, and project plans designed specifically for you.",
  },
  {
    step: "04",
    title: "04. Project Delivery",
    description:
      "Projects are built, QA-tested, and completed efficiently on time with ongoing support and client satisfaction.",
  },
];

export const STATS_METRICS = {
  yearsExperience: "05+",
  clientRating: "4.9",
  successRate: "98%",
  satisfiedClients: "10+",
  activeCountries: "02",
  capabilityBars: [
    { label: "Client Satisfaction", value: 95 },
    { label: "On-Time Delivery", value: 94 },
    { label: "Technical Expertise", value: 92 },
    { label: "Project Management", value: 90 },
    { label: "Innovation & Creativity", value: 88 },
  ],
};

export const HOME_COMPANY_STATS: StatMetricItem[] = [
  {
    id: "years-experience",
    target: 5,
    padZero: true,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "projects-completed",
    target: 5,
    padZero: true,
    label: "Project has been completed",
  },
  {
    id: "satisfied-clients",
    target: 10,
    padZero: true,
    label: "Satisfied clients worldwide",
  },
  {
    id: "success-rate",
    target: 4.9,
    decimals: 1,
    label: "Companies success rate",
  },
];

export const WHY_CHOOSE_PILLARS: PillarItem[] = [
  {
    title: "Smart and Scalable Solutions",
    description: "Architectures designed to grow smoothly alongside your business.",
  },
  {
    title: "Improved Business Efficiency",
    description: "Streamlined workflows that remove bottlenecks and manual work.",
  },
  {
    title: "Solving Complex Challenges",
    description: "Practical engineering focused on real operational problems.",
  },
  {
    title: "Strong Technical Expertise",
    description: "Modern tools and frameworks applied with production discipline.",
  },
  {
    title: "Client-Focused Approach",
    description: "Fast communication, transparent milestones, and tailored builds.",
  },
  {
    title: "Continuous Innovation",
    description: "Ongoing updates, proactive IT support, and long-term partnership.",
  },
];

export const OUTSTANDING_FEATURES: PillarItem[] = [
  {
    title: "Secure Solutions",
    description: "We deliver secure and reliable IT services for your business.",
  },
  {
    title: "Fast Communication",
    description: "Quick and effective communication to support your needs.",
  },
  {
    title: "Backup Solutions",
    description: "Safe data backup and recovery for business continuity.",
  },
  {
    title: "Modern Technology",
    description: "We use the latest tools and technologies to build advanced solutions.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "client-1",
    quote:
      "Professional and reliable service. The team delivered exactly what we needed and improved our business performance.",
    author: "Verified Business Client",
    role: "Operations & Digital Solutions",
    rating: 5,
  },
  {
    id: "client-2",
    quote:
      "Great experience working with Neon Labz. Fast delivery, good communication, and high-quality work.",
    author: "Verified Business Client",
    role: "Software & Web Delivery",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "How can Neon Labz support your business?",
    answer:
      "We provide complete IT and digital solutions to improve performance, efficiency, and online presence.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we support startups and growing businesses with scalable solutions.",
  },
  {
    question: "Is digital marketing included?",
    answer:
      "Yes, we provide SEO, social media marketing, and paid advertising services.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project requirements, but we ensure timely delivery with quality results.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern technologies and frameworks to build secure and scalable solutions.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer software development, mobile apps, branding, and digital marketing solutions.",
  },
  {
    question: "Can you manage complete digital projects?",
    answer:
      "Yes, we handle projects from planning to deployment and maintenance.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer continuous support, updates, and maintenance services to ensure smooth operations.",
  },
  {
    question: "Can you customize solutions based on our business needs?",
    answer:
      "Yes, we create tailored solutions that match your specific business goals.",
  },
  {
    question: "How can we get started with Neon Labz?",
    answer:
      "You can contact us via our website or email, and our team will guide you through the process.",
  },
];
