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
  { file: "DSC00073.JPG", name: "LV/MV Power Cable Entry Arrangement" },
  { file: "DSC01035.JPG", name: "Cable Tray Installation with Power Cables" },
  { file: "DSC01146.JPG", name: "Cable Tray Support Structure" },
  { file: "DSC01481.JPG", name: "Earthing Busbar Installation" },
  { file: "DSC01566.JPG", name: "Structure Earthing Connection" },
  { file: "DSC01876.JPG", name: "CCCW Pump House Layout" },
  { file: "DSC02040.JPG", name: "Outdoor Cable Rack Supporting Structure" },
  { file: "DSC07117.JPG", name: "Raised Floor Installation Work" },
  { file: "DSCN0469.JPG", name: "Outdoor Filtration and Pumping Unit" },
  { file: "Earth Pipe-1.jpg", name: "Earth Pipe 1" },
  { file: "Earth Pipe-2.jpg", name: "Earth Pipe 2" },
  { file: "earth pit.jpg", name: "Earth Pit" },
  { file: "earth rod at 220kV (2).jpg", name: "Earth Rod" },
  { file: "earth rod at 220kV.jpg", name: "Earth Rod 220KV" },
  { file: "EPS-0155.jpg", name: "Multi Tier Cable Tray Support System" },
  { file: "Equipment Earthing.jpg", name: "Equipment Earthing" },
  { file: "FD fan Body earth.jpg", name: "FD Fan Body Earth" },
  { file: "FO treatment area.jpg", name: "FO Treatment Area" },
  { file: "Image034.jpg", name: "Underground Cable Duct Bank" },
  { file: "Image0444.jpg", name: "Well Glass Luminaire Lamp" },
  { file: "Image056.jpg", name: "Galvanized Iron (GI) pipe clamp" },
  { file: "Image057.jpg", name: "GI Pipe Support Clamp" },
  { file: "Image071.jpg", name: "Earth Flat Joint Connection" },
  { file: "Image074.jpg", name: "Cable Tray Support System" },
  { file: "Image329.jpg", name: "Transformer Base Earthing Connection" },
  { file: "Image603.jpg", name: "Lattice Tower Foundation with Cable Duct" },
  { file: "Image920.jpg", name: "Roof Earth Flat Connection" },
  { file: "IMAGE_00328.jpg", name: "Cable and Pipe Rack Support Structure" },
  { file: "IMG20220214143801.jpg", name: "Underground Cable Duct Bank" },
  { file: "IMG_0036.jpg", name: "Underground Cable Trench Layout" },
  { file: "IMG_0713.JPG", name: "Cable Riser Arrangement" },
  { file: "IMG_20220628_100559.jpg", name: "Indoor Cable Tray" },
  { file: "IMG_5212.JPG", name: "Indoor Transformer" },
  { file: "IMG_5487.JPG", name: "Lightning Rod" },
  { file: "IMG_5488.JPG", name: "Outdoor Power Transformer Yard" },
  { file: "IMG_6272.JPG", name: "Main Plant Area Cable Routing" },
  { file: "IMG_8092.JPG", name: "Storage area" },
  { file: "Indoor transformer.jpg", name: "Outdoor transformer" },
  { file: "Lightning rod.jpg", name: "Pane Earthing in Swyd Control Building" },
  { file: "LTL SDC13248 (2).JPG", name: "Pane Earthing in SWYD Control Building" },
  { file: "Main Plant area cable routing -5.jpg", name: "Emergency Telephone Installation in Industrial Area" },
  { file: "Oil storage area.jpg", name: "Emergency Communication and Fire Safety Setup" },
  { file: "Outdoor transformer.jpg", name: "Emergency Telephone Point" },
  { file: "pane earthing in swyd control building.jpg", name: "Cable Tray Raiser Along Boiler Column" },
  { file: "pane earthing in swyd control building1.jpg", name: "LAPT Transformer Bus Duct" },
  { file: "photo-29.jpg", name: "NGR Bus Duct Connection" },
  { file: "photo-32.jpg", name: "Cable Gallery Below Control Room" },
  { file: "photo-39.jpg", name: "Cable Tray From SWGR Room" },
  { file: "pic1.jpg", name: "Cable Tray Raiser To SWGR Room" },
  { file: "pic15.jpg", name: "Cable Tray And Cabling To Panel" },
  { file: "pic17.jpg", name: "Trays Above the Substation Control Panel Room" },
  { file: "pic21.jpg", name: "Vertical Cable Trays In Boiler Area" },
  { file: "pic22.jpg", name: "Cable Tray Raiser From ESP Area" },
  { file: "pic23.jpg", name: "Cable Tray Raiser To ESP Area" },
  { file: "pic24.jpg", name: "Field Control Box with Industrial Telephone" },
  { file: "pic25.jpg", name: "Industrial Tower with CCTV Camera and PA System" },
  { file: "pic3.jpg", name: "Overhead Cable Tray and Duct System" },
  { file: "pic6.jpg", name: "Outdoor Pipe Rack" },
  { file: "pic7.jpg", name: "EOT Crane with Control Panel and Wiring" },
  { file: "PICT1549.JPG", name: "Substation Battery Backup System" },
  { file: "PICT1550.JPG", name: "Gas Turbine Power Plant Structure" },
  { file: "PICT1560.JPG", name: "Power Substation Yard" },
  { file: "Pipe rack.JPG", name: "Rooftop" },
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
