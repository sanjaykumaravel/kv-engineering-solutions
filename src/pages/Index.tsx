import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";


const Index = () => {
  return (
    <>

    <div className="min-h-screen bg-background">
            <Helmet>
        <title>KSV ENGINEERING</title>
        <meta name="description" content="This is the home page of KSV ENGINEERING" />
        <meta
          name="keywords"
          content="react, seo, homepage, my website"
        />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default Index;
