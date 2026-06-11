import { LucideIcon, Monitor, Cpu, Globe, Shield } from "lucide-react";

export interface TechnologyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ExpectationService {
  title: string;
  stat: string;
  description: string;
}

export const softwareTools: string[] = [
  "Autocad 2023",
  "E3D",
  "Sp3d",
  "Plant3d",
  "Revit",
  "Dialux",
  "E-Tap",
];

export const features: TechnologyFeature[] = [
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

export const expectationServices: ExpectationService[] = [
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
