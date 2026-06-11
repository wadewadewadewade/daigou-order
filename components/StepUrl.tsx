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
      hint="選填，可直接按下一步跳過"
      onNext={onNext}
      onPrev={onPrev}
      nextDisabled={false}
      nextLabel="下一步"
      skipLabel="跳過"
    >
      <input
        ref={ref}
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder="https://..."
        className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none text-2xl py-3 bg-transparent placeholder-gray-300 transition-colors"
      />
    </StepLayout>
  );
}
