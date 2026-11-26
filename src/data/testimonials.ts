export interface TestimonialItem {
  id: string;
  client: string;
  rating: 5;
  quote: string;
  projectType: string;
}

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "magnify",
    client: "Magnify",
    rating: 5,
    projectType: "Website & Management System",
    quote:
      "NeonLabz Digital Solutions developed our Magnify Creation website and management system. Great service, professional team, and excellent support. Highly recommended!",
  },
  {
    id: "eva-glowing-skin-1",
    client: "Eva Glowing Skin",
    rating: 5,
    projectType: "E-Commerce Storefront",
    quote:
      "Excellent service and friendly staff! I had a wonderful experience here. Everything was smooth and welcoming. Highly recommended!",
  },
  {
    id: "rkf-distributors",
    client: "RKF Distributors",
    rating: 5,
    projectType: "Wholesale & Retail Platform",
    quote:
      "Very friendly and supportive team! You patiently listened to all our requests and made every change without hesitation. Really appreciate your dedication, patience and excellent service. Highly Satisfied. Thank you, NeonLabz!",
  },
  {
    id: "eva-glowing-skin-2",
    client: "Eva Glowing Skin",
    rating: 5,
    projectType: "Digital Storefront & Support",
    quote:
      "Very good service and friendly staff. I had a great experience here. Highly recommended!",
  },
];
