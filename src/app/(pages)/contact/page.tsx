import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Contact KSV Engineering to discuss your EPC, OEM or PMC engineering requirements. We provide long-term project support and precise engineering deliverables.",
  openGraph: {
    title: "Contact KSV Engineering — Request a Quote or Consultation",
    description:
      "Contact KSV Engineering to discuss your EPC, OEM or PMC engineering requirements. We provide long-term project support and precise engineering deliverables.",
    url: "https://www.ksvengineering.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <script
        key="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksvengineering.com/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.ksvengineering.com/contact" },
            ],
          }),
        }}
      />
    </main>
  );
}

// BreadcrumbList is injected inline in the page to avoid export type conflicts
