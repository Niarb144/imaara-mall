"use client";

import { useMemo, useState } from "react";
import type { Offer } from "@/data/data";
import { OfferCard } from "./OfferCard";

interface OffersPageProps {
  offers: Offer[];
}

type SortOption = "newest" | "oldest" | "az" | "za";

export function OffersPage({ offers }: OffersPageProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortOption>("newest");

  const categories = useMemo(() => {
    const values = offers
      .map((offer) => offer.category)
      .filter((value): value is string => Boolean(value));

    return ["all", ...Array.from(new Set(values))];
  }, [offers]);

  const filteredOffers = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = offers.filter((offer) => {
      const matchesSearch =
        !query ||
        offer.title.toLowerCase().includes(query) ||
        offer.brand.toLowerCase().includes(query) ||
        offer.description?.toLowerCase().includes(query);

      const matchesCategory =
        category === "all" || offer.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "oldest":
          return (
            new Date(a.startDate ?? 0).getTime() -
            new Date(b.startDate ?? 0).getTime()
          );

        case "az":
          return a.brand.localeCompare(b.brand);

        case "za":
          return b.brand.localeCompare(a.brand);

        case "newest":
        default:
          return (
            new Date(b.startDate ?? 0).getTime() -
            new Date(a.startDate ?? 0).getTime()
          );
      }
    });
  }, [offers, search, category, sort]);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* ------------------------------------------------------------------ */}
      {/* Page Header                                                        */}
      {/* ------------------------------------------------------------------ */}

      <header className="border-t border-black pt-6 md:pt-8 mt-10 md:mt-20">
        <div className="relative flex min-h-[86px] items-center justify-center border-b border-neutral-200 px-6 md:px-16">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="absolute left-6 top-1/2 -translate-y-1/2 md:left-16"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <a
                  href="/"
                  className="transition-opacity hover:opacity-60"
                >
                  Home
                </a>
              </li>

              <li aria-hidden="true" className="text-neutral-400">
                ›
              </li>

              <li className="text-neutral-500">Offers</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="font-serif text-[30px] font-normal tracking-[-0.025em] md:text-[32px]">
            Offers
          </h1>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Filters                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-4 md:grid-cols-[1.3fr_0.9fr_0.9fr] md:px-16 lg:px-20">
          {/* Search */}
          <div className="relative">
            <label htmlFor="offer-search" className="sr-only">
              Search for an offer
            </label>

            <input
              id="offer-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for an offer"
              className="h-[40px] w-full border-0 border-b border-black bg-transparent px-0 pb-3 text-[15px] tracking-[0.08em] outline-none placeholder:text-neutral-500 focus:border-black"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <label htmlFor="offer-category" className="sr-only">
              Filter by category
            </label>

            <select
              id="offer-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-[40px] w-full appearance-none border border-black bg-white px-3 pr-10 text-[11px] font-semibold uppercase tracking-[0.08em] outline-none"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item === "all" ? "Category" : item}
                </option>
              ))}
            </select>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="m4 7 6 6 6-6" />
              </svg>
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <label htmlFor="offer-sort" className="sr-only">
              Sort offers
            </label>

            <select
              id="offer-sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as SortOption)
              }
              className="h-[40px] w-full appearance-none border border-black bg-white px-3 pr-10 text-[11px] font-semibold uppercase tracking-[0.08em] outline-none"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A–Z</option>
              <option value="za">Z–A</option>
            </select>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="m4 7 6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Offers                                                             */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-16 md:py-16 lg:px-20">
        {/* Section heading */}
        <div className="mb-5 flex items-center gap-5">
          <div className="h-px flex-1 bg-neutral-200" />

          <h2 className="shrink-0 text-[13px] font-semibold uppercase tracking-[0.12em]">
            {filteredOffers.length === 0
              ? "No offers"
              : `All Offers`}
          </h2>

          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Results */}
        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center border-y border-neutral-200">
            <div className="text-center">
              <p className="font-serif text-2xl">
                No offers found
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
                className="mt-4 text-sm underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}