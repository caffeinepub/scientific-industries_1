import { Atom } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const brands = ["Merck", "Sigma-Aldrich", "Millipore", "Whatman"];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      style={{
        background: "rgba(8,11,17,0.98)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                  boxShadow: "0 0 20px rgba(45,125,255,0.35)",
                }}
              >
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white tracking-widest uppercase">
                  Scientific
                </p>
                <p
                  className="font-display font-semibold text-xs tracking-widest uppercase"
                  style={{ color: "#1FB6FF" }}
                >
                  Industries
                </p>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed mb-3"
              style={{ color: "#6A7A8A" }}
            >
              Authorized chemical dealer since 1971. Serving researchers, pharma
              companies & industrial labs across India.
            </p>
            <p className="text-xs font-semibold" style={{ color: "#7A8A9A" }}>
              Founded 1971 · 55+ Years
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#AAB4C0" }}
            >
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 footer-link"
                  style={{ color: "#6A7A8A" }}
                  data-ocid="footer.link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Authorized brands */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#AAB4C0" }}
            >
              Authorized Dealer Of
            </p>
            <div className="flex flex-col gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-sm font-semibold"
                  style={{ color: "#1FB6FF" }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Contact snippet */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#AAB4C0" }}
            >
              Contact
            </p>
            <div className="space-y-2 text-sm" style={{ color: "#6A7A8A" }}>
              <p>92 Double Story,</p>
              <p>New Rajinder Nagar,</p>
              <p>New Delhi — 110060</p>
              <div className="pt-2 space-y-1">
                <a
                  href="tel:+919891491615"
                  className="block footer-link"
                  style={{ color: "#6A7A8A" }}
                  data-ocid="footer.link"
                >
                  +91 98914 91615
                </a>
                <a
                  href="tel:+919810076135"
                  className="block footer-link"
                  style={{ color: "#6A7A8A" }}
                  data-ocid="footer.link"
                >
                  +91 98100 76135
                </a>
                <a
                  href="mailto:scientificindus02@gmail.com"
                  className="block"
                  style={{ color: "#1FB6FF" }}
                  data-ocid="footer.link"
                >
                  scientificindus02@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#4A5A6A" }}>
            © {year} Scientific Industries, New Delhi. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#4A5A6A" }}>
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ color: "#6A7A8A" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
