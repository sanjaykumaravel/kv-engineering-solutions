import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "KSV Engineering offers detailed engineering services, CAD automation, AutoCAD LISP development, and plant design solutions for EPC, OEM and PMC clients worldwide.",
  openGraph: {
    title: "Services — Detailed Engineering, CAD Automation & LISP Customization",
    description:
      "KSV Engineering offers detailed engineering services, CAD automation and AutoCAD LISP development for EPC, OEM and PMC clients.",
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
    "Mechanical engineering services",
    "Electrical engineering services",
    "Industrial plant design",
  ],
  description:
    "Detailed engineering services for EPC, OEM, and PMC clients including CAD automation, LISP customization, mechanical and electrical design, and plant engineering.",
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksvengineering.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ksvengineering.com/services" },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}

// BreadcrumbList is injected inline in the page to avoid export type conflicts
