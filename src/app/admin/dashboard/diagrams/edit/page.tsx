"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

interface DiagramItem {
  index: number;
  name: string;
  slug: string;
  url: string;
  alt: string;
  description: string;
  location?: string;
  material?: string;
  specifications?: string[];
  detailed_content?: string;
}

function EditDiagramForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const indexStr = searchParams.get("index");
  const index = indexStr ? parseInt(indexStr, 10) : null;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [currentDiagram, setCurrentDiagram] = useState<DiagramItem | null>(null);

  // Form States
  const [diagName, setDiagName] = useState("");
  const [diagAlt, setDiagAlt] = useState("");
  const [diagDesc, setDiagDesc] = useState("");
  const [diagLocation, setDiagLocation] = useState("");
  const [diagMaterial, setDiagMaterial] = useState("");
  const [diagSpecs, setDiagSpecs] = useState(""); // Comma-separated
  const [diagDetailed, setDiagDetailed] = useState("");
  const [diagFile, setDiagFile] = useState<File | null>(null);

  useEffect(() => {
    if (index === null || isNaN(index)) {
      toast.error("Invalid diagram index provided.");
      router.push("/admin/dashboard/diagrams");
      return;
    }

    async function loadDiagram() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("gallery_items")
          .select("*")
          .eq("index", index)
          .single();

        if (error) throw error;
        if (!data) {
          toast.error("Diagram not found.");
          router.push("/admin/dashboard/diagrams");
          return;
        }

        setCurrentDiagram(data);
        setDiagName(data.name || "");
        setDiagAlt(data.alt || "");
        setDiagDesc(data.description || "");
        setDiagLocation(data.location || "");
        setDiagMaterial(data.material || "");
        setDiagSpecs(data.specifications ? data.specifications.join(", ") : "");
        setDiagDetailed(data.detailed_content || "");
      } catch (err: any) {
        toast.error("Error loading diagram: " + err.message);
        router.push("/admin/dashboard/diagrams");
      } finally {
        setLoading(false);
      }
    }

    loadDiagram();
  }, [index, router]);

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleEditDiagram = async (e: React.FormEvent) => {
    e.preventDefault();
    if (index === null || !currentDiagram) return;

    if (!diagName || !diagAlt || !diagDesc) {
      toast.error("Please fill in Name, Alt, and Description.");
      return;
    }

    setSaving(true);
    try {
      let publicUrl = currentDiagram.url;
      let oldFilenameToDelete: string | null = null;

      // 1. If a new file was uploaded, save it to storage and replace URL
      if (diagFile) {
        const bucketName = "diagrams";
        const filename = `${Date.now()}-${diagFile.name}`;
        
        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(filename, diagFile, {
            cacheControl: "31536000",
            upsert: false,
          });

        if (uploadError) throw uploadError;

        // Retrieve public URL for the new image
        const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(filename);
        publicUrl = urlData.publicUrl;

        // Identify the old image to delete
        const oldFileParts = currentDiagram.url.split("/public/diagrams/");
        if (oldFileParts.length > 1) {
          oldFilenameToDelete = decodeURIComponent(oldFileParts[1]);
        }
      }

      // 2. Compute slug and specs array
      const slug = generateSlug(diagName);
      const specsArray = diagSpecs
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // 3. Update metadata in DB
      const updatedDiagram = {
        name: diagName,
        slug,
        url: publicUrl,
        alt: diagAlt,
        description: diagDesc,
        location: diagLocation || null,
        material: diagMaterial || null,
        specifications: specsArray.length > 0 ? specsArray : null,
        detailed_content: diagDetailed || null,
      };

      const { error: dbError } = await supabase
        .from("gallery_items")
        .update(updatedDiagram)
        .eq("index", index);

      if (dbError) throw dbError;

      // 4. Delete old file from storage if updated successfully
      if (oldFilenameToDelete) {
        await supabase.storage.from("diagrams").remove([oldFilenameToDelete]);
      }

      toast.success(`Diagram "${diagName}" updated successfully!`);

      // Dispatch event to refresh counts in sidebar layout
      window.dispatchEvent(new Event("admin-data-changed"));

      // Redirect back to listing
      router.push("/admin/dashboard/diagrams");
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
        <p className="text-sm font-light">Loading diagram details...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center space-x-3">
        <Link
          href="/admin/dashboard/diagrams"
          className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Edit Diagram
          </h1>
          <p className="text-xs text-slate-500 font-light mt-0.5">
            Modify the fields below to update the published engineering diagram.
          </p>
        </div>
      </div>

      <Card className="bg-white border-slate-200 rounded-2xl shadow-sm border overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50 p-6">
          <CardTitle className="text-lg text-slate-900 font-bold">
            Edit Metadata & Specifications
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs mt-1">
            Updating the name will update the page slug automatically. You can optionally replace the image file.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleEditDiagram} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="diagName" className="text-xs font-semibold text-slate-700">
                  Name / Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="diagName"
                  value={diagName}
                  onChange={(e) => setDiagName(e.target.value)}
                  required
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagAlt" className="text-xs font-semibold text-slate-700">
                  Alt Text (SEO Caption) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="diagAlt"
                  value={diagAlt}
                  onChange={(e) => setDiagAlt(e.target.value)}
                  required
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="diagDesc" className="text-xs font-semibold text-slate-700">
                Short Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="diagDesc"
                value={diagDesc}
                onChange={(e) => setDiagDesc(e.target.value)}
                required
                className="bg-white border-slate-200 text-slate-900 rounded-xl min-h-[80px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="diagLocation" className="text-xs font-semibold text-slate-700">
                  Location (Optional)
                </Label>
                <Input
                  id="diagLocation"
                  value={diagLocation}
                  onChange={(e) => setDiagLocation(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="diagMaterial" className="text-xs font-semibold text-slate-700">
                  Material (Optional)
                </Label>
                <Input
                  id="diagMaterial"
                  value={diagMaterial}
                  onChange={(e) => setDiagMaterial(e.target.value)}
                  className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="diagSpecs" className="text-xs font-semibold text-slate-700">
                Key Features / Specs (Comma separated)
              </Label>
              <Input
                id="diagSpecs"
                value={diagSpecs}
                onChange={(e) => setDiagSpecs(e.target.value)}
                className="bg-white border-slate-200 text-slate-900 rounded-xl h-10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diagDetailed" className="text-xs font-semibold text-slate-700">
                Technical Overview (Markdown / Detailed specifications page)
              </Label>
              <Textarea
                id="diagDetailed"
                value={diagDetailed}
                onChange={(e) => setDiagDetailed(e.target.value)}
                className="bg-white border-slate-200 text-slate-900 rounded-xl min-h-[140px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-semibold text-slate-700 block">
                Current Diagram Image
              </Label>
              {currentDiagram?.url && (
                <div className="w-48 h-32 rounded-xl border border-slate-200 overflow-hidden relative bg-slate-50 flex items-center justify-center">
                  <img
                    src={currentDiagram?.url}
                    alt={currentDiagram?.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">
                  Replace Diagram Image File (Optional)
                </Label>
                <div className="border border-dashed border-slate-200 hover:border-blue-500/60 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 relative">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setDiagFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                  />
                  <Upload className="w-8 h-8 text-slate-400 mb-2" />
                  <p className="text-sm text-slate-600 text-center font-light">
                    {diagFile ? (
                      <span className="font-semibold text-blue-600 truncate max-w-[350px] block">
                        {diagFile.name}
                      </span>
                    ) : (
                      "Click or drag a new image file to replace the current one"
                    )}
                  </p>
                  <span className="text-xs text-slate-400 mt-1.5">
                    Leave empty to keep current image. PNG, JPG, WEBP formats up to 5MB
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end space-x-3">
              <Link href="/admin/dashboard/diagrams">
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

export default function EditDiagramPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center min-h-[300px] text-slate-500">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-2" />
        <p className="text-sm font-light">Loading edit screen...</p>
      </div>
    }>
      <EditDiagramForm />
    </Suspense>
  );
}
