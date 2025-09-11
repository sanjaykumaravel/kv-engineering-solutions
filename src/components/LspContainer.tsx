import React from "react";

const lspFiles = [
  { name: "Z-Value Zero", cmd: "0line" },
  { name: "Convert 2D Text to 3D", cmd: "3Dtext" },
  { name: "Align Text (2mm – 3mm)", cmd: "AT" },
  { name: "Incremental Array (User-Friendly)", cmd: "Incarray" },
  { name: "Convert Attribute to Text", cmd: "AttDefToText" },
  { name: "Convert Circle to Xline", cmd: "C2X" },
  { name: "Cable Tray / Duct", cmd: "Duct" },
  { name: "Background Color Change", cmd: "BLCC" },
  { name: "Xref Tool", cmd: "C2X" },
  { name: "Delete Dimension", cmd: "deldim" },
  { name: "Delete Text", cmd: "deltext" },
  { name: "Note Below Dimension", cmd: "NDIM" },
  { name: "Rotate Dimensions", cmd: "dimrotate" },
  { name: "Fix Dimension Overlap", cmd: "dimoverlap" },
  { name: "Restore Original Dimension", cmd: "org" },
  { name: "Architectural Door (Single/Double)", cmd: "d1 / d2" },
  { name: "Easy Cloud", cmd: "CD" },
  { name: "Join Texts", cmd: "JT" },
  { name: "Create Legend", cmd: "legend" },
  { name: "Length Measurement", cmd: "GTH" },
  { name: "Quick Number Entry", cmd: "5" },
  { name: "Replace Point with Block", cmd: "RPWP" },
  { name: "Reduce Opposite Space (Scale)", cmd: "CS" },
  { name: "Architectural Window", cmd: "sunwindow" },
  { name: "Table Count", cmd: "count" },
  { name: "Export Table (AutoCAD → Excel)", cmd: "TE" },
  { name: "Change Text Base Point", cmd: "LL" },
  { name: "Calculate Text Values", cmd: "call" },
  { name: "Fix Text Overlap", cmd: "txtoverlap" },
  { name: "Convert Text to Attribute", cmd: "txt2att" },
  { name: "Match Text Properties", cmd: "txx" },
  { name: "Remove Mask", cmd: "unmask" },
  { name: "Isotext (with TAB)", cmd: "isotext" },
  { name: "X Coordinate Tool", cmd: "xc" },
  { name: "Y Coordinate Tool", cmd: "yc" },
  { name: "Detach All Xrefs", cmd: "detahall" },
];

function LspContainer() {
  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        📂 Available LISP Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lspFiles.map((file, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {file.name}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Command: <code>{file.cmd}</code>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/lsp"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          👉 Go to Downloads Page
        </a>
      </div>
    </section>
  );
}

export default LspContainer;
