import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ClipboardList, Loader2, RefreshCw } from "lucide-react";
import type { QuoteRequest } from "../backend.d";
import { useActor } from "../hooks/useActor";

function formatDate(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminPanel() {
  const { actor, isFetching } = useActor();

  const {
    data: requests,
    isLoading,
    error,
    refetch,
  } = useQuery<QuoteRequest[]>({
    queryKey: ["quoteRequests"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuoteRequests();
    },
    enabled: !!actor && !isFetching,
  });

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background:
          "linear-gradient(135deg, #0B0F14 0%, #0f1520 50%, #0B0F14 100%)",
      }}
    >
      {/* Top bar */}
      <header
        className="px-6 py-4 flex items-center gap-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <a
          href="/"
          className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
          style={{ color: "#7A8A9A" }}
          data-ocid="admin.link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Site
        </a>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5" style={{ color: "#2D7DFF" }} />
          <span className="font-display font-bold text-foreground text-lg">
            Quote Requests
          </span>
        </div>
        <div className="flex-1" />
        <Button
          size="sm"
          variant="outline"
          onClick={() => refetch()}
          className="gap-2 text-xs"
          style={{
            borderColor: "rgba(45,125,255,0.3)",
            color: "#AAB4C0",
            background: "rgba(45,125,255,0.05)",
          }}
          data-ocid="admin.secondary_button"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Refresh
        </Button>
      </header>

      <main className="px-6 py-8 max-w-[1400px] mx-auto">
        {/* Stats */}
        <div className="mb-6">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{ color: "#2D7DFF" }}
          >
            Admin Panel
          </p>
          <h1 className="text-3xl font-display font-extrabold text-foreground">
            {requests?.length ?? 0} Quote
            {(requests?.length ?? 0) !== 1 ? "s" : ""} Received
          </h1>
        </div>

        {isLoading ? (
          <div
            className="flex items-center justify-center py-20"
            data-ocid="admin.loading_state"
          >
            <Loader2
              className="w-8 h-8 animate-spin"
              style={{ color: "#2D7DFF" }}
            />
          </div>
        ) : error ? (
          <div
            className="text-center py-20 rounded-2xl"
            style={{
              background: "rgba(255,80,80,0.05)",
              border: "1px solid rgba(255,80,80,0.15)",
            }}
            data-ocid="admin.error_state"
          >
            <p style={{ color: "#FF8080" }}>Failed to load quote requests.</p>
          </div>
        ) : !requests || requests.length === 0 ? (
          <div
            className="text-center py-20 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            data-ocid="admin.empty_state"
          >
            <ClipboardList
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "#7A8A9A" }}
            />
            <p className="text-foreground font-semibold mb-2">
              No quote requests yet
            </p>
            <p className="text-sm" style={{ color: "#7A8A9A" }}>
              Quote requests from customers will appear here.
            </p>
          </div>
        ) : (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            data-ocid="admin.table"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {[
                      "Date & Time",
                      "Customer",
                      "Email",
                      "Phone",
                      "Product Name",
                      "CAS No.",
                      "Catalog No.",
                      "Quantity",
                      "Message",
                    ].map((h) => (
                      <TableHead
                        key={h}
                        className="text-xs font-bold tracking-wider uppercase whitespace-nowrap"
                        style={{ color: "#7A8A9A" }}
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((req, i) => (
                    <TableRow
                      key={req.id}
                      style={{
                        borderColor: "rgba(255,255,255,0.04)",
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.01)"
                            : "transparent",
                      }}
                      data-ocid={`admin.row.${i + 1}`}
                    >
                      <TableCell
                        className="text-xs whitespace-nowrap"
                        style={{ color: "#8A9AB0" }}
                      >
                        {formatDate(req.timestamp)}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-foreground whitespace-nowrap">
                        {req.customerName}
                      </TableCell>
                      <TableCell
                        className="text-sm"
                        style={{ color: "#1FB6FF" }}
                      >
                        <a href={`mailto:${req.email}`}>{req.email}</a>
                      </TableCell>
                      <TableCell
                        className="text-sm"
                        style={{ color: "#AAB4C0" }}
                      >
                        {req.phone || "—"}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-foreground max-w-[200px] truncate">
                        {req.productName}
                      </TableCell>
                      <TableCell
                        className="text-xs font-mono"
                        style={{ color: "#8A9AB0" }}
                      >
                        {req.casNumber || "—"}
                      </TableCell>
                      <TableCell
                        className="text-xs font-mono"
                        style={{ color: "#8A9AB0" }}
                      >
                        {req.catalogNumber || "—"}
                      </TableCell>
                      <TableCell
                        className="text-sm"
                        style={{ color: "#AAB4C0" }}
                      >
                        {req.quantity || "—"}
                      </TableCell>
                      <TableCell
                        className="text-xs max-w-[200px] truncate"
                        style={{ color: "#7A8A9A" }}
                        title={req.message}
                      >
                        {req.message || "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
