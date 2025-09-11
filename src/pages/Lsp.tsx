import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const files = [
  {
    name: "example.lsp",
    url: "/downloads/company-profile.pdf",
  },
  {
    name: "Product.pdf",
    url: "/downloads/product-catalog.pdf",
  },
  {
    name: " Brochure.pdf",
    url: "/downloads/service-brochure.pdf",
  },
];

const LspPage: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="max-w-2xl mx-auto my-8 p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Download LSP Files
        </h1>
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
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LspPage;
