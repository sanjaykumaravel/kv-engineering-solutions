import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import LspShowcase from "@/components/LspShowcase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "KSV Engineering | Detailed Engineering Services for EPC, OEM & PMC",
  description:
    "KSV Engineering is your virtual extended arm for detailed engineering, CAD automation, and AutoCAD LISP customization across Saudi Arabia, UAE, Qatar, and Gulf regions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KSV Engineering | Detailed Engineering Services for EPC, OEM & PMC",
    description:
      "KSV Engineering is your virtual extended arm for detailed engineering, CAD automation, and AutoCAD LISP customization across Saudi Arabia, UAE, Qatar, and Gulf regions.",
    url: "https://www.ksvengineering.com",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <LspShowcase />
      <Services />
      <Technology />
      <Contact />
      <Footer />
      <script
        key="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: {
                  "@id": "https://www.ksvengineering.com/",
                  "@type": "WebPage",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
