import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact KSV Engineering — Request a Quote or Consultation",
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
    </main>
  );
}
