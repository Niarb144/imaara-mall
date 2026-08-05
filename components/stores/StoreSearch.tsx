"use client";

import { Search } from "lucide-react";

interface StoreSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StoreSearch({
  value,
  onChange,
}: StoreSearchProps) {
  return (
    <div className="border-y border-brand-dark/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center border-b border-brand-dark pb-3">
          <input
            type="text"
            placeholder="Search for a store, brand or category"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
              w-full
              bg-transparent
              text-lg
              placeholder:text-brand-dark/40
              focus:outline-none
            "
          />

          <Search
            className="text-brand-dark/70"
            size={22}
          />
        </div>
      </div>
    </div>
  );
}