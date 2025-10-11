import Services from "@/components/Services";
import Seo from "@/lib/Seo";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Detailed Engineering, CAD Automation & LISP Customization"
        description={
          "KSV Engineering offers detailed engineering services, CAD automation, AutoCAD LISP development, and plant design solutions for EPC, OEM and PMC clients worldwide." 
        }
        canonical={"https://www.ksvengineering.com/services"}
      />

      {/* Service structured data */}
      <script
        key="ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <main>
        <Services />
      </main>
    </>
  );
}
