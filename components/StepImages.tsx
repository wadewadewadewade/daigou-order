"use client";

import { useState, useRef } from "react";
import StepLayout from "./StepLayout";

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
  onNext: () => void;
  onPrev: () => void;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

export default function StepImages({ value, onChange, onNext, onPrev }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File): Promise<string> => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: form }
    );
    if (!res.ok) throw new Error("上傳失敗");
    const data = await res.json();
    return data.secure_url as string;
  };

  const handleFiles = async (files: FileList) => {
    setError("");
    setUploading(true);
    try {
      const urls = await Promise.all(Array.from(files).map(uploadFile));
      onChange([...value, ...urls]);
    } catch {
      setError("圖片上傳失敗，請重試");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (idx: number) => {
    onChange(value.filter((_, i) => i !== idx));
  };

  return (
    <StepLayout
      question="上傳商品圖片"
      hint="請上傳至少一張商品圖片（可多張）"
      onNext={onNext}
      onPrev={onPrev}
      nextDisabled={value.length === 0 || uploading}
    >
      <div className="w-full space-y-4">
        <div
          onClick={() => !uploading && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
          }}
          className="border-2 border-dashed border-gray-300 hover:border-indigo-400 rounded-2xl p-8 text-center cursor-pointer transition-colors"
        >
          {uploading ? (
            <p className="text-indigo-500 text-lg animate-pulse">上傳中...</p>
          ) : (
            <>
              <p className="text-4xl mb-2">📸</p>
              <p className="text-gray-500 text-lg">點擊或拖曳圖片到這裡</p>
            </>
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {value.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {value.map((url, i) => (
              <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-full h-full object-cover" />
                <button
                  onClick={() => removeImage(i)}
                  className="absolute inset-0 bg-black/50 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </StepLayout>
  );
}
