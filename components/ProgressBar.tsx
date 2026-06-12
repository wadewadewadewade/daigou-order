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
          <span style={{ fontFamily: "var(--font-ps2)", fontSize: "7px", color: "#9c9c9c", letterSpacing: "0.04em" }}>
            STEP {fmt(current)} / {fmt(total)}
          </span>
          <span style={{ fontFamily: "var(--font-ps2)", fontSize: "7px", color: "#9c9c9c" }}>{pct}%</span>
        </div>
        <div style={{ height: "4px", background: "#d5d0c8", border: "1px solid #c0bbb3", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "#2c2c2c", transition: "width 0.4s ease" }} />
        </div>
      </div>
    </div>
  );
}
