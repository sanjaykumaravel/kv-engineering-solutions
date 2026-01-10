"use client";

import Image from "next/image";
import Link from "next/link";
// import { useState } from "react"; // Removed as modal is gone
import { galleryItems } from "@/data/gallery-images";

// 🧠 Component
export default function Gallery() {
  // const [selected, setSelected] = useState<string | null>(null); // Removed modal state

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        KV Engineering Solutions – Site Images
      </h1>

      {/* 🖼️ Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {galleryItems.map(({ index, name, url, alt, slug }) => (
          <Link
            href={`/images/${slug}`}
            key={index}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
          >
            <div className="relative h-48 w-full overflow-hidden">
               <Image
                src={url}
                alt={alt || name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-4">
              <p className="text-sm font-bold text-gray-800 truncate mb-1">
                {name}
              </p>
              <p className="text-xs text-gray-500 line-clamp-2">
                {alt}
              </p>
              <div className="mt-3 text-blue-600 text-xs font-semibold group-hover:underline">
                View Details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
