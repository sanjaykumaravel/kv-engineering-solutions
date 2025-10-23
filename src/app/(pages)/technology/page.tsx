import Technology from "@/components/Technology";

export const metadata = {
  title: "Technology — KSV Engineering",
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. We act as your virtual extended arm delivering precision-driven engineering and CAD automation.",
  openGraph: {
    title: "Technology — KSV Engineering  Global Detailed Engineering Services",
    description:
      "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven engineering and CAD automation.",
    url: "https://www.ksvengineering.com/technology",
  },
};

export default function TechnologyPage() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <Technology />
      <script
        key="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.ksvengineering.com/", "@type": "WebPage" } },
              { "@type": "ListItem", position: 2, name: "Technology", item: { "@id": "https://www.ksvengineering.com/technology", "@type": "WebPage" } },
            ],
          }),
        }}
      />
    </main>
  );
}

// BreadcrumbList is injected inline in the page to avoid export type conflicts
