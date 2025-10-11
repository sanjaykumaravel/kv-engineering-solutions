import "../index.css";
import Providers from "./providers";

export const metadata = {
  title: "KVS ENGINEERING",
  description: "Engineering services from concept to commissioning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
