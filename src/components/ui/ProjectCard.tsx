import { Card, CardContent } from "@/components/ui/card";
import { ProjectItem } from "@/data/servicesData";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const IconComponent = project.icon;
  return (
    <Card className="hover-lift border border-border/60 shadow-sm bg-gradient-card">
      <CardContent className="p-8 text-center flex flex-col items-center">
        <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 rounded-full w-fit mb-4 border border-blue-500/15">
          <IconComponent className="h-6 w-6" />
        </div>
        <h4 className="font-bold text-foreground tracking-tight">{project.name}</h4>
      </CardContent>
    </Card>
  );
}
