import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theneonlabz.com"),
  title: {
    default: `${COMPANY_INFO.wordmark} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.wordmark}`,
  },
  description: COMPANY_INFO.heroDescription,
  keywords: [
    "Neon Labz",
    "NeonLabz",
    "Software Company Jaffna",
    "Web and Mobile Application Development",
    "SaaS Solutions",
    "ERP CRM Solutions",
    "Cloud Solutions",
    "UI UX Design",
    "QA Testing",
    "Digital Marketing Sri Lanka",
  ],
  openGraph: {
    title: `${COMPANY_INFO.wordmark} - ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.heroDescription,
    siteName: COMPANY_INFO.legalName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-[#0f0b24] antialiased">
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
