"use client";

import { useRef, useEffect } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: number;
  onChange: (v: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepQuantity({ value, onChange, onNext, onPrev }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);

  const handleChange = (raw: string) => {
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= 1) onChange(n);
    else if (raw === "") onChange(1);
  };

  const handleNext = () => { if (value >= 1) onNext(); };

  return (
    <StepLayout
      question="要買幾個？"
      hint="請輸入購買數量"
      onNext={handleNext}
      onPrev={onPrev}
      nextDisabled={value < 1}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-2xl font-bold flex items-center justify-center transition-colors"
        >
          −
        </button>
        <input
          ref={ref}
          type="number"
          min={1}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          className="w-28 text-center border-b-2 border-gray-300 focus:border-indigo-500 outline-none text-4xl font-bold py-2 bg-transparent transition-colors"
        />
        <button
          onClick={() => onChange(value + 1)}
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-2xl font-bold flex items-center justify-center transition-colors"
        >
          ＋
        </button>
      </div>
    </StepLayout>
  );
}
