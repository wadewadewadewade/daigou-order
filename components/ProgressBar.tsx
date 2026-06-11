"use client";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full px-6 pt-8 pb-2">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between mb-3" style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.08em", color: "#3B3B3B" }}>
          <span>{fmt(current)} / {fmt(total)}</span>
          <span>{pct}%</span>
        </div>
        <div className="rounded-full overflow-hidden" style={{ height: "2px", background: "#E5E7EB" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: "#0A0A0A" }}
          />
        </div>
      </div>
    </div>
  );
}
