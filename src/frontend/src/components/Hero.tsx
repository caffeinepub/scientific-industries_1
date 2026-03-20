import { Button } from "@/components/ui/button";
import { Beaker, ChevronDown, FlaskConical, Microscope } from "lucide-react";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="orbit-ring animate-pulse-glow"
          style={{ width: "600px", height: "600px" }}
        />
        <div
          className="orbit-ring animate-pulse-glow"
          style={{ width: "800px", height: "800px", animationDelay: "1s" }}
        />
        <div
          className="orbit-ring"
          style={{
            width: "1000px",
            height: "1000px",
            borderColor: "rgba(45,125,255,0.06)",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full animate-float1"
          style={{
            background:
              "radial-gradient(circle, rgba(45,125,255,0.15) 0%, transparent 70%)",
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full animate-float2"
          style={{
            background:
              "radial-gradient(circle, rgba(31,182,255,0.12) 0%, transparent 70%)",
            top: "60%",
            right: "8%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full animate-float3"
          style={{
            background:
              "radial-gradient(circle, rgba(45,125,255,0.1) 0%, transparent 70%)",
            bottom: "20%",
            left: "15%",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full animate-float1"
          style={{
            background:
              "radial-gradient(circle, rgba(31,182,255,0.08) 0%, transparent 70%)",
            top: "30%",
            right: "20%",
            animationDelay: "1.5s",
          }}
        />
      </div>

      {/* Floating lab icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left - Beaker */}
        <div
          className="absolute animate-float1 glass-card rounded-2xl p-4 hidden lg:flex items-center justify-center"
          style={{ top: "20%", left: "8%", animationDelay: "0.5s" }}
        >
          <Beaker className="w-10 h-10" style={{ color: "#1FB6FF" }} />
        </div>
        {/* Top right - Flask */}
        <div
          className="absolute animate-float2 glass-card rounded-2xl p-4 hidden lg:flex items-center justify-center"
          style={{ top: "25%", right: "8%", animationDelay: "2s" }}
        >
          <FlaskConical className="w-10 h-10" style={{ color: "#2D7DFF" }} />
        </div>
        {/* Bottom left - Microscope */}
        <div
          className="absolute animate-float3 glass-card rounded-2xl p-4 hidden lg:flex items-center justify-center"
          style={{ bottom: "28%", left: "12%", animationDelay: "3s" }}
        >
          <Microscope className="w-10 h-10" style={{ color: "#1FB6FF" }} />
        </div>
        {/* Molecule orb right */}
        <div
          className="absolute animate-float2 rounded-full hidden lg:block"
          style={{
            bottom: "35%",
            right: "10%",
            width: "60px",
            height: "60px",
            background:
              "linear-gradient(135deg, rgba(45,125,255,0.4), rgba(31,182,255,0.2))",
            boxShadow: "0 0 30px rgba(45,125,255,0.3)",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute animate-float1 rounded-full hidden lg:block"
          style={{
            top: "55%",
            left: "5%",
            width: "40px",
            height: "40px",
            background:
              "linear-gradient(135deg, rgba(31,182,255,0.4), rgba(45,125,255,0.2))",
            boxShadow: "0 0 20px rgba(31,182,255,0.3)",
            animationDelay: "2.5s",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Founded badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(45,125,255,0.12)",
            border: "1px solid rgba(45,125,255,0.3)",
            color: "#1FB6FF",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Founded 1971 · 55+ Years of Excellence
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-extrabold uppercase tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}
        >
          <span className="text-foreground">Scientific</span>
          <br />
          <span className="gradient-text">Industries</span>
        </h1>

        <p
          className="text-lg md:text-xl font-medium tracking-wide mb-3"
          style={{ color: "#AAB4C0" }}
        >
          Authorized Dealer of Merck & Sigma-Aldrich
        </p>
        <p
          className="text-base mb-10 max-w-2xl mx-auto"
          style={{ color: "#7A8A9A" }}
        >
          Your trusted partner for analytical reagents, biochemicals, lab
          chemicals, filtration solutions & research supplies across India since
          1971.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="font-semibold tracking-wide px-8 py-6 text-base blue-glow transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
              border: "none",
              color: "white",
              borderRadius: "12px",
            }}
            onClick={scrollToProducts}
            data-ocid="hero.primary_button"
          >
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold tracking-wide px-8 py-6 text-base transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(45,125,255,0.4)",
              color: "#AAB4C0",
              borderRadius: "12px",
              background: "rgba(45,125,255,0.05)",
            }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-ocid="hero.secondary_button"
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 animate-float2"
          style={{ animationDelay: "1s" }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(45,125,255,0.4)" }}
          >
            <div
              className="w-1.5 h-3 rounded-full animate-float2"
              style={{
                background: "linear-gradient(to bottom, #2D7DFF, transparent)",
              }}
            />
          </div>
          <ChevronDown
            className="w-4 h-4"
            style={{ color: "rgba(45,125,255,0.6)" }}
          />
        </div>
      </div>
    </section>
  );
}
