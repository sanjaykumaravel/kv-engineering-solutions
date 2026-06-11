"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Cpu, Sparkles, Layers, ArrowRight, Zap, PlayCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredTools = [
  {
    name: "Auto Cable Tray Router",
    desc: "Instantly draft and align complex multi-level cable trays with dynamic bends, fittings, and proper clearances.",
    cmd: "CCT",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
    badge: "Most Popular",
  },
  {
    name: "FMB Sketch Blueprint",
    desc: "Generate highly accurate field measurement sketches and boundary outlines directly from raw database coordinates.",
    cmd: "FMB",
    icon: Cpu,
    color: "from-teal-500 to-emerald-500",
    badge: "Saves 4+ Hours",
  },
  {
    name: "Solar PV Layout Builder",
    desc: "Automate solar photovoltaic panel placements, calculate string paths, and output structured cabling blueprints.",
    cmd: "SPV",
    icon: Zap,
    color: "from-orange-500 to-amber-500",
    badge: "Advanced",
  },
];

const LspShowcase = () => {
  return (
    <section id="lsp-showcase" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950/40 bg-dot-pattern">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-engineering-orange/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-full inline-flex items-center gap-1.5 mb-4">
            <Terminal className="h-3.5 w-3.5" /> AutoCAD Automation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
            Supercharge CAD Drafting With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:to-indigo-400 font-black">LISP Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Stop drawing repetitive items manually. Our custom-programmed AutoCAD AutoLISP (.lsp) tools automate complex drafting computations, layouts, and formatting in milliseconds.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          <div className="absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 hidden md:block -translate-y-1/2 opacity-20 -z-10" />

          {/* Step 1 */}
          <div className="bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2 mt-2">Download & Load</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Grab any utility script from our library. Drag it into AutoCAD or use the <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-semibold">APPLOAD</code> command to initialize.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2 mt-2">Enter Command</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Type the custom shortcut (e.g. <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-semibold">CCT</code> or <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs font-semibold">FMB</code>) directly into your CAD command line.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-background/80 backdrop-blur-md border border-border/60 rounded-2xl p-6 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2 mt-2">Instant Execution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sit back as LISP draws coordinates, designs routing paths, calculates area, or exports data instantly, with 100% precision.
            </p>
          </div>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="group relative bg-background border border-border/80 hover:border-blue-500/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual hover border overlay */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${tool.color}`} />

                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} text-white shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {tool.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase text-foreground">Shortcut:</span>
                    <code className="bg-muted px-1.5 py-0.5 rounded font-mono font-bold text-blue-600 dark:text-blue-400">
                      {tool.cmd}
                    </code>
                  </div>
                  <span className="text-xs text-blue-600 hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400 font-bold flex items-center gap-1 select-none">
                    Preview Tool <PlayCircle className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <Button asChild size="lg" className="w-full sm:w-auto font-bold rounded-xl shadow-lg shadow-blue-600/15">
            <Link href="/lisp" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> Explore & Download Tools
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-bold rounded-xl border-border/80 bg-background/50 hover:bg-background">
            <a href="#contact" className="flex items-center gap-2">
              Need A Custom Script? <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LspShowcase;
