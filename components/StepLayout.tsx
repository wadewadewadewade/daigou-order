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

export default function StepLayout({
  question,
  hint,
  children,
  onNext,
  onPrev,
  nextDisabled = false,
  nextLabel = "下一步",
  skipLabel,
}: Props) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-10">
      <div>
        <h2
          className="font-bold leading-tight mb-3"
          style={{ fontSize: "48px", fontWeight: 700, color: "#0A0A0A" }}
        >
          {question}
        </h2>
        {hint && (
          <p style={{ fontSize: "15px", color: "#3B3B3B" }}>{hint}</p>
        )}
      </div>

      <div>{children}</div>

      <div className="flex gap-3 pt-2">
        {onPrev && (
          <button
            onClick={onPrev}
            style={{
              flex: 1,
              padding: "14px 0",
              borderRadius: "8px",
              border: "1.5px solid #0A0A0A",
              background: "#FFFFFF",
              color: "#0A0A0A",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            上一步
          </button>
        )}
        {skipLabel && (
          <button
            onClick={onNext}
            style={{
              flex: 1,
              padding: "14px 0",
              borderRadius: "8px",
              border: "1.5px solid #0A0A0A",
              background: "#FFFFFF",
              color: "#3B3B3B",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {skipLabel}
          </button>
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          style={{
            flex: 2,
            padding: "14px 0",
            borderRadius: "8px",
            border: "none",
            background: nextDisabled ? "#D1D5DB" : "#0A0A0A",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "15px",
            cursor: nextDisabled ? "not-allowed" : "pointer",
            transition: "transform 0.15s ease, background 0.2s ease",
          }}
          onMouseEnter={(e) => { if (!nextDisabled) e.currentTarget.style.transform = "scale(1.02)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
