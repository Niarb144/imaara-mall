"use client";

import { useMemo, useState } from "react";

import { STORES, StoreCategory } from "@/data/data";

import StoreHero from "@/components/stores/StoreHero";
import FeaturedStores from "@/components/stores/FeaturedStores";
import StoreSearch from "@/components/stores/StoreSearch";
import StoreFilters from "@/components/stores/StoreFilters";
import StoreGrid from "@/components/stores/StoreGrid";

export default function StoreDirectory() {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<StoreCategory | "All">("All");

  const [sort, setSort] =
    useState<"A-Z" | "Z-A">("A-Z");

  const displayedStores = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = STORES.filter((store) => {
      const matchesSearch =
        query === "" ||
        store.name.toLowerCase().includes(query) ||
        store.description.toLowerCase().includes(query) ||
        store.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );

      const matchesCategory =
        category === "All" ||
        store.category === category;

      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) =>
      sort === "A-Z"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return filtered;
  }, [search, category, sort]);

  return (
    <>
    <div className="bg-white">
      {/* <StoreHero /> */}
      <FeaturedStores />
      <StoreSearch
        value={search}
        onChange={setSearch}
      />

      <StoreFilters
        category={category}
        sort={sort}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <StoreGrid stores={displayedStores} />
      </div>
    </>
  );
}