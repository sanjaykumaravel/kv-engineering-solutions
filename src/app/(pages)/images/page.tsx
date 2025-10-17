"use client";

import Image from "next/image";
import { useState } from "react";

// ✅ Define all image filenames manually (from your directory listing)
const images = [
  "2014-01-23 12.29.16.jpg",
  "20150919_113342.jpg",
  "20150919_113750.jpg",
  "20150919_124335.jpg",
  "20150919_170212.jpg",
  "249.JPG",
  "250.JPG",
  "400kV Switchyard Isolator & Earth Switch.jpg",
  "A Row and Tfr yard.jpg",
  "A Row.jpg",
  "Battery rack.JPG",
  "Battery room (2).jpg",
  "Battery room.JPG",
  "Cabinet-3.jpg",
  "Cable connect with transformer.jpg",
  "CABLE EARTH TRUCK.JPG",
  "Cable rack holder.jpg",
  "Cable Rack1.jpg",
  "Cable Rack3.jpg",
  "cable tray riser.jpg",
  "Cable tray routing.jpg",
  "Captures.PNG",
  "CCCW - pump along with earthing details.jpg",
  "CCCW - structural arrangement for ACHE.jpg",
  "Control panel.jpg",
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
  "Earth Pipe-2.jpg",
  "earth pit.jpg",
  "earth rod at 220kV (2).jpg",
  "earth rod at 220kV.jpg",
  "EPS-0155.jpg",
  "Equipment Earthing.jpg",
  "FD fan Body earth.jpg",
  "FO treatment area.jpg",
  "Image034.jpg",
  "Image0444.jpg",
  "Image056.jpg",
  "Image057.jpg",
  "Image071.jpg",
  "Image074.jpg",
  "Image329.jpg",
  "Image603.jpg",
  "Image920.jpg",
  "IMAGE_00328.jpg",
  "IMG20220214143801.jpg",
  "IMG_0036.jpg",
  "IMG_0713.JPG",
  "IMG_20220628_100559.jpg",
  "IMG_5212.JPG",
  "IMG_5487.JPG",
  "IMG_5488.JPG",
  "IMG_6272.JPG",
  "IMG_8092.JPG",
  "Indoor transformer.jpg",
  "Lightning rod.jpg",
  "LTL SDC13248 (2).JPG",
  "Main Plant area cable routing -5.jpg",
  "Oil storage area.jpg",
  "Outdoor transformer.jpg",
  "pane earthing in swyd control building.jpg",
  "pane earthing in swyd control building1.jpg",
  "photo-29.jpg",
  "photo-32.jpg",
  "photo-39.jpg",
  "pic1.jpg",
  "pic15.jpg",
  "pic17.jpg",
  "pic21.jpg",
  "pic22.jpg",
  "pic23.jpg",
  "pic24.jpg",
  "pic25.jpg",
  "pic3.jpg",
  "pic6.jpg",
  "pic7.jpg",
  "PICT1549.JPG",
  "PICT1550.JPG",
  "PICT1560.JPG",
  "Pipe rack.JPG",
  "QD0012004.JPG",
  "QD0012031.JPG",
  "r001-025.jpg",
  "r001-029.jpg",
  "roof top.webp",
  "Tabouk spare cable trays 001.jpg",
  "Tabouk spare cable trays 002.jpg",
  "Tabouk spare cable trays 003.jpg",
  "Tabouk spare cable trays 004.jpg",
  "Tabouk spare cable trays 005.jpg",
  "Tabouk spare cable trays 006.jpg",
  "Tabouk spare cable trays 008.jpg",
  "Tabouk spare cable trays 009.jpg",
  "Tabouk spare cable trays 010.jpg",
  "Tabouk spare cable trays 016.jpg",
  "Tabouk spare cable trays 020.jpg",
  "Transformer handling.jpg",
  "Transformer wheel lock.jpg",
  "Trenches - Transformer yard-5.jpg",
];

// ✅ Helper: Convert filename into a readable title
const formatName = (name: string) =>
  name
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/[_-]+/g, " ") // replace underscores/dashes
    .replace(/\s+/g, " ")
    .trim();

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        KV Engineering Solutions –  Site images
      </h1>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((file) => (
          <div
            key={file}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
            onClick={() => setSelected(`/trenches/${file}`)}
          >
            <Image
              src={`/trenches/${file}`}
              alt={file}
              width={400}
              height={300}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-medium text-gray-700 truncate">
                {formatName(file)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selected}
              alt="Selected"
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
