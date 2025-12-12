"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  shipping: string;
  badge?: string;
};

const catalog: Product[] = [
  {
    id: "p1",
    name: "Cozy Knit Hoodie",
    price: "$24.90",
    category: "Clothing",
    description: "Soft-touch fleece with relaxed fit and warm inner lining.",
    shipping: "Ships in 3-6 days from Amazon partner",
    badge: "Trending",
  },
  {
    id: "p2",
    name: "LED Desk Lamp",
    price: "$18.40",
    category: "Home",
    description: "Adjustable arm, warm-to-cool modes, and USB-C power.",
    shipping: "Ships in 4-7 days from Temu partner",
  },
  {
    id: "p3",
    name: "Kids STEM Kit",
    price: "$32.00",
    category: "Toys",
    description: "Build-and-play electronics kit with guided experiments.",
    shipping: "Ships in 3-5 days from Amazon partner",
    badge: "Giftable",
  },
  {
    id: "p4",
    name: "Mini Projector",
    price: "$59.00",
    category: "Electronics",
    description: "1080p supported, compact design, great for movie nights.",
    shipping: "Ships in 5-8 days from Shein partner",
  },
  {
    id: "p5",
    name: "Acrylic Makeup Caddy",
    price: "$14.50",
    category: "Beauty",
    description: "Clear organizer with stackable trays and side holders.",
    shipping: "Ships in 4-6 days from Temu partner",
  },
  {
    id: "p6",
    name: "Travel Tech Pouch",
    price: "$12.90",
    category: "Accessories",
    description: "Water-resistant with cable straps and mesh pockets.",
    shipping: "Ships in 3-6 days from Amazon partner",
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedId, setSelectedId] = useState<string>(catalog[0].id);
  const [basketCount, setBasketCount] = useState(0);
  const [justAdded, setJustAdded] = useState<string>("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(catalog.map((item) => item.category)))],
    [],
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? catalog
        : catalog.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const selected = useMemo(
    () => filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? catalog[0],
    [filtered, selectedId],
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setJustAdded("");
  };

  const handleAdd = () => {
    setBasketCount((prev) => prev + 1);
    if (selected) {
      setJustAdded(selected.name);
    }
  };

  return (
    <section className="space-y-6 rounded-3xl border border-orange-900/70 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-600/20 p-6 shadow-2xl shadow-amber-900/30">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-900/80">Featured products</p>
          <h2 className="text-2xl font-semibold text-amber-950">Shop today&apos;s drops</h2>
          <p className="text-sm text-amber-900/90">
            Pick a category, preview details, and add to basket. Shipping windows are surfaced before checkout.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-amber-950 shadow-lg shadow-amber-800/30">
          <span>Basket</span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-amber-800">{basketCount}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
              activeCategory === category
                ? "border-amber-700 bg-amber-500 text-amber-950 shadow-md shadow-amber-800/30"
                : "border-amber-800/50 bg-white/70 text-amber-900 hover:border-amber-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className={`h-full rounded-2xl border p-4 text-left transition ${
                selected?.id === product.id
                  ? "border-amber-700 bg-white shadow-lg shadow-amber-800/30"
                  : "border-amber-800/40 bg-white/80 hover:border-amber-700 hover:shadow-md hover:shadow-amber-800/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-amber-900">{product.name}</p>
                {product.badge ? (
                  <span className="rounded-full bg-amber-500/30 px-2 py-1 text-[11px] font-semibold text-amber-900">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-lg font-bold text-amber-900">{product.price}</p>
              <p className="mt-1 text-xs text-amber-800/90">{product.category}</p>
              <p className="mt-3 text-sm text-amber-800/90">{product.description}</p>
              <p className="mt-3 text-xs font-medium text-amber-800">{product.shipping}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-amber-800/50 bg-white p-5 shadow-lg shadow-amber-800/20">
          <p className="text-sm font-semibold text-amber-900">Overview</p>
          {selected ? (
            <div className="mt-3 space-y-3 text-amber-900">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">{selected.name}</p>
                  <p className="text-sm text-amber-800/90">{selected.category}</p>
                </div>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-900">
                  {selected.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-amber-800/90">{selected.description}</p>
              <div className="rounded-xl border border-amber-800/30 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-900">
                {selected.shipping}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleAdd}
                  className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-400 shadow-md shadow-amber-800/30"
                >
                  Add to basket
                </button>
                {justAdded ? (
                  <span className="text-xs font-semibold text-emerald-700">
                    Added {justAdded} to basket
                  </span>
                ) : null}
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-amber-800/90">Pick a product to see details.</p>
          )}
        </div>
      </div>
    </section>
  );
}
