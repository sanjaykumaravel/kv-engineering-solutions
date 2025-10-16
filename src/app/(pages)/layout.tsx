import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return ( 
    <html>
        <head></head>
        <body>
            <Header/>
             <main>
                {children}
             </main>
            <Footer/>
        </body>
    </html>
  );
}