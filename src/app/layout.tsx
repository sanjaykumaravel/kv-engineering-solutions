import "../index.css";
import Providers from "./providers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "KSV Engineering | Detailed Engineering Services for EPC, OEM & PMC Projects",
    template: "%s | KSV Engineering",
  },
  description:
    "KSV Engineering provides detailed engineering services to EPC, OEM, and PMC projects worldwide. Your virtual extended arm for innovative, high-quality engineering solutions adhering to global standards.",
  keywords: [
    "Engineering services company",
    "Global engineering solutions",
    "Industrial engineering services",
    "Engineering consultants",
    "Detailed engineering solutions",
    "Project management consultancy (PMC)",
    "CAD automation services",
    "AutoCAD LISP programming",
    "OEM engineering solutions",
    "EPC project support",
    "Mechanical engineering services",
    "Electrical engineering services",
    "Industrial plant design",
    "Long-term engineering partner",
    "KSV Engineering services",
    "Best engineering consultancy",
  ],
  authors: [{ name: "KSV Engineering", url: "https://www.ksvengineering.com" }],
  creator: "KSV Engineering",
  publisher: "KSV Engineering",
  alternates: { canonical: "https://www.ksvengineering.com" },
  openGraph: {
    type: "website",
    url: "https://www.ksvengineering.com",
    title: "KSV Engineering | Detailed Engineering Services for EPC, OEM & PMC",
    description:
      "Your trusted global partner for detailed engineering services — from concept to commissioning. Delivering excellence to EPC, OEM, and PMC clients worldwide.",
    siteName: "KSV Engineering",
    images: [
      {
        url: "https://www.ksvengineering.com/images/services-preview.jpg",
        width: 1200,
        height: 630,
        alt: "KSV Engineering — Global Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSV Engineering | Global Detailed Engineering Services",
    description:
      "Innovative and reliable engineering solutions for EPC, OEM, and PMC clients. Global expertise with local precision.",
    images: ["https://www.ksvengineering.com/images/services-preview.jpg"],
    creator: "@ksvengineering",
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  metadataBase: new URL("https://www.ksvengineering.com"),
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
              logo: "https://www.ksvengineering.com/logo.png",
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
