"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", fontSize: "16px",
  borderRadius: "4px", border: "2px solid #111111",
  outline: "none", background: "#FFF9F0", color: "#111111",
  fontFamily: "inherit", fontWeight: 600,
  transition: "box-shadow 0.15s ease",
};

export default function StepProduct({ value, onChange, onNext, onPrev }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const handleNext = () => { if (value.trim()) onNext(); };

  return (
    <StepLayout question="你想買什麼？" hint="輸入商品名稱、品牌、型號，越清楚越不會買錯。" onNext={handleNext} onPrev={onPrev} nextDisabled={!value.trim()}>
      <input
        ref={ref} type="text" value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleNext()}
        placeholder="例：Nike Air Force 1 白色 US10"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0px #111111")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
    </StepLayout>
  );
}
