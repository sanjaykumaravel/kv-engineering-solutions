import About from "@/components/About";
import Seo from "@/lib/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About KSV Engineering — Global Detailed Engineering Services"
        description={
          "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. We act as your virtual extended arm delivering precision-driven engineering and CAD automation." 
        }
        canonical={"https://www.ksvengineering.com/about"}
      />

      <main>
        <About />
      </main>
    </>
  );
}
