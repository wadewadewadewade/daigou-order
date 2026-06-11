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
      hint="請輸入商品名稱"
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
        placeholder="商品名稱"
        className="w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none text-3xl py-3 bg-transparent placeholder-gray-300 transition-colors"
      />
    </StepLayout>
  );
}
