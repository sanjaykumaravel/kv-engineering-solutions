"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import {
  FileCode,
  Image as ImageIcon,
  LogOut,
  Loader2,
  Mail,
  Download,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<any>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [counts, setCounts] = useState({
    diagrams: 0,
    lsp: 0,
    downloads: 0,
    submissions: 0,
    seminars: 0,
  });

  // Check auth
  useEffect(() => {
    async function checkAuth() {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/admin/login");
      } else {
        setSession(data.session);
        setAuthChecking(false);
      }
    }
    checkAuth();
  }, [router]);

  // Load counts
  async function fetchCounts() {
    try {
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      const token = currentSession?.access_token;
      if (!token) return;

      const res = await fetch("/api/admin/counts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch counts");
      const data = await res.json();
      
      setCounts({
        diagrams: data.diagrams || 0,
        lsp: data.lsp || 0,
        downloads: data.downloads || 0,
        submissions: data.submissions || 0,
        seminars: data.seminars || 0,
      });
    } catch (err) {
      console.error("Error fetching counts:", err);
    }
  }

  useEffect(() => {
    if (!session) return;
    fetchCounts();

    // Listen for custom events to refresh counts dynamically
    window.addEventListener("admin-data-changed", fetchCounts);
    return () => {
      window.removeEventListener("admin-data-changed", fetchCounts);
    };
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Successfully logged out.");
    router.push("/admin/login");
  };

  const activeTab = (() => {
    if (pathname.startsWith("/admin/dashboard/diagrams")) return "diagrams";
    if (pathname.startsWith("/admin/dashboard/lsp")) return "lsp";
    if (pathname.startsWith("/admin/dashboard/downloads")) return "downloads";
    if (pathname.startsWith("/admin/dashboard/submissions")) return "submissions";
    if (pathname.startsWith("/admin/dashboard/seminars")) return "seminars";
    return "";
  })();

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
        <p className="text-sm text-slate-500 font-light">
          Loading Admin Console...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col md:flex-row">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center space-x-2.5 mb-10">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
              K
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">
              Admin Console
            </span>
          </div>

          <nav className="space-y-1">
            <Link
              href="/admin/dashboard/diagrams"
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "diagrams"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              <span>Diagrams ({counts.diagrams})</span>
            </Link>

            <Link
              href="/admin/dashboard/lsp"
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "lsp"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <FileCode className="w-5 h-5" />
              <span>LISP Tools ({counts.lsp})</span>
            </Link>

            <Link
              href="/admin/dashboard/downloads"
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "downloads"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Download className="w-5 h-5" />
              <span>Downloads ({counts.downloads})</span>
            </Link>

            <Link
              href="/admin/dashboard/submissions"
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "submissions"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Submissions ({counts.submissions})</span>
            </Link>

            <Link
              href="/admin/dashboard/seminars"
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "seminars"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Seminars ({counts.seminars})</span>
            </Link>
          </nav>
        </div>

        {/* User profile & Logout */}
        {session && (
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-4">
            <div className="truncate px-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Logged In As
              </p>
              <p
                className="text-xs font-semibold text-slate-600 truncate"
                title={session.user.email}
              >
                {session.user.email}
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full flex items-center justify-start text-red-650 hover:bg-red-50 hover:text-red-700 rounded-xl px-4 py-2.5"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
