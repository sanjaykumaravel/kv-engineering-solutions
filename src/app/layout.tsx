import "../index.css";
import Providers from "./providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ksvengineering.com'),
  title: {
    default: "KSV Engineering | Detailed Engineering Services for EPC, OEM & PMC Projects",
    template: "%s | KSV Engineering",
  },
  description:
    "KSV Engineering provides detailed engineering services to EPC, OEM, and PMC projects worldwide. Your virtual extended arm for innovative, high-quality engineering solutions adhering to global standards.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ksvengineering.com",
    siteName: "KSV Engineering",
    title: "KSV Engineering | Global Detailed Engineering Services",
    description: "Your trusted global partner for detailed engineering services — from concept to commissioning. Delivering excellence to EPC, OEM, and PMC clients worldwide.",
    images: [
      {
        url: "https://www.ksvengineering.com/images/services-preview.jpg",
        width: 1200,
        height: 630,
        alt: "KSV Engineering — Global Engineering Solutions",
        type: "image/jpeg",
      },
      {
        url: "https://www.ksvengineering.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KSV Engineering - Detailed Engineering Services",
        type: "image/png",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Engineering services company",
    "Global engineering solutions",
    "Industrial engineering services",
    "Engineering consultants",
    "Building Cable Tray Layout",
    "Building Lighting Layout",
    "Paper to CAD Conversion",
    "Building Lighting Protection",
    "Architecture Drawing Building",
    "Plan and Section",
    "Building Solar Drawing",
    "3D Visualization",
    "As-Built Drawing",
    "Estimation and Costing",
    "Ammonia Blueprint",
    "Layout, FMB Sketch",
    "EPC engineering services",
    "OEM engineering solutions",
    "PMC project management consultancy",
    "Engineering support for EPC projects",
    "AutoCAD LISP programming",
    "CAD automation services",
    "LISP customization for AutoCAD",
    "Engineering technology solutions",
    "Detailed engineering services",
    "Mechanical and electrical engineering services",
    "Industrial plant engineering solutions",
    "Long-term engineering partner",
    "KSV Engineering services",
    "Best engineering consultancy",
    "Project management consultancy (PMC)",
    "AutoCAD LISP development",
    "Industrial engineering solutions",
    "Mechanical engineering services",
    "Electrical engineering services",
    "Plant design engineering",
    "CAD customization services",
    "Engineering consultancy",
    "Best engineering services for EPC projects",
    "AutoCAD LISP programming services in India",
    "CAD automation and customization company",
    "Detailed design engineering for OEM projects",
    "PMC engineering support for long-term projects",
    "Outsourced engineering services provider",
    "Experienced engineering company with 20+ years",
  ],
  authors: [{ name: "KSV Engineering", url: "https://www.ksvengineering.com" }],
  creator: "KSV Engineering",
  publisher: "KSV Engineering",
  alternates: { canonical: "https://www.ksvengineering.com" },
  twitter: {
    card: "summary_large_image",
    title: "KSV Engineering | Global Detailed Engineering Services",
    description:
      "Innovative and reliable engineering solutions for EPC, OEM, and PMC clients. Global expertise with local precision.",
    images: ["https://www.ksvengineering.com/images/services-preview.jpg"],
    creator: "@ksvengineering",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KSV Engineering",
              url: "https://www.ksvengineering.com",
              logo: "https://www.ksvengineering.com/images/logo.png",
              description:
                "KSV Engineering provides detailed engineering services to EPC, OEM, and PMC clients — your virtual extended arm for innovative engineering solutions.",
              sameAs: [
                "https://www.linkedin.com/company/ksvengineering",
                "https://www.youtube.com/@ksvengineering",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@ksvengineering.com",
                contactType: "Customer Support",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
        {/* Explicit favicon and manifest links to ensure crawlers pick them up */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Providers>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
