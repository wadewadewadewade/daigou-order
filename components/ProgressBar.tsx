"use client";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={{ padding: "0 24px 0" }}>
      <div style={{ maxWidth: "576px", margin: "0 auto", paddingBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.08em", color: "#6B7280" }}>
            STEP {fmt(current)} / {fmt(total)}
          </span>
          <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#6B7280" }}>{pct}%</span>
        </div>
        <div style={{ height: "2px", background: "#E5E0D8", borderRadius: "99px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "#111827", borderRadius: "99px", transition: "width 0.5s ease" }} />
        </div>
      </div>
    </div>
  );
}
