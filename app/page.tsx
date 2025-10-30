"use client";

import { useMemo, useState } from "react";
import { COFFEES, type Coffee } from "./components/coffee/data";
import { CoffeeCard } from "./components/coffee/CoffeeCard";

export default function CoffeeListingPage() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const coffeesToShow: Coffee[] = useMemo(() => {
    if (!showAvailableOnly) return COFFEES;
    return COFFEES.filter((c) => c.available);
  }, [showAvailableOnly]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-base leading-normal text-neutral-900 dark:text-neutral-100">
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Our Collection</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
          Explore our selection of specialty coffees. Filter to see what is available
          now.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
          <button
            className={`${showAvailableOnly ? "bg-transparent text-neutral-600 dark:text-neutral-300" : "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"} rounded-full px-4 py-2 text-sm font-medium shadow-sm transition`}
            onClick={() => setShowAvailableOnly(false)}
            aria-pressed={!showAvailableOnly}
          >
            All Products
          </button>
          <button
            className={`${showAvailableOnly ? "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100" : "bg-transparent text-neutral-600 dark:text-neutral-300"} rounded-full px-4 py-2 text-sm font-medium shadow-sm transition`}
            onClick={() => setShowAvailableOnly(true)}
            aria-pressed={showAvailableOnly}
          >
            Available Now
          </button>
        </div>
      </section>

      <section>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
          {coffeesToShow.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard coffee={coffee} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


