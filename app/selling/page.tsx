const offers = [
  {
    title: "Starter Finds",
    price: "Free",
    note: "Weekly drops across toys, outfits, home picks, and gadgets.",
    bullets: ["Amazon & Temu staples", "Clear delivery windows", "Email tracking"],
  },
  {
    title: "Priority Drops",
    price: "$29/mo",
    note: "Early access to new collections plus bundled shipping where possible.",
    bullets: ["Early access to releases", "Bundled shipping options", "Priority support"],
  },
  {
    title: "VIP Concierge",
    price: "$59/mo",
    note: "Hands-on sourcing for special requests, bulk, or themed drops.",
    bullets: ["Request-specific sourcing", "Dedicated rep", "Return-friendly guidance"],
  },
];

export default function SellingPage() {
  return (
    <div className="bg-gradient-to-b from-orange-950 via-rose-950 to-black text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Catalog</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Pick the perks that fit your dropship storefront.
          </h1>
          <p className="text-lg text-amber-100/80">
            Every tier keeps the soft palette, clear shipping windows, and trusted sourcing across Amazon, Temu, Shein,
            and boutique partners.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col gap-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6 shadow-lg shadow-amber-900/30"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">{offer.title}</p>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-200">Included</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{offer.price}</p>
                <p className="text-sm text-amber-100/80">{offer.note}</p>
              </div>
              <ul className="space-y-2 text-sm text-amber-100/80">
                {offer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 rounded-lg border border-orange-900/70 bg-black/50 p-2"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                className="rounded-lg bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                href="/login"
              >
                Start with this plan
              </a>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">What you get</p>
            <ul className="space-y-2 text-sm text-amber-100/80">
              <li>Warm, conversion-ready cards with transparent shipping windows.</li>
              <li>Curated drops across Amazon, Temu, Shein, and boutique partners.</li>
              <li>Automated tracking links and status updates for every order.</li>
              <li>Admin tools to manage collections and supplier priorities.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Ready to start selling?</p>
            <p className="text-sm text-amber-100/80">
              Choose a plan, connect your suppliers, and publish your storefront. Customers can browse the catalog, pick
              their favorites, and check out with the same soft palette they see here.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-full border border-orange-900/70 px-4 py-2 text-amber-50 transition hover:border-amber-400"
                href="/about"
              >
                Learn more
              </a>
              <a
                className="rounded-full bg-amber-500 px-4 py-2 text-slate-950 transition hover:bg-amber-400"
                href="/admin"
              >
                Go to admin
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
