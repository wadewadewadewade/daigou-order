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
    <StepLayout question="商品網址？" hint="有連結就貼上，沒有也可以跳過。" onNext={onNext} onPrev={onPrev} nextDisabled={false} nextLabel="下一步" skipLabel="略過">
      <input
        ref={ref} type="url" value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder="https://..."
        style={{ width: "100%", padding: "12px 14px", fontSize: "14px", fontWeight: 600, borderRadius: "0", border: "2px solid #2c2c2c", outline: "none", background: "#EDE8DF", color: "#1a1a1a", fontFamily: "inherit", transition: "box-shadow 0.1s" }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
    </StepLayout>
  );
}
