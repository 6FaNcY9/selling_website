import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codex Selling Website Starter",
  description:
    "A modern dark theme selling site starter for Codex Web, fully ready for Vercel deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
