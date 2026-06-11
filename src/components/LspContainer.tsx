"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Search, FileCode, Download, X, Terminal, ArrowRight, Loader2, Sparkles, SlidersHorizontal } from "lucide-react";
import { isValidEmail, isRateLimited, setRateLimit } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LspFile {
  name: string;
  cmd: string;
  url: string;
  created_at?: string;
}

const categories = [
  { id: "all", name: "All Tools" },
  { id: "dimensions", name: "Dimensions" },
  { id: "text", name: "Text & Tags" },
  { id: "layouts", name: "Layouts & Trays" },
  { id: "coordinates", name: "Coordinates" },
];

function LspContainer() {
  const [lspFiles, setLspFiles] = useState<LspFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<LspFile | null>(null);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name">("newest");

  useEffect(() => {
    async function fetchLspFiles() {
      try {
        const { data, error } = await supabase
          .from("lsp_tools")
          .select("name, cmd, url, created_at")
          .order("id", { ascending: true });

        if (error) throw error;
        if (data) {
          setLspFiles(data);
        }
      } catch (err: any) {
        console.error("Error fetching LSP tools:", err.message);
      } finally {
        setFetching(false);
      }
    }
    fetchLspFiles();
  }, []);

  const filterByCategory = (file: LspFile) => {
    if (activeCategory === "all") return true;
    const name = file.name.toLowerCase();
    const cmd = file.cmd.toLowerCase();
    
    switch (activeCategory) {
      case "dimensions":
        return name.includes("dimension") || name.includes("dim") || cmd.includes("dim");
      case "text":
        return name.includes("text") || name.includes("txt") || name.includes("legend") || cmd.includes("txt") || cmd.includes("att");
      case "layouts":
        return name.includes("tray") || name.includes("duct") || name.includes("layout") || name.includes("door") || name.includes("window") || cmd.includes("duct");
      case "coordinates":
        return name.includes("coordinate") || name.includes("coord") || cmd.includes("xc") || cmd.includes("yc") || name.includes("zero");
      default:
        return true;
    }
  };

  const filteredFiles = lspFiles.filter(
    (file) =>
      (file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       file.cmd.toLowerCase().includes(searchQuery.toLowerCase())) &&
      filterByCategory(file)
  );

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (sortBy === "newest") {
      const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return dateB - dateA;
    }
    if (sortBy === "oldest") {
      const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
      const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
      return dateA - dateB;
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const triggerDownload = async (file: LspFile) => {
    try {
      const response = await fetch(file.url);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = file.url.split("/").pop() || "file.lsp";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      const downloadUrl = file.url.includes("?")
        ? `${file.url}&download=`
        : `${file.url}?download=`;
      window.open(downloadUrl, "_blank");
    }
  };

  const recordDownloadInDb = async (emailStr: string, toolName: string) => {
    try {
      await supabase.from("lsp_downloads").insert([
        {
          email: emailStr,
          tool_name: toolName,
        },
      ]);
    } catch (err) {
      console.error("Error recording download log:", err);
    }
  };

  const handleFileClick = async (file: LspFile) => {
    const savedEmail = localStorage.getItem("lsp_user_email");
    if (savedEmail) {
      await recordDownloadInDb(savedEmail, file.name);
      triggerDownload(file);
    } else {
      setSelectedFile(file);
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    // 1. Honeypot check (spam bots)
    if (honeypot) {
      // Fake a success for the bot
      setSelectedFile(null);
      setEmail("");
      setHoneypot("");
      return;
    }

    // 2. Client-side rate limit check (10 seconds cooldown between downloads)
    if (isRateLimited("lsp_download", 10000)) {
      alert("Please wait a few seconds before requesting another download.");
      return;
    }

    // 3. Email Validation & trimming
    const trimmedEmail = email.trim();
    if (!isValidEmail(trimmedEmail) || trimmedEmail.length > 254) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      localStorage.setItem("lsp_user_email", trimmedEmail);
      await recordDownloadInDb(trimmedEmail, selectedFile.name);
      setRateLimit("lsp_download");
      await triggerDownload(selectedFile);
      setSelectedFile(null);
      setEmail("");
      setHoneypot("");
    } catch (err) {
      alert("Error submitting email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      {!fetching && lspFiles.length > 0 && (
        <div className="space-y-6 mb-10">
          {/* Search bar & Sort Dropdown */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center px-4">
            <div className="relative flex-grow w-full">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools by name or shortcut..."
                className="block w-full pl-11 pr-10 py-3.5 border border-black bg-background text-foreground rounded-2xl placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-base shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 pr-3 flex items-center text-muted-foreground hover:text-foreground active:scale-95 transition-transform cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            {/* Sort Select */}
            <div className="w-full sm:w-48 shrink-0">
              <Select value={sortBy} onValueChange={(val: any) => setSortBy(val)}>
                <SelectTrigger className="w-full h-11 px-4 border border-black rounded-2xl focus:ring-0 focus:ring-offset-0 text-base font-semibold bg-background text-foreground shadow-sm hover:bg-slate-50 transition-colors">
                  <SelectValue placeholder="Sort Order" />
                </SelectTrigger>
                <SelectContent className="border border-black rounded-xl bg-background text-foreground shadow-lg">
                  <SelectItem value="newest" className="font-semibold cursor-pointer">Newest First</SelectItem>
                  <SelectItem value="oldest" className="font-semibold cursor-pointer">Oldest First</SelectItem>
                  <SelectItem value="name" className="font-semibold cursor-pointer">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swipeable Category Filter Pills (Mobile-friendly horizontal scroll) */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter by Category
            </div>
            <div className="w-full overflow-x-auto no-scrollbar flex items-center gap-2 px-4 py-2 justify-start md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all shrink-0 border border-black cursor-pointer select-none active:scale-95 ${
                    activeCategory === cat.id
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                      : "bg-background text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fetching/Loading State */}
      {fetching ? (
        <div className="text-center py-20 text-muted-foreground">
          <Loader2 className="h-10 w-10 animate-spin mx-auto text-blue-600 mb-4" />
          <p className="font-semibold text-lg">Loading available drawing tools...</p>
        </div>
      ) : lspFiles.length === 0 ? (
        <div className="text-center py-20 bg-background border border-dashed border-black rounded-3xl p-8 max-w-md mx-auto">
          <FileCode className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground font-medium text-lg">No LISP tools are registered yet.</p>
        </div>
      ) : (
        <>
          {sortedFiles.length === 0 ? (
            <div className="text-center py-16 bg-background border border-dashed border-black rounded-3xl max-w-xl mx-auto p-8">
              <p className="text-muted-foreground text-lg font-medium mb-3">
                No tools matches your filter &quot;{searchQuery || activeCategory}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-5 py-2.5 bg-black text-white rounded-xl font-bold shadow-md hover:brightness-105 active:scale-95 transition-all text-sm cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            /* Main Cards Grid - Mobile First (1 col) to Desktop (3-4 cols) */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
              {sortedFiles.map((file, idx) => (
                <div
                  key={idx}
                  onClick={() => handleFileClick(file)}
                  className="group flex flex-col justify-between p-6 bg-background border border-black hover:border-blue-600 dark:hover:border-blue-400 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer active:scale-[0.98]"
                >
                  <div className="space-y-4">
                    {/* Card Top: Symbol Badge */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded-xl border border-black">
                        <FileCode className="h-5 w-5" />
                      </div>
                      <span className="p-1.5 bg-slate-100 dark:bg-slate-900 border border-black rounded-lg text-xs font-bold text-foreground">
                        LISP Script
                      </span>
                    </div>

                    {/* Card Body: Title */}
                    <div>
                      <h3 className="font-bold text-foreground text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {file.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Bottom: Command trigger and Download action */}
                  <div className="mt-6 pt-4 border-t border-black flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Command:</span>
                      <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono font-bold text-xs text-black dark:text-white border border-black">
                        {file.cmd}
                      </code>
                    </div>
                    <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-xl border border-black shadow group-hover:bg-blue-600 dark:group-hover:bg-blue-400 group-hover:text-white transition-colors">
                      <Download className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Modern Glassmorphic Download Overlay Modal */}
      {selectedFile && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md z-50 animate-in fade-in duration-300">
          <div className="bg-background border-2 border-black p-6 sm:p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md relative overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Close trigger button */}
            <button
              onClick={() => setSelectedFile(null)}
              className="absolute top-4 right-4 p-1.5 text-foreground border border-black hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg active:scale-95 transition-all cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Heading */}
            <div className="flex items-center gap-3.5 mb-5 mt-2">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded-2xl border border-black">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  Verification Required
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Confirm email to access download
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-black">
                <span className="text-xs text-muted-foreground block mb-0.5 font-semibold uppercase tracking-wider">File Selected:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 text-sm sm:text-base">{selectedFile.name}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleDownload} className="space-y-4">
              {/* Honeypot field hidden from screen readers and visual users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field blank</label>
                <input
                  id="website"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  maxLength={254}
                  required
                  disabled={loading}
                  className="w-full p-3 bg-background border border-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-base disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="w-full sm:w-1/3 py-3 border border-black bg-background hover:bg-slate-100 dark:hover:bg-slate-900 text-foreground font-bold rounded-2xl active:scale-95 transition-all cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-2/3 py-3 bg-black hover:bg-slate-900 text-white font-bold rounded-2xl border border-black shadow active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Confirm & Download <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LspContainer;
