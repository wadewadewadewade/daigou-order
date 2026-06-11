"use client";

import { useState, useCallback } from "react";
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

export default function Home() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [order, setOrder] = useState<OrderData>({
    name: "",
    product: "",
    quantity: 1,
    imageUrls: [],
    productUrl: "",
  });

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
        imageUrls: order.imageUrls.join(","),
        productUrl: order.productUrl,
      };
      console.log("送出資料：", payload);
      const res = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("Apps Script 回應：", res.status, res.type);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <StepSuccess />;

  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar current={step} total={TOTAL_STEPS} />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        {step === 1 && (
          <StepName value={order.name} onChange={(v) => update("name", v)} onNext={next} />
        )}
        {step === 2 && (
          <StepProduct value={order.product} onChange={(v) => update("product", v)} onNext={next} onPrev={prev} />
        )}
        {step === 3 && (
          <StepQuantity value={order.quantity} onChange={(v) => update("quantity", v)} onNext={next} onPrev={prev} />
        )}
        {step === 4 && (
          <StepImages value={order.imageUrls} onChange={(v) => update("imageUrls", v)} onNext={next} onPrev={prev} />
        )}
        {step === 5 && (
          <StepUrl value={order.productUrl} onChange={(v) => update("productUrl", v)} onNext={next} onPrev={prev} />
        )}
        {step === 6 && (
          <StepConfirm order={order} onSubmit={handleSubmit} onPrev={prev} submitting={submitting} />
        )}
      </div>
    </div>
  );
}
