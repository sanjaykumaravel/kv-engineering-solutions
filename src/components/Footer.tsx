import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Project Management",
    "Feasibility Studies",
    "Detailed Design",
    "Construction Management",
    "CAD Drafting Services",
    "Engineering Calculations"
  ];

  const projects = [
    "Thermal Power Plants",
    "Solar Power Plants",
    "Wind Power Plants",
    "Smart City Projects",
    "Desalination Plants",
    "Switchyard Design"
  ];

  return (
    <footer className="bg-engineering-gray text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-hero rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">KV</span>
              </div>
              <span className="font-bold text-xl">KSV Engineering</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your virtual extended arm for innovative engineering solutions. 
              We provide detailed engineering services to EPC, OEM, and PMC as long-term projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-engineering-orange" />
                <span className="text-sm">ksvengineeringconsultant@gmail</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Project Types</h4>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a 
                    href="#about" 
                    className="text-gray-300 hover:text-engineering-teal transition-colors duration-200 text-sm"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-300 hover:text-engineering-teal transition-colors duration-200 text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#technology" 
                  className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm"
                >
                  Technology
                </a>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} KSV Engineering Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">
                Serving 15+ countries worldwide
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-engineering-orange rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;