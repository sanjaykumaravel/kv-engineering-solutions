"use client";

import Image from "next/image";
import { useState } from "react";

// ✅ 1️⃣ Combined image-name array
const galleryItems = [
  { file: "2014-01-23 12.29.16.jpg", name: "Cable tray elbow section" },
  { file: "20150919_113342.jpg", name: "Vertical Cable Tray Installation" },
  { file: "20150919_113750.jpg", name: "Cable Trench Area" },
  { file: "20150919_124335.jpg", name: "Multi layer cable tray" },
  { file: "20150919_170212.jpg", name: "Cable Tray Support Structure" },
  { file: "249.JPG", name: "Cable Tray Routing System" },
  { file: "250.JPG", name: "Overhead Cable Tray Installation" },
  { file: "400kV Switchyard Isolator & Earth Switch.jpg", name: "400kv switchyard isolator & Earth switch" },
  { file: "A Row and Tfr yard.jpg", name: "A Row & Trf yard" },
  { file: "A Row.jpg", name: "A Row" },
  { file: "Battery rack.JPG", name: "Battery Rack" },
  { file: "Battery room (2).jpg", name: "Battery Room" },
  { file: "Battery room.JPG", name: "Battery Bank Room" },
  { file: "Cabinet-3.jpg", name: "Cabinet" },
  { file: "Cable connect with transformer.jpg", name: "Transformer Cable Connection Setup" },
  { file: "CABLE EARTH TRUCK.JPG", name: "Transformer Bushing Connection" },
  { file: "Cable rack holder.jpg", name: "Cable Rack Holder" },
  { file: "Cable Rack1.jpg", name: "Cable Rack 1" },
  { file: "Cable Rack3.jpg", name: "Cable Rack 2" },
  { file: "cable tray riser.jpg", name: "Cable Tray Raiser" },
  { file: "Cable tray routing.jpg", name: "Cable Tray Routing" },
  { file: "Captures.PNG", name: "Lightning Arrester" },
  { file: "CCCW - pump along with earthing details.jpg", name: "CCCW Pump with Earthing" },
  { file: "CCCW - structural arrangement for ACHE.jpg", name: "CCCW Structural Arrangement for ACHE" },
  { file: "Control panel.jpg", name: "Control Panel" },
  // 🧩 You can continue adding pairs here for named images...
];

// ✅ 2️⃣ If you still want to show *unnamed* images after named ones
const extraImages = [
  "DSC00073.JPG",
  "DSC01035.JPG",
  "DSC01146.JPG",
  "DSC01481.JPG",
  "DSC01566.JPG",
  "DSC01876.JPG",
  "DSC02040.JPG",
  "DSC07117.JPG",
  "DSCN0469.JPG",
  "Earth Pipe-1.jpg",
  // ...rest of your images
];

// ✅ 3️⃣ Helper for fallback name formatting
const formatName = (name: string) =>
  name
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  // Merge named + extra images
  const allItems = [
    ...galleryItems,
    ...extraImages.map((file) => ({ file, name: formatName(file) })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        KV Engineering Solutions – Site Images
      </h1>

      {/* 🖼️ Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allItems.map(({ file, name }) => (
          <div
            key={file}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            onClick={() => setSelected(`/trenches/${file}`)}
          >
            <Image
              src={`/trenches/${file}`}
              alt={name}
              width={400}
              height={300}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-medium text-gray-700 truncate">
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔍 Modal Viewer */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selected}
              alt={formatName(selected.split("/").pop() || "")}
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
