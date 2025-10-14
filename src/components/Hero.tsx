"use client";

import { useEffect, useState } from "react";
import { Building2, Users, Award } from "lucide-react";
import heroImage from "@/assets/engineering-hero.jpg";
import Image from "next/image";

const Hero = () => {


  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    function getNextSaturday10AM(from: Date) {
      // Saturday = 6 (Sun=0..Sat=6)
      const day = from.getDay();
      // days until Saturday
      const daysUntil = (6 - day + 7) % 7;
      const candidate = new Date(from);
      candidate.setDate(from.getDate() + daysUntil);
      candidate.setHours(10, 0, 0, 0);

      // if candidate is in the past or exactly now, move to next week's Saturday
      if (candidate.getTime() <= from.getTime()) {
        candidate.setDate(candidate.getDate() + 7);
      }

      return candidate;
    }

    // compute initial value immediately to avoid a blank on first tick
    const compute = () => {
      const now = new Date();
      const target = getNextSaturday10AM(now);
      const distance = target.getTime() - now.getTime();

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    compute();

    const interval = setInterval(() => {
      compute();
      const now = new Date();
      // note: compute() already updated state
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (optimized) */}
        <div className="absolute inset-0 -z-0">
          <Image src={heroImage} alt="Engineering background" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        {/* Content Wrapper */}
        <div className="container mt-12 relative z-10 flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
          {/* Left Side: Main Text */}
          <div className="md:w-2/3 max-w-4xl text-center md:text-left order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Engineering
              <span className="block text-engineering-orange">Excellence</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
                Delivered Globally
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              We provide detailed engineering services to EPC, OEM, and PMC as
              long-term projects. Your virtual extended arm for innovative
              engineering solutions.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-engineering-orange rounded-lg flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-primary-foreground">
                    15+
                  </div>
                  <div className="text-primary-foreground/80">
                    Countries Served
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-engineering-teal rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-primary-foreground">
                    95%
                  </div>
                  <div className="text-primary-foreground/80">
                    Repeat Business
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-engineering-orange rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-primary-foreground">
                    20+
                  </div>
                  <div className="text-primary-foreground/80">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Announcement */}
          <div className="md:w-1/3 w-full flex flex-col items-center mb-5 md:items-center bg-white/20 backdrop-blur-md rounded-xl p-6 space-y-4 order-2">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1 text-center md:text-right">
              📢 Saturday Seminar
            </h2>
            <p className="text-white text-sm sm:text-base text-center md:text-right">
              Next session starts in:
            </p>
            <div className="text-xl sm:text-2xl md:text-2xl font-mono text-white text-center md:text-right">
              {timeLeft
                ? `${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`
                : `--d : --h : --m : --s`}
            </div>
            <a
              href="https://docs.google.com/forms/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition text-center w-full md:w-auto"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-primary-foreground/50 rounded-full" />
        </div>
      </section>
    </>
  );
};

export default Hero;
