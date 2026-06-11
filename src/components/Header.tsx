"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetQuote = () => {
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contact");
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "LISP", href: "/lisp" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technology", href: "/technology" },
    { label: "Images", href: "/images" },
  ];

  const isHome = pathname === "/";
  const showSolidHeader = isScrolled || isMenuOpen;

  return (
    <header
      className={`z-50 w-full transition-all duration-300 ${
        isHome
          ? showSolidHeader
            ? "fixed top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border text-foreground"
            : "fixed top-0 bg-transparent border-b border-transparent text-white"
          : "sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border text-foreground"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 relative rounded-md overflow-hidden">
            <Image
              src="/lovable-uploads/658c083b-5ef7-40e2-ba6c-ecb609b7c0cb.png"
              alt="KSV Engineering logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className={`font-bold text-xl transition-colors duration-300 ${
              isHome && !showSolidHeader ? "text-white" : "text-foreground"
            }`}
          >
            KSV Engineering
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors duration-300 font-medium ${
                isHome && !showSolidHeader
                  ? "text-white/80 hover:text-white"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="default"
            className="shadow-professional"
            onClick={handleGetQuote}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isHome && !showSolidHeader ? "text-white" : "text-foreground"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleGetQuote();
                }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
