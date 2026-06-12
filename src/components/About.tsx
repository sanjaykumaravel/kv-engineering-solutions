import { Target, Globe, Clock } from "lucide-react";
import infrastructureImage from "@/assets/infrastructure.jpg";
import Image from "next/image";
import { whyChooseUs } from "@/data/aboutData";
import { AboutCard } from "@/components/ui/AboutCard";

interface AboutProps {
  headingLevel?: "h1" | "h2";
}

const About = ({ headingLevel = "h2" }: AboutProps) => {
  const Heading = headingLevel;
  return (
    <section id="about" className="py-24 bg-dot-pattern relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/10">
      {/* Accent glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-engineering-teal/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container px-6 sm:px-8 lg:px-12">
        {/* About Us */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Heading className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-black">KSV Engineering</span>
          </Heading>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light">
            We provide detailed engineering services to EPC, OEM, and PMC clients as
            long-term projects across the Middle East (including Saudi Arabia, UAE,
            Qatar, Oman, Kuwait, and Bahrain) and globally. Our services include
            Project Management, Feasibility Studies, Conceptual & Basic Engineering,
            Detailed Design, Procurement, Construction Management, Commissioning &
            Start-up, and Operations & Maintenance.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose KSV Engineering?
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Engineering operates as the virtual extended arm for our customers
              offering innovative solutions. We add value to our customers by
              accelerating their engineering performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <AboutCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Our <span className="text-blue-600 dark:text-blue-400">Infrastructure</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
              Our 3,600 square feet campus stands testimony to energy
              principles, incorporating learning from ancient architecture. It is
              fully equipped with advanced technical amenities to seamlessly support
              our customers as their virtual extended arm.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3.5">
                <div className="p-1 rounded bg-engineering-orange/10 text-engineering-orange">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm sm:text-base font-medium">
                  Advanced technical amenities and security provisions
                </span>
              </div>
              <div className="flex items-center space-x-3.5">
                <div className="p-1 rounded bg-engineering-teal/10 text-engineering-teal">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm sm:text-base font-medium">
                  Collaborative & innovation-centric ecosystem
                </span>
              </div>
              <div className="flex items-center space-x-3.5">
                <div className="p-1 rounded bg-engineering-orange/10 text-engineering-orange">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-foreground text-sm sm:text-base font-medium">
                  Open office layout fostering cross-team communication
                </span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="rounded-2xl shadow-xl overflow-hidden w-full h-[400px] relative border border-border/85 bg-slate-100">
              <Image
                src={infrastructureImage.src}
                alt="KSV Engineering Infrastructure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
