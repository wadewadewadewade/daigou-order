"use client";

import { OrderData } from "@/app/page";

interface Props {
  order: OrderData;
  onSubmit: () => void;
  onPrev: () => void;
  submitting: boolean;
}

export default function StepConfirm({ order, onSubmit, onPrev, submitting }: Props) {
  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">確認訂單</h2>
        <p className="text-gray-400 text-lg">請確認以下資訊後送出</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        <Row label="姓名" value={order.name} />
        <Row label="品名" value={order.product} />
        <Row label="數量" value={String(order.quantity)} />
        <Row label="商品網址" value={order.productUrl || "（未填寫）"} muted={!order.productUrl} />
        <div className="px-6 py-4">
          <p className="text-sm text-gray-400 mb-3">商品圖片（{order.imageUrls.length} 張）</p>
          <div className="flex flex-wrap gap-2">
            {order.imageUrls.map((url, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={url} alt="" className="w-16 h-16 object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onPrev}
          disabled={submitting}
          className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-semibold text-lg hover:bg-gray-50 transition-colors disabled:opacity-40"
        >
          上一步
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="flex-2 flex-[2] py-4 rounded-2xl bg-indigo-500 text-white font-semibold text-lg hover:bg-indigo-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {submitting ? "送出中..." : "確認送出"}
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center px-6 py-4 gap-4">
      <span className="text-sm text-gray-400 w-20 shrink-0">{label}</span>
      <span className={`text-base font-medium break-all ${muted ? "text-gray-300" : "text-gray-800"}`}>
        {value}
      </span>
    </div>
  );
}
