"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepUrl({ value, onChange, onNext, onPrev }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);

  return (
    <StepLayout
      question="商品網址？"
      hint="有連結就貼上，沒有也可以跳過。"
      onNext={onNext}
      onPrev={onPrev}
      nextDisabled={false}
      nextLabel="下一步"
      skipLabel="略過"
    >
      <input
        ref={ref}
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder="https://..."
        style={{
          width: "100%",
          padding: "12px 14px",
          fontSize: "15px",
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
