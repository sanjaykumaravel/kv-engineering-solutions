"use client";

import { useEffect, useState } from "react";
import { Building2, Users, Award } from "lucide-react";
import heroImage from "@/assets/engineering-hero.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    function getNextSaturday5PM(from: Date) {
      // Saturday = 6 (Sun=0..Sat=6)
      const day = from.getDay();
      const daysUntil = (6 - day + 7) % 7;
      const candidate = new Date(from);
      candidate.setDate(from.getDate() + daysUntil);
      candidate.setHours(17, 0, 0, 0); // 🕔 17:00 = 5 PM

      // If the current time is already past 5 PM this Saturday, go to next week
      if (candidate.getTime() <= from.getTime()) {
        candidate.setDate(candidate.getDate() + 7);
      }

      return candidate;
    }

    const compute = () => {
      const now = new Date();
      const target = getNextSaturday5PM(now);
      const distance = target.getTime() - now.getTime();

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    compute();
    const interval = setInterval(compute, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background Image (optimized) */}
        <div className="absolute inset-0 -z-0 select-none pointer-events-none opacity-40">
          <Image
            src={heroImage}
            alt="Engineering background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        {/* Radial & Linear Overlays for Premium Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950/95" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/50 to-slate-950" />
        
        {/* Animated Background Glow Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-engineering-teal/15 rounded-full blur-[80px] animate-pulse-slow -z-10" />

        {/* Content Wrapper */}
        <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          
          {/* Left Side: Main Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-engineering-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-engineering-orange"></span>
              </span>
              Global Engineering Partners
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Engineering{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-engineering-orange to-orange-400 font-black">
                Excellence
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-200 mt-2">
                Delivered Globally
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              We provide detailed engineering services to EPC, OEM, and PMC as
              long-term projects. Your virtual extended arm for innovative
              engineering solutions.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto lg:mx-0">
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">
                <div className="p-3 bg-engineering-orange rounded-lg shadow-lg group-hover:shadow-engineering-orange/20 transition-all">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">
                    15+
                  </div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Countries Served
                  </div>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">
                <div className="p-3 bg-engineering-teal rounded-lg shadow-lg group-hover:shadow-engineering-teal/20 transition-all">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">
                    95%
                  </div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Repeat Business
                  </div>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">
                <div className="p-3 bg-engineering-orange rounded-lg shadow-lg group-hover:shadow-engineering-orange/20 transition-all">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">
                    20+
                  </div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Announcement Card */}
          <div className="w-full lg:w-[360px] flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40 order-2 relative overflow-hidden group">
            {/* Background color glow inside card */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-engineering-orange/20 text-engineering-orange border border-engineering-orange/30 rounded-md">
                Weekly Seminar
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
              📢 Saturday Seminar
            </h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Enhance your drafting workflows and learn detailed industry calculations with our technical experts.
            </p>

            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
              Registration closes in:
            </div>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="bg-slate-950/60 border border-white/5 rounded-lg py-2 text-center">
                <div className="text-lg font-extrabold text-white font-mono leading-none">
                  {timeLeft ? String(timeLeft.days).padStart(2, "0") : "--"}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Days</div>
              </div>
              <div className="bg-slate-950/60 border border-white/5 rounded-lg py-2 text-center">
                <div className="text-lg font-extrabold text-white font-mono leading-none">
                  {timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--"}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Hrs</div>
              </div>
              <div className="bg-slate-950/60 border border-white/5 rounded-lg py-2 text-center">
                <div className="text-lg font-extrabold text-white font-mono leading-none">
                  {timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--"}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Mins</div>
              </div>
              <div className="bg-slate-950/60 border border-white/5 rounded-lg py-2 text-center">
                <div className="text-lg font-extrabold text-white font-mono leading-none">
                  {timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--"}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">Secs</div>
              </div>
            </div>

            <Link
              href="/register"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:brightness-110 transition-all text-center flex items-center justify-center gap-2"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity select-none duration-300 z-10"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[9px] text-white/50 tracking-widest uppercase font-bold">
            Explore
          </span>
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-engineering-orange rounded-full animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
