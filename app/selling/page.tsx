const offers = [
  {
    title: "Launch",
    price: "$0",
    note: "Perfect for demos and validation sprints.",
    bullets: ["Hero + CTA copy", "Offer slots", "Preview-only publish"],
  },
  {
    title: "Growth",
    price: "$39",
    note: "For teams adding promos and gated content.",
    bullets: ["Promo toggles", "Gated CTAs", "Analytics-ready"],
  },
  {
    title: "Scale",
    price: "$89",
    note: "Production-grade with audit and delivery hooks.",
    bullets: ["Changelog & audit", "Observability prompts", "Edge caching"],
  },
];

export default function SellingPage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Selling
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Offers built for quick launch and smooth growth.
          </h1>
          <p className="text-lg text-slate-300">
            Choose the track that fits your launch. Each tier keeps the dark
            theme, structured content slots, and Vercel-friendly build steps.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-lg shadow-sky-900/30"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-white">{offer.title}</p>
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-200">
                  Ready
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{offer.price}</p>
                <p className="text-sm text-slate-300">{offer.note}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {offer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-2"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                className="rounded-lg bg-sky-500 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                href="/login"
              >
                Start with this plan
              </a>
            </div>
          ))}
        </section>

        <section className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">What you get</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Dark UI base tuned for accessibility.</li>
              <li>Structured content blocks for Codex or manual editing.</li>
              <li>Vercel-ready build (`npm run build`) with no extra config.</li>
              <li>Admin panel for secure content management.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Ready to deploy?</p>
            <p className="text-sm text-slate-300">
              Connect your repo to Vercel, set the required environment
              variables, and deploy. Use the admin credentials to manage content,
              while end users sign in from the Login page.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 transition hover:border-sky-400"
                href="/about"
              >
                Learn more
              </a>
              <a
                className="rounded-full bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400"
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
