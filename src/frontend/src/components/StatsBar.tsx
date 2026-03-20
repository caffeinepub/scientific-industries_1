import { useEffect, useRef } from "react";

const stats = [
  { value: "55+", label: "Years of Excellence", sub: "Founded 1971" },
  { value: "300,000+", label: "Products Available", sub: "Across all brands" },
  {
    value: "4",
    label: "Premium Brands",
    sub: "Merck · Sigma · Millipore · Whatman",
  },
  { value: "Pan India", label: "Delivery", sub: "New Delhi HQ" },
];

export default function StatsBar() {
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
              setTimeout(() => child.classList.add("visible"), i * 100);
              i++;
            }
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl p-6 glass-card">
          {stats.map((stat) => (
            <div key={stat.label} className="fade-in-up text-center py-4 px-2">
              <div className="font-display font-extrabold text-3xl lg:text-4xl mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="font-semibold text-sm text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: "#7A8A9A" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
