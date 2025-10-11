"use client";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Project Management",
    "Feasibility Studies",
    "Detailed Design",
    "Construction Management",
    "CAD Drafting Services",
    "Engineering Calculations",
  ];

  const projects = [
    "Thermal Power Plants",
    "Solar Power Plants",
    "Wind Power Plants",
    "Smart City Projects",
    "Desalination Plants",
    "Switchyard Design",
  ];

  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">KV</span>
              </div>
              <span className="font-bold text-xl sm:text-2xl">
                KSV Engineering
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Your virtual extended arm for innovative engineering solutions. We
              provide detailed engineering services to EPC, OEM, and PMC as
              long-term projects.
            </p>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-engineering-orange" />
              <span className="text-gray-300 text-sm">
                ksvengineeringconsultant@gmail.com
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm sm:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-6">
              Project Types
            </h4>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-engineering-teal transition-colors duration-200 text-sm sm:text-base"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg sm:text-xl mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm sm:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-engineering-teal transition-colors duration-200 text-sm sm:text-base"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-gray-300 hover:text-engineering-orange transition-colors duration-200 text-sm sm:text-base"
                >
                  Technology
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear} KSV Engineering Solutions. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-sm sm:text-base text-gray-400">
                Serving 15+ countries worldwide
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-engineering-orange rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base text-gray-400">
                  24/7 Support Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
