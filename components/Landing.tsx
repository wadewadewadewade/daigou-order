"use client";

import { Home, List, AlertCircle } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

interface Props {
  onStart: () => void;
}

const card: React.CSSProperties = {
  background: "#FFFEF8",
  border: "2px solid #111111",
  borderRadius: "6px",
  boxShadow: "4px 4px 0px #111111",
  padding: "24px",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
};

function NeoCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{ ...card, ...style }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translate(-2px,-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "7px 7px 0px #111111";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translate(0,0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 4px 0px #111111";
      }}
    >
      {children}
    </div>
  );
}

export default function Landing({ onStart }: Props) {
  return (
    <div style={{ background: "#FFF9F0", minHeight: "100vh", color: "#111111", fontFamily: "inherit" }}>

      {/* nav */}
      <nav style={{ borderBottom: "2px solid #111111", background: "#FFFEF8" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 800, fontSize: "16px", letterSpacing: "0.06em" }}>WADE CARRY</span>
          <ExpandableTabs
            tabs={[
              { title: "首頁", icon: Home, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
              { title: "代購流程", icon: List, onClick: () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }) },
              { title: "注意事項", icon: AlertCircle, onClick: () => document.getElementById("notice")?.scrollIntoView({ behavior: "smooth" }) },
            ]}
          />
          <button
            onClick={onStart}
            style={{ padding: "9px 20px", borderRadius: "6px", background: "#111111", color: "#fff", fontWeight: 700, fontSize: "13px", border: "2px solid #111111", boxShadow: "3px 3px 0px #555", cursor: "pointer", fontFamily: "inherit", transition: "transform 0.12s, box-shadow 0.12s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0px #555"; }}
          >
            開始填寫
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* hero */}
        <section style={{ padding: "72px 0 56px", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#FFE14D", border: "2px solid #111111", borderRadius: "99px", padding: "5px 16px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "20px", boxShadow: "2px 2px 0px #111" }}>
            快閃代購 · 需求登記
          </div>
          <h1 style={{ fontSize: "clamp(42px, 9vw, 72px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "24px", transform: "rotate(-1.5deg)", display: "inline-block" }}>
            代購需求登記
          </h1>
          <div style={{ maxWidth: "520px", margin: "0 auto 44px", textAlign: "left", background: "#FFFEF8", borderTop: "2px solid #111111", borderRight: "2px solid #111111", borderBottom: "2px solid #111111", borderLeft: "6px solid #FFE14D", borderRadius: "6px", boxShadow: "4px 4px 0px #111111", padding: "20px 24px" }}>
            <p style={{ fontSize: "17px", color: "#333", lineHeight: 1.85, margin: 0 }}>
              想買的商品先丟上來。我會依這趟美國 / 日本行程、現場庫存與行李空間，協助整理需求與確認能不能帶回來。
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={onStart}
              style={{ padding: "16px 36px", borderRadius: "6px", background: "#111111", color: "#fff", fontWeight: 800, fontSize: "16px", border: "2px solid #111111", boxShadow: "4px 4px 0px #555", cursor: "pointer", fontFamily: "inherit", transition: "transform 0.12s, box-shadow 0.12s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "7px 7px 0px #555"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "4px 4px 0px #555"; }}
            >
              開始填寫需求
            </button>
            <a
              href="#process"
              style={{ padding: "16px 36px", borderRadius: "6px", background: "#FFE14D", color: "#111111", fontWeight: 800, fontSize: "16px", border: "2px solid #111111", boxShadow: "4px 4px 0px #111", cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", transition: "transform 0.12s, box-shadow 0.12s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "7px 7px 0px #111"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "4px 4px 0px #111"; }}
            >
              查看代購流程
            </a>
          </div>
        </section>


        {/* trip status */}
        <NeoCard style={{ marginBottom: "52px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FFE14D", border: "2px solid #111", marginTop: "4px", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#555", marginBottom: "4px" }}>本次行程</p>
            <p style={{ fontSize: "18px", fontWeight: 800, marginBottom: "4px" }}>美國 / 日本</p>
            <p style={{ fontSize: "13px", fontWeight: 700, background: "#FFE14D", display: "inline-block", padding: "2px 10px", border: "1.5px solid #111", borderRadius: "4px", marginBottom: "10px" }}>需求收集中</p>
            <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.65 }}>
              此表單主要用於統一整理需求，是否能購買會依現場狀況再確認。
            </p>
          </div>
        </NeoCard>

        {/* features */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#555", textTransform: "uppercase", marginBottom: "20px" }}>服務說明</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { icon: "🖼", title: "圖片輔助找貨", desc: "上傳截圖或商品照片，方便現場比對型號與規格。" },
              { icon: "📋", title: "統一整理需求", desc: "所有需求集中收集，方便整理優先順序與行李安排。" },
              { icon: "✈️", title: "快閃行程代購", desc: "依當次行程路線採買，非固定服務，依行程彈性確認。" },
            ].map((f) => (
              <NeoCard key={f.title}>
                <p style={{ fontSize: "26px", marginBottom: "12px" }}>{f.icon}</p>
                <p style={{ fontSize: "15px", fontWeight: 800, marginBottom: "6px" }}>{f.title}</p>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.65 }}>{f.desc}</p>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* process */}
        <section id="process" style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#555", textTransform: "uppercase", marginBottom: "20px" }}>代購流程</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[
              { num: "01", title: "填寫需求", desc: "填寫商品名稱、數量與圖片，送出登記表。" },
              { num: "02", title: "現場找貨", desc: "抵達當地後依需求清單前往採買，確認庫存。" },
              { num: "03", title: "統一回覆", desc: "確認結果後統一通知，安排費用與交貨。" },
            ].map((p) => (
              <NeoCard key={p.num} style={{ borderTop: "4px solid #FFE14D" }}>
                <p style={{ fontWeight: 800, fontSize: "13px", color: "#555", marginBottom: "8px", letterSpacing: "0.08em" }}>{p.num}</p>
                <p style={{ fontSize: "15px", fontWeight: 800, marginBottom: "6px" }}>{p.title}</p>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.65 }}>{p.desc}</p>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* notice */}
        <section id="notice" style={{ ...card, marginBottom: "56px", background: "#FFFEF8" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#555", textTransform: "uppercase", marginBottom: "16px" }}>注意事項</p>
          <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "圖片請盡量清楚，最好包含外觀、規格、容量或型號。",
              "商品網址選填，有連結會更好找。",
              "填單不代表保證買到，依現場庫存與行李空間為準。",
              "價格、匯率、稅金與運費會再另外確認。",
              "不收大型、易碎、違禁或不方便攜帶的商品。",
            ].map((n) => (
              <li key={n} style={{ fontSize: "13px", color: "#555", lineHeight: 1.65 }}>{n}</li>
            ))}
          </ul>
        </section>

        {/* bottom CTA */}
        <section style={{ textAlign: "center" }}>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "20px" }}>確認沒問題了？</p>
          <button
            onClick={onStart}
            style={{ padding: "18px 48px", borderRadius: "6px", background: "#111111", color: "#fff", fontWeight: 800, fontSize: "17px", border: "2px solid #111111", boxShadow: "5px 5px 0px #555", cursor: "pointer", fontFamily: "inherit", transition: "transform 0.12s, box-shadow 0.12s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(-3px,-3px)"; e.currentTarget.style.boxShadow = "8px 8px 0px #555"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "5px 5px 0px #555"; }}
          >
            開始填寫代購需求
          </button>
        </section>
      </div>
    </div>
  );
}
