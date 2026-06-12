"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

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
        style={{ width: "100%", padding: "12px 14px", fontSize: "15px", fontWeight: 600, borderRadius: "0", border: "2px solid #2c2c2c", outline: "none", background: "#EDE8DF", color: "#1a1a1a", fontFamily: "inherit", transition: "box-shadow 0.1s ease" }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
    </StepLayout>
  );
}
