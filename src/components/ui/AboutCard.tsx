import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { WhyChooseUsItem } from "@/data/aboutData";

interface AboutCardProps {
  item: WhyChooseUsItem;
}

export function AboutCard({ item }: AboutCardProps) {
  return (
    <Card className="hover-lift border border-border/60 shadow-sm bg-gradient-card">
      <CardContent className="p-8">
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/15 shrink-0">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground mb-2 tracking-tight">
              {item.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
