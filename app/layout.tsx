import Link from "next/link";
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
      <body className="antialiased bg-slate-950 text-slate-100">
        <div className="min-h-screen">
          <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-sky-300">
                  Codex Web
                </span>
                <p className="text-sm text-slate-300">
                  Selling starter • Vercel-ready
                </p>
              </div>
              <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-200">
                <Link
                  className="rounded-full border border-slate-800 px-3 py-1 transition hover:border-sky-400 hover:text-white"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="rounded-full border border-slate-800 px-3 py-1 transition hover:border-sky-400 hover:text-white"
                  href="/selling"
                >
                  Selling
                </Link>
                <Link
                  className="rounded-full border border-slate-800 px-3 py-1 transition hover:border-sky-400 hover:text-white"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="rounded-full border border-slate-800 px-3 py-1 transition hover:border-sky-400 hover:text-white"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="rounded-full bg-sky-500 px-3 py-1 text-slate-950 transition hover:bg-sky-400"
                  href="/admin"
                >
                  Admin
                </Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
