"use client";

export default function StepSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm mx-auto">
        <div className="text-7xl animate-bounce">🎉</div>
        <h1 className="text-4xl font-bold text-gray-900">已收到你的訂單！</h1>
        <p className="text-gray-500 text-lg">我們會盡快與你聯絡，請稍候。</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold text-lg hover:bg-indigo-600 transition-colors"
        >
          再填一份
        </button>
      </div>
    </div>
  );
}
