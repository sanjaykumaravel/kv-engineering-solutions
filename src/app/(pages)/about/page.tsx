import About from "@/components/About";

export const metadata = {
  title: "About — KSV Engineering",
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. We act as your virtual extended arm delivering precision-driven engineering and CAD automation.",
  openGraph: {
  title: "About — KSV Engineering",
    description:
      "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven engineering and CAD automation.",
    url: "https://www.ksvengineering.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <About />
      <script
        key="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: { "@id": "https://www.ksvengineering.com/", "@type": "WebPage" } },
              { "@type": "ListItem", position: 2, name: "About", item: { "@id": "https://www.ksvengineering.com/about", "@type": "WebPage" } },
            ],
          }),
        }}
      />
    </main>
  );
}
