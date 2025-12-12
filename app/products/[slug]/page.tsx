import Link from "next/link";
import { getProductBySlug, products } from "../../data/catalog";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const related = products
    .filter((item) => item.slug !== slug && item.category === product?.category)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Product not found</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">That product is not in this catalog.</h1>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              {product.badge ? (
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                  {product.badge}
                </span>
              ) : null}
            </div>
            <div className="flex gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1 font-semibold text-slate-200">{product.category}</span>
              <span className="rounded-full bg-amber-500/20 px-3 py-1 font-semibold text-amber-200">
                {product.rating.toFixed(1)} ★ ({product.reviews} reviews)
              </span>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 font-semibold text-emerald-200">{product.shipping}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Product detail</p>
              <h1 className="text-3xl font-semibold text-white">{product.name}</h1>
              <p className="text-lg text-slate-300">{product.description}</p>
            </div>
            <div className="flex items-end gap-3">
              <p className="text-3xl font-bold text-white">${product.price}</p>
              {product.originalPrice ? (
                <p className="text-sm text-slate-500 line-through">${product.originalPrice}</p>
              ) : null}
              <p className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200">
                {product.inventoryStatus === "low-stock" ? "Almost gone" : product.inventoryStatus === "preorder" ? "Preorder" : "In stock"}
              </p>
            </div>
            <div className="grid gap-2 text-sm text-slate-300">
              {product.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <button className="rounded-lg bg-sky-500 px-5 py-3 text-slate-950 transition hover:bg-sky-400">Add to cart</button>
              <Link
                href={`/categories/${product.category}`}
                className="rounded-lg border border-slate-700 px-5 py-3 text-slate-100 transition hover:border-sky-400"
              >
                View more in category
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-sm font-semibold text-white">Shipping & support</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• {product.shipping} from partner fulfillment centers.</li>
                <li>• Free returns within 30 days on demo purchases.</li>
                <li>• Add your own drop-shipper tracking or webhooks here.</li>
              </ul>
            </div>
          </div>
        </div>

        {related.length ? (
          <section className="space-y-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Related</p>
                <h2 className="text-2xl font-semibold text-white">You may also like</h2>
                <p className="text-sm text-slate-300">More from this category to keep the browsing journey flowing.</p>
              </div>
              <Link
                href={`/categories/${product.category}`}
                className="text-sm font-semibold text-sky-300 underline-offset-4 hover:text-white hover:underline"
              >
                Open category
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <div key={item.slug} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.category}</p>
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-slate-300">${item.price} • {item.shipping}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
