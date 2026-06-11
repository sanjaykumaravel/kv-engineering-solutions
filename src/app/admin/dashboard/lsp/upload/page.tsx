"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function UploadLspPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  // Form States
  const [lspName, setLspName] = useState("");
  const [lspCmd, setLspCmd] = useState("");
  const [lspFile, setLspFile] = useState<File | null>(null);

  const handleAddLsp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lspName || !lspCmd || !lspFile) {
      toast.error(
        "Please fill in Name, Command shortcut, and select a LISP file."
      );
      return;
    }

    setUploading(true);
    try {
      // 1. Get next ID by checking current tools
      const { data: currentTools, error: queryError } = await supabase
        .from("lsp_tools")
        .select("id");
      if (queryError) throw queryError;
      
      const nextId =
        currentTools && currentTools.length > 0
          ? Math.max(...currentTools.map((l) => l.id)) + 1
          : 1;

      // 2. Upload file to storage
      const bucketName = "lsp";
      const filename = `${Date.now()}-${lspFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filename, lspFile, {
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // 3. Get Public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(filename);

      // 4. Save metadata to DB
      const newLsp = {
        id: nextId,
        name: lspName,
        cmd: lspCmd,
        url: publicUrl,
        filename,
      };

      const { error: dbError } = await supabase
        .from("lsp_tools")
        .insert([newLsp]);

      if (dbError) throw dbError;

      toast.success(`LISP tool "${lspName}" uploaded successfully!`);

      // Dispatch event to refresh counts in layout sidebar
      window.dispatchEvent(new Event("admin-data-changed"));

      // Redirect back to LISP tools page
      router.push("/admin/dashboard/lsp");
    } catch (err: any) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

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
            Upload New LISP Script
          </h1>
          <p className="text-xs text-slate-500 font-light mt-0.5">
            Add a new AutoLISP script (.lsp or .vlx) and document its shorthand keyboard shortcut.
          </p>
        </div>
      </div>

      <Card className="bg-white border-slate-200 rounded-2xl shadow-sm border overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50 p-6">
          <CardTitle className="text-lg text-slate-900 font-bold">
            LISP Script Details
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs mt-1">
            Specify the command that triggers this script inside AutoCAD. File will be hosted on Supabase Storage.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleAddLsp} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lspName" className="text-xs font-semibold text-slate-700">
                  Tool Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lspName"
                  placeholder="e.g. Detach All Xrefs"
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
                  placeholder="e.g. detachall"
                  value={lspCmd}
                  onChange={(e) => setLspCmd(e.target.value)}
                  required
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-700">
                LISP Script File (.lsp, .vlx) <span className="text-red-500">*</span>
              </Label>
              <div className="border border-dashed border-slate-200 hover:border-blue-500/60 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 relative">
                <Input
                  type="file"
                  accept=".lsp,.vlx"
                  required
                  onChange={(e) => setLspFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                />
                <Upload className="w-10 h-10 text-slate-400 mb-3" />
                <p className="text-sm text-slate-600 text-center font-light">
                  {lspFile ? (
                    <span className="font-semibold text-blue-600 truncate max-w-[350px] block">
                      {lspFile.name}
                    </span>
                  ) : (
                    "Click or drag AutoLISP .lsp or .vlx file here"
                  )}
                </p>
                <span className="text-xs text-slate-400 mt-1.5">
                  LSP or VLX format up to 2MB
                </span>
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
                disabled={uploading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl h-10 px-6 shadow-sm transition-all"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Uploading Script...
                  </>
                ) : (
                  <>
                    Publish LISP Tool
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
