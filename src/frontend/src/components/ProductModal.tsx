import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlaskConical, Package, Tag, X } from "lucide-react";
import type { Product } from "../data/products";

const BRAND_COLORS: Record<string, string> = {
  Merck: "#2D7DFF",
  "Sigma-Aldrich": "#1FB6FF",
  Millipore: "#5B9DFF",
  Whatman: "#38BFFF",
};

interface Props {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, open, onClose }: Props) {
  const brandColor = BRAND_COLORS[product.brand] || "#2D7DFF";

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    >
      <DialogContent
        className="max-w-2xl w-full rounded-2xl border-0 p-0 overflow-hidden"
        style={{
          background: "rgba(18, 25, 38, 0.98)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.8)",
        }}
        data-ocid="products.dialog"
      >
        {/* Header band */}
        <div
          className="px-6 py-5"
          style={{
            background: `linear-gradient(135deg, ${brandColor}18, ${brandColor}08)`,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${brandColor}22`,
                      border: `1px solid ${brandColor}40`,
                      color: brandColor,
                    }}
                  >
                    {product.brand}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "#7A8A9A" }}
                  >
                    #{product.catalogNumber}
                  </span>
                </div>
                <DialogTitle className="text-xl font-display font-bold text-foreground leading-snug">
                  {product.name}
                </DialogTitle>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
                data-ocid="products.close_button"
              >
                <X className="w-4 h-4" style={{ color: "#AAB4C0" }} />
              </button>
            </div>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6 overflow-y-auto max-h-[65vh]">
          {/* Description */}
          <div>
            <p className="text-sm leading-relaxed" style={{ color: "#AAB4C0" }}>
              {product.description}
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-3.5 h-3.5" style={{ color: brandColor }} />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#7A8A9A" }}
                >
                  Category
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {product.category || "—"}
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical
                  className="w-3.5 h-3.5"
                  style={{ color: brandColor }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#7A8A9A" }}
                >
                  Grade
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {product.grade || "—"}
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical
                  className="w-3.5 h-3.5"
                  style={{ color: brandColor }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#7A8A9A" }}
                >
                  CAS Number
                </span>
              </div>
              <p className="text-sm font-medium text-foreground font-mono">
                {product.casNumber || "—"}
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-3.5 h-3.5" style={{ color: brandColor }} />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#7A8A9A" }}
                >
                  Catalog No.
                </span>
              </div>
              <p className="text-sm font-medium text-foreground font-mono">
                {product.catalogNumber}
              </p>
            </div>
          </div>

          {/* Pack sizes */}
          {product.packSizes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Package
                  className="w-3.5 h-3.5"
                  style={{ color: brandColor }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#7A8A9A" }}
                >
                  Pack Sizes Available
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((size) => (
                  <span
                    key={size}
                    className="text-sm px-3 py-1.5 rounded-lg font-medium"
                    style={{
                      background: `${brandColor}12`,
                      border: `1px solid ${brandColor}28`,
                      color: brandColor,
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Brand tags */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="text-xs"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#AAB4C0" }}
            >
              {product.brand}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#AAB4C0" }}
            >
              {product.grade} Grade
            </Badge>
            <Badge
              variant="outline"
              className="text-xs"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "#AAB4C0" }}
            >
              {product.category}
            </Badge>
          </div>

          {/* Enquiry note */}
          <div
            className="rounded-xl p-4 text-center"
            style={{
              background: `${brandColor}0C`,
              border: `1px solid ${brandColor}25`,
            }}
          >
            <p className="text-sm font-medium" style={{ color: brandColor }}>
              For pricing & availability, contact us at{" "}
              <a
                href="mailto:scientificindus02@gmail.com"
                className="underline font-bold"
              >
                scientificindus02@gmail.com
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
