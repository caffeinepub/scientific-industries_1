import { Button } from "@/components/ui/button";
import { Atom, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11, 15, 20, 0.95)"
          : "rgba(11, 15, 20, 0.6)",
        backdropFilter: `blur(${scrolled ? 24 : 12}px)`,
        WebkitBackdropFilter: `blur(${scrolled ? 24 : 12}px)`,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                boxShadow: "0 0 20px rgba(45,125,255,0.4)",
              }}
            >
              <Atom className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-sm text-white tracking-widest uppercase">
                Scientific
              </span>
              <span
                className="font-display font-bold text-xs tracking-widest uppercase"
                style={{ color: "#1FB6FF" }}
              >
                Industries
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide nav-link"
                style={{ color: "#AAB4C0" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              className="font-semibold tracking-wide text-sm px-6 blue-glow"
              style={{
                background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                border: "none",
                color: "white",
              }}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="nav.primary_button"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-foreground p-2"
            onClick={() => {
              setMobileOpen(!mobileOpen);
            }}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{
            background: "rgba(11,15,20,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium"
              style={{ color: "#AAB4C0" }}
              onClick={() => {
                setMobileOpen(false);
              }}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full mt-2 font-semibold"
            style={{
              background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
              border: "none",
              color: "white",
            }}
            onClick={() => {
              setMobileOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="nav.primary_button"
          >
            Get Quote
          </Button>
        </div>
      )}
    </header>
  );
}
