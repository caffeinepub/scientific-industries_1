import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let i = 0;
            for (const child of el.querySelectorAll(".fade-in-up")) {
              setTimeout(() => child.classList.add("visible"), i * 120);
              i++;
            }
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="py-24 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in-up">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#2D7DFF" }}
          >
            Get In Touch
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-foreground">
            Contact Us
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "#7A8A9A" }}
          >
            Reach out for product enquiries, quotations, and order assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact card */}
          <div className="lg:col-span-3 fade-in-up glass-card rounded-2xl p-8 space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(45,125,255,0.15)",
                  border: "1px solid rgba(45,125,255,0.3)",
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#2D7DFF" }} />
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#7A8A9A" }}
                >
                  Address
                </p>
                <p className="text-sm font-semibold text-foreground">
                  92 Double Story
                </p>
                <p className="text-sm" style={{ color: "#AAB4C0" }}>
                  New Rajinder Nagar
                </p>
                <p className="text-sm" style={{ color: "#AAB4C0" }}>
                  New Delhi — 110060
                </p>
                <p className="text-sm" style={{ color: "#AAB4C0" }}>
                  India
                </p>
              </div>
            </div>

            {/* Partners & Phones */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(45,125,255,0.15)",
                  border: "1px solid rgba(45,125,255,0.3)",
                }}
              >
                <Phone className="w-5 h-5" style={{ color: "#2D7DFF" }} />
              </div>
              <div className="space-y-3">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#7A8A9A" }}
                >
                  Phone
                </p>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                    style={{ color: "#1FB6FF" }}
                  >
                    Mr. Piyush Taneja
                  </p>
                  <a
                    href="tel:+919891491615"
                    className="text-sm font-semibold text-foreground hover:text-blue-400 transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 98914 91615
                  </a>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                    style={{ color: "#1FB6FF" }}
                  >
                    Mr. Rakesh Taneja
                  </p>
                  <a
                    href="tel:+919810076135"
                    className="text-sm font-semibold text-foreground hover:text-blue-400 transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 98100 76135
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(45,125,255,0.15)",
                  border: "1px solid rgba(45,125,255,0.3)",
                }}
              >
                <Mail className="w-5 h-5" style={{ color: "#2D7DFF" }} />
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#7A8A9A" }}
                >
                  Email
                </p>
                <a
                  href="mailto:scientificindus02@gmail.com"
                  className="text-sm font-semibold transition-colors"
                  style={{ color: "#1FB6FF" }}
                  data-ocid="contact.link"
                >
                  scientificindus02@gmail.com
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(45,125,255,0.15)",
                  border: "1px solid rgba(45,125,255,0.3)",
                }}
              >
                <Clock className="w-5 h-5" style={{ color: "#2D7DFF" }} />
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#7A8A9A" }}
                >
                  Business Hours
                </p>
                <p className="text-sm text-foreground">Monday – Saturday</p>
                <p className="text-sm" style={{ color: "#AAB4C0" }}>
                  10:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            <Button
              className="w-full font-semibold blue-glow"
              style={{
                background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                border: "none",
                color: "white",
                borderRadius: "12px",
                padding: "12px",
              }}
              onClick={() => {
                window.location.href = "mailto:scientificindus02@gmail.com";
              }}
              data-ocid="contact.primary_button"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Enquiry Email
            </Button>
          </div>

          {/* Map placeholder */}
          <div
            className="lg:col-span-2 fade-in-up"
            style={{ transitionDelay: "150ms" }}
          >
            <div
              className="glass-card rounded-2xl h-full flex flex-col items-center justify-center gap-4 p-6 text-center"
              style={{ minHeight: "320px" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(45,125,255,0.15)",
                  border: "1px solid rgba(45,125,255,0.3)",
                }}
              >
                <MapPin className="w-8 h-8" style={{ color: "#2D7DFF" }} />
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">
                  New Rajinder Nagar
                </p>
                <p className="text-sm" style={{ color: "#AAB4C0" }}>
                  New Delhi, India
                </p>
                <p className="text-sm" style={{ color: "#7A8A9A" }}>
                  PIN: 110060
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=92+Double+Story+New+Rajinder+Nagar+New+Delhi+110060"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                style={{
                  background: "rgba(45,125,255,0.12)",
                  border: "1px solid rgba(45,125,255,0.3)",
                  color: "#1FB6FF",
                }}
                data-ocid="contact.link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
