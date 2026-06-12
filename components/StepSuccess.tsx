"use client";

interface Props {
  onHome: () => void;
  onAgain: () => void;
}

export default function StepSuccess({ onHome, onAgain }: Props) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "#F7F3EC" }}>
      <div style={{ textAlign: "center", maxWidth: "360px", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <svg viewBox="0 0 80 80" width="72" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="40" cy="40" r="36"
              stroke="#111827" strokeWidth="2"
              strokeDasharray="226" strokeDashoffset="226"
              strokeLinecap="round"
              style={{ animation: "drawCircle 0.6s ease forwards" }}
            />
            <polyline
              points="24,41 35,52 56,30"
              stroke="#111827" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="50" strokeDashoffset="50"
              style={{ animation: "drawCheck 0.4s ease 0.55s forwards" }}
            />
          </svg>
        </div>

        <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#111827", letterSpacing: "-0.02em", marginBottom: "10px" }}>
          需求已送出
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.7, marginBottom: "36px" }}>
          我收到你的代購需求了，<br />接下來等我回來就好。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={onAgain}
            style={{
              padding: "13px 0", borderRadius: "8px",
              background: "#111827", color: "#FFFFFF",
              border: "none", fontWeight: 600, fontSize: "14px",
              cursor: "pointer", transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            再填一筆
          </button>
          <button
            onClick={onHome}
            style={{
              padding: "13px 0", borderRadius: "8px",
              background: "#FFFFFF", color: "#111827",
              border: "1.5px solid #E5E0D8", fontWeight: 600, fontSize: "14px",
              cursor: "pointer", transition: "border-color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111827")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
          >
            回首頁
          </button>
        </div>
      </div>

      <style>{`
        @keyframes drawCircle { to { stroke-dashoffset: 0; } }
        @keyframes drawCheck  { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}
