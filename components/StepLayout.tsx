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

const baseBtn: React.CSSProperties = {
  flex: 1,
  padding: "13px 0",
  borderRadius: "6px",
  fontWeight: 700,
  fontSize: "14px",
  cursor: "pointer",
  border: "2px solid #111111",
  transition: "transform 0.12s ease, box-shadow 0.12s ease",
  fontFamily: "inherit",
};

export default function StepLayout({ question, hint, children, onNext, onPrev, nextDisabled = false, nextLabel = "下一步", skipLabel }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", fontWeight: 800, color: "#111111", lineHeight: 1.2, marginBottom: "8px", letterSpacing: "-0.01em" }}>
          {question}
        </h2>
        {hint && <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{hint}</p>}
      </div>

      <div>{children}</div>

      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        {onPrev && (
          <button
            onClick={onPrev}
            style={{ ...baseBtn, background: "#FFFEF8", color: "#111111", boxShadow: "3px 3px 0px #111111" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #111111"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #111111"; }}
          >
            上一步
          </button>
        )}
        {skipLabel && (
          <button
            onClick={onNext}
            style={{ ...baseBtn, background: "#FFFEF8", color: "#555", boxShadow: "3px 3px 0px #555" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #555"; }}
          >
            {skipLabel}
          </button>
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          style={{
            ...baseBtn,
            flex: skipLabel ? 1 : 2,
            background: nextDisabled ? "#ccc" : "#111111",
            color: "#FFFFFF",
            boxShadow: nextDisabled ? "none" : "3px 3px 0px #555",
            cursor: nextDisabled ? "not-allowed" : "pointer",
            opacity: nextDisabled ? 0.4 : 1,
          }}
          onMouseEnter={(e) => { if (!nextDisabled) { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = nextDisabled ? "none" : "3px 3px 0px #555"; }}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
