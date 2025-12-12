import CategoryTile from "../components/CategoryTile";
import { categories, products } from "../data/catalog";

export default function CategoriesPage() {
  const categoryCounts = categories.map((category) => ({
    ...category,
    count: products.filter((product) => product.category === category.slug).length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Categories</p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">Explore every aisle</h1>
          <p className="text-lg text-slate-300">
            Browse curated collections with imagery, pricing, and decoy inventory so you can demo the full storefront experience.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {categoryCounts.map((category) => (
            <div key={category.slug} className="space-y-3">
              <CategoryTile category={category} />
              <p className="text-xs text-slate-400">{category.count} products</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
