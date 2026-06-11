"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface LspItem {
  id: number;
  name: string;
  cmd: string;
  url: string;
  filename: string;
}

function EditLspForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idStr = searchParams.get("id");
  const id = idStr ? parseInt(idStr, 10) : null;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [currentLsp, setCurrentLsp] = useState<LspItem | null>(null);

  // Form States
  const [lspName, setLspName] = useState("");
  const [lspCmd, setLspCmd] = useState("");
  const [lspFile, setLspFile] = useState<File | null>(null);

  useEffect(() => {
    if (id === null || isNaN(id)) {
      toast.error("Invalid LISP tool ID provided.");
      router.push("/admin/dashboard/lsp");
      return;
    }

    async function loadLsp() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("lsp_tools")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        if (!data) {
          toast.error("LISP tool not found.");
          router.push("/admin/dashboard/lsp");
          return;
        }

        setCurrentLsp(data);
        setLspName(data.name || "");
        setLspCmd(data.cmd || "");
      } catch (err: any) {
        toast.error("Error loading LISP script: " + err.message);
        router.push("/admin/dashboard/lsp");
      } finally {
        setLoading(false);
      }
    }

    loadLsp();
  }, [id, router]);

  const handleEditLsp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id === null || !currentLsp) return;

    if (!lspName || !lspCmd) {
      toast.error("Please fill in Name and Command Shortcut.");
      return;
    }

    setSaving(true);
    try {
      let publicUrl = currentLsp.url;
      let filename = currentLsp.filename;
      let oldFilenameToDelete: string | null = null;

      // 1. If a new file was uploaded, save it to storage and replace filename/URL
      if (lspFile) {
        const bucketName = "lsp";
        const newFilename = `${Date.now()}-${lspFile.name}`;
        
        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(newFilename, lspFile, {
            upsert: false,
          });

        if (uploadError) throw uploadError;

        // Retrieve public URL for the new file
        const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(newFilename);
        publicUrl = urlData.publicUrl;
        filename = newFilename;

        // Track the old filename to delete after DB update
        oldFilenameToDelete = currentLsp.filename;
      }

      // 2. Update metadata in DB
      const updatedLsp = {
        name: lspName,
        cmd: lspCmd,
        url: publicUrl,
        filename,
      };

      const { error: dbError } = await supabase
        .from("lsp_tools")
        .update(updatedLsp)
        .eq("id", id);

      if (dbError) throw dbError;

      // 3. Delete old file from storage if updated successfully
      if (oldFilenameToDelete) {
        await supabase.storage.from("lsp").remove([oldFilenameToDelete]);
      }

      toast.success(`LISP tool "${lspName}" updated successfully!`);

      // Dispatch event to refresh counts in sidebar layout
      window.dispatchEvent(new Event("admin-data-changed"));

      // Redirect back to listing
      router.push("/admin/dashboard/lsp");
    } catch (err: any) {
      toast.error("Update failed: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-slate-500">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-2" />
        <p className="text-sm font-light">Loading script details...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3">
        <Link
          href="/admin/dashboard/lsp"
          className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Edit LISP Script
          </h1>
          <p className="text-xs text-slate-505 font-light mt-0.5">
            Modify the fields below to update the published AutoCAD script.
          </p>
        </div>
      </div>

      <Card className="bg-white border-slate-200 rounded-2xl shadow-sm border overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50 p-6">
          <CardTitle className="text-lg text-slate-900 font-bold">
            Edit Script Details
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs mt-1">
            You can modify the name, keyboard shortcut, or optionally replace the `.lsp` / `.vlx` file itself.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleEditLsp} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lspName" className="text-xs font-semibold text-slate-700">
                  Tool Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lspName"
                  value={lspName}
                  onChange={(e) => setLspName(e.target.value)}
                  required
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lspCmd" className="text-xs font-semibold text-slate-700">
                  Command Shortcut <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lspCmd"
                  value={lspCmd}
                  onChange={(e) => setLspCmd(e.target.value)}
                  required
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs">
                <span className="font-semibold text-slate-700 block mb-1">Current File:</span>
                <code className="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-800 font-mono text-[11px] truncate max-w-full block">
                  {currentLsp?.filename}
                </code>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">
                  Replace LISP Script File (Optional)
                </Label>
                <div className="border border-dashed border-slate-200 hover:border-blue-500/60 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 relative">
                  <Input
                    type="file"
                    accept=".lsp,.vlx"
                    onChange={(e) => setLspFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                  />
                  <Upload className="w-8 h-8 text-slate-400 mb-2" />
                  <p className="text-sm text-slate-600 text-center font-light">
                    {lspFile ? (
                      <span className="font-semibold text-blue-600 truncate max-w-[350px] block">
                        {lspFile.name}
                      </span>
                    ) : (
                      "Click or drag a new LISP script here to replace the current one"
                    )}
                  </p>
                  <span className="text-xs text-slate-400 mt-1.5">
                    Leave empty to keep current file. LSP or VLX format up to 2MB
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-3">
              <Link href="/admin/dashboard/lsp">
                <Button type="button" variant="outline" className="border-slate-200 rounded-xl h-10 px-5 text-slate-700">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl h-10 px-6 shadow-sm transition-all"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function EditLspPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[300px] text-slate-500">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-2" />
        <p className="text-sm font-light">Loading edit screen...</p>
      </div>
    }>
      <EditLspForm />
    </Suspense>
  );
}
