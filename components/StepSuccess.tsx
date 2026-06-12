"use client";

interface Props {
  onHome: () => void;
  onAgain: () => void;
}

const btnBase: React.CSSProperties = {
  padding: "13px 0", borderRadius: "0",
  fontWeight: 800, fontSize: "13px", cursor: "pointer",
  border: "2px solid #2c2c2c", fontFamily: "inherit",
  width: "100%", transition: "transform 0.1s, box-shadow 0.1s",
};

export default function StepSuccess({ onHome, onAgain }: Props) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", background: "#EDE8DF" }}>
      <div style={{ textAlign: "center", maxWidth: "360px", width: "100%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "72px", height: "72px", border: "2px solid #2c2c2c", background: "#F7F4EF", boxShadow: "3px 3px 0 #2c2c2c", marginBottom: "28px" }}>
          <svg viewBox="0 0 48 48" width="36" height="36" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#2c2c2c" strokeWidth="2.5" strokeDasharray="125" strokeDashoffset="125" strokeLinecap="square" style={{ animation: "drawCircle 0.5s ease forwards" }} />
            <polyline points="14,25 21,32 34,18" stroke="#2c2c2c" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" strokeDasharray="30" strokeDashoffset="30" style={{ animation: "drawCheck 0.3s ease 0.5s forwards" }} />
          </svg>
        </div>

        <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#1a1a1a", marginBottom: "10px", letterSpacing: "-0.01em" }}>需求已送出</h1>
        <p style={{ fontSize: "14px", color: "#777777", lineHeight: 1.75, marginBottom: "36px" }}>
          我收到你的代購需求了，<br />接下來等我回來就好。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={onAgain}
            style={{ ...btnBase, background: "#2c2c2c", color: "#F7F4EF", boxShadow: "3px 3px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
          >再填一筆</button>
          <button
            onClick={onHome}
            style={{ ...btnBase, background: "#F7F4EF", color: "#1a1a1a", boxShadow: "3px 3px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
          >回首頁</button>
        </div>
      </div>
      <style>{`
        @keyframes drawCircle { to { stroke-dashoffset: 0; } }
        @keyframes drawCheck  { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}
