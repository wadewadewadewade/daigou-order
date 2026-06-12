"use client";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={{ padding: "0 24px" }}>
      <div style={{ maxWidth: "576px", margin: "0 auto", paddingBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", color: "#111111" }}>
            STEP {fmt(current)} / {fmt(total)}
          </span>
          <span style={{ fontWeight: 700, fontSize: "12px", color: "#111111" }}>{pct}%</span>
        </div>
        <div style={{ height: "6px", background: "#EEE", border: "1.5px solid #111111", borderRadius: "3px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${pct}%`,
            background: "#FFE14D",
            transition: "width 0.4s ease",
          }} />
        </div>
      </div>
    </div>
  );
}
