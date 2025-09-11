import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LspContainer from "@/components/LspContainer";
const Index = () => {
  return (
    <>
      <SEO
        title="KVS ENGINEERING"
        description="We provide detailed engineering services to EPC, OEM, and PMC — delivering excellence globally."
        keywords="engineering, EPC, OEM, PMC, global engineering services"
        url="https://yourwebsite.com/"
        image="https://yourwebsite.com/images/preview.jpg"
      />
      
    <div className="min-h-screen bg-background">

      <Header />
      <Hero />
      <About />
      <LspContainer />
      <Services />
      <Technology />
      <Contact />
      <Footer />
    </div>
    </>

  );
};

export default Index;
