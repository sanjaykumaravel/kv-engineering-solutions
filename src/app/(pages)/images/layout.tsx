import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Diagrams & Site Images | KV Engineering Solutions",
  description:
    "Explore our collection of detailed engineering diagrams, site trenches, cable trays, transformer yards, and installation photos.",
  openGraph: {
    title: "Engineering Diagrams & Site Images | KV Engineering Solutions",
    description:
      "Detailed gallery of engineering works including cable trenches, transformer yards, and more.",
    images: [
      {
        url: "https://wiqbzjiqnwfwmqjrlopx.supabase.co/storage/v1/object/public/diagrams/cable-trench-area.jpg",
        width: 800,
        height: 600,
        alt: "Cable Trench Area",
      },
    ],
  },
};

export default function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
