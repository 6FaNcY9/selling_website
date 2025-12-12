import Link from "next/link";
import CategoryTile from "./components/CategoryTile";
import ProductCard from "./components/ProductCard";
import { bestsellers, categories, featuredProducts } from "./data/catalog";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <section className="grid gap-10 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 shadow-2xl shadow-sky-900/30 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Drop-shipping marketplace</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Launch an inviting storefront with ready-to-ship decoy products.
            </h1>
            <p className="text-lg text-slate-300">
              Curated gadgets, home upgrades, wellness picks, and outdoor essentials—already merchandised with imagery and pricing.
              Swap the static catalog with your supplier feeds when you are ready to go live.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link
                className="rounded-xl bg-sky-500 px-5 py-3 text-slate-950 shadow-lg shadow-sky-900/50 transition hover:bg-sky-400"
                href="#featured"
              >
                Browse featured products
              </Link>
              <Link
                className="rounded-xl border border-slate-700 px-5 py-3 text-slate-100 transition hover:border-sky-400"
                href="/categories"
              >
                View categories
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              {["Fast shipping-ready", "Responsive by default", "Admin + user flows"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold text-white">{item}</p>
                  <p className="text-xs text-slate-400">Pre-seeded flows for marketing, browsing, and checkout entry.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-100">Live catalog preview</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Demo</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredProducts.slice(0, 4).map((product) => (
                <div key={product.slug} className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{product.category}</p>
                      <p className="text-sm font-semibold text-white">{product.name}</p>
                      <p className="text-xs text-slate-300">${product.price} • {product.shipping}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              Replace the placeholder items with your vendor feeds or connect to a headless commerce API.
              Buttons already link to detail pages and cart entry points.
            </p>
          </div>
        </section>

        <section id="featured" className="space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured</p>
              <h2 className="text-2xl font-semibold text-white">Fresh picks ready to showcase</h2>
              <p className="text-sm text-slate-300">CTA buttons, category tags, and responsive cards are pre-styled for your own data.</p>
            </div>
            <Link
              href="/categories"
              className="text-sm font-semibold text-sky-300 underline-offset-4 hover:text-white hover:underline"
            >
              View all categories
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Shop by category</p>
              <h2 className="text-2xl font-semibold text-white">Browse dozens of decoy collections</h2>
              <p className="text-sm text-slate-300">Electronics, home, wellness, outdoor, and fashion—each with tailored imagery.</p>
            </div>
            <Link
              href="/categories"
              className="hidden text-sm font-semibold text-sky-300 underline-offset-4 transition hover:text-white hover:underline md:inline"
            >
              Open categories page
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Bestsellers</p>
              <h2 className="text-2xl font-semibold text-white">Top-performing SKUs</h2>
              <p className="text-sm text-slate-300">Use these as decoy items while you build full checkout and supplier sync.</p>
            </div>
            <Link
              href="/login"
              className="text-sm font-semibold text-sky-300 underline-offset-4 hover:text-white hover:underline"
            >
              Sign in to save a basket
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bestsellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
