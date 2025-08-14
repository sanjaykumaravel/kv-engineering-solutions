// seoConfig.ts
export interface SiteConfig {
  name: string;
  baseUrl: string;
  defaultImage: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

export const SITE: SiteConfig = {
  name: "KSV Engineering",
  baseUrl: "https://www.ksvengineering.com",
  defaultImage: "/og/ksv-default.jpg",
};

export const SEO: Record<string, PageSEO> = {
  "/home": {
    title: "KSV Engineering | Global Engineering Services for EPC, OEM, PMC",
    description:
      "Detailed engineering for power & infrastructure: PM, feasibility, CAD drafting, design, procurement, commissioning, O&M. 20+ years, 15+ countries.",
    keywords:
      "Engineering services, EPC projects, OEM support, PMC, project management, feasibility studies, CAD drafting, power plant engineering, switchyard design",
  },
  "/about": {
    title: "KSV Engineering",
    description:
      "We support EPC, OEM, and PMC with end-to-end engineering: design, procurement, construction management, commissioning, and O&M.",
    keywords:
      "KSV Engineering, engineering company, EPC partner, OEM solutions, PMC services",
  },
  "/services": {
    title: "KSV Engineering",
    description:
      "2D CAD drafting, as-built docs, cable sizing, earthing, load flow, relay settings, switchgear & transformer sizing, ETAP studies, layouts and more.",
    keywords:
      "CAD drafting, as-built documentation, HT/LT switchgear, load flow study, relay setting, ETAP, transformer sizing",
  },
  "/projects": {
    title: "KSV Engineering",
    description:
      "Thermal, gas, biogas, captive, solar, wind, desalination, smart city—global delivery with scalable, on-time performance.",
    keywords:
      "thermal power plant design, solar engineering, wind projects, desalination, smart city",
  },
  "/contact": {
    title: "KSV Engineering",
    description:
      "24×7 support and scalable engagement models. Tell us about your project—get a fast, precise quote.",
    keywords:
      "contact KSV Engineering, engineering solutions, EPC provider, get a quote",
  },
};
