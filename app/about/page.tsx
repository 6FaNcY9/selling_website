export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-orange-950 via-rose-950 to-black text-amber-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">About</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            A warm dropshipping marketplace built for real-world sourcing.
          </h1>
          <p className="text-lg text-amber-100/80">
            AmberDrops blends Amazon, Temu, Shein, and boutique partners into one soft, trustworthy storefront. The
            palette stays cozy while shipping windows, supplier details, and tracking updates stay crystal clear.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5">
            <p className="text-sm font-semibold text-white">What’s inside</p>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>Homepage and catalog tuned for dropshipping across major suppliers.</li>
              <li>Bundles, seasonal drops, and clear delivery windows on every product card.</li>
              <li>Customer login for tracking plus soft, reassuring UI copy.</li>
              <li>Admin controls to curate collections and set supplier priorities.</li>
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5">
            <p className="text-sm font-semibold text-white">How we ship</p>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>Suppliers: Amazon, Temu, Shein, and vetted boutique partners.</li>
              <li>Shipping: 3–7 day windows shown up front with automated tracking links.</li>
              <li>Returns: Routed back to the original supplier with clear guidance.</li>
              <li>Support: Priority tiers available for special sourcing requests.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5">
          <p className="text-sm font-semibold text-white">Ready to explore?</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full bg-amber-500 px-4 py-2 text-slate-950 transition hover:bg-amber-400"
              href="/selling"
            >
              View the catalog
            </a>
            <a
              className="rounded-full border border-orange-900/70 px-4 py-2 text-amber-50 transition hover:border-amber-400"
              href="/login"
            >
              Customer login
            </a>
            <a
              className="rounded-full border border-orange-900/70 px-4 py-2 text-amber-50 transition hover:border-amber-400"
              href="/admin"
            >
              Admin panel
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
