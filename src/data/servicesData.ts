import { LucideIcon, Zap, Building, Sun, Wind, Cpu } from "lucide-react";

export interface ProjectItem {
  name: string;
  icon: LucideIcon;
}

export const projects: ProjectItem[] = [
  { name: "Thermal Power Plant", icon: Zap },
  { name: "Gas Based Power Plant", icon: Zap },
  { name: "Biogas Power Plant", icon: Zap },
  { name: "Captive Power Plant", icon: Building },
  { name: "Solar Power Plant", icon: Sun },
  { name: "Wind Power Plant", icon: Wind },
  { name: "Smart City Project", icon: Cpu },
  { name: "Desalination Plant", icon: Building },
];

export const calculations: string[] = [
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

export const layouts: string[] = [
  "Cable Routing Layout",
  "Earthing Layout",
  "Lighting Layout",
  "Lightning Protection Layout",
  "Equipment Layout",
  "Plant Communication Layout",
  "Cathodic Protection",
];

export const controlSchemes: string[] = [
  "HT Switchgear Control Scheme",
  "LT Switchgear Control Scheme",
  "HT Motor Control Scheme",
  "LT Motor Control Scheme",
];

export const diagrams: string[] = [
  "Key Single Line Diagram",
  "HT Switchgear Single Line Diagram",
  "LT Switchgear Single Line Diagram",
  "DCDB",
  "ACDB",
  "UPS",
  "GIS Single Line Diagram",
];

export const switchyard: string[] = [
  "GIS Switchyard 132/220/400 kV",
  "AIS Switchyard 132/220/400/765kV",
  "GIS/AIS Cable Routing Layout",
  "GIS/AIS Earthing Layout",
  "GIS/AIS Lighting Layout",
  "GIS/AIS Lightning Layout",
];

export const seminars: string[] = [
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
];
