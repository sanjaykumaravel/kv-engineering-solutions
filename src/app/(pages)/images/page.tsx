"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "@/data/gallery-images";

// 🧠 Component
export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        KV Engineering Solutions – Site Images
      </h1>

      {/* 🖼️ Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {galleryItems.map(({ index, name, url }) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            onClick={() => setSelected(url)}
          >
            <Image
              src={url}
              alt={name}
              width={400}
              height={300}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-medium text-gray-700 truncate">
                {index}. {name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selected}
              alt="Preview"
              width={1200}
              height={900}
              className="object-contain w-auto h-auto max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white/70 text-gray-800 font-black rounded-full p-2 hover:bg-white transition"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
