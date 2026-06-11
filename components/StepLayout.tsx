"use client";

import { ReactNode } from "react";

interface Props {
  question: string;
  hint?: string;
  children: ReactNode;
  onNext: () => void;
  onPrev?: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  skipLabel?: string;
}

export default function StepLayout({
  question,
  hint,
  children,
  onNext,
  onPrev,
  nextDisabled = false,
  nextLabel = "下一步",
  skipLabel,
}: Props) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-2">{question}</h2>
        {hint && <p className="text-gray-400 text-lg">{hint}</p>}
      </div>

      <div>{children}</div>

      <div className="flex gap-3 pt-2">
        {onPrev && (
          <button
            onClick={onPrev}
            className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-lg hover:bg-gray-50 transition-colors"
          >
            上一步
          </button>
        )}
        {skipLabel && (
          <button
            onClick={onNext}
            className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-400 font-semibold text-lg hover:bg-gray-50 transition-colors"
          >
            {skipLabel}
          </button>
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="flex-[2] py-4 rounded-2xl bg-indigo-500 text-white font-semibold text-lg hover:bg-indigo-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
