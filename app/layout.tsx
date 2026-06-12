import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-ps2" });

export const metadata: Metadata = {
  title: "代購訂單",
  description: "代購訂單填寫表單",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW" className={`h-full ${pressStart.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
