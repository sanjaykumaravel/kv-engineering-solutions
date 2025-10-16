// src/app/blocked/layout.tsx
import type { ReactNode } from "react";

export const metadata = {
  title: "Access Restricted | KSV Engineering",
  description: "This site is not available in your region.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlockedLayout({ children }: { children: ReactNode }) {
  return (
    // <html lang="en">
    //   <head>
    //     <meta charSet="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="robots" content="noindex, nofollow" />
    //     <title>Access Restricted</title>
    //   </head>
      <body className="blocked-container">
        <main>
            {children}
        </main>
        
      </body>
    // </html>
  );
}
