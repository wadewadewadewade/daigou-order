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
  borderRadius: "0",
  fontWeight: 800,
  fontSize: "13px",
  cursor: "pointer",
  border: "2px solid #2c2c2c",
  fontFamily: "inherit",
  transition: "transform 0.1s ease, box-shadow 0.1s ease",
};

export default function StepLayout({ question, hint, children, onNext, onPrev, nextDisabled = false, nextLabel = "下一步", skipLabel }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, marginBottom: "8px" }}>
          {question}
        </h2>
        {hint && <p style={{ fontSize: "13px", color: "#777777", lineHeight: 1.7 }}>{hint}</p>}
      </div>

      <div>{children}</div>

      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        {onPrev && (
          <button
            onClick={onPrev}
            style={{ ...baseBtn, background: "#F7F4EF", color: "#1a1a1a", boxShadow: "3px 3px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
          >
            上一步
          </button>
        )}
        {skipLabel && (
          <button
            onClick={onNext}
            style={{ ...baseBtn, background: "#F7F4EF", color: "#777777", boxShadow: "3px 3px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
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
            background: nextDisabled ? "#c0bbb3" : "#2c2c2c",
            color: "#F7F4EF",
            boxShadow: nextDisabled ? "none" : "3px 3px 0 #2c2c2c",
            cursor: nextDisabled ? "not-allowed" : "pointer",
            opacity: nextDisabled ? 0.5 : 1,
          }}
          onMouseEnter={(e) => { if (!nextDisabled) { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = nextDisabled ? "none" : "3px 3px 0 #2c2c2c"; }}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
