import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Globe, Clock } from "lucide-react";
import infrastructureImage from "@/assets/infrastructure.jpg";
import SEO from './SEO';
import JsonLd from "./JsonLd";

import { SEO as MAP } from '@/seoConfig';

const About = () => {
    const meta = MAP["/about"];



  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us",
    "description": "Learn more about our company, mission, and team.",
    "url": "https://yourdomain.com/about"
  };


  const whyChooseUs = [
    {
      title: "Scalable & On-Time Delivery",
      description: "We ensure projects are delivered on schedule with scalable solutions that grow with your needs."
    },
    {
      title: "Reducing Time and Costs",
      description: "Our efficient processes and experienced team help minimize project timelines and costs."
    },
    {
      title: "International Standards",
      description: "We adhere to international codes and standards ensuring quality and compliance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container">
        <JsonLd data={schemaData} />
          <SEO {...meta} url="/about" /> 
          {/* <JsonLd data={orgSchema} />


        {/* About Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">KSV Engineering</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We provide detailed engineering services to EPC, OEM, and PMC as long-term projects. 
            Our services include Project Management, Feasibility Studies, Conceptual & Basic Engineering, 
            Detailed Design, Procurement, Construction Management, Commissioning & Start-up, and Operations & Maintenance.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose KSV Engineering?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Engineering operates as the virtual extended arm for our customers offering innovative solutions. 
              We add value to our customers by accelerating their engineering performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Infrastructure</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our 3600 square feet campus stands testimony of the energy principles by incorporating 
              learnings from the ancient age architecture. Equipped with advanced technical amenities 
              to seamlessly support customers as their extended services arm.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-engineering-orange" />
                <span className="text-foreground">Advanced technical amenities and security provisions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-engineering-teal" />
                <span className="text-foreground">Collaborative & innovation-centric ecosystem</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-engineering-orange" />
                <span className="text-foreground">Open office layout fostering cross-team communication</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={infrastructureImage.src}
              alt="KSV Engineering Infrastructure"
              className="rounded-2xl shadow-professional w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;