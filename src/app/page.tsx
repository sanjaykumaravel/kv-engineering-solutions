import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import LspContainer from "@/components/LspContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "KSV Engineering | Detailed Engineering Services",
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC projects worldwide.",
  openGraph: {
    title: "KSV Engineering | Detailed Engineering Services",
    description:
      "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC projects worldwide.",
    url: "https://www.ksvengineering.com",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <LspContainer />
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ksvengineering.com/" }
            ],
          }),
        }}
      />
    </div>
  );
}

