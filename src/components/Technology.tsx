import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Globe, Shield } from "lucide-react";

const Technology = () => {

  const softwareTools = [
    "Autocad 2023",
    "E3D",
    "Sp3d",
    "Plant3d",
    "Revit",
    "Dialux",
    "E-Tap",
  ];

  const features = [
    {
      icon: Monitor,
      title: "Industry-Leading Software",
      description:
        "We use the latest CAD and engineering software tools for maximum precision and efficiency.",
    },
    {
      icon: Cpu,
      title: "Advanced Technology Stack",
      description:
        "Our team stays current with cutting-edge technology to deliver superior engineering solutions.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "All our work adheres to international engineering codes and industry best practices.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensure accurate and reliable engineering deliverables.",
    },
  ];

  const services = [
    {
      title: "Repeat Business",
      stat: "95%",
      description:
        "We have a successful track record of 95% in repeat business from our customers across the world.",
    },
    {
      title: "Wide Project Range",
      stat: "Multiple",
      description:
        "Our project line includes pump design, pipeline design, power generation, redline drafting, and many other projects.",
    },
    {
      title: "24*7 Support",
      stat: "24/7",
      description:
        "Our customer service is available round the clock to solve your queries anytime.",
    },
    {
      title: "Scalability",
      stat: "Custom",
      description:
        "Our 2D CAD designing team offers befitting solutions based on your sector and project requirements.",
    },
  ];

  return (
    <>
      <section id="technology" className="py-20 bg-gradient-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technology & <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver high-end design engineering and drafting services using
              industry-leading software tools and cutting-edge technology.
            </p>
          </div>

          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-professional transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="text-center">
                    <div className="p-4 bg-gradient-hero rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Software Tools */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              2D Drafting <span className="text-primary">Software Tools</span>
            </h3>

            <div className="bg-background rounded-2xl p-8 shadow-professional">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {softwareTools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-4 text-center justify-center text-sm font-medium"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              What To Expect When You{" "}
              <span className="text-primary">Work With Us</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-professional transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {service.stat}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
