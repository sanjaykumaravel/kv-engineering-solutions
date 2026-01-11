import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryItems } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, ChevronRight } from "lucide-react";

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

export default async function ImageDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = galleryItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
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
            <div className="lg:col-span-8 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
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
            </div>

            {/* Sidebar Content Column */}
            <div className="lg:col-span-4 flex flex-col h-full">
                <div className="sticky top-8">
                    <div className="mb-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase">
                            Image ID: {item.index}
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                        {item.name}
                    </h1>

                    <div className="prose prose-gray text-gray-600 mb-8 leading-relaxed">
                        <p>{item.description || "No specific description available for this image."}</p>
                    </div>

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
        </div>
      </div>
    </div>
  );
}
