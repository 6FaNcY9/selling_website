import Image from "next/image";
import catalog from "./data/catalog.json";
import { CategoryTile } from "./components/CategoryTile";
import { ProductCard } from "./components/ProductCard";

type Product = (typeof catalog)["products"][number];

type Category = (typeof catalog)["categories"][number];

export default function Home() {
  const featuredProducts = catalog.products.filter((product) => product.featured);
  const topCategories: Category[] = catalog.categories;
  const gridProducts: Product[] = catalog.products;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12 md:px-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Storefront</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Discover curated products built for modern living.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Explore featured gear, shop by category, and browse a fresh grid of SKUs with rich visuals. Built for a responsive, CTA-forward shopping experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-slate-200 transition hover:border-sky-400 hover:text-white">
              Start browsing
            </button>
            <button className="rounded-full bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400">
              View cart
            </button>
          </div>
        </header>

        <section className="grid gap-8 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-2xl shadow-sky-900/40">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Featured</p>
              <h2 className="text-2xl font-semibold text-white">Spotlight products</h2>
              <p className="text-sm text-slate-300">Swipe through hero SKUs ready to ship.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Tap or scroll horizontally</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:overflow-hidden md:rounded-2xl md:border md:border-slate-800/80 md:bg-slate-950/50 md:p-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col rounded-xl border border-slate-800/70 bg-slate-900/70 p-4 shadow-md shadow-black/30 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/40"
                >
                  <div className="overflow-hidden rounded-lg bg-slate-800">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={640}
                      height={320}
                      className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-sky-300">{product.category}</p>
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    </div>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-sky-300">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{product.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <button className="flex-1 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                      Add to cart
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400">
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-black/30">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Why shoppers stay</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Fast, flexible, and CTA-first.</h3>
              <p className="mt-3 text-sm text-slate-300">
                The storefront layout keeps key SKUs above the fold, highlights discovery paths by category, and surfaces actionable CTAs on every card. The responsive grid adapts across breakpoints without sacrificing readability.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-400">Inventory-ready</p>
                  <p className="text-lg font-semibold text-white">Static catalog</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-400">CTA coverage</p>
                  <p className="text-lg font-semibold text-white">Dual buttons</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-xs text-slate-400">Layout</p>
                  <p className="text-lg font-semibold text-white">Responsive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Shop by category</p>
              <h2 className="text-2xl font-semibold text-white">Browse curated collections</h2>
            </div>
            <p className="text-sm text-slate-300">Electronics • Home • Fashion</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topCategories.map((category) => (
              <CategoryTile key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Catalog</p>
              <h2 className="text-2xl font-semibold text-white">Shop the grid</h2>
            </div>
            <p className="text-sm text-slate-300">Skus with imagery, copy, and CTAs ready.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
