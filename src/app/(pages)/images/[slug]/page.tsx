"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { galleryItems } from "@/data/gallery-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function ImageDetailPage() {
  const { slug } = useParams();
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <Link
          href="/images"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Gallery
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-100 h-[400px] lg:h-[600px] flex items-center justify-center p-6">
              <Image
                src={item.url}
                alt={item.alt || item.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide">
                  Image #{item.index}
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {item.name}
              </h1>
              
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>{item.description}</p>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Interested in this solution?
                </h3>
                <p className="text-gray-500 mb-6">
                  Contact us to get a quote or learn more about how we implement this for your project.
                </p>
                <Link href={`/contact?subject=Inquiry about ${item.name}`}>
                  <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <Mail className="w-5 h-5 mr-2" />
                    Get a Quote for This Item
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
