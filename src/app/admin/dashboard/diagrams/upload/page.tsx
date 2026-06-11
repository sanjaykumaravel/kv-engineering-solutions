"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function UploadDiagramPage() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);

  // Form States
  const [diagName, setDiagName] = useState("");
  const [diagAlt, setDiagAlt] = useState("");
  const [diagDesc, setDiagDesc] = useState("");
  const [diagLocation, setDiagLocation] = useState("");
  const [diagMaterial, setDiagMaterial] = useState("");
  const [diagSpecs, setDiagSpecs] = useState(""); // Comma-separated
  const [diagDetailed, setDiagDetailed] = useState("");
  const [diagFile, setDiagFile] = useState<File | null>(null);

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/[\s_]+/g, "-") // Replace spaces/underscores with hyphens
      .replace(/^-+|-+$/g, ""); // Trim hyphens
  };

  const handleAddDiagram = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagName || !diagAlt || !diagDesc || !diagFile) {
      toast.error(
        "Please fill in Name, Alt, Description, and select an image file."
      );
      return;
    }

    setUploading(true);
    try {
      // 1. Get next index by checking current items
      const { data: currentItems, error: queryError } = await supabase
        .from("gallery_items")
        .select("index");
      if (queryError) throw queryError;
      
      const nextIndex =
        currentItems && currentItems.length > 0
          ? Math.max(...currentItems.map((d) => d.index)) + 1
          : 1;

      // 2. Upload file to storage
      const bucketName = "diagrams";
      const filename = `${Date.now()}-${diagFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filename, diagFile, {
          cacheControl: "31536000",
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // 3. Get Public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucketName).getPublicUrl(filename);

      // 4. Compute slug and specs array
      const slug = generateSlug(diagName);
      const specsArray = diagSpecs
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // 5. Save metadata to DB
      const newDiagram = {
        index: nextIndex,
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
        .insert([newDiagram]);

      if (dbError) throw dbError;

      toast.success(`Diagram "${diagName}" uploaded successfully!`);

      // Dispatch event to refresh counts in layout sidebar
      window.dispatchEvent(new Event("admin-data-changed"));

      // Redirect back to diagrams page
      router.push("/admin/dashboard/diagrams");
    } catch (err: any) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

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
            Upload New Diagram
          </h1>
          <p className="text-xs text-slate-500 font-light mt-0.5">
            Fill in the details to publish a new engineering diagram to the gallery.
          </p>
        </div>
      </div>

      <Card className="bg-white border-slate-200 rounded-2xl shadow-sm border overflow-hidden">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50 p-6">
          <CardTitle className="text-lg text-slate-900 font-bold">
            Diagram Metadata & Specifications
          </CardTitle>
          <CardDescription className="text-slate-500 text-xs mt-1">
            Ensure SEO details and specifications are accurate. Images are hosted on Supabase Storage.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleAddDiagram} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="diagName" className="text-xs font-semibold text-slate-700">
                  Name / Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="diagName"
                  placeholder="e.g. Center pivot joint connection"
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
                  placeholder="SEO-friendly description of what's in the image..."
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
                placeholder="Short summary displayed on the card..."
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
                  placeholder="e.g. Substation Yard"
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
                  placeholder="e.g. Galvanized Steel"
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
                placeholder="Seismic bracing, Hot-dip galvanized, Custom width"
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
                placeholder="Detailed installation guidelines, calculations, and reference standards..."
                value={diagDetailed}
                onChange={(e) => setDiagDetailed(e.target.value)}
                className="bg-white border-slate-200 text-slate-900 rounded-xl min-h-[140px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-slate-700">
                Diagram Image File <span className="text-red-500">*</span>
              </Label>
              <div className="border border-dashed border-slate-200 hover:border-blue-500/60 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 relative">
                <Input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setDiagFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 opacity-0 cursor-pointer h-full w-full"
                />
                <Upload className="w-10 h-10 text-slate-400 mb-3" />
                <p className="text-sm text-slate-600 text-center font-light">
                  {diagFile ? (
                    <span className="font-semibold text-blue-600 truncate max-w-[400px] block">
                      {diagFile.name}
                    </span>
                  ) : (
                    "Click or drag diagram image file here"
                  )}
                </p>
                <span className="text-xs text-slate-400 mt-1.5">
                  PNG, JPG, WEBP formats up to 5MB
                </span>
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
                disabled={uploading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl h-10 px-6 shadow-sm transition-all"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Uploading Diagram...
                  </>
                ) : (
                  <>
                    Publish Diagram
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
