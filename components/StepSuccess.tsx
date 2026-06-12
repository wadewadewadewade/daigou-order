"use client";

interface Props {
  onHome: () => void;
  onAgain: () => void;
}

const btnBase: React.CSSProperties = {
  padding: "13px 0", borderRadius: "6px",
  fontWeight: 700, fontSize: "14px", cursor: "pointer",
  border: "2px solid #111111", fontFamily: "inherit",
  transition: "transform 0.12s, box-shadow 0.12s",
  width: "100%",
};

export default function StepSuccess({ onHome, onAgain }: Props) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "#FFF9F0" }}>
      <div style={{ textAlign: "center", maxWidth: "360px", width: "100%" }}>
        <div
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px", border: "2px solid #111", borderRadius: "6px", background: "#FFE14D", boxShadow: "4px 4px 0px #111", marginBottom: "28px" }}
        >
          <svg viewBox="0 0 80 80" width="48" height="48" fill="none">
            <circle
              cx="40" cy="40" r="36"
              stroke="#111111" strokeWidth="2.5"
              strokeDasharray="226" strokeDashoffset="226"
              strokeLinecap="round"
              style={{ animation: "drawCircle 0.6s ease forwards" }}
            />
            <polyline
              points="24,41 35,52 56,30"
              stroke="#111111" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="50" strokeDashoffset="50"
              style={{ animation: "drawCheck 0.4s ease 0.55s forwards" }}
            />
          </svg>
        </div>

        <h1 style={{ fontSize: "30px", fontWeight: 800, color: "#111111", letterSpacing: "-0.02em", marginBottom: "10px" }}>
          需求已送出
        </h1>
        <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.75, marginBottom: "36px" }}>
          我收到你的代購需求了，<br />接下來等我回來就好。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={onAgain}
            style={{ ...btnBase, background: "#111111", color: "#FFFFFF", boxShadow: "3px 3px 0px #555" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #555"; }}
          >
            再填一筆
          </button>
          <button
            onClick={onHome}
            style={{ ...btnBase, background: "#FFE14D", color: "#111111", boxShadow: "3px 3px 0px #111" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #111"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #111"; }}
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
