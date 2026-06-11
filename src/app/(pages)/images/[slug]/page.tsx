import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseServer";
import { GalleryItem } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Mail,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Hammer,
  BookOpen,
} from "lucide-react";
import { renderMarkdown } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: dbItem, error } = await supabase
    .from("gallery_items")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!dbItem || error) {
    return {
      title: "Image Not Found",
    };
  }

  const item: GalleryItem = {
    index: dbItem.index,
    name: dbItem.name,
    slug: dbItem.slug,
    url: dbItem.url,
    alt: dbItem.alt,
    description: dbItem.description,
    location: dbItem.location || undefined,
    material: dbItem.material || undefined,
    specifications: dbItem.specifications || undefined,
    detailedContent: dbItem.detailed_content || undefined,
  };

  const title = `${item.name} - Engineering Diagrams | KV Engineering Solutions`;
  const description = item.description || item.alt;
  const url = `https://www.ksvengineering.com/images/${item.slug}`;
  const imageUrl = item.url.startsWith("http")
    ? item.url
    : `https://www.ksvengineering.com${item.url}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: item.alt || item.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

// renderMarkdown utility imported from @/lib/markdown

export default async function ImageDetailPage({ params }: Props) {
  const { slug } = await params;
  const { data: dbItem, error } = await supabase
    .from("gallery_items")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!dbItem || error) {
    notFound();
  }

  const item: GalleryItem = {
    index: dbItem.index,
    name: dbItem.name,
    slug: dbItem.slug,
    url: dbItem.url,
    alt: dbItem.alt,
    description: dbItem.description,
    location: dbItem.location || undefined,
    material: dbItem.material || undefined,
    specifications: dbItem.specifications || undefined,
    detailedContent: dbItem.detailed_content || undefined,
  };

  // Navigation Logic
  const { data: navItems } = await supabase
    .from("gallery_items")
    .select("index, name, slug")
    .in("index", [item.index - 1, item.index + 1]);

  const prevItem = navItems?.find((i) => i.index === item.index - 1) || null;
  const nextItem = navItems?.find((i) => i.index === item.index + 1) || null;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ksvengineering.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Engineering Gallery",
            item: "https://www.ksvengineering.com/images",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: item.name,
            item: `https://www.ksvengineering.com/images/${item.slug}`,
          },
        ],
      },
      {
        "@type": "ImageObject",
        name: item.name,
        description: item.description || item.alt,
        contentUrl: item.url.startsWith("http")
          ? item.url
          : `https://www.ksvengineering.com${item.url}`,
        thumbnailUrl: item.url.startsWith("http")
          ? item.url
          : `https://www.ksvengineering.com${item.url}`,
        author: {
          "@type": "Organization",
          name: "KV Engineering Solutions",
          url: "https://www.ksvengineering.com",
        },
        acquireLicensePage: "https://www.ksvengineering.com/contact",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb / Nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-500">
            <Link
              href="/images"
              className="hover:text-slate-900 dark:hover:text-white font-semibold transition-colors"
            >
              Gallery
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">
              {item.name}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/images"
          className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-xl bg-background hover:bg-slate-100 text-sm font-bold text-foreground mb-8 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Image Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] relative group">
              {/* Image */}
              <figure className="relative w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={item.url}
                    alt={item.alt || item.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                  />
                </div>
                <figcaption className="w-full pb-4 pt-4 mt-2 text-sm font-semibold text-slate-700 dark:text-slate-300 text-center italic px-4 border-t border-black bg-white dark:bg-slate-900">
                  {item.name}
                </figcaption>
              </figure>

              {/* Watermark/Label */}
              <div className="absolute bottom-18 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-slate-500 shadow-sm border border-black">
                ksvengineering.com
              </div>
            </div>

            {/* Detailed Content Section */}
            {item.detailedContent && (
              <section
                aria-labelledby="technical-overview-heading"
                className="bg-white dark:bg-slate-900 rounded-3xl border border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-black pb-4">
                  <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/15">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2
                    id="technical-overview-heading"
                    className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
                  >
                    Technical Overview
                  </h2>
                </div>
                <div
                  className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base font-light leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `<div class="text-slate-650 dark:text-slate-300 leading-relaxed">${renderMarkdown(item.detailedContent)}</div>`,
                  }}
                />
              </section>
            )}
          </div>

          {/* Sidebar Content Column */}
          <div className="lg:col-span-4 flex flex-col h-full space-y-8">
            {/* Header Info */}
            <div className="bg-white dark:bg-slate-900 border border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Image ID: #{item.index}
                </span>
              </div>

              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight border-b border-black pb-3">
                {item.name}
              </h1>

              <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm font-light">
                <p>
                  {item.description ||
                    "No specific description available for this image."}
                </p>
              </div>
            </div>

            {/* Technical Specs Section (Conditionally Rendered) */}
            {(item.specifications || item.material || item.location) && (
              <div className="bg-white dark:bg-slate-900 border border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-black pb-3 tracking-tight">
                  Technical Highlights
                </h3>

                <div className="space-y-4">
                  {item.location && (
                    <div className="flex items-start">
                      <div className="p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-black mr-3 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Project Location
                        </p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  )}

                  {item.material && (
                    <div className="flex items-start">
                      <div className="p-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-black mr-3 shrink-0">
                        <Hammer className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Material / Finish
                        </p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.material}
                        </p>
                      </div>
                    </div>
                  )}

                  {item.specifications && item.specifications.length > 0 && (
                    <div className="pt-2 border-t border-black">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        {item.specifications.map((spec, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-slate-700 dark:text-slate-300 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-blue-50/50 dark:bg-slate-900/50 p-6 rounded-3xl border border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Need this engineering solution?
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-light leading-relaxed">
                Contact our team for technical details or installation quotes
                related to this component.
              </p>
              <Link
                href={`/contact?subject=Inquiry: ${item.name} (ID: ${item.index})`}
              >
                <Button className="w-full text-sm font-bold h-12 bg-black hover:bg-slate-900 text-white rounded-xl border border-black shadow active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links Re-styled as neat button cards */}
        <div className="mt-16 pt-8 border-t border-black grid grid-cols-2 gap-4">
          {prevItem ? (
            <Link
              href={`/images/${prevItem.slug}`}
              className="group flex flex-col items-start p-4 border border-black rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:scale-[0.98]"
            >
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                ← Previous
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mt-1">
                {prevItem.name}
              </span>
            </Link>
          ) : (
            <div className="invisible" />
          )}

          {nextItem ? (
            <Link
              href={`/images/${nextItem.slug}`}
              className="group flex flex-col items-end text-right p-4 border border-black rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:scale-[0.98]"
            >
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Next →
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mt-1">
                {nextItem.name}
              </span>
            </Link>
          ) : (
            <div className="invisible" />
          )}
        </div>
      </div>
    </div>
  );
}
