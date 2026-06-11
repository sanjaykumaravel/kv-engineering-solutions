import { Card, CardContent } from "@/components/ui/card";
import { ContactInfoItem } from "@/data/contactData";

interface ContactInfoCardProps {
  info: ContactInfoItem;
}

export function ContactInfoCard({ info }: ContactInfoCardProps) {
  const IconComponent = info.icon;
  return (
    <Card className="shadow-card hover:shadow-professional transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
            <p className="text-sm md:text-base text-foreground break-words">
              {info.details}
            </p>
            <p className="text-xs text-muted-foreground break-words">
              {info.subtitle}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
