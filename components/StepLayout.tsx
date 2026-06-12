"use client";

import { ReactNode } from "react";

interface Props {
  question: string;
  hint?: string;
  children: ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  skipLabel?: string;
}

const btnBase: React.CSSProperties = {
  flex: 1,
  padding: "13px 0",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "14px",
  cursor: "pointer",
  transition: "transform 0.15s ease, opacity 0.15s ease",
};

export default function StepLayout({ question, hint, children, onNext, onPrev, nextDisabled = false, nextLabel = "下一步", skipLabel }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 700, color: "#111827", lineHeight: 1.25, marginBottom: "8px", letterSpacing: "-0.01em" }}>
          {question}
        </h2>
        {hint && <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{hint}</p>}
      </div>

      <div>{children}</div>

      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        {onPrev && (
          <button
            onClick={onPrev}
            style={{ ...btnBase, background: "#FFFFFF", color: "#111827", border: "1.5px solid #E5E0D8" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.borderColor = "#111827"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "#E5E0D8"; }}
          >
            上一步
          </button>
        )}
        {skipLabel && (
          <button
            onClick={onNext}
            style={{ ...btnBase, background: "#FFFFFF", color: "#6B7280", border: "1.5px solid #E5E0D8" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            {skipLabel}
          </button>
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          style={{
            ...btnBase,
            flex: skipLabel ? 1 : 2,
            background: nextDisabled ? "#D1D5DB" : "#111827",
            color: "#FFFFFF",
            border: "none",
            cursor: nextDisabled ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => { if (!nextDisabled) e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
