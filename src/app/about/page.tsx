import About from "@/components/About";

export const metadata = {
  title: "About KSV Engineering — Global Detailed Engineering Services",
  description:
    "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. We act as your virtual extended arm delivering precision-driven engineering and CAD automation.",
  openGraph: {
    title: "About KSV Engineering — Global Detailed Engineering Services",
    description:
      "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven engineering and CAD automation.",
    url: "https://www.ksvengineering.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <About />
    </main>
  );
}
