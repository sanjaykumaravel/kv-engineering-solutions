import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryItems } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, ChevronRight, CheckCircle2, MapPin, Hammer, BookOpen } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryItems.find((i) => i.slug === slug);

  if (!item) {
    return {
      title: "Image Not Found",
    };
  }

  const title = `${item.name} - Engineering Diagrams | KV Engineering Solutions`;
  const description = item.description || item.alt;
  const url = `https://www.ksvengineering.com/images/${item.slug}`;
  const imageUrl = `https://www.ksvengineering.com${item.url}`;

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

// Simple markdown to HTML converter for detailed content
function renderMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-gray-900 mt-6 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    // Bullet points
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-gray-600 mb-2"><span class="text-blue-600 mt-1.5">•</span><span>$1</span></li>')
    // Wrap consecutive list items
    .replace(/(<li.*?<\/li>\n?)+/g, '<ul class="space-y-1 mb-4 list-none">$&</ul>')
    // Paragraphs
    .replace(/\n\n(?!<)/g, '</p><p class="text-gray-600 leading-relaxed mb-4">')
    // Clean up
    .replace(/^\n/, '')
    .replace(/\n$/, '');
}

export default async function ImageDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = galleryItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  // Navigation Logic
  const currentIndex = galleryItems.findIndex(i => i.slug === slug);
  const totalItems = galleryItems.length;
  const prevItem = currentIndex > 0 ? galleryItems[currentIndex - 1] : null;
  const nextItem = currentIndex < totalItems - 1 ? galleryItems[currentIndex + 1] : null;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.ksvengineering.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Engineering Gallery",
            "item": "https://www.ksvengineering.com/images"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": item.name,
            "item": `https://www.ksvengineering.com/images/${item.slug}`
          }
        ]
      },
      {
        "@type": "ImageObject",
        "name": item.name,
        "description": item.description || item.alt,
        "contentUrl": `https://www.ksvengineering.com${item.url}`,
        "thumbnailUrl": `https://www.ksvengineering.com${item.url}`,
        "author": {
          "@type": "Organization",
          "name": "KV Engineering Solutions",
          "url": "https://www.ksvengineering.com"
        },
        "acquireLicensePage": "https://www.ksvengineering.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumb / Nav */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
             <div className="flex items-center text-sm text-gray-500">
                <Link href="/images" className="hover:text-gray-900 transition-colors">
                    Gallery
                </Link>
                <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{item.name}</span>
             </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/images"
          className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Image Column */}
            <div className="lg:col-span-8 space-y-8">
                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative group">
                     {/* Image */}
                    <figure className="relative w-full flex flex-col items-center justify-center">
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
                        <figcaption className="pb-4 mt-2 text-sm text-gray-500 text-center italic px-4">
                            {item.name}
                        </figcaption>
                    </figure>
                    
                     {/* Watermark/Label */}
                     <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-gray-500 shadow-sm border border-gray-200">
                        ksvengineering.com
                     </div>
                </div>

                {/* Detailed Content Section */}
                {item.detailedContent && (
                    <section aria-labelledby="technical-overview-heading" className="bg-white rounded-2xl border border-gray-100 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 id="technical-overview-heading" className="text-2xl font-bold text-gray-900">Technical Overview</h2>
                        </div>
                        <div 
                            className="prose prose-gray max-w-none"
                            dangerouslySetInnerHTML={{ 
                                __html: `<p class="text-gray-600 leading-relaxed mb-4">${renderMarkdown(item.detailedContent)}</p>` 
                            }}
                        />
                    </section>
                )}
            </div>

            {/* Sidebar Content Column */}
            <div className="lg:col-span-4 flex flex-col h-full">
                <div className="sticky top-8 space-y-8">
                    {/* Header Info */}
                    <div>
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase">
                                Image ID: {item.index}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                            {item.name}
                        </h1>

                        <div className="prose prose-gray text-gray-600 leading-relaxed text-sm">
                            <p>{item.description || "No specific description available for this image."}</p>
                        </div>
                    </div>

                     {/* Technical Specs Section (Conditionally Rendered) */}
                     {(item.specifications || item.material || item.location) && (
                         <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                             <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                 Technical Highlights
                             </h3>
                             
                             <div className="space-y-4">
                                {item.location && (
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase">Project Location</p>
                                            <p className="text-sm font-medium text-gray-900">{item.location}</p>
                                        </div>
                                    </div>
                                )}
                                
                                {item.material && (
                                    <div className="flex items-start">
                                        <Hammer className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase">Material / Finish</p>
                                            <p className="text-sm font-medium text-gray-900">{item.material}</p>
                                        </div>
                                    </div>
                                )}

                                {item.specifications && item.specifications.length > 0 && (
                                    <div className="pt-2">
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Key Features</p>
                                        <ul className="space-y-2">
                                            {item.specifications.map((spec, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
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
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">
                            Need this engineering solution?
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Contact our team for technical details or installation quotes related to this component.
                        </p>
                        <Link href={`/contact?subject=Inquiry: ${item.name} (ID: ${item.index})`}>
                            <Button className="w-full text-sm font-semibold h-12 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                                <Mail className="w-4 h-4 mr-2" />
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
                </div>

                {/* Navigation Links */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                    {prevItem ? (
                        <Link 
                            href={`/images/${prevItem.slug}`}
                            className="group flex flex-col items-start"
                        >
                            <span className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide group-hover:text-blue-500 transition-colors">
                                ← Previous
                            </span>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors line-clamp-1 max-w-[150px] sm:max-w-xs">
                                {prevItem.name}
                            </span>
                        </Link>
                    ) : (
                        <div /> 
                    )}

                    {nextItem && (
                        <Link 
                            href={`/images/${nextItem.slug}`}
                            className="group flex flex-col items-end text-right"
                        >
                            <span className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide group-hover:text-blue-500 transition-colors">
                                Next →
                            </span>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors line-clamp-1 max-w-[150px] sm:max-w-xs">
                                {nextItem.name}
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
      </div>

  );
}

