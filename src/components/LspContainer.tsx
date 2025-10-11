import React, { useState } from "react";

const lspFiles = [
  { name: "Z-Value Zero", cmd: "0line", url: "/LSP/0line.lsp" },
  { name: "Convert 2D Text to 3D", cmd: "3Dtext", url: "/LSP/3DText.lsp" },
  {
    name: "Align Text (2mm – 3mm)",
    cmd: "AT",
    url: "/LSP/Align Text2mm to 3mm-at.lsp",
  },
  {
    name: "Incremental Array (User-Friendly)",
    cmd: "Incarray",
    url: "/LSP/Array - IncArray.lsp",
  },
  {
    name: "Convert Attribute to Text",
    cmd: "AttDefToText",
    url: "/LSP/AttDefToText.lsp",
  },
  { name: "Convert Circle to Xline", cmd: "C2X", url: "/LSP/C2X.lsp" },
  { name: "Cable Tray / Duct", cmd: "Duct", url: "/LSP/cable tray _ dect.lsp" },
  {
    name: "Background Color Change",
    cmd: "BLCC",
    url: "/LSP/color change-blcc.lsp",
  },
  { name: "Xref Tool", cmd: "C2X", url: "/LSP/Copy2XRefV1-c2x.lsp" },
  {
    name: "Delete Dimension",
    cmd: "deldim",
    url: "/LSP/Delete Dimension-deldim.lsp",
  },
  { name: "Delete Text", cmd: "deltext", url: "/LSP/Delete text-deltext.lsp" },
  {
    name: "Note Below Dimension",
    cmd: "NDIM",
    url: "/LSP/Dimension below note- NDIM.lsp",
  },
  {
    name: "Rotate Dimensions",
    cmd: "dimrotate",
    url: "/LSP/Dimension rotate-DIMROTATE.lsp",
  },
  {
    name: "Fix Dimension Overlap",
    cmd: "dimoverlap",
    url: "/LSP/DimensionOverlapV1-2.lsp",
  },
  {
    name: "Restore Original Dimension",
    cmd: "org",
    url: "/LSP/dimsion orginal.LSP",
  },
  {
    name: "Architectural Door (Single/Double)",
    cmd: "d1 / d2",
    url: "/LSP/DOOR.LSP",
  },
  { name: "Easy Cloud", cmd: "CD", url: "/LSP/Easyclouds.lsp" },
  { name: "Join Texts", cmd: "JT", url: "/LSP/joint text-JT.lsp" },
  { name: "Create Legend", cmd: "legend", url: "/LSP/LEGEND.LSP" },
  {
    name: "Length Measurement",
    cmd: "GTH",
    url: "/LSP/length measure-GTH.LSP",
  },
  { name: "Quick Number Entry", cmd: "5", url: "/LSP/Number enter - 5.lsp" },
  {
    name: "Replace Point with Block",
    cmd: "RPWP",
    url: "/LSP/ReplacePointsWithBlock-RPWB.LSP",
  },
  {
    name: "Reduce Opposite Space (Scale)",
    cmd: "CS",
    url: "/LSP/Space Reduce - CS.lsp",
  },
  { name: "Architectural Window", cmd: "sunwindow", url: "/LSP/SUNWINDOW.lsp" },
  { name: "Table Count", cmd: "count", url: "/LSP/table count-COUNT.lsp" },
  {
    name: "Export Table (AutoCAD → Excel)",
    cmd: "TE",
    url: "/LSP/TE_cad to xl TableExport.lsp",
  },
  {
    name: "Change Text Base Point",
    cmd: "LL",
    url: "/LSP/Text base point-ll.lsp",
  },
  {
    name: "Calculate Text Values",
    cmd: "call",
    url: "/LSP/Text Calculator - Call.lsp",
  },
  {
    name: "Fix Text Overlap",
    cmd: "txtoverlap",
    url: "/LSP/text overlap - TxtOverlap.VLX",
  },
  {
    name: "Convert Text to Attribute",
    cmd: "txt2att",
    url: "/LSP/TEXT2Attribute-TXT2ATT-1.lsp",
  },
  { name: "Match Text Properties", cmd: "txx", url: "/LSP/textmatch-TXX.LSP" },
  { name: "Remove Mask", cmd: "unmask", url: "/LSP/RemoveMask.lsp" },
  { name: "Isotext (with TAB)", cmd: "isotext", url: "/LSP/Isotext.lsp" },
  { name: "X Coordinate Tool", cmd: "xc", url: "/LSP/XCoordinate.lsp" },
  { name: "Y Coordinate Tool", cmd: "yc", url: "/LSP/YCoordinate.lsp" },
  {
    name: "Detach All Xrefs",
    cmd: "detachall",
    url: "/LSP/DetachAllXrefs.lsp",
  },
];

function LspContainer() {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch("https://formspree.io/f/xkgzlnvo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        const link = document.createElement("a");
        link.href = selectedFile.url;
        link.download = selectedFile.url.split("/").pop() || "file.lsp";
        link.click();

        setSelectedFile(null);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        📂 Available LISP Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lspFiles.map((file, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedFile(file)}
            className="p-4 w-full text-left bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
          >
            <p className="font-semibold text-blue-600 hover:underline">
              {file.name}
            </p>
            <span className="text-sm text-gray-500">
              Command: <code>{file.cmd}</code>
            </span>
          </button>
        ))}
      </div>

      {/* Email modal */}
      {selectedFile && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Enter your email to download: <br />
              <span className="text-blue-600">{selectedFile.name}</span>
            </h3>
            <form onSubmit={handleDownload} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-white border border-gray-300 p-2 rounded-md"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {loading ? "Submitting..." : "Download"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default LspContainer;
