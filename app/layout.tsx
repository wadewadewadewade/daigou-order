import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "代購訂單",
  description: "代購訂單填寫表單",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-TW" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
