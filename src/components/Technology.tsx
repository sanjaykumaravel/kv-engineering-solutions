import { Badge } from "@/components/ui/badge";
import {
  softwareTools,
  features,
  expectationServices,
} from "@/data/technologyData";
import { FeatureCard, StatCard } from "@/components/ui/TechnologyCard";

interface TechnologyProps {
  headingLevel?: "h1" | "h2";
}

const Technology = ({ headingLevel = "h2" }: TechnologyProps) => {
  const Heading = headingLevel;
  return (
    <>
      <section id="technology" className="py-24 bg-dot-pattern bg-white dark:bg-slate-950/10 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[110px] pointer-events-none -z-10" />

        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <Heading className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Technology & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-black">Innovation</span>
            </Heading>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              We deliver high-end design engineering and drafting services using
              industry-leading software tools and cutting-edge technology.
            </p>
          </div>

          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* Software Tools */}
          <div className="mb-28">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12 tracking-tight">
              2D Drafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">Software Tools</span>
            </h3>

            <div className="bg-background border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {softwareTools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-4 text-center justify-center text-sm font-semibold border border-border/80 bg-slate-100/50 hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-500/20 transition-all duration-300 rounded-xl cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-16 tracking-tight">
              What To Expect When You <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">Work With Us</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expectationServices.map((service, index) => (
                <StatCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
