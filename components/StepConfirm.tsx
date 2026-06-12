"use client";

import { OrderData } from "@/app/page";

interface Props {
  order: OrderData;
  onSubmit: () => void;
  onPrev: () => void;
  submitting: boolean;
}

export default function StepConfirm({ order, onSubmit, onPrev, submitting }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: "#111827", marginBottom: "8px", letterSpacing: "-0.01em" }}>
          確認需求
        </h2>
        <p style={{ fontSize: "14px", color: "#6B7280" }}>送出前再檢查一次，買錯就不是代購，是災難片。</p>
      </div>

      {/* receipt card */}
      <div style={{ border: "1px solid #E5E0D8", borderRadius: "10px", overflow: "hidden" }}>
        <div style={{ background: "#F7F3EC", padding: "12px 16px", borderBottom: "1px solid #E5E0D8" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#6B7280", textTransform: "uppercase" }}>
            Order Summary
          </p>
        </div>
        <div style={{ background: "#FFFFFF" }}>
          <Row label="姓名" value={order.name} />
          <Row label="品名" value={order.product} />
          <Row label="數量" value={`${order.quantity} 個`} />
          <Row label="商品網址" value={order.productUrl || "（未填寫）"} muted={!order.productUrl} />
          <div style={{ padding: "14px 16px", borderTop: "1px solid #F3F0EA" }}>
            <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "10px", fontWeight: 500 }}>
              商品圖片（{order.imageUrls.length} 張）
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {order.imageUrls.map((url, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={url} alt="" style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px", border: "1px solid #E5E0D8" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onPrev}
          disabled={submitting}
          style={{
            flex: 1, padding: "13px 0", borderRadius: "8px",
            border: "1.5px solid #E5E0D8", background: "#FFFFFF",
            color: "#111827", fontWeight: 600, fontSize: "14px",
            cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.4 : 1,
            transition: "border-color 0.15s ease",
          }}
          onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.borderColor = "#111827"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E0D8"; }}
        >
          返回修改
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          style={{
            flex: 2, padding: "13px 0", borderRadius: "8px",
            border: "none", background: submitting ? "#D1D5DB" : "#111827",
            color: "#FFFFFF", fontWeight: 600, fontSize: "14px",
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "opacity 0.15s ease",
          }}
          onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {submitting ? "送出中…" : "送出需求"}
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 16px", borderTop: "1px solid #F3F0EA", gap: "12px" }}>
      <span style={{ fontSize: "12px", color: "#9CA3AF", width: "64px", flexShrink: 0, paddingTop: "2px" }}>{label}</span>
      <span style={{ fontSize: "14px", fontWeight: 500, color: muted ? "#D1D5DB" : "#111827", wordBreak: "break-all" }}>{value}</span>
    </div>
  );
}
