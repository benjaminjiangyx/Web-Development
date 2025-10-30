import type { Coffee } from "./data";

type Props = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="relative">
        {/* Image */}
        <img
          src={coffee.image}
          alt={coffee.name}
          className="h-44 w-full object-cover"
          loading="lazy"
        />

        {/* Popular badge */}
        {coffee.popular && (
          <div className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-900 shadow">
            Popular
          </div>
        )}

        {/* Sold out badge */}
        {!coffee.available && (
          <div className="absolute right-3 top-3 rounded-md bg-neutral-900/80 px-2 py-1 text-xs font-medium text-white backdrop-blur dark:bg-white/10">
            Sold out
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <header className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold">{coffee.name}</h3>
          <span className="shrink-0 rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
            ${coffee.price.toFixed(2)}
          </span>
        </header>

        <footer className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <span aria-hidden>⭐</span>
            <span className="tabular-nums">{coffee.rating.toFixed(1)}</span>
            <span className="ml-1 text-neutral-400">({coffee.votes})</span>
          </div>
          <span className={coffee.available ? "text-emerald-600" : "text-neutral-400"}>
            {coffee.available ? "Available" : "Unavailable"}
          </span>
        </footer>
      </div>
    </article>
  );
}


