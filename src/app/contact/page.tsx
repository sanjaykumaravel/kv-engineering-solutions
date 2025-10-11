import Contact from "@/components/Contact";
import Seo from "@/lib/Seo";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact KSV Engineering — Request a Quote or Consultation"
        description={
          "Contact KSV Engineering to discuss your EPC, OEM or PMC engineering requirements. We provide long-term project support and precise engineering deliverables." 
        }
        canonical={"https://www.ksvengineering.com/contact"}
      />

      <main>
        <Contact />
      </main>
    </>
  );
}
