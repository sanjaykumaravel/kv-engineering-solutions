import { NextSeo } from "next-seo";
import seoConfig, { SITE_META } from "../../next-seo.config";

const { SITE_URL, COMPANY_NAME } = SITE_META;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  legalName: COMPANY_NAME,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "admin@ksvengineering.com",
      contactType: "customer support",
      areaServed: "GLOBAL",
      availableLanguage: ["en"],
    },
  ],
  telephone: "+91-09444781533",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "",
  },
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
  "@id": `${SITE_URL}#website`,
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

  const globalMeta = Array.isArray(seoConfig.additionalMetaTags) ? seoConfig.additionalMetaTags : [];
  const pageMeta = Array.isArray(additionalMetaTags) ? additionalMetaTags : [];

  const mergedMeta: Array<{ name: string; content: string }> = [];
  const map = new Map<string, string>();
  globalMeta.forEach((m: any) => map.set(m.name, m.content));
  pageMeta.forEach((m: any) => map.set(m.name, m.content));
  map.forEach((content, name) => mergedMeta.push({ name, content }));

  return (
    <>
      <NextSeo
        title={finalTitle}
        description={finalDescription}
        canonical={canonical || seoConfig.canonical}
        openGraph={seoConfig.openGraph}
        additionalMetaTags={mergedMeta}
        twitter={seoConfig.twitter}
      />

      {/* Website JSON-LD is injected here. Organization JSON-LD is declared in the global layout to avoid duplication. */}
      <script
        key="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
