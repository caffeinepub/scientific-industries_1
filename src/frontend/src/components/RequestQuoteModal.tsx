import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";

interface Props {
  open: boolean;
  onClose: () => void;
  prefill?: {
    productName?: string;
    casNumber?: string;
    catalogNumber?: string;
  };
}

const FIELD_STYLE = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#E8EDF3",
};

export default function RequestQuoteModal({ open, onClose, prefill }: Props) {
  const { actor } = useActor();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    productName: prefill?.productName ?? "",
    casNumber: prefill?.casNumber ?? "",
    catalogNumber: prefill?.catalogNumber ?? "",
    quantity: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Sync prefill when modal opens
  useEffect(() => {
    if (open) {
      setForm((prev) => ({
        ...prev,
        productName: prefill?.productName ?? "",
        casNumber: prefill?.casNumber ?? "",
        catalogNumber: prefill?.catalogNumber ?? "",
      }));
      setSuccess(false);
      setError("");
    }
  }, [open, prefill?.productName, prefill?.casNumber, prefill?.catalogNumber]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    setError("");
    try {
      await actor.submitQuoteRequest({
        customerName: form.customerName,
        email: form.email,
        phone: form.phone,
        productName: form.productName,
        casNumber: form.casNumber,
        catalogNumber: form.catalogNumber,
        quantity: form.quantity,
        message: form.message,
      });
      setSuccess(true);
    } catch (_err) {
      setError("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) handleClose();
      }}
    >
      <DialogContent
        className="max-w-xl w-full rounded-2xl border-0 p-0 overflow-hidden"
        style={{
          background: "rgba(14, 20, 32, 0.98)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.8)",
        }}
        data-ocid="quote.dialog"
      >
        {/* Header */}
        <div
          className="px-6 py-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,125,255,0.12), rgba(31,182,255,0.06))",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-lg font-display font-bold text-foreground">
                  Request a Quote
                </DialogTitle>
                <p className="text-xs mt-1" style={{ color: "#7A8A9A" }}>
                  Fill in the details below and we'll get back to you shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.06)" }}
                data-ocid="quote.close_button"
              >
                <X className="w-4 h-4" style={{ color: "#AAB4C0" }} />
              </button>
            </div>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          {success ? (
            <div className="text-center py-10" data-ocid="quote.success_state">
              <CheckCircle
                className="w-14 h-14 mx-auto mb-4"
                style={{ color: "#2D7DFF" }}
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Quote Request Submitted!
              </h3>
              <p className="text-sm" style={{ color: "#8A9AB0" }}>
                Thank you. Our team will contact you shortly at{" "}
                <span className="font-semibold" style={{ color: "#1FB6FF" }}>
                  {form.email}
                </span>
              </p>
              <Button
                className="mt-6"
                onClick={handleClose}
                style={{
                  background: "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                  color: "#fff",
                  border: "none",
                }}
                data-ocid="quote.primary_button"
              >
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    Your Name <span style={{ color: "#FF6B6B" }}>*</span>
                  </Label>
                  <Input
                    required
                    placeholder="Full name"
                    value={form.customerName}
                    onChange={(e) =>
                      handleChange("customerName", e.target.value)
                    }
                    className="h-10 text-sm rounded-lg"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    Email <span style={{ color: "#FF6B6B" }}>*</span>
                  </Label>
                  <Input
                    required
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-10 text-sm rounded-lg"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    Phone
                  </Label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-10 text-sm rounded-lg"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    Quantity Required
                  </Label>
                  <Input
                    placeholder="e.g. 500 mL, 1 kg"
                    value={form.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    className="h-10 text-sm rounded-lg"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
              </div>

              {/* Divider */}
              <div
                className="border-t pt-4"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              />

              {/* Product info */}
              <p
                className="text-xs font-bold tracking-widest uppercase -mt-2"
                style={{ color: "#2D7DFF" }}
              >
                Product Details
              </p>

              <div className="space-y-1.5">
                <Label
                  className="text-xs font-semibold"
                  style={{ color: "#AAB4C0" }}
                >
                  Product Name <span style={{ color: "#FF6B6B" }}>*</span>
                </Label>
                <Input
                  required
                  placeholder="e.g. Acetone, HPLC Grade"
                  value={form.productName}
                  onChange={(e) => handleChange("productName", e.target.value)}
                  className="h-10 text-sm rounded-lg"
                  style={FIELD_STYLE}
                  data-ocid="quote.input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    CAS Number
                  </Label>
                  <Input
                    placeholder="e.g. 67-64-1"
                    value={form.casNumber}
                    onChange={(e) => handleChange("casNumber", e.target.value)}
                    className="h-10 text-sm rounded-lg font-mono"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: "#AAB4C0" }}
                  >
                    Catalog Number
                  </Label>
                  <Input
                    placeholder="e.g. MRK-010001"
                    value={form.catalogNumber}
                    onChange={(e) =>
                      handleChange("catalogNumber", e.target.value)
                    }
                    className="h-10 text-sm rounded-lg font-mono"
                    style={FIELD_STYLE}
                    data-ocid="quote.input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  className="text-xs font-semibold"
                  style={{ color: "#AAB4C0" }}
                >
                  Additional Message
                </Label>
                <Textarea
                  placeholder="Any special requirements, purity specifications, or notes..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="text-sm rounded-lg resize-none"
                  rows={3}
                  style={FIELD_STYLE}
                  data-ocid="quote.textarea"
                />
              </div>

              {error && (
                <p
                  className="text-xs text-center py-2 rounded-lg"
                  style={{
                    background: "rgba(255,80,80,0.1)",
                    color: "#FF8080",
                  }}
                  data-ocid="quote.error_state"
                >
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-11 font-semibold tracking-wide rounded-xl"
                style={{
                  background: submitting
                    ? "rgba(45,125,255,0.3)"
                    : "linear-gradient(135deg, #2D7DFF, #1FB6FF)",
                  color: "#fff",
                  border: "none",
                }}
                data-ocid="quote.submit_button"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
