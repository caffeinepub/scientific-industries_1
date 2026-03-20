import {
  BarChart3,
  Dna,
  Factory,
  GraduationCap,
  HeartPulse,
  Leaf,
  Microscope,
  Pill,
} from "lucide-react";
import { useEffect, useRef } from "react";

const applications = [
  { label: "Research & Academia", icon: Microscope, color: "#2D7DFF" },
  { label: "Pharmaceutical", icon: Pill, color: "#1FB6FF" },
  { label: "Quality Control", icon: BarChart3, color: "#5B9DFF" },
  { label: "Industrial", icon: Factory, color: "#38BFFF" },
  { label: "Academic Institutions", icon: GraduationCap, color: "#2D7DFF" },
  { label: "Environmental Testing", icon: Leaf, color: "#1FB6FF" },
  { label: "Healthcare", icon: HeartPulse, color: "#5B9DFF" },
  { label: "Biotechnology", icon: Dna, color: "#38BFFF" },
];

export default function ApplicationsSection() {
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
              setTimeout(() => child.classList.add("visible"), i * 80);
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
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-in-up">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#2D7DFF" }}
          >
            Applications
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-foreground">
            Industries We Serve
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "#7A8A9A" }}
          >
            Supplying world-class chemicals and lab supplies across diverse
            sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applications.map(({ label, icon: Icon, color }, i) => (
            <div
              key={label}
              className="fade-in-up glass-card glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <span className="text-sm font-semibold text-foreground leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
