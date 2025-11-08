"use client";

import Image from "next/image";
import { useState } from "react";

// 🧾 Full gallery array (name + image URL + index)
const galleryItems = [
  { index: 1, name: "Cable tray elbow section", url: "/trenches/2014-01-23 12.29.16.jpg" },
  { index: 2, name: "Vertical Cable Tray Installation", url: "/trenches/20150919_113342.jpg" },
  { index: 3, name: "Cable Trench Area", url: "/trenches/20150919_113750.jpg" },
  { index: 4, name: "Multi layer cable tray", url: "/trenches/20150919_124335.jpg" },
  { index: 5, name: "Cable Tray Support Structure", url: "/trenches/20150919_170212.jpg" },
  { index: 6, name: "Cable Tray Routing System", url: "/trenches/249.JPG" },
  { index: 7, name: "Overhead Cable Tray Installation", url: "/trenches/250.JPG" },
  { index: 8, name: "400kv switchyard isolator & Earth switch", url: "/trenches/400kV Switchyard Isolator & Earth Switch.jpg" },
  { index: 9, name: "A Row & Trf yard", url: "/trenches/A Row and Tfr yard.jpg" },
  { index: 10, name: "A Row", url: "/trenches/A Row.jpg" },
  { index: 11, name: "Battery Rack", url: "/trenches/Battery rack.JPG" },
  { index: 12, name: "Battery Room", url: "/trenches/Battery room (2).jpg" },
  { index: 13, name: "Battery Bank Room", url: "/trenches/Battery room.JPG" },
  { index: 14, name: "Cabinet", url: "/trenches/Cabinet-3.jpg" },
  { index: 15, name: "Transformer Cable Connection Setup", url: "/trenches/Cable connect with transformer.jpg" },
  { index: 16, name: "Transformer Bushing Connection", url: "/trenches/CABLE EARTH TRUCK.JPG" },
  { index: 17, name: "Cable Rack Holder", url: "/trenches/Cable rack holder.jpg" },
  { index: 18, name: "Cable Rack 1", url: "/trenches/Cable Rack1.jpg" },
  { index: 19, name: "Cable Rack 2", url: "/trenches/Cable Rack3.jpg" },
  { index: 20, name: "Cable Tray Raiser", url: "/trenches/cable tray riser.jpg" },
  { index: 21, name: "Cable Tray Routing", url: "/trenches/Cable tray routing.jpg" },
  { index: 22, name: "Lightning Arrester", url: "/trenches/Captures.PNG" },
  { index: 23, name: "CCCW Pump with Earthing", url: "/trenches/CCCW - pump along with earthing details.jpg" },
  { index: 24, name: "CCCW Structural Arrangement for ACHE", url: "/trenches/CCCW - structural arrangement for ACHE.jpg" },
  { index: 25, name: "Control Panel", url: "/trenches/Control panel.jpg" },
  { index: 26, name: "LV/MV Power Cable Entry Arrangement", url: "/trenches/DSC00073.JPG" },
  { index: 27, name: "Cable Tray Installation with Power Cables", url: "/trenches/DSC01035.JPG" },
  { index: 28, name: "Cable Tray Support Structure", url: "/trenches/DSC01146.JPG" },
  { index: 29, name: "Earthing Busbar Installation", url: "/trenches/DSC01481.JPG" },
  { index: 30, name: "Structure Earthing Connection", url: "/trenches/DSC01566.JPG" },
  { index: 31, name: "CCCW Pump House Layout", url: "/trenches/DSC01876.JPG" },
  { index: 32, name: "Outdoor Cable Rack Supporting Structure", url: "/trenches/DSC02040.JPG" },
  { index: 33, name: "Raised Floor Installation Work", url: "/trenches/DSC07117.JPG" },
  { index: 34, name: "Outdoor Filtration and Pumping Unit", url: "/trenches/DSCN0469.JPG" },
  { index: 35, name: "Earth Pipe 1", url: "/trenches/Earth Pipe-1.jpg" },
  { index: 36, name: "Earth Pipe 2", url: "/trenches/Earth Pipe-2.jpg" },
  { index: 37, name: "Earth Pit", url: "/trenches/earth pit.jpg" },
  { index: 38, name: "Earth Rod", url: "/trenches/earth rod at 220kV (2).jpg" },
  { index: 39, name: "Earth Rod 220KV", url: "/trenches/earth rod at 220kV.jpg" },
  { index: 40, name: "Multi Tier Cable Tray Support System", url: "/trenches/EPS-0155.jpg" },
  { index: 41, name: "Equipment Earthing", url: "/trenches/Equipment Earthing.jpg" },
  { index: 42, name: "FD Fan Body Earth", url: "/trenches/FD fan Body earth.jpg" },
  { index: 43, name: "FO Treatment Area", url: "/trenches/FO treatment area.jpg" },
  { index: 44, name: "Underground Cable Duct Bank", url: "/trenches/Image034.jpg" },
  { index: 45, name: "Well Glass Luminaire Lamp", url: "/trenches/Image0444.jpg" },
  { index: 46, name: "Galvanized Iron (GI) pipe clamp", url: "/trenches/Image056.jpg" },
  { index: 47, name: "GI Pipe Support Clamp", url: "/trenches/Image057.jpg" },
  { index: 48, name: "Earth Flat Joint Connection", url: "/trenches/Image071.jpg" },
  { index: 49, name: "Cable Tray Support System", url: "/trenches/Image074.jpg" },
  { index: 50, name: "Transformer Base Earthing Connection", url: "/trenches/Image329.jpg" },
  { index: 51, name: "Lattice Tower Foundation with Cable Duct", url: "/trenches/Image603.jpg" },
  { index: 52, name: "Roof Earth Flat Connection", url: "/trenches/Image920.jpg" },
  { index: 53, name: "Cable and Pipe Rack Support Structure", url: "/trenches/IMAGE_00328.jpg" },
  { index: 54, name: "Underground Cable Duct Bank", url: "/trenches/IMG20220214143801.jpg" },
  { index: 55, name: "Underground Cable Trench Layout", url: "/trenches/IMG_0036.jpg" },
  { index: 56, name: "Cable Riser Arrangement", url: "/trenches/IMG_0713.JPG" },
  { index: 57, name: "Indoor Cable Tray", url: "/trenches/IMG_20220628_100559.jpg" },
  { index: 58, name: "Indoor Transformer", url: "/trenches/IMG_5212.JPG" },
  { index: 59, name: "Lightning Rod", url: "/trenches/IMG_5487.JPG" },
  { index: 60, name: "Outdoor Power Transformer Yard", url: "/trenches/IMG_5488.JPG" },
  { index: 61, name: "Main Plant Area Cable Routing", url: "/trenches/IMG_6272.JPG" },
  { index: 62, name: "Storage area", url: "/trenches/IMG_8092.JPG" },
  { index: 63, name: "Outdoor transformer", url: "/trenches/Indoor transformer.jpg" },
  { index: 64, name: "Pane Earthing in Swyd Control Building", url: "/trenches/Lightning rod.jpg" },
  { index: 65, name: "Pane Earthing in SWYD Control Building", url: "/trenches/LTL SDC13248 (2).JPG" },
  { index: 66, name: "Emergency Telephone Installation in Industrial Area", url: "/trenches/Main Plant area cable routing -5.jpg" },
  { index: 67, name: "Emergency Communication and Fire Safety Setup", url: "/trenches/Oil storage area.jpg" },
  { index: 68, name: "Emergency Telephone Point", url: "/trenches/Outdoor transformer.jpg" },
  { index: 69, name: "Cable Tray Raiser Along Boiler Column", url: "/trenches/pane earthing in swyd control building.jpg" },
  { index: 70, name: "LAPT Transformer Bus Duct", url: "/trenches/pane earthing in swyd control building1.jpg" },
  { index: 71, name: "NGR Bus Duct Connection", url: "/trenches/photo-29.jpg" },
  { index: 72, name: "Cable Gallery Below Control Room", url: "/trenches/photo-32.jpg" },
  { index: 73, name: "Cable Tray From SWGR Room", url: "/trenches/photo-39.jpg" },
  { index: 74, name: "Cable Tray Raiser To SWGR Room", url: "/trenches/pic1.jpg" },
  { index: 75, name: "Cable Tray And Cabling To Panel", url: "/trenches/pic15.jpg" },
  { index: 76, name: "Trays Above the Substation Control Panel Room", url: "/trenches/pic17.jpg" },
  { index: 77, name: "Vertical Cable Trays In Boiler Area", url: "/trenches/pic21.jpg" },
  { index: 78, name: "Cable Tray Raiser From ESP Area", url: "/trenches/pic22.jpg" },
  { index: 79, name: "Cable Tray Raiser To ESP Area", url: "/trenches/pic23.jpg" },
  { index: 80, name: "Field Control Box with Industrial Telephone", url: "/trenches/pic24.jpg" },
  { index: 81, name: "Industrial Tower with CCTV Camera and PA System", url: "/trenches/pic25.jpg" },
  { index: 82, name: "Overhead Cable Tray and Duct System", url: "/trenches/pic3.jpg" },
  { index: 83, name: "Outdoor Pipe Rack", url: "/trenches/pic6.jpg" },
  { index: 84, name: "EOT Crane with Control Panel and Wiring", url: "/trenches/pic7.jpg" },
  { index: 85, name: "Substation Battery Backup System", url: "/trenches/PICT1549.JPG" },
  { index: 86, name: "Gas Turbine Power Plant Structure", url: "/trenches/PICT1550.JPG" },
  { index: 87, name: "Power Substation Yard", url: "/trenches/PICT1560.JPG" },
  { index: 88, name: "Rooftop", url: "/trenches/Pipe rack.JPG" },
];

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
