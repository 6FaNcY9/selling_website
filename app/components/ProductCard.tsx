import Link from "next/link";
import { Product } from "../data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const inventoryCopy = {
    "in-stock": "In stock",
    "low-stock": "Almost gone",
    preorder: "Preorder",
  }[product.inventoryStatus];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-sky-900/30 transition hover:-translate-y-1 hover:border-sky-500/50">
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {product.category}
            </p>
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm text-slate-300 line-clamp-2">{product.description}</p>
          </div>
          <div className="text-right text-sm text-slate-200">
            <p className="text-xl font-bold text-white">${product.price}</p>
            {product.originalPrice ? (
              <p className="text-xs text-slate-500 line-through">${product.originalPrice}</p>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="rounded-full bg-slate-800 px-2 py-1 font-semibold text-slate-200">
            {inventoryCopy}
          </span>
          <span className="rounded-full bg-amber-500/20 px-2 py-1 font-semibold text-amber-200">
            {product.rating.toFixed(1)} ★ ({product.reviews})
          </span>
        </div>
        <div className="flex gap-2 text-xs text-slate-300">
          {product.highlights.slice(0, 2).map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-slate-700 px-3 py-1 font-semibold text-slate-200"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 text-sm font-semibold">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-lg border border-slate-700 px-4 py-2 text-center text-slate-100 transition hover:border-sky-400 hover:text-white"
          >
            View details
          </Link>
          <button className="flex-1 rounded-lg bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
