import LspContainer from "@/components/LspContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoLISP Tools & AutoCAD Scripts | KSV Engineering",
  description:
    "Browse and download our complete suite of AutoCAD AutoLISP (LISP) tools, scripts, and utilities to automate your drawing and design workflows.",
  alternates: {
    canonical: "/lisp",
  },
};

export default function LspPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            CAD Automation & LISP Tools
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Boost your productivity with our collection of custom AutoCAD LISP
            scripts, designed to automate repetitive drafting and calculation
            tasks.
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
          <LspContainer />
        </div>
      </div>
    </div>
  );
}
