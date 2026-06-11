"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Search, Trash2, Loader2, Pencil, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface DiagramItem {
  index: number;
  name: string;
  slug: string;
  url: string;
  alt: string;
  description: string;
}

export default function DiagramsPage() {
  const [diagrams, setDiagrams] = useState<DiagramItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  async function loadData() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("index", { ascending: true });
      if (error) throw error;
      setDiagrams(data || []);
    } catch (err: any) {
      toast.error("Failed to load records: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Check session on mount and load data
    async function init() {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        loadData();
      }
    }
    init();
  }, []);

  const handleDeleteDiagram = async (item: DiagramItem) => {
    if (!confirm(`Are you sure you want to delete "${item.name}"?`)) return;

    try {
      // Delete metadata from DB
      const { error: dbError } = await supabase
        .from("gallery_items")
        .delete()
        .eq("index", item.index);

      if (dbError) throw dbError;

      // Attempt to delete file from storage if it matches Supabase Storage patterns
      const fileUrlParts = item.url.split("/public/diagrams/");
      if (fileUrlParts.length > 1) {
        const storageFilename = decodeURIComponent(fileUrlParts[1]);
        await supabase.storage.from("diagrams").remove([storageFilename]);
      }

      toast.success(`Deleted "${item.name}".`);
      setDiagrams((prev) => prev.filter((d) => d.index !== item.index));
      
      // Dispatch event to refresh counts in sidebar layout
      window.dispatchEvent(new Event("admin-data-changed"));
    } catch (err: any) {
      toast.error("Deletion failed: " + err.message);
    }
  };

  const filteredDiagrams = diagrams.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDiagrams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredDiagrams.length);
  const paginatedDiagrams = filteredDiagrams.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Engineering Diagrams
          </h1>
          <p className="text-sm text-slate-500 font-light mt-1">
            Add or manage engineering diagrams on your site.
          </p>
        </div>
        <Link href="/admin/dashboard/diagrams/upload">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl h-10 shadow-sm transition-all">
            <Plus className="w-5 h-5 mr-2" />
            Upload Diagram
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {/* Search & Stats */}
        <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search diagrams by name or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border-slate-200 text-slate-900 pl-9 h-9 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
            />
          </div>
          <span className="text-xs text-slate-500 font-semibold">
            Total {diagrams.length} diagrams
          </span>
        </div>

        {/* List Table */}
        <Card className="bg-white border-slate-200 rounded-2xl overflow-hidden border shadow-sm">
          <div className="overflow-x-auto max-h-[600px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500 w-16">
                    ID
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Diagram Name
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Slug
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500 text-right w-24">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500 text-sm">
                      <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
                      Loading database records...
                    </td>
                  </tr>
                ) : filteredDiagrams.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500 text-sm">
                      No diagrams found matching your search.
                    </td>
                  </tr>
                ) : (
                  paginatedDiagrams.map((item) => (
                    <tr
                      key={item.index}
                      className="border-b border-slate-200 hover:bg-slate-50/40 transition-colors"
                    >
                      <td className="p-4 text-sm font-semibold text-slate-500">
                        #{item.index}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden relative shrink-0">
                            <img
                              src={item.url}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-semibold text-slate-800 truncate max-w-[300px]">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-xs text-slate-505 font-mono">
                        {item.slug}
                      </td>
                      <td className="p-4 text-right flex justify-end items-center space-x-1">
                        <Link href={`/admin/dashboard/diagrams/edit?index=${item.index}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                          >
                            <Pencil className="w-5 h-5" />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleDeleteDiagram(item)}
                          variant="ghost"
                          size="icon"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-slate-200 bg-slate-50">
              <div className="text-xs text-slate-500 font-medium">
                Showing <span className="font-semibold text-slate-700">{filteredDiagrams.length > 0 ? startIndex + 1 : 0}</span> to{" "}
                <span className="font-semibold text-slate-700">{endIndex}</span> of{" "}
                <span className="font-semibold text-slate-700">{filteredDiagrams.length}</span> entries
              </div>
              
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="h-8 rounded-lg border-slate-200 text-slate-600 hover:text-slate-800 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isNear = Math.abs(page - currentPage) <= 1;
                  const isEdge = page === 1 || page === totalPages;
                  
                  if (!isNear && !isEdge) {
                    if (page === 2 || page === totalPages - 1) {
                      return (
                        <span key={`ellipsis-${page}`} className="px-2 text-slate-400 text-xs select-none">
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded-lg ${
                        page === currentPage
                          ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                          : "border-slate-200 text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      {page}
                    </Button>
                  );
                })}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="h-8 rounded-lg border-slate-200 text-slate-600 hover:text-slate-800 disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
