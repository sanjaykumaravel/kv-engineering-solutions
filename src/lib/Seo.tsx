"use client";

import React from "react";
import { NextSeo } from "next-seo";
import seoConfig, { SITE_META } from "../../next-seo.config";

const { SITE_URL, COMPANY_NAME, TAGLINE } = SITE_META;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  legalName: COMPANY_NAME,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@ksvengineering.com",
      contactType: "customer support",
      areaServed: "GLOBAL",
      availableLanguage: ["en"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/ksv-engineering",
    "https://www.youtube.com/@ksvengineering",
  ],
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven designs, CAD automation, and AutoCAD LISP customization.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
  description:
    "Detailed engineering services for EPC, OEM, and PMC clients — mechanical, electrical, and industrial plant engineering with CAD automation and LISP customization.",
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
  },
};

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  additionalMetaTags?: Array<{ name: string; content: string }>;
};

export default function Seo({ title, description, canonical, additionalMetaTags }: SeoProps) {
  const finalTitle = title || (seoConfig.defaultTitle as string);
  const finalDescription = description || (seoConfig.description as string);

  // Merge global additional meta tags with any page-level ones (page-level overrides duplicates)
  const globalMeta = Array.isArray(seoConfig.additionalMetaTags) ? seoConfig.additionalMetaTags : [];
  const pageMeta = Array.isArray(additionalMetaTags) ? additionalMetaTags : [];

  // simple merge; pages can override by using same name (last wins)
  const mergedMeta: Array<{ name: string; content: string }> = [];
  const map = new Map<string, string>();
  globalMeta.forEach((m: any) => map.set(m.name, m.content));
  pageMeta.forEach((m: any) => map.set(m.name, m.content));
  map.forEach((content, name) => mergedMeta.push({ name, content }));

  return (
    <>
      {/* NextSeo handles title, meta, OG and Twitter */}
      <NextSeo
        title={finalTitle}
        description={finalDescription}
        canonical={canonical || seoConfig.canonical}
        openGraph={seoConfig.openGraph}
        additionalMetaTags={mergedMeta}
        twitter={seoConfig.twitter}
      />

      {/* JSON-LD structured data */}
      <script
        key="ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <script
        key="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
