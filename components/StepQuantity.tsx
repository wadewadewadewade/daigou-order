"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: number;
  onChange: (v: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const adjBtn: React.CSSProperties = {
  width: "44px", height: "44px", borderRadius: "4px",
  border: "2px solid #111111", background: "#FFE14D",
  fontSize: "20px", fontWeight: 800, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, boxShadow: "2px 2px 0px #111",
  transition: "transform 0.12s, box-shadow 0.12s",
  fontFamily: "inherit",
};

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
    <StepLayout question="要買幾個？" hint="請輸入正整數，我會照這個數量統計。" onNext={handleNext} onPrev={onPrev} nextDisabled={value < 1}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          style={adjBtn}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "4px 4px 0px #111"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "2px 2px 0px #111"; }}
        >−</button>
        <input
          ref={ref} type="number" min={1} value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          style={{ width: "88px", textAlign: "center", padding: "10px", fontSize: "24px", fontWeight: 800, borderRadius: "4px", border: "2px solid #111111", outline: "none", background: "#FFF9F0", color: "#111111", fontFamily: "inherit", transition: "box-shadow 0.15s" }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0px #111")}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        />
        <button
          onClick={() => onChange(value + 1)}
          style={adjBtn}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "4px 4px 0px #111"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "2px 2px 0px #111"; }}
        >＋</button>
      </div>
    </StepLayout>
  );
}
