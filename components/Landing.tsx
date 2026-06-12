"use client";

interface Props {
  onStart: () => void;
}

const btn = {
  primary: {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: "8px",
    background: "#111827",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "15px",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.15s ease",
    textDecoration: "none",
  } as React.CSSProperties,
  outline: {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: "8px",
    background: "transparent",
    color: "#111827",
    fontWeight: 600,
    fontSize: "15px",
    border: "1.5px solid #E5E0D8",
    cursor: "pointer",
    transition: "border-color 0.15s ease",
    textDecoration: "none",
  } as React.CSSProperties,
};

const card: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid #E5E0D8",
  borderRadius: "12px",
  padding: "24px",
};

export default function Landing({ onStart }: Props) {
  return (
    <div style={{ background: "#F7F3EC", minHeight: "100vh", color: "#111827" }}>
      {/* nav */}
      <nav style={{ borderBottom: "1px solid #E5E0D8", background: "#F7F3EC" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "0.04em" }}>WADE CARRY</span>
          <button onClick={onStart} style={{ ...btn.primary, padding: "10px 22px", fontSize: "13px" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            開始填寫
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* hero */}
        <section style={{ padding: "72px 0 56px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.14em", color: "#B45309", textTransform: "uppercase", marginBottom: "16px" }}>
            快閃代購 · 需求登記
          </p>
          <h1 style={{ fontSize: "clamp(38px, 7vw, 56px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            代購需求登記
          </h1>
          <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 40px" }}>
            想買的商品先丟上來。我會依這趟美國 / 日本行程、現場庫存與行李空間，協助整理需求與確認能不能帶回來。
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onStart} style={btn.primary}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              開始填寫需求
            </button>
            <a href="#process" style={btn.outline}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
            >
              查看代購流程
            </a>
          </div>
        </section>

        {/* badge row */}
        <section style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px", justifyContent: "center" }}>
          {["圖片必填", "網址選填", "可多張圖片", "依現場狀況採買"].map((t) => (
            <span key={t} style={{ padding: "6px 14px", borderRadius: "99px", border: "1px solid #E5E0D8", fontSize: "13px", color: "#6B7280", background: "#FFFFFF" }}>
              {t}
            </span>
          ))}
        </section>

        {/* trip status */}
        <section style={{ ...card, marginBottom: "48px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#B45309", marginTop: "5px", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: "12px", color: "#6B7280", marginBottom: "4px", fontWeight: 500 }}>本次行程</p>
            <p style={{ fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>美國 / 日本</p>
            <p style={{ fontSize: "13px", color: "#B45309", fontWeight: 600, marginBottom: "8px" }}>需求收集中</p>
            <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>
              此表單主要用於統一整理需求，是否能購買會依現場狀況再確認。
            </p>
          </div>
        </section>

        {/* features */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#6B7280", textTransform: "uppercase", marginBottom: "20px" }}>服務說明</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {[
              { icon: "🖼", title: "圖片輔助找貨", desc: "上傳截圖或商品照片，方便現場比對型號與規格。" },
              { icon: "📋", title: "統一整理需求", desc: "所有需求集中收集，方便整理優先順序與行李安排。" },
              { icon: "✈️", title: "快閃行程代購", desc: "依當次行程路線採買，非固定服務，依行程彈性確認。" },
            ].map((f) => (
              <div key={f.title} style={card}>
                <p style={{ fontSize: "22px", marginBottom: "10px" }}>{f.icon}</p>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px" }}>{f.title}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* process */}
        <section id="process" style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#6B7280", textTransform: "uppercase", marginBottom: "20px" }}>代購流程</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
            {[
              { num: "01", title: "填寫需求", desc: "填寫商品名稱、數量與圖片，送出登記表。" },
              { num: "02", title: "現場找貨", desc: "抵達當地後依需求清單前往採買，確認庫存。" },
              { num: "03", title: "統一回覆", desc: "確認結果後統一通知，安排費用與交貨。" },
            ].map((p) => (
              <div key={p.num} style={{ ...card, borderTop: "3px solid #111827" }}>
                <p style={{ fontFamily: "monospace", fontSize: "11px", color: "#6B7280", marginBottom: "8px" }}>{p.num}</p>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px" }}>{p.title}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* notice */}
        <section style={{ ...card, marginBottom: "56px", background: "#FAFAF8" }}>
          <h2 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#6B7280", textTransform: "uppercase", marginBottom: "16px" }}>注意事項</h2>
          <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "圖片請盡量清楚，最好包含外觀、規格、容量或型號。",
              "商品網址選填，有連結會更好找。",
              "填單不代表保證買到，依現場庫存與行李空間為準。",
              "價格、匯率、稅金與運費會再另外確認。",
              "不收大型、易碎、違禁或不方便攜帶的商品。",
            ].map((n) => (
              <li key={n} style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6 }}>{n}</li>
            ))}
          </ul>
        </section>

        {/* bottom CTA */}
        <section style={{ textAlign: "center", padding: "16px 0" }}>
          <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "20px" }}>確認沒問題了？</p>
          <button onClick={onStart} style={{ ...btn.primary, fontSize: "16px", padding: "16px 40px" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            開始填寫代購需求
          </button>
        </section>
      </div>
    </div>
  );
}
