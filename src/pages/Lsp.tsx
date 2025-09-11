import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const files = [
  { name: "Z - value Zero - command line type - 0line", url: "/public/LSP/0line.lsp" },
  { name: "2D text converted to 3D - command line type - 3Dtext", url: "/public/LSP/3DText.lsp" },
  { name: "Align text 2mm to 3mm - command line type - AT", url: "/public/LSP/Align Text2mm to 3mm-at.lsp" },
  { name: "user friendly array - command line type - Incarray", url: "/public/LSP/Array - IncArray.lsp" },

  { name: "Attribute to text convert - command line type - AttDefToText", url: "/public/LSP/AttDefToText.lsp" },
  { name: "C2X - command line type - C2X", url: "/public/LSP/C2X.lsp" },
  { name: "Cable tray - command line type - Duct", url: "/public/LSP/cable tray _ dect.lsp" },
  { name: "background color change - command line type - BLCC", url: "/public/LSP/color change-blcc.lsp" },

  { name: "xref - command line type - C2X", url: "/public/LSP/Copy2XRefV1-c2x.lsp" },
  { name: "Delete dimension - command line type - deldim", url: "/public/LSP/Delete Dimension-deldim.lsp" },
  { name: "delete text - command line type - deltext", url: "/public/LSP/Delete text-deltext.lsp" },
  { name: "Dimension below note - command line type - NDIM", url: "/public/LSP/Dimension below note- NDIM.lsp" },
  { name: "Dimensions rotate - command line type - dimrotate", url: "/public/LSP/Dimension rotate-DIMROTATE.lsp" },

  { name: "Dimension overlap - command line type - dimoverlap", url: "/public/LSP/DimensionOverlapV1-2.lsp" },
  { name: "dimension original - command line type - org", url: "/public/LSP/dimsion orginal.LSP" },
  { name: "architectural door single or double - command line type - d1/d2", url: "/public/LSP/DOOR.LSP" },
  { name: "Easy cloud - command line type - CD", url: "/public/LSP/Easyclouds.lsp" },
  { name: "text join - command line type - JT", url: "/public/LSP/joint text-JT.lsp" },
  
  { name: "legend - command line type - legend", url: "/public/LSP/LEGEND.LSP" },
  { name: "length measure - command line type - GTH", url: "/public/LSP/length measure-GTH.LSP" },
  { name: "Number enter - command line type - 5", url: "/public/LSP/Number enter - 5.lsp" },
  { name: "replace point with block - command line type - RPWP", url: "/public/LSP/ReplacePointsWithBlock-RPWB.LSP" },
  { name: "scale opposite space reduce - command line type - CS", url: "/public/LSP/Space Reduce - CS.lsp" },

  { name: "architecture window - command line type - sunwindow", url: "/public/LSP/SUNWINDOW.lsp" },
  { name: "table count - command line type - count", url: "/public/LSP/table count-COUNT.lsp" },
  { name: "table export acad to xls - command line type - TE", url: "/public/LSP/TE_cad to xl TableExport.lsp" },
  { name: "text base point change - command line type - LL", url: "/public/LSP/Text base point-ll.lsp" },
  { name: "calculate text - command line type - call", url: "/public/LSP/Text Calculator - Call.lsp" },

  { name: "text overlap - command line type - txtoverlap", url: "/public/LSP/text overlap - TxtOverlap.VLX" },
  { name: "text to attribute - command line type - txt2att", url: "/public/LSP/TEXT2Attribute-TXT2ATT-1.lsp" },
  { name: "text match - command line type - txx", url: "/public/LSP/textmatch-TXX.LSP" },
  
  
  
];

const LspPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgzlnvo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    }
  };

  return (
    <main>
      <Header />
      <div className="max-w-2xl mx-auto my-8 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Download LSP Files
        </h1>

        {!submitted ? (
          <div className="bg-white shadow rounded-lg p-6">
            <p className="mb-4 text-gray-600 text-center">
              Enter your email to access the downloads
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Continue
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {files.map((file) => (
                <li
                  key={file.url}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="text-gray-700 font-medium">{file.name}</span>
                  <a
                    href={file.url}
                    download
                    className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-700 transition"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default LspPage;
