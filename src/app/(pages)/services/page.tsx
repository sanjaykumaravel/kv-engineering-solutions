import Services from "@/components/Services";

export const metadata = {
  title: "Services — KSV Engineering",
  description:
    "KSV Engineering offers detailed engineering services, CAD automation, AutoCAD LISP development, plant design, EPC and PMC support, and 3D visualization for clients worldwide.",
  openGraph: {
    title: "Services — KSV Engineering — Detailed Engineering, CAD Automation & LISP Customization",
    description:
      "KSV Engineering offers detailed engineering services, CAD automation and AutoCAD LISP development for EPC, OEM and PMC clients. Services include building cable tray & lighting layouts, paper-to-CAD conversion, as-built drawings, estimation and costing, and 3D visualization.",
    url: "https://www.ksvengineering.com/services",
  },
};

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Detailed Engineering Services",
  provider: {
    "@type": "Organization",
    name: "KSV Engineering",
    url: "https://www.ksvengineering.com",
  },
  serviceType: [
    "CAD automation services",
    "AutoCAD LISP programming",
    "LISP customization for AutoCAD",
    "CAD customization services",
    "Mechanical engineering services",
    "Electrical engineering services",
    "Industrial plant engineering solutions",
    "Plant design engineering",
    "EPC engineering services",
    "PMC project management consultancy",
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
  ],
  description:
    "Detailed engineering services for EPC, OEM, and PMC clients including CAD automation, LISP customization, mechanical and electrical design, plant engineering, building layout drawings, paper-to-CAD conversion, and 3D visualization.",
  areaServed: "GLOBAL",
  audience: { "@type": "BusinessAudience", industry: "EPC, OEM, PMC" },
};

export default function ServicesPage() {
  return (
    <>
      <script key="ld-services" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />

      <main>
        <Services />
        <script
          key="ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.ksvengineering.com/", "@type": "WebPage" } },
                { "@type": "ListItem", position: 2, name: "Services", item: { "@id": "https://www.ksvengineering.com/services", "@type": "WebPage" } },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}

// BreadcrumbList is injected inline in the page to avoid export type conflicts
