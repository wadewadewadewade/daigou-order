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
    <StepLayout
      question="你想買什麼？"
      hint="輸入商品名稱、品牌、型號，越清楚越不會買錯。"
      onNext={handleNext}
      onPrev={onPrev}
      nextDisabled={!value.trim()}
    >
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleNext()}
        placeholder="例：Nike Air Force 1 白色 US10"
        style={{
          width: "100%",
          padding: "12px 14px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1.5px solid #E5E0D8",
          outline: "none",
          background: "#FAFAF8",
          color: "#111827",
          transition: "border-color 0.15s ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#111827")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
      />
    </StepLayout>
  );
}
