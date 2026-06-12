"use client";

import { useState, useCallback } from "react";
import Landing from "@/components/Landing";
import StepName from "@/components/StepName";
import StepProduct from "@/components/StepProduct";
import StepQuantity from "@/components/StepQuantity";
import StepImages from "@/components/StepImages";
import StepUrl from "@/components/StepUrl";
import StepConfirm from "@/components/StepConfirm";
import StepSuccess from "@/components/StepSuccess";
import ProgressBar from "@/components/ProgressBar";

export interface OrderData {
  name: string;
  product: string;
  quantity: number;
  imageUrls: string[];
  productUrl: string;
}

const TOTAL_STEPS = 6;
type View = "landing" | "form" | "success";

export default function Home() {
  const [view, setView] = useState<View>("landing");
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [order, setOrder] = useState<OrderData>({
    name: "",
    product: "",
    quantity: 1,
    imageUrls: [],
    productUrl: "",
  });

  const startForm = useCallback(() => {
    setStep(1);
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, TOTAL_STEPS)), []);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 1)), []);

  const update = useCallback(<K extends keyof OrderData>(key: K, value: OrderData[K]) => {
    setOrder((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const payload = {
        name: order.name,
        product: order.product,
        quantity: order.quantity,
        imageUrls: order.imageUrls,
        productUrl: order.productUrl,
      };
      console.log("送出資料：", payload);
      const res = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      console.log("Apps Script 回應：", res.status, res.type);
      setView("success");
    } finally {
      setSubmitting(false);
    }
  };

  if (view === "landing") return <Landing onStart={startForm} />;
  if (view === "success") return (
    <StepSuccess
      onHome={() => setView("landing")}
      onAgain={() => {
        setOrder({ name: "", product: "", quantity: 1, imageUrls: [], productUrl: "" });
        setStep(1);
        setView("form");
      }}
    />
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#FFF9F0" }}>
      <div style={{ width: "100%", padding: "20px 24px 0" }}>
        <div style={{ maxWidth: "576px", margin: "0 auto" }}>
          <button
            onClick={() => setView("landing")}
            style={{ fontSize: "13px", fontWeight: 600, color: "#555", background: "none", border: "none", cursor: "pointer", padding: "4px 0", fontFamily: "inherit" }}
          >
            ← 返回
          </button>
        </div>
      </div>
      <div style={{ padding: "16px 24px 0" }}>
        <ProgressBar current={step} total={TOTAL_STEPS} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 24px 48px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            background: "#FFFEF8",
            border: "2px solid #111111",
            borderRadius: "6px",
            boxShadow: "4px 4px 0px #111111",
            padding: "36px 32px",
            transform: "rotate(-1deg)",
          }}
        >
          {step === 1 && <StepName value={order.name} onChange={(v) => update("name", v)} onNext={next} />}
          {step === 2 && <StepProduct value={order.product} onChange={(v) => update("product", v)} onNext={next} onPrev={prev} />}
          {step === 3 && <StepQuantity value={order.quantity} onChange={(v) => update("quantity", v)} onNext={next} onPrev={prev} />}
          {step === 4 && <StepImages value={order.imageUrls} onChange={(v) => update("imageUrls", v)} onNext={next} onPrev={prev} />}
          {step === 5 && <StepUrl value={order.productUrl} onChange={(v) => update("productUrl", v)} onNext={next} onPrev={prev} />}
          {step === 6 && <StepConfirm order={order} onSubmit={handleSubmit} onPrev={prev} submitting={submitting} />}
        </div>
      </div>
    </div>
  );
}
