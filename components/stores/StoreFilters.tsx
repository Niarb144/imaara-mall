"use client";

import { StoreCategory } from "@/data/data";

const categories: ("All" | StoreCategory)[] = [
  "All",
  "Fashion",
  "Beauty & Wellness",
  "Electronics",
  "Kids & Toys",
  "Dining",
  "Entertainment",
  "Home & Living",
];

interface StoreFiltersProps {
  category: "All" | StoreCategory;
  sort: "A-Z" | "Z-A";

  onCategoryChange: (
    value: "All" | StoreCategory
  ) => void;

  onSortChange: (
    value: "A-Z" | "Z-A"
  ) => void;
}

export default function StoreFilters({
  category,
  sort,
  onCategoryChange,
  onSortChange,
}: StoreFiltersProps) {
  return (
    <section className="py-8 border-b border-brand-dark/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row">

        {/* Category */}

        <select
          value={category}
          onChange={(e) =>
            onCategoryChange(
              e.target.value as "All" | StoreCategory
            )
          }
          className="
            h-12
            flex-1
            border
            border-brand-dark
            bg-transparent
            px-4
            uppercase
            tracking-[0.2em]
            text-sm
            focus:outline-none
          "
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) =>
            onSortChange(
              e.target.value as "A-Z" | "Z-A"
            )
          }
          className="
            h-12
            w-full
            border
            border-brand-dark
            bg-transparent
            px-4
            uppercase
            tracking-[0.2em]
            text-sm
            focus:outline-none
            md:w-64
          "
        >
          <option value="A-Z">
            View A–Z
          </option>

          <option value="Z-A">
            View Z–A
          </option>
        </select>
      </div>
    </section>
  );
}