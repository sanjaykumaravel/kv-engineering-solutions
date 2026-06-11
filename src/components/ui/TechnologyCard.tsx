import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyFeature, ExpectationService } from "@/data/technologyData";

interface FeatureCardProps {
  feature: TechnologyFeature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = feature.icon;
  return (
    <Card className="hover-lift border border-border/60 shadow-sm bg-gradient-card">
      <CardHeader className="text-center pb-2">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 rounded-full w-fit mx-auto mb-2 border border-blue-500/15">
          <IconComponent className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-bold tracking-tight text-foreground">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center text-sm font-light leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  service: ExpectationService;
}

export function StatCard({ service }: StatCardProps) {
  return (
    <Card className="hover-lift border border-border/60 shadow-sm bg-gradient-card">
      <CardContent className="p-8 text-center">
        <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-3 tracking-tight">
          {service.stat}
        </div>
        <h4 className="text-lg font-bold text-foreground mb-3 tracking-tight">
          {service.title}
        </h4>
        <p className="text-muted-foreground text-sm font-light leading-relaxed">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
}
