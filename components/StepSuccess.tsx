"use client";

export default function StepSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm mx-auto">
        <div className="flex justify-center mb-2">
          <svg
            viewBox="0 0 80 80"
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#0A0A0A"
              strokeWidth="2.5"
              strokeDasharray="226"
              strokeDashoffset="226"
              strokeLinecap="round"
              style={{
                animation: "drawCircle 0.6s ease forwards",
              }}
            />
            <polyline
              points="24,41 35,52 56,30"
              stroke="#0A0A0A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="50"
              strokeDashoffset="50"
              style={{
                animation: "drawCheck 0.4s ease 0.55s forwards",
              }}
            />
          </svg>
        </div>

        <div>
          <h1
            className="font-bold"
            style={{ fontSize: "32px", color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            訂單已送出
          </h1>
          <p className="mt-2" style={{ fontSize: "15px", color: "#3B3B3B" }}>
            我們收到了，出發前會再確認
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: "8px",
            padding: "12px 32px",
            borderRadius: "8px",
            border: "1.5px solid #0A0A0A",
            background: "#FFFFFF",
            color: "#0A0A0A",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "transform 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          再填一份
        </button>
      </div>

      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
