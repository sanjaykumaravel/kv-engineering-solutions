import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import heroImage from "@/assets/engineering-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Engineering
            <span className="block text-engineering-orange">Excellence</span>
            <span className="block text-4xl md:text-5xl font-normal">
              Delivered Globally
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            We provide detailed engineering services to EPC, OEM, and PMC as long-term projects. 
            Your virtual extended arm for innovative engineering solutions.
          </p>
          
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-engineering-orange rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">15+</div>
                <div className="text-primary-foreground/80">Countries Served</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-engineering-teal rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">95%</div>
                <div className="text-primary-foreground/80">Repeat Business</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-engineering-orange rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">20+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-primary-foreground/50 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;