"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import LspContainer from "@/components/LspContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (

      <div className="min-h-screen bg-background">
        <Header/>
        <Hero />
        <About />
        <LspContainer />
        <Services />
        <Technology />
        <Contact />
        <Footer/>
      </div>
  );
}
