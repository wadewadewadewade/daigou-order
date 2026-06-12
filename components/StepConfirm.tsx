"use client";

import { OrderData } from "@/app/page";

interface Props {
  order: OrderData;
  onSubmit: () => void;
  onPrev: () => void;
  submitting: boolean;
}

const btnBase: React.CSSProperties = {
  flex: 1, padding: "13px 0", borderRadius: "6px",
  fontWeight: 700, fontSize: "14px", cursor: "pointer",
  border: "2px solid #111111", fontFamily: "inherit",
  transition: "transform 0.12s, box-shadow 0.12s",
};

export default function StepConfirm({ order, onSubmit, onPrev, submitting }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", fontWeight: 800, color: "#111111", marginBottom: "8px" }}>確認需求</h2>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>送出前再檢查一次，買錯就不是代購，是災難片。</p>
      </div>

      {/* receipt card */}
      <div style={{ border: "2px solid #111111", borderRadius: "6px", boxShadow: "4px 4px 0px #111111", overflow: "hidden" }}>
        <div style={{ background: "#FFE14D", padding: "10px 16px", borderBottom: "2px solid #111111" }}>
          <p style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Order Summary</p>
        </div>
        <div style={{ background: "#FFFEF8" }}>
          <Row label="姓名" value={order.name} />
          <Row label="品名" value={order.product} />
          <Row label="數量" value={`${order.quantity} 個`} />
          <Row label="網址" value={order.productUrl || "（未填寫）"} muted={!order.productUrl} />
          <div style={{ padding: "14px 16px", borderTop: "2px solid #F0EBE0" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#555", marginBottom: "10px", textTransform: "uppercase" }}>
              商品圖片（{order.imageUrls.length} 張）
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {order.imageUrls.map((url, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={url} alt="" style={{ width: "58px", height: "58px", objectFit: "cover", borderRadius: "4px", border: "2px solid #111" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onPrev}
          disabled={submitting}
          style={{ ...btnBase, background: "#FFFEF8", color: "#111111", boxShadow: "3px 3px 0px #111111", opacity: submitting ? 0.4 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #111111"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #111111"; }}
        >
          返回修改
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          style={{ ...btnBase, flex: 2, background: submitting ? "#ccc" : "#111111", color: "#fff", boxShadow: submitting ? "none" : "3px 3px 0px #555", opacity: submitting ? 0.4 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = submitting ? "none" : "3px 3px 0px #555"; }}
        >
          {submitting ? "送出中…" : "送出需求"}
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 16px", borderTop: "2px solid #F0EBE0", gap: "12px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, color: "#555", width: "48px", flexShrink: 0, paddingTop: "2px", letterSpacing: "0.04em" }}>{label}</span>
      <span style={{ fontSize: "14px", fontWeight: 600, color: muted ? "#CCC" : "#111111", wordBreak: "break-all" }}>{value}</span>
    </div>
  );
}
