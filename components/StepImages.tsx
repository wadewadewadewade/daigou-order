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
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File): Promise<string> => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: "POST", body: form });
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

  const removeImage = (idx: number) => onChange(value.filter((_, i) => i !== idx));

  return (
    <StepLayout question="上傳商品圖片" hint="請上傳商品截圖、包裝圖或參考照片，可多張。" onNext={onNext} onPrev={onPrev} nextDisabled={value.length === 0 || uploading}>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div
          onClick={() => !uploading && inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files); }}
          style={{
            border: `2px dashed #111111`,
            borderRadius: "6px",
            padding: "32px 24px",
            textAlign: "center",
            cursor: uploading ? "default" : "pointer",
            background: dragOver ? "#FFE14D" : "#FFF9F0",
            boxShadow: dragOver ? "3px 3px 0px #111" : "none",
            transition: "background 0.15s, box-shadow 0.15s",
          }}
        >
          {uploading ? (
            <p style={{ fontSize: "14px", fontWeight: 700 }}>上傳中，請稍候…</p>
          ) : (
            <>
              <p style={{ fontSize: "28px", marginBottom: "8px" }}>📎</p>
              <p style={{ fontSize: "14px", fontWeight: 700 }}>點擊或拖曳圖片到這裡</p>
              <p style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>支援 JPG、PNG、HEIC，可多張</p>
            </>
          )}
        </div>

        <input ref={inputRef} type="file" accept="image/*" multiple style={{ display: "none" }} onChange={(e) => e.target.files && handleFiles(e.target.files)} />

        {error && <p style={{ fontSize: "13px", color: "#DC2626", fontWeight: 600 }}>{error}</p>}

        {value.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))", gap: "8px" }}>
            {value.map((url, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "4px", overflow: "hidden", aspectRatio: "1", border: "2px solid #111111", boxShadow: "2px 2px 0px #111" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button
                  onClick={() => removeImage(i)}
                  style={{ position: "absolute", inset: 0, background: "rgba(255,225,77,0.88)", color: "#111", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: 800, opacity: 0, transition: "opacity 0.15s", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >✕</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </StepLayout>
  );
}
