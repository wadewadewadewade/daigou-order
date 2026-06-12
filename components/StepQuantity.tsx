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
  width: "44px", height: "44px", borderRadius: "0",
  border: "2px solid #2c2c2c", background: "#EDE8DF",
  fontSize: "20px", fontWeight: 800, cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, boxShadow: "2px 2px 0 #2c2c2c",
  transition: "transform 0.1s, box-shadow 0.1s",
  fontFamily: "inherit", color: "#1a1a1a",
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
          onClick={() => onChange(Math.max(1, value - 1))} style={adjBtn}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "0px 0px 0 #2c2c2c"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "2px 2px 0 #2c2c2c"; }}
        >−</button>
        <input
          ref={ref} type="number" min={1} value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          style={{ width: "88px", textAlign: "center", padding: "10px", fontSize: "24px", fontWeight: 800, borderRadius: "0", border: "2px solid #2c2c2c", outline: "none", background: "#EDE8DF", color: "#1a1a1a", fontFamily: "inherit", transition: "box-shadow 0.1s" }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c")}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        />
        <button
          onClick={() => onChange(value + 1)} style={adjBtn}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "0px 0px 0 #2c2c2c"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "2px 2px 0 #2c2c2c"; }}
        >＋</button>
      </div>
    </StepLayout>
  );
}
