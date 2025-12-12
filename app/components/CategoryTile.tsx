import Link from "next/link";
import { Category } from "../data/catalog";

export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-sky-900/30 transition hover:-translate-y-1 hover:border-sky-500/50"
    >
      <img
        src={category.heroImage}
        alt={category.name}
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5">
        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
          {category.featured ? "Featured" : "Explore"}
        </span>
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        <p className="text-sm text-slate-200">{category.description}</p>
      </div>
    </Link>
  );
}
