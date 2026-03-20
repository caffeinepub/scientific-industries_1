import { useEffect, useRef } from "react";

const brands = [
  {
    name: "Merck",
    tagline: "Global Science & Technology Leader",
    description:
      "World's oldest pharmaceutical & chemical company. Merck delivers analytical-grade reagents, HPLC solvents, reference standards, inorganic salts, and volumetric solutions trusted by labs worldwide.",
    keyLines: [
      "Analytical Reagents",
      "HPLC Solvents",
      "Reference Standards",
      "Inorganic Chemicals",
      "Volumetric Solutions",
    ],
    color: "#2D7DFF",
    abbrev: "M",
  },
  {
    name: "Sigma-Aldrich",
    tagline: "Life Science & Chemistry Research",
    description:
      "A Merck KGaA brand, Sigma-Aldrich is the world's leading supplier of biochemicals, organic compounds, and research-grade chemicals for molecular biology, cell culture, and proteomics.",
    keyLines: [
      "Biochemicals",
      "Organic Synthesis",
      "Cell Culture Media",
      "Molecular Biology",
      "Proteomics Reagents",
    ],
    color: "#1FB6FF",
    abbrev: "S",
  },
  {
    name: "Millipore",
    tagline: "Lab Water & Filtration Solutions",
    description:
      "Millipore (now MilliporeSigma) provides world-class filtration membranes, syringe filters, lab water purification systems, and microbial testing solutions for pharmaceutical and biotech labs.",
    keyLines: [
      "Filtration Membranes",
      "Syringe Filters",
      "Lab Water Systems",
      "Microbial Testing",
      "Sterile Filtration",
    ],
    color: "#5B9DFF",
    abbrev: "Ml",
  },
  {
    name: "Whatman",
    tagline: "Filtration & Separation Science",
    description:
      "A GE Healthcare brand, Whatman is the global standard in filter papers, cellulose-based chromatography media, and sample preparation products used in QC labs, research, and industry.",
    keyLines: [
      "Filter Papers",
      "Chromatography Media",
      "Sample Prep",
      "Glass Microfibre",
      "Specialty Membranes",
    ],
    color: "#38BFFF",
    abbrev: "W",
  },
];

export default function BrandsSection() {
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
      id="brands"
      className="py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#2D7DFF" }}
          >
            Our Partners
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-foreground">
            Our Authorized Brands
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "#7A8A9A" }}
          >
            Authorized dealer for the world's leading chemical & laboratory
            supply brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="fade-in-up glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg text-white mb-4"
                style={{
                  background: `linear-gradient(135deg, ${brand.color}88, ${brand.color}44)`,
                  border: `1px solid ${brand.color}44`,
                  boxShadow: `0 0 20px ${brand.color}22`,
                }}
              >
                {brand.abbrev}
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {brand.name}
              </h3>
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: brand.color }}
              >
                {brand.tagline}
              </p>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#8A9AB0" }}
              >
                {brand.description}
              </p>

              <div className="mt-auto">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "#AAB4C0" }}
                >
                  Key Product Lines
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {brand.keyLines.map((line) => (
                    <span
                      key={line}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${brand.color}15`,
                        border: `1px solid ${brand.color}30`,
                        color: brand.color,
                      }}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
