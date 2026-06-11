"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Plus, Search, Trash2, Loader2, FileCode, Pencil } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface LspItem {
  id: number;
  name: string;
  cmd: string;
  url: string;
  filename: string;
}

export default function LspPage() {
  const [lspTools, setLspTools] = useState<LspItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  async function loadData() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("lsp_tools")
        .select("*")
        .order("id", { ascending: true });
      if (error) throw error;
      setLspTools(data || []);
    } catch (err: any) {
      toast.error("Failed to load records: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        loadData();
      }
    }
    init();
  }, []);

  const handleDeleteLsp = async (item: LspItem) => {
    if (!confirm(`Are you sure you want to delete "${item.name}"?`)) return;

    try {
      // Delete metadata from DB
      const { error: dbError } = await supabase
        .from("lsp_tools")
        .delete()
        .eq("id", item.id);

      if (dbError) throw dbError;

      // Delete file from storage
      await supabase.storage.from("lsp").remove([item.filename]);

      toast.success(`Deleted "${item.name}".`);
      setLspTools((prev) => prev.filter((l) => l.id !== item.id));
      
      // Dispatch event to refresh counts in sidebar layout
      window.dispatchEvent(new Event("admin-data-changed"));
    } catch (err: any) {
      toast.error("Deletion failed: " + err.message);
    }
  };

  const filteredLspTools = lspTools.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.cmd.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            AutoLISP Tools
          </h1>
          <p className="text-sm text-slate-500 font-light mt-1">
            Manage and upload AutoCAD AutoLISP scripts.
          </p>
        </div>
        <Link href="/admin/dashboard/lsp/upload">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl h-10 shadow-sm transition-all">
            <Plus className="w-5 h-5 mr-2" />
            Upload LISP Script
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {/* Search & Stats */}
        <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search LISP scripts by name or command..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border-slate-200 text-slate-900 pl-9 h-9 rounded-lg focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
            />
          </div>
          <span className="text-xs text-slate-550 font-semibold">
            Showing {filteredLspTools.length} of {lspTools.length}
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
                    Tool Name
                  </th>
                  <th className="p-4 text-xs font-semibold uppercase text-slate-500">
                    Command
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
                ) : filteredLspTools.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-500 text-sm">
                      No LISP scripts found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredLspTools.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-slate-200 hover:bg-slate-50/40 transition-colors"
                    >
                      <td className="p-4 text-sm font-semibold text-slate-500">
                        #{item.id}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                            <FileCode className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800 truncate max-w-[300px]">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-xs">
                        <code className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded text-blue-600 font-mono">
                          {item.cmd}
                        </code>
                      </td>
                      <td className="p-4 text-right flex justify-end items-center space-x-1">
                        <Link href={`/admin/dashboard/lsp/edit?id=${item.id}`}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
                          >
                            <Pencil className="w-5 h-5" />
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleDeleteLsp(item)}
                          variant="ghost"
                          size="icon"
                          className="text-red-650 hover:text-red-700 hover:bg-red-50 rounded-lg"
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
        </Card>
      </div>
    </div>
  );
}
