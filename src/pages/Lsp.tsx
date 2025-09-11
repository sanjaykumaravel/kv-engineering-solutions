import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const files = [
  { name: "0line.lsp", url: "kv-engineering-solutions/public/LSP/0line.lsp" },
  { name: "Product.pdf", url: "assets/downloads/product-catalog.pdf" },
  { name: "Brochure.pdf", url: "assets/downloads/service-brochure.pdf" },
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
