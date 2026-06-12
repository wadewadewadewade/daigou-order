"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: number;
  onChange: (v: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepQuantity({ value, onChange, onNext, onPrev }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);

  const handleChange = (raw: string) => {
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= 1) onChange(n);
    else if (raw === "") onChange(1);
  };

  const handleNext = () => { if (value >= 1) onNext(); };

  return (
    <StepLayout
      question="要買幾個？"
      hint="請輸入正整數，我會照這個數量統計。"
      onNext={handleNext}
      onPrev={onPrev}
      nextDisabled={value < 1}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          style={{
            width: "44px", height: "44px", borderRadius: "8px",
            border: "1.5px solid #E5E0D8", background: "#FFFFFF",
            fontSize: "20px", fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111827")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
        >
          −
        </button>
        <input
          ref={ref}
          type="number"
          min={1}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          style={{
            width: "96px", textAlign: "center",
            padding: "10px", fontSize: "24px", fontWeight: 700,
            borderRadius: "8px", border: "1.5px solid #E5E0D8",
            outline: "none", background: "#FAFAF8", color: "#111827",
            transition: "border-color 0.15s ease",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#111827")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
        />
        <button
          onClick={() => onChange(value + 1)}
          style={{
            width: "44px", height: "44px", borderRadius: "8px",
            border: "1.5px solid #E5E0D8", background: "#FFFFFF",
            fontSize: "20px", fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "border-color 0.15s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111827")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
        >
          ＋
        </button>
      </div>
    </StepLayout>
  );
}
