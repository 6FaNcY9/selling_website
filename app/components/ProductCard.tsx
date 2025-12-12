import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    category: string;
    image: string;
    description: string;
    featured?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-slate-800/70 bg-slate-900/60 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/40">
      <div className="relative overflow-hidden rounded-t-2xl bg-slate-800">
        <Image
          src={product.image}
          alt={product.name}
          width={640}
          height={384}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
          {product.category}
        </div>
        {product.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-slate-950">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{product.name}</h3>
            <p className="text-sm text-slate-400">SKU: {product.id}</p>
          </div>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-sky-300">
            {product.price}
          </span>
        </div>
        <p className="flex-1 text-sm text-slate-300">{product.description}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <button className="flex-1 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Add to cart
          </button>
          <button className="flex-1 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400">
            View details
          </button>
        </div>
      </div>
    </article>
  );
}
