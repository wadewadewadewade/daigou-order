"use client";

import { OrderData } from "@/app/page";

interface Props {
  order: OrderData;
  onSubmit: () => void;
  onPrev: () => void;
  submitting: boolean;
}

const btnBase: React.CSSProperties = {
  flex: 1, padding: "13px 0", borderRadius: "0",
  fontWeight: 800, fontSize: "13px", cursor: "pointer",
  border: "2px solid #2c2c2c", fontFamily: "inherit",
  transition: "transform 0.1s, box-shadow 0.1s",
};

export default function StepConfirm({ order, onSubmit, onPrev, submitting }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 800, color: "#1a1a1a", marginBottom: "8px" }}>確認需求</h2>
        <p style={{ fontSize: "13px", color: "#777777", lineHeight: 1.7 }}>送出前再檢查一次，買錯就不是代購，是災難片。</p>
      </div>

      <div style={{ border: "2px solid #2c2c2c", borderRadius: "0", boxShadow: "3px 3px 0 #2c2c2c", overflow: "hidden" }}>
        <div style={{ background: "#2c2c2c", padding: "10px 16px" }}>
          <p style={{ fontSize: "9px", fontWeight: 700,color: "#F7F4EF", letterSpacing: "0.06em" }}>ORDER SUMMARY</p>
        </div>
        <div style={{ background: "#F7F4EF" }}>
          <Row label="姓名" value={order.name} />
          <Row label="品名" value={order.product} />
          <Row label="數量" value={`${order.quantity} 個`} />
          <Row label="網址" value={order.productUrl || "（未填寫）"} muted={!order.productUrl} />
          <div style={{ padding: "14px 16px", borderTop: "1px solid #d5d0c8" }}>
            <p style={{ fontSize: "9px", fontWeight: 700,color: "#777777", marginBottom: "10px", letterSpacing: "0.04em" }}>
              IMAGES ({order.imageUrls.length})
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {order.imageUrls.map((url, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={url} alt="" style={{ width: "58px", height: "58px", objectFit: "cover", borderRadius: "0", border: "2px solid #2c2c2c" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={onPrev} disabled={submitting}
          style={{ ...btnBase, background: "#F7F4EF", color: "#1a1a1a", boxShadow: "3px 3px 0 #2c2c2c", opacity: submitting ? 0.4 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
        >返回修改</button>
        <button
          onClick={onSubmit} disabled={submitting}
          style={{ ...btnBase, flex: 2, background: submitting ? "#c0bbb3" : "#2c2c2c", color: "#F7F4EF", boxShadow: submitting ? "none" : "3px 3px 0 #2c2c2c", opacity: submitting ? 0.5 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
          onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = submitting ? "none" : "3px 3px 0 #2c2c2c"; }}
        >{submitting ? "送出中…" : "送出需求"}</button>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 16px", borderTop: "1px solid #d5d0c8", gap: "12px" }}>
      <span style={{ fontSize: "10px", fontWeight: 700,color: "#777777", width: "48px", flexShrink: 0, paddingTop: "3px", letterSpacing: "0.02em" }}>{label}</span>
      <span style={{ fontSize: "13px", fontWeight: 700, color: muted ? "#c0bbb3" : "#1a1a1a", wordBreak: "break-all" }}>{value}</span>
    </div>
  );
}
