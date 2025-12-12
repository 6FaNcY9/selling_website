export default function Home() {
  const capabilityPillars = [
    {
      title: "Trusted sourcing network",
      description:
        "Blend best sellers from Amazon, Temu, Shein, and vetted boutiques into one warm, reliable catalog.",
      items: ["Amazon finds", "Temu trends", "Shein styles", "Local favorites"],
    },
    {
      title: "Conversion-ready storefront",
      description:
        "Story-driven product cards, bundles, and social proof tuned for shoppers who want quick, comfortable buys.",
      items: ["Seasonal bundles", "Giftable sets", "Real-time reviews"],
    },
    {
      title: "Delivery clarity",
      description:
        "Upfront shipping windows, region-aware estimates, and automated tracking updates your shoppers can trust.",
      items: ["ETA at checkout", "Live tracking", "Easy returns"],
    },
  ];

  const launchSteps = [
    {
      title: "Link supplier feeds",
      detail:
        "Sync Amazon, Temu, Shein, and custom CSV drops so inventory refreshes without manual uploads.",
    },
    {
      title: "Curate collections",
      detail:
        "Group toys, outfits, gadgets, and home picks into themed drops shoppers can browse instantly.",
    },
    {
      title: "Activate fulfillment",
      detail:
        "Send each order to the best supplier and share tracking links automatically at checkout.",
    },
  ];

  const deployChecklist = [
    "Create your AmberDrops profile and brand the storefront",
    "Choose suppliers to feature and set your margins",
    "Publish collections and share tracking updates automatically",
  ];

  const integrations = [
    {
      name: "Amazon",
      detail: "Prime-friendly finds with reliable delivery windows shoppers recognize.",
    },
    {
      name: "Temu",
      detail: "Trending deals and seasonal drops that keep the catalog feeling fresh.",
    },
    {
      name: "Shein",
      detail: "Fast-fashion staples with flexible sizing and color options for every drop.",
    },
  ];

  const offers = [
    {
      title: "Starter Finds",
      price: "Free",
      note: "Curated essentials with weekly drops across categories.",
      bullets: [
        "Rotating Amazon & Temu picks",
        "Secure checkout",
        "Email tracking updates",
      ],
    },
    {
      title: "Priority Drops",
      price: "$29/mo",
      note: "Early access to new collections and faster handling times.",
      bullets: [
        "Early access to fresh drops",
        "Bundled shipping when possible",
        "Priority support",
      ],
    },
    {
      title: "VIP Concierge",
      price: "$59/mo",
      note: "Hands-on sourcing for bulk or special requests plus return help.",
      bullets: [
        "Request-specific sourcing",
        "Dedicated support",
        "Return-friendly policies",
      ],
    },
  ];

  const stats = [
    { label: "Suppliers connected", value: "5+" },
    { label: "Avg delivery window", value: "3-7 days" },
    { label: "Catalog refresh", value: "Daily" },
    { label: "Return friendly", value: "Easy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-rose-950 to-black text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-100">
              AmberDrops
            </span>
            <p className="text-sm text-amber-100/80">
              Curated drops from Amazon, Temu, Shein, and more
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a
              className="rounded-full border border-orange-900/70 px-4 py-2 text-amber-100 transition hover:border-amber-400 hover:text-white"
              href="#deploy"
            >
              See launch steps
            </a>
            <a
              className="rounded-full bg-amber-500 px-4 py-2 text-slate-950 transition hover:bg-amber-400"
              href="#instructions"
            >
              Explore fulfillment
            </a>
          </div>
        </header>

        <main className="grid gap-10">
          <section className="grid gap-8 rounded-3xl border border-orange-900/70 bg-black/50 p-8 shadow-2xl shadow-amber-900/30 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                Dropshipping hub
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Build a trusted dropship storefront with a calm, conversion-ready look.
              </h1>
              <p className="text-lg text-amber-100/80">
                AmberDrops curates warm, reliable product sets across categories while showing clear shipping windows
                and supplier details up front. Launch quickly, route orders to the best source, and keep every shopper in
                the loop.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-900/50 transition hover:bg-amber-400"
                  href="#blueprint"
                >
                  Browse featured drops
                </a>
                <a
                  className="rounded-xl border border-orange-900/70 px-5 py-3 text-sm font-semibold text-amber-50 transition hover:border-amber-400"
                  href="#vercel-ready"
                >
                  See how shipping works
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-amber-100/80 sm:grid-cols-3">
                <div className="rounded-2xl border border-orange-900/70 bg-black/50 p-4">
                  <p className="text-xs text-amber-200/80">Setup time</p>
                  <p className="text-xl font-semibold text-white">10 min</p>
                  <p className="text-xs text-amber-200/80">From signup to first drop</p>
                </div>
                <div className="rounded-2xl border border-orange-900/70 bg-black/50 p-4">
                  <p className="text-xs text-amber-200/80">Suppliers live</p>
                  <p className="text-xl font-semibold text-white">Amazon · Temu · Shein</p>
                  <p className="text-xs text-amber-200/80">Plus boutique partners</p>
                </div>
                <div className="rounded-2xl border border-orange-900/70 bg-black/50 p-4">
                  <p className="text-xs text-amber-200/80">Shipping windows</p>
                  <p className="text-xl font-semibold text-white">3-7 days</p>
                  <p className="text-xs text-amber-200/80">Shown at checkout</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-orange-900/70 bg-amber-500/5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-amber-50">Sourcing profile</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Live mix
                </span>
              </div>
              <div className="rounded-2xl border border-orange-900/70 bg-gradient-to-br from-orange-950/70 to-black p-4 text-sm text-amber-50">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-amber-100">
{`Suppliers: Amazon, Temu, Shein, boutique partners
Tone: warm, transparent, reassuring
Promise:
  - Clear shipping windows at checkout
  - Tracked drops direct from trusted stores
  - Flexible returns and support`}
                </pre>
              </div>
              <div className="grid gap-3 text-xs text-amber-100/80 md:grid-cols-2">
                <div className="rounded-xl border border-orange-900/70 bg-black/40 p-3">
                  <p className="font-semibold text-amber-50">Supplier coverage</p>
                  <p>
                    Home, toys, style, beauty, and gadget picks refreshed with every drop.
                  </p>
                </div>
                <div className="rounded-xl border border-orange-900/70 bg-black/40 p-3">
                  <p className="font-semibold text-amber-50">Fulfillment control</p>
                  <p>
                    Route orders to the fastest supplier per item and keep shoppers updated automatically.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="blueprint"
            className="grid gap-6 rounded-3xl border border-orange-900/70 bg-black/50 p-8 md:grid-cols-3"
          >
            {capabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-3 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">{pillar.title}</p>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-100">
                    Live
                  </span>
                </div>
                <p className="text-sm text-amber-100/80">{pillar.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-orange-900/70 px-3 py-1 text-xs text-amber-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            id="instructions"
            className="grid gap-6 rounded-3xl border border-orange-900/70 bg-black/50 p-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-5">
              <p className="text-sm font-semibold text-amber-50">Fulfillment journey</p>
              <div className="space-y-4">
                {launchSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-sm font-semibold text-amber-100">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-white">{step.title}</p>
                      <p className="text-sm text-amber-100/80">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-amber-50">Customer experience</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">
                  Real-time
                </span>
              </div>
              <ul className="space-y-3 text-sm text-amber-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Shoppers see supplier, delivery window, and return policy before checkout.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Orders send tracking links automatically as suppliers fulfill.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Collections refresh daily to keep toys, outfits, and gadgets feeling new.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="vercel-ready"
            className="grid gap-6 rounded-3xl border border-orange-900/70 bg-black/50 p-8 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-amber-50">Launch-ready by default</p>
              <p className="text-lg text-amber-100/80">
                Configure once and start selling everything from one calm storefront. Set supplier priorities, enable
                bundled shipping when possible, and show transparent delivery windows at checkout.
              </p>
              <div className="rounded-2xl border border-orange-900/70 bg-amber-500/5 p-5 text-sm text-amber-100">
                <code className="block whitespace-pre font-mono text-xs leading-6 text-amber-100">
                  {`Suppliers linked: Amazon, Temu, Shein
Shipping windows: 3-7 days shown at checkout
Tracking: Auto-updates via email & SMS`}
                </code>
                <p className="mt-3 text-amber-100/80">
                  Keep shoppers informed without extra tooling. AmberDrops surfaces status changes instantly.
                </p>
              </div>
            </div>

            <div
              id="deploy"
              className="flex flex-col gap-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Launch checklist</p>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-200">Guided</span>
              </div>
              <ul className="space-y-3 text-sm text-amber-100/80">
                {deployChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-orange-900/70 bg-black/50 p-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/selling"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Start your storefront
              </a>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-orange-900/70 bg-black/50 p-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-amber-50">Memberships & perks</p>
              <p className="text-lg text-amber-100/80">
                Choose how you want to sell. Every tier keeps the soft palette, transparent shipping, and reliable
                supplier mix.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {offers.map((offer) => (
                  <div
                    key={offer.title}
                    className="flex flex-col gap-3 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-base font-semibold text-white">{offer.title}</p>
                      <span className="text-sm font-semibold text-amber-100">{offer.price}</span>
                    </div>
                    <p className="text-sm text-amber-100/80">{offer.note}</p>
                    <ul className="space-y-2 text-sm text-amber-100/80">
                      {offer.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 rounded-xl border border-orange-900/70 bg-black/40 p-2"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-auto rounded-lg border border-orange-900/70 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-400">
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Live stats</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">Auto-updated</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-orange-900/70 bg-black/40 p-4"
                  >
                    <p className="text-xs uppercase tracking-wide text-amber-200/80">{stat.label}</p>
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-amber-100/80">
                Stay transparent with customers by surfacing supplier, delivery, and return policies on every drop.
              </p>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-orange-900/70 bg-black/50 p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-amber-50">Supplier partners</p>
              <p className="text-lg text-amber-100/80">
                Keep the catalog fresh by blending multiple sources. AmberDrops highlights where each item ships from so
                shoppers feel confident checking out.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="rounded-2xl border border-orange-900/70 bg-amber-500/5 p-4"
                  >
                    <p className="text-base font-semibold text-white">{integration.name}</p>
                    <p className="text-sm text-amber-100/80">{integration.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-orange-900/70 bg-amber-500/5 p-6">
              <p className="text-sm font-semibold text-white">Ready to sell?</p>
              <p className="text-sm text-amber-100/80">
                Connect your suppliers, feature the collections you love, and keep dropship operations simple. AmberDrops
                keeps the palette soft and the messaging honest.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/selling"
                  className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  View catalog
                </a>
                <a
                  href="#instructions"
                  className="rounded-lg border border-orange-900/70 px-4 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-400"
                >
                  See the flow
                </a>
              </div>
              <div className="rounded-xl border border-orange-900/70 bg-black/40 p-4 text-sm text-amber-100/80">
                <p className="font-semibold text-white">Support</p>
                <p className="text-amber-100/80">
                  Need a specific supplier or bundle? Our team can source, vet, and launch it for you—no redesign needed.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
