// main.tsx
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <HelmetProvider>
      <Analytics />
      <App />
    </HelmetProvider>
  );
} else {
  console.error("Root element not found");
}
