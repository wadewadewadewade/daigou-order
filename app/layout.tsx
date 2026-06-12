import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sg" });

export const metadata: Metadata = {
  title: "代購訂單",
  description: "代購訂單填寫表單",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`h-full ${spaceGrotesk.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
