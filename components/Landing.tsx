"use client";

import { Home, List, AlertCircle } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

interface Props {
  onStart: () => void;
}

const card: React.CSSProperties = {
  background: "#F7F4EF",
  border: "2px solid #2c2c2c",
  borderRadius: "0",
  boxShadow: "3px 3px 0 #2c2c2c",
  padding: "24px",
  transition: "transform 0.1s ease, box-shadow 0.1s ease",
};

function NeoCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{ ...card, ...style }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translate(-2px,-2px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "5px 5px 0 #2c2c2c"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translate(0,0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "3px 3px 0 #2c2c2c"; }}
    >
      {children}
    </div>
  );
}

const primaryBtn: React.CSSProperties = {
  padding: "15px 32px", borderRadius: "0",
  background: "#2c2c2c", color: "#F7F4EF",
  fontWeight: 800, fontSize: "15px",
  border: "2px solid #2c2c2c", boxShadow: "4px 4px 0 #2c2c2c",
  cursor: "pointer", fontFamily: "inherit",
  transition: "transform 0.1s, box-shadow 0.1s",
};

export default function Landing({ onStart }: Props) {
  return (
    <div style={{ background: "#EDE8DF", minHeight: "100vh", color: "#1a1a1a", fontFamily: "inherit" }}>

      {/* nav */}
      <nav style={{ borderBottom: "2px solid #2c2c2c", background: "#F7F4EF" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 800, fontSize: "15px", letterSpacing: "0.04em", color: "#1a1a1a" }}>WADE CARRY</span>
          <ExpandableTabs
            tabs={[
              { title: "首頁", icon: Home, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
              { title: "代購流程", icon: List, onClick: () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }) },
              { title: "注意事項", icon: AlertCircle, onClick: () => document.getElementById("notice")?.scrollIntoView({ behavior: "smooth" }) },
            ]}
          />
          <button
            onClick={onStart}
            style={{ ...primaryBtn, padding: "9px 20px", fontSize: "13px", boxShadow: "3px 3px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
          >開始填寫</button>
        </div>
      </nav>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px 80px" }}>

        {/* hero */}
        <section style={{ padding: "72px 0 56px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(40px, 9vw, 68px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "32px" }}>
            代購需求登記
          </h1>
          <div style={{ maxWidth: "520px", margin: "0 auto 44px", textAlign: "left", background: "#F7F4EF", borderTop: "2px solid #2c2c2c", borderRight: "2px solid #2c2c2c", borderBottom: "2px solid #2c2c2c", borderLeft: "10px solid #2c2c2c", borderRadius: "0", boxShadow: "4px 4px 0 #2c2c2c", padding: "20px 24px" }}>
            <p style={{ fontSize: "16px", color: "#333", lineHeight: 1.85, margin: 0, fontWeight: 500 }}>
              想買的商品先丟上來。我會依這趟美國 / 日本行程、現場庫存與行李空間，協助整理需求與確認能不能帶回來。
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={onStart} style={primaryBtn}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "4px 4px 0 #2c2c2c"; }}
            >開始填寫需求</button>
            <a
              href="#process"
              style={{ ...primaryBtn, background: "#F7F4EF", color: "#1a1a1a", textDecoration: "none", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "1px 1px 0 #2c2c2c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "4px 4px 0 #2c2c2c"; }}
            >查看代購流程</a>
          </div>
        </section>

        {/* trip status */}
        <NeoCard style={{ marginBottom: "52px", display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{ width: "10px", height: "10px", border: "2px solid #2c2c2c", background: "#2c2c2c", marginTop: "5px", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: "10px", fontWeight: 700,color: "#777777", marginBottom: "6px", letterSpacing: "0.04em" }}>本次行程</p>
            <p style={{ fontSize: "18px", fontWeight: 800, marginBottom: "6px" }}>美國 / 日本</p>
            <p style={{ fontSize: "9px", fontWeight: 700, color: "#F7F4EF", background: "#2c2c2c", display: "inline-block", padding: "4px 10px", marginBottom: "12px", letterSpacing: "0.04em" }}>需求收集中</p>
            <p style={{ fontSize: "14px", fontWeight: 500, color: "#444444", lineHeight: 1.7 }}>此表單主要用於統一整理需求，是否能購買會依現場狀況再確認。</p>
          </div>
        </NeoCard>

        {/* features */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "9px", fontWeight: 700,color: "#777777", letterSpacing: "0.08em", marginBottom: "20px" }}>服務說明</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { title: "圖片輔助找貨", desc: "附圖說明更好找，模糊描述我猜不到。" },
              { title: "統一整理需求", desc: "一張表格收全部，不用一直傳訊息。" },
              { title: "快閃行程代購", desc: "這趟說走就走，需求先收才來得及。" },
            ].map((f) => (
              <NeoCard key={f.title}>
                <p style={{ fontSize: "14px", fontWeight: 800, marginBottom: "8px" }}>{f.title}</p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#444444", lineHeight: 1.7 }}>{f.desc}</p>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* process */}
        <section id="process" style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "9px", fontWeight: 700,color: "#777777", letterSpacing: "0.08em", marginBottom: "20px" }}>代購流程</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[
              { num: "01", title: "填寫需求", desc: "填寫商品名稱、數量與圖片，送出登記表。" },
              { num: "02", title: "現場找貨", desc: "抵達當地後依需求清單前往採買，確認庫存。" },
              { num: "03", title: "統一回覆", desc: "確認結果後統一通知，安排費用與交貨。" },
            ].map((p) => (
              <NeoCard key={p.num} style={{ borderTop: "4px solid #2c2c2c" }}>
                <p style={{ fontWeight: 700,fontSize: "9px", color: "#777777", marginBottom: "10px", letterSpacing: "0.06em" }}>{p.num}</p>
                <p style={{ fontSize: "14px", fontWeight: 800, marginBottom: "6px" }}>{p.title}</p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#444444", lineHeight: 1.7 }}>{p.desc}</p>
              </NeoCard>
            ))}
          </div>
        </section>

        {/* notice */}
        <section id="notice" style={{ ...card, marginBottom: "56px" }}>
          <p style={{ fontSize: "9px", fontWeight: 700,color: "#777777", letterSpacing: "0.08em", marginBottom: "16px" }}>注意事項</p>
          <ul style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "圖片請盡量清楚，最好包含外觀、規格、容量或型號。",
              "商品網址選填，有連結會更好找。",
              "填單不代表保證買到，依現場庫存與行李空間為準。",
              "價格、匯率、稅金與運費會再另外確認。",
              "不收大型、易碎、違禁或不方便攜帶的商品。",
            ].map((n) => (
              <li key={n} style={{ fontSize: "14px", fontWeight: 500, color: "#444444", lineHeight: 1.7 }}>{n}</li>
            ))}
          </ul>
        </section>

        {/* bottom CTA */}
        <section style={{ textAlign: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#777777", marginBottom: "20px" }}>確認沒問題了？</p>
          <button
            onClick={onStart}
            style={{ ...primaryBtn, fontSize: "16px", padding: "18px 48px", boxShadow: "5px 5px 0 #2c2c2c" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.boxShadow = "3px 3px 0 #2c2c2c"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translate(0,0)"; e.currentTarget.style.boxShadow = "5px 5px 0 #2c2c2c"; }}
          >開始填寫代購需求</button>
        </section>
      </div>
    </div>
  );
}
