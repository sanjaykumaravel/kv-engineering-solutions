const SITE_URL = "https://www.ksvengineering.com";
const COMPANY_NAME = "KSV Engineering";
const TAGLINE = "Your virtual extended arm for innovative engineering solutions";

const seo = {
  defaultTitle: `${COMPANY_NAME} — Detailed Engineering Services for EPC, OEM & PMC`,
  titleTemplate: `%s | ${COMPANY_NAME}`,
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven designs, CAD automation, and AutoCAD LISP customization.",
  canonical: SITE_URL,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Engineering services company, Global engineering solutions, Industrial engineering services, Engineering consultants, Detailed engineering solutions, PMC, CAD automation, AutoCAD LISP programming, EPC, OEM",
    },
    { name: "application-name", content: COMPANY_NAME },
    { name: "author", content: COMPANY_NAME },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${COMPANY_NAME} — Detailed Engineering Services for EPC, OEM & PMC`,
    description:
      "Precision-driven detailed engineering services for EPC, OEM and PMC clients — mechanical, electrical, and industrial plant engineering with CAD automation.",
    site_name: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — ${TAGLINE}`,
      },
    ],
  },
  twitter: {
    handle: "@KSVEngineering",
    site: "@KSVEngineering",
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
  },
};

export const SITE_META = {
  SITE_URL,
  COMPANY_NAME,
  TAGLINE,
};

// Export a small curated list of primary routes for sitemap/robots usage.
export const PRIMARY_ROUTES = [
  "",
  "about",
  "services",
  "technology",
  "contact",
];

export default seo;
