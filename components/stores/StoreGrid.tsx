"use client";

import { Store } from "@/data/data";
import StoreCard from "./StoreCard";

interface StoreGridProps {
  stores: Store[];
}

export default function StoreGrid({
  stores,
}: StoreGridProps) {
  if (!stores.length) {
    return (
      <section
        id="store-directory"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="font-display text-4xl">
            No stores found
          </h3>

          <p className="mt-4 text-brand-dark/60">
            Try adjusting your search or filters.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="store-directory"
      className="py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            grid
            grid-cols-1
            gap-6

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4
          "
        >
          {stores.map((store) => (
            <StoreCard
              key={store.id}
              store={store}
            />
          ))}
        </div>

      </div>
    </section>
  );
}