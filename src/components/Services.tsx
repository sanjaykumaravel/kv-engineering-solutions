"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Wind,
  Sun,
  Building,
  Cpu,
  Calculator,
  Layout,
  Workflow,
  Network,
} from "lucide-react";
import cadServicesImage from "@/assets/cad-services.jpg";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Services = () => {
  const projects = [
    { name: "Thermal Power Plant", icon: Zap },
    { name: "Gas Based Power Plant", icon: Zap },
    { name: "Biogas Power Plant", icon: Zap },
    { name: "Captive Power Plant", icon: Building },
    { name: "Solar Power Plant", icon: Sun },
    { name: "Wind Power Plant", icon: Wind },
    { name: "Smart City Project", icon: Cpu },
    { name: "Desalination Plant", icon: Building },
  ];

  const calculations = [
    "IPBD/SPBD/NSPBD Busduct Sizing",
    "HT/LT Cable Sizing",
    "CT&PT Sizing",
    "DC Battery Sizing",
    "EDG/BSDG Sizing",
    "Earthing Calculation",
    "GCB Sizing",
    "Lightning Protection",
    "NGR Sizing",
    "HT/LT Switchgear Sizing",
    "HT/LT Transformer Sizing",
    "UPS Sizing",
    "Lighting Calculation",
    "Cable Tray Loading",
    "ACSR Conductor Sizing",
    "Sag Tension Calculation",
    "Busbar Sizing Calculation",
    "Load Flow",
    "E-tap Study",
    "Relay Setting",
  ];

  const layouts = [
    "Cable Routing Layout",
    "Earthing Layout",
    "Lighting Layout",
    "Lightning Protection Layout",
    "Equipment Layout",
    "Plant Communication Layout",
    "Cathodic Protection",
  ];

  const controlSchemes = [
    "HT Switchgear Control Scheme",
    "LT Switchgear Control Scheme",
    "HT Motor Control Scheme",
    "LT Motor Control Scheme",
  ];

  const diagrams = [
    "Key Single Line Diagram",
    "HT Switchgear Single Line Diagram",
    "LT Switchgear Single Line Diagram",
    "DCDB",
    "ACDB",
    "UPS",
    "GIS Single Line Diagram",
  ];

  const switchyard = [
    "GIS Switchyard 132/220/400 kV",
    "AIS Switchyard 132/220/400/765kV",
    "GIS/AIS Cable Routing Layout",
    "GIS/AIS Earthing Layout",
    "GIS/AIS Lighting Layout",
    "GIS/AIS Lightning Layout",
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ServicesPage",
    name: "Service Us",
    description:
      "From CAD drafting to complex power plant engineering, KVS ENGINEERING delivers comprehensive solutions tailored to EPC, OEM, and PMC needs.",
    url: "https://yourdomain.com/about",
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleBadgeKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    item: string,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedItem(item);
      setDialogOpen(true);
    }
  };

  return (
    <>

      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive engineering solutions from concept to commissioning
            </p>
          </div>

          {/* 2D CAD Design Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                2D CAD Design Services
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Engineering converts your ideas and concepts into highly
                accurate 2D CAD drawings. We offer industry-aligned CAD drafting
                services with a combination of skilled, qualified, and
                experienced CAD professionals equipped with the latest tools.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Badge variant="secondary" className="justify-center p-3">
                  As-built Documentation
                </Badge>
                <Badge variant="secondary" className="justify-center p-3">
                  2D Drafting
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-professional overflow-hidden w-full h-[400px] relative">
                <Image
                  src={cadServicesImage.src}
                  alt="CAD Design Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Projects */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Project <span className="text-primary">Portfolio</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-professional transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">
                        {project.name}
                      </h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Detailed Services Tabs */}
          <div className="bg-gradient-card rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              Technical <span className="text-primary">Expertise</span>
            </h3>

            <Tabs defaultValue="calculations" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="calculations">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculations
                </TabsTrigger>
                <TabsTrigger value="layouts">
                  <Layout className="h-4 w-4 mr-2" />
                  Layouts
                </TabsTrigger>
                <TabsTrigger value="control">
                  <Workflow className="h-4 w-4 mr-2" />
                  Control
                </TabsTrigger>
                <TabsTrigger value="diagrams">
                  <Network className="h-4 w-4 mr-2" />
                  Diagrams
                </TabsTrigger>
                <TabsTrigger value="switchyard">
                  <Zap className="h-4 w-4 mr-2" />
                  Switchyard
                </TabsTrigger>
                <TabsTrigger value="seminars">
                  <Building className="h-4 w-4 mr-2" />
                  Seminars
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calculations">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {calculations.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="layouts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {layouts.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="control">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {controlSchemes.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diagrams">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diagrams.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="switchyard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {switchyard.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seminars">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Generator",
                    "Power Transformer",
                    "MV/LV Switchgear",
                    "Busduct",
                    "Battery & Battery Charger",
                    "HT/LT Motor",
                    "CT/PT Design",
                    "Switchyard",
                    "Safety Earthing",
                    "Solar-Roof Top CarPark Structure",
                  ].map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-3 justify-start cursor-pointer hover:bg-primary/5"
                      onClick={() => {
                        setSelectedItem(item);
                        setDialogOpen(true);
                      }}
                      onKeyDown={(e) => handleBadgeKeyDown(e, item)}
                      role="button"
                      tabIndex={0}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact dialog for technical expertise items */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedItem ?? "Calculation details"}</DialogTitle>
            <DialogDescription>
              For calculations like this, please contact us so we can discuss
              your requirements and provide a custom solution and quote.
            </DialogDescription>
          </DialogHeader>
          <div className="px-2">
            <p className="mb-4 text-sm">Email us at:</p>
            <a
              className="text-primary underline break-all"
              href={`mailto:ksvengineeringconsultant@gmail.com?subject=${encodeURIComponent(
                `Enquiry about: ${selectedItem ?? "Technical expertise"}`,
              )}`}
            >
              ksvengineeringconsultant@gmail.com
            </a>
          </div>
          <DialogFooter>
            <Button variant="default" asChild>
              <a
                href={`mailto:ksvengineeringconsultant@gmail.com?subject=${encodeURIComponent(
                  `Enquiry about: ${selectedItem ?? "Technical expertise"}`,
                )}`}
              >
                Email Us
              </a>
            </Button>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
          <DialogClose />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
