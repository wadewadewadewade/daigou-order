"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";
import { AnimatedInput } from "./AnimatedInput";

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
      <AnimatedInput
        ref={ref}
        label="https://..."
        value={value}
        type="url"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
      />
    </StepLayout>
  );
}
