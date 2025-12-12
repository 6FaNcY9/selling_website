import Image from "next/image";

interface CategoryTileProps {
  category: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

export function CategoryTile({ category }: CategoryTileProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-900/40">
      <Image
        src={category.image}
        alt={category.name}
        width={640}
        height={320}
        className="h-40 w-full object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{category.id}</p>
        <h3 className="text-xl font-semibold text-white">{category.name}</h3>
        <p className="text-sm text-slate-300">{category.description}</p>
        <button className="mt-3 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400">
          Explore {category.name}
        </button>
      </div>
    </div>
  );
}
