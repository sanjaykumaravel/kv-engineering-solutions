"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Building,
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

// Imports from separated data and component files
import {
  projects,
  calculations,
  layouts,
  controlSchemes,
  diagrams,
  switchyard,
  seminars,
} from "@/data/servicesData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ExpertiseBadge } from "@/components/ui/ExpertiseBadge";

interface ServicesProps {
  headingLevel?: "h1" | "h2";
}

const Services = ({ headingLevel = "h2" }: ServicesProps) => {
  const Heading = headingLevel;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const openContactDialog = (item: string) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  return (
    <>
      <section id="services" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-engineering-teal/5 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <Heading className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-black">Services</span>
            </Heading>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              Comprehensive engineering solutions from concept to commissioning
            </p>
          </div>

          {/* 2D CAD Design Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                2D CAD Design Services
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                Engineering converts your ideas and concepts into highly
                accurate 2D CAD drawings. We offer industry-aligned CAD drafting
                services with a combination of skilled, qualified, and
                experienced CAD professionals equipped with the latest tools.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                <Badge variant="secondary" className="justify-center p-3 text-sm font-semibold border border-border/80 bg-slate-100/50 hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-500/20 transition-all duration-300 rounded-xl">
                  As-built Documentation
                </Badge>
                <Badge variant="secondary" className="justify-center p-3 text-sm font-semibold border border-border/80 bg-slate-100/50 hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-500/20 transition-all duration-300 rounded-xl">
                  2D Drafting
                </Badge>
              </div>
            </div>

            <div className="relative group">
              <div className="rounded-2xl shadow-xl overflow-hidden w-full h-[400px] relative border border-border/85 bg-slate-100">
                <Image
                  src={cadServicesImage.src}
                  alt="CAD Design Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Projects */}
          <div className="mb-28">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-16 tracking-tight">
              Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">Portfolio</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Detailed Services Tabs */}
          <div className="bg-gradient-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10 tracking-tight">
              Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">Expertise</span>
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
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="layouts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {layouts.map((item, index) => (
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="control">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {controlSchemes.map((item, index) => (
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="diagrams">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diagrams.map((item, index) => (
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="switchyard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {switchyard.map((item, index) => (
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seminars">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seminars.map((item, index) => (
                    <ExpertiseBadge
                      key={index}
                      item={item}
                      onClick={openContactDialog}
                    />
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
