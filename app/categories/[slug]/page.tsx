import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { categories, getCategoryBySlug, products } from "../../data/catalog";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const categoryProducts = products.filter((product) => product.category === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Category not found</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">We could not find that aisle.</h1>
          <Link
            href="/categories"
            className="mt-6 inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Back to categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{category.slug}</p>
              <h1 className="text-3xl font-semibold text-white md:text-4xl">{category.name}</h1>
              <p className="text-lg text-slate-300">{category.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {categories.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/categories/${item.slug}`}
                    className={`rounded-full px-3 py-1 font-semibold transition hover:border-sky-400 hover:text-white ${
                      item.slug === category.slug
                        ? "border border-sky-500/70 bg-sky-500/10 text-sky-100"
                        : "border border-slate-800 bg-slate-900/60 text-slate-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.heroImage}
                alt={category.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/70 to-transparent" />
            </div>
          </div>
        </header>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Catalog</p>
              <h2 className="text-2xl font-semibold text-white">{category.name} highlights</h2>
              <p className="text-sm text-slate-300">Product cards link into detail pages and cart-ready CTAs.</p>
            </div>
            <div className="flex gap-2 text-sm font-semibold">
              <Link
                href="/"
                className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 transition hover:border-sky-400"
              >
                Home
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-sky-500 px-4 py-2 text-slate-950 transition hover:bg-sky-400"
              >
                Save to basket
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
