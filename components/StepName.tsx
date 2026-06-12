"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

export default function StepName({ value, onChange, onNext }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const handleNext = () => { if (value.trim()) onNext(); };

  return (
    <StepLayout question="你是誰？" hint="先留個名字，我才知道這包是誰的戰利品。" onNext={handleNext} nextDisabled={!value.trim()}>
      <input
        ref={ref} type="text" value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleNext()}
        placeholder="輸入你的名字"
        style={{ width: "100%", padding: "12px 14px", fontSize: "15px", fontWeight: 600, borderRadius: "0", border: "2px solid #2c2c2c", outline: "none", background: "#EDE8DF", color: "#1a1a1a", fontFamily: "inherit", transition: "box-shadow 0.1s ease" }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c")}
        onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      />
    </StepLayout>
  );
}
