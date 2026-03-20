import { Award, CheckCircle2, Shield, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: Award,
    text: "Founded in 1971 — over 55 years serving the Indian chemical industry",
  },
  {
    icon: Shield,
    text: "Authorized dealer of Merck, Sigma-Aldrich, Millipore & Whatman",
  },
  {
    icon: CheckCircle2,
    text: "Genuine, certified products with full traceability and documentation",
  },
  {
    icon: Users,
    text: "Trusted by research institutes, pharma companies & industrial labs",
  },
];

export default function AboutSection() {
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
      id="about"
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: story */}
          <div className="fade-in-up">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#2D7DFF" }}
            >
              Our Story
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-foreground mb-6">
              55+ Years of
              <br />
              <span className="gradient-text">Chemical Excellence</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#AAB4C0" }}
            >
              Scientific Industries was established in{" "}
              <strong className="text-foreground">1971</strong> in the heart of
              New Delhi, with a singular mission: to make the world's finest
              laboratory chemicals and research supplies accessible to Indian
              scientists, researchers, and industries.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#AAB4C0" }}
            >
              Over five decades later, we remain a{" "}
              <strong className="text-foreground">family-owned business</strong>{" "}
              run by Mr. Piyush Taneja and Mr. Rakesh Taneja — carrying forward
              a legacy of quality, trust, and scientific integrity.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#AAB4C0" }}
            >
              As authorized dealers of Merck, Sigma-Aldrich, Millipore, and
              Whatman, we offer genuine, traceable products with proper
              documentation — ensuring your research and quality control is
              never compromised.
            </p>
          </div>

          {/* Right: highlights */}
          <div
            className="fade-in-up space-y-4"
            style={{ transitionDelay: "150ms" }}
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(45,125,255,0.15)",
                    border: "1px solid rgba(45,125,255,0.3)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#1FB6FF" }} />
                </div>
                <p
                  className="text-sm leading-relaxed pt-1"
                  style={{ color: "#AAB4C0" }}
                >
                  {text}
                </p>
              </div>
            ))}

            {/* Partners card */}
            <div className="glass-card rounded-2xl p-5">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#AAB4C0" }}
              >
                Our Partners
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{
                      background: "rgba(45,125,255,0.2)",
                      color: "#1FB6FF",
                    }}
                  >
                    PT
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Mr. Piyush Taneja
                    </p>
                    <p className="text-xs" style={{ color: "#7A8A9A" }}>
                      Co-founder & Partner
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{
                      background: "rgba(31,182,255,0.2)",
                      color: "#38BFFF",
                    }}
                  >
                    RT
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Mr. Rakesh Taneja
                    </p>
                    <p className="text-xs" style={{ color: "#7A8A9A" }}>
                      Co-founder & Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
