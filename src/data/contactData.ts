import { LucideIcon, Mail } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string;
  subtitle: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email Us",
    details: "Admin@ksvengineering.com",
    subtitle: "We respond within 24 hours",
  },
];
