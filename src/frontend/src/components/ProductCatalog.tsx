import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { allCategories, products } from "../data/products";
import type { Product } from "../data/products";
import ProductModal from "./ProductModal";
import RequestQuoteModal from "./RequestQuoteModal";

const BRANDS = ["All", "Merck", "Sigma-Aldrich", "Millipore", "Whatman"];
const PAGE_SIZE = 20;

const BRAND_COLORS: Record<string, string> = {
  Merck: "#2D7DFF",
  "Sigma-Aldrich": "#1FB6FF",
  Millipore: "#5B9DFF",
  Whatman: "#38BFFF",
};

function ProductCard({
  product,
  onView,
  onQuote,
  index,
}: {
  product: Product;
  onView: (p: Product) => void;
  onQuote: (p: Product) => void;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const brandColor = BRAND_COLORS[product.brand] || "#2D7DFF";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-2xl p-5 flex flex-col cursor-pointer"
      style={{
        transition:
          "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: `${brandColor}18`,
            border: `1px solid ${brandColor}35`,
            color: brandColor,
          }}
        >
          {product.brand}
        </span>
        <span className="text-xs font-mono" style={{ color: "#7A8A9A" }}>
          #{product.catalogNumber}
        </span>
      </div>

      <h3 className="font-semibold text-sm text-foreground leading-snug mb-2 line-clamp-2">
        {product.name}
      </h3>

      <p
        className="text-xs leading-relaxed mb-3 line-clamp-2"
        style={{ color: "#8A9AB0" }}
      >
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {product.category && (
          <Badge
            variant="outline"
            className="text-xs px-2 py-0.5"
            style={{ borderColor: "rgba(255,255,255,0.1)", color: "#AAB4C0" }}
          >
            {product.category}
          </Badge>
        )}
        {product.grade && (
          <Badge
            variant="outline"
            className="text-xs px-2 py-0.5"
            style={{ borderColor: "rgba(255,255,255,0.08)", color: "#7A8A9A" }}
          >
            {product.grade}
          </Badge>
        )}
      </div>

      {product.packSizes.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {product.packSizes.slice(0, 3).map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: "rgba(255,255,255,0.05)", color: "#7A8A9A" }}
            >
              {size}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex gap-2">
        <Button
          size="sm"
          className="flex-1 text-xs font-semibold tracking-wide"
          style={{
            background: `linear-gradient(135deg, ${brandColor}22, ${brandColor}11)`,
            border: `1px solid ${brandColor}35`,
            color: brandColor,
          }}
          onClick={() => onView(product)}
          data-ocid={`products.edit_button.${index + 1}`}
        >
          View Details
        </Button>
        <Button
          size="sm"
          className="flex-1 text-xs font-semibold tracking-wide gap-1"
          style={{
            background: "rgba(45,125,255,0.12)",
            border: "1px solid rgba(45,125,255,0.35)",
            color: "#1FB6FF",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onQuote(product);
          }}
          data-ocid={`products.secondary_button.${index + 1}`}
        >
          <FileText className="w-3 h-3" />
          Get Quote
        </Button>
      </div>
    </div>
  );
}

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset to page 1 when filters change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional trigger deps
  useEffect(() => {
    setPage(1);
  }, [selectedBrand, selectedCategory, debouncedSearch]);

  // Client-side filtering
  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedBrand !== "All") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.catalogNumber.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.casNumber.toLowerCase().includes(q),
      );
    }

    return result;
  }, [selectedBrand, selectedCategory, debouncedSearch]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const safeCurrentPage = Math.min(page, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE,
  );

  // Scroll animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            let i = 0;
            for (const child of el.querySelectorAll(".fade-in-up")) {
              setTimeout(() => child.classList.add("visible"), i * 60);
              i++;
            }
          }
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pageNumbers = useMemo(() => {
    const nums: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) nums.push(i);
    } else {
      nums.push(1);
      if (safeCurrentPage > 3) nums.push("...");
      for (
        let i = Math.max(2, safeCurrentPage - 1);
        i <= Math.min(totalPages - 1, safeCurrentPage + 1);
        i++
      ) {
        nums.push(i);
      }
      if (safeCurrentPage < totalPages - 2) nums.push("...");
      nums.push(totalPages);
    }
    return nums;
  }, [totalPages, safeCurrentPage]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="products"
      className="py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#2D7DFF" }}
          >
            Explore
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-foreground">
            Product Catalog
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "#7A8A9A" }}
          >
            {filteredProducts.length.toLocaleString()} products
            {filteredProducts.length !== products.length
              ? ` (of ${products.length.toLocaleString()} total)`
              : " across Merck, Sigma-Aldrich, Millipore & Whatman"}
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-10 fade-in-up">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: "#7A8A9A" }}
          />
          <Input
            placeholder="Search by product name, catalog number, CAS number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 py-3 h-12 text-sm rounded-xl"
            style={{
              background: "rgba(28,38,52,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#E8EDF3",
            }}
            data-ocid="products.search_input"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-56 flex-shrink-0 fade-in-up">
            <div className="glass-card rounded-2xl p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-5">
                <SlidersHorizontal
                  className="w-4 h-4"
                  style={{ color: "#2D7DFF" }}
                />
                <span className="font-semibold text-sm text-foreground tracking-wide uppercase">
                  Filters
                </span>
              </div>

              {/* Brand filter */}
              <div className="mb-6">
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#AAB4C0" }}
                >
                  Brand
                </p>
                <div className="flex flex-col gap-1.5">
                  {BRANDS.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200"
                      style={{
                        background:
                          selectedBrand === brand
                            ? "rgba(45,125,255,0.15)"
                            : "transparent",
                        border: `1px solid ${
                          selectedBrand === brand
                            ? "rgba(45,125,255,0.4)"
                            : "transparent"
                        }`,
                        color: selectedBrand === brand ? "#1FB6FF" : "#8A9AB0",
                        fontWeight: selectedBrand === brand ? 600 : 400,
                      }}
                      data-ocid="products.tab"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filter */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#AAB4C0" }}
                >
                  Category
                </p>
                <div className="flex flex-col gap-1.5 max-h-64 overflow-y-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("")}
                    className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200"
                    style={{
                      background: !selectedCategory
                        ? "rgba(45,125,255,0.15)"
                        : "transparent",
                      border: `1px solid ${
                        !selectedCategory
                          ? "rgba(45,125,255,0.4)"
                          : "transparent"
                      }`,
                      color: !selectedCategory ? "#1FB6FF" : "#8A9AB0",
                    }}
                    data-ocid="products.tab"
                  >
                    All Categories
                  </button>
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200"
                      style={{
                        background:
                          selectedCategory === cat
                            ? "rgba(45,125,255,0.15)"
                            : "transparent",
                        border: `1px solid ${
                          selectedCategory === cat
                            ? "rgba(45,125,255,0.4)"
                            : "transparent"
                        }`,
                        color: selectedCategory === cat ? "#1FB6FF" : "#8A9AB0",
                      }}
                      data-ocid="products.tab"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {paginatedProducts.length === 0 ? (
              <div
                className="glass-card rounded-2xl py-20 text-center"
                data-ocid="products.empty_state"
              >
                <Search
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: "#7A8A9A" }}
                />
                <p className="text-foreground font-semibold mb-2">
                  No products found
                </p>
                <p className="text-sm" style={{ color: "#7A8A9A" }}>
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paginatedProducts.map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i}
                      onView={(p) => {
                        setSelectedProduct(p);
                        setModalOpen(true);
                      }}
                      onQuote={(p) => {
                        setQuoteProduct(p);
                        setQuoteOpen(true);
                      }}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={safeCurrentPage === 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="gap-1"
                      style={{
                        borderColor: "rgba(45,125,255,0.3)",
                        color: "#AAB4C0",
                        background: "rgba(45,125,255,0.05)",
                      }}
                      data-ocid="products.pagination_prev"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Prev
                    </Button>

                    {pageNumbers.map((num, idx) =>
                      num === "..." ? (
                        <span
                          key={`ellipsis-before-${pageNumbers[idx + 1]}`}
                          className="px-2 text-sm"
                          style={{ color: "#7A8A9A" }}
                        >
                          ...
                        </span>
                      ) : (
                        <Button
                          key={num}
                          variant="outline"
                          size="sm"
                          onClick={() => setPage(num as number)}
                          style={{
                            borderColor:
                              safeCurrentPage === num
                                ? "rgba(45,125,255,0.6)"
                                : "rgba(45,125,255,0.2)",
                            color:
                              safeCurrentPage === num ? "#1FB6FF" : "#8A9AB0",
                            background:
                              safeCurrentPage === num
                                ? "rgba(45,125,255,0.15)"
                                : "transparent",
                            fontWeight: safeCurrentPage === num ? 700 : 400,
                          }}
                          data-ocid="products.tab"
                        >
                          {num}
                        </Button>
                      ),
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      disabled={safeCurrentPage === totalPages}
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      className="gap-1"
                      style={{
                        borderColor: "rgba(45,125,255,0.3)",
                        color: "#AAB4C0",
                        background: "rgba(45,125,255,0.05)",
                      }}
                      data-ocid="products.pagination_next"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                <p
                  className="text-center text-xs mt-4"
                  style={{ color: "#7A8A9A" }}
                >
                  Page {safeCurrentPage} of {totalPages} &mdash;{" "}
                  {filteredProducts.length.toLocaleString()} products
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}

      <RequestQuoteModal
        open={quoteOpen}
        onClose={() => {
          setQuoteOpen(false);
          setQuoteProduct(null);
        }}
        prefill={
          quoteProduct
            ? {
                productName: quoteProduct.name,
                casNumber: quoteProduct.casNumber,
                catalogNumber: quoteProduct.catalogNumber,
              }
            : undefined
        }
      />
    </section>
  );
}
