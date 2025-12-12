import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmberDrops Marketplace",
  description:
    "A warm, all-in-one dropshipping marketplace for curated finds across Amazon, Temu, Shein, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-orange-950 via-rose-950 to-black text-slate-100">
        <div className="min-h-screen">
          <header className="border-b border-orange-900/60 bg-black/60 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  AmberDrops
                </span>
                <p className="text-sm text-amber-100/80">
                  Dropship everything, sourced with care
                </p>
              </div>
              <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-100">
                <Link
                  className="rounded-full border border-orange-900/70 px-3 py-1 transition hover:border-amber-400 hover:text-white"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="rounded-full border border-orange-900/70 px-3 py-1 transition hover:border-amber-400 hover:text-white"
                  href="/selling"
                >
                  Catalog
                </Link>
                <Link
                  className="rounded-full border border-orange-900/70 px-3 py-1 transition hover:border-amber-400 hover:text-white"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="rounded-full border border-orange-900/70 px-3 py-1 transition hover:border-amber-400 hover:text-white"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="rounded-full bg-amber-500 px-3 py-1 text-slate-950 transition hover:bg-amber-400"
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
