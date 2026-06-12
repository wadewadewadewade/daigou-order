"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";
import { AnimatedInput } from "./AnimatedInput";

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
      <AnimatedInput
        ref={ref}
        label="輸入你的名字"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleNext()}
      />
    </StepLayout>
  );
}
