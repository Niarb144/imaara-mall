"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CATEGORIES, STORES } from "@/data/data";

export default function StoreCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Toggle (rather than one-shot) so the fall-in animation replays every
  // time the section re-enters the viewport, not just the first time.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="mb-10 text-center sm:mb-12">
        <p className="font-accent text-2xl text-brand-pink">Explore by</p>
        <h2 className="text-3xl sm:text-4xl">Store Categories</h2>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6">
        {CATEGORIES.map((category, index) => {
          const categoryStores = STORES.filter((s) => s.category === category.name);
          const previewStores = categoryStores.slice(0, 3);

          return (
            <a
              key={category.name}
              href={`/directory?category=${encodeURIComponent(category.name)}`}
              style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
              className={`group relative isolate block aspect-[4/5] w-full min-h-[220px] md:min-h-[350px] overflow-hidden rounded-2xl bg-brand-pink shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-20 hover:scale-110 hover:shadow-2xl ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-12 opacity-0"
              }`}
            >
              {/* Background image (bg-brand-pink above acts as a fallback so
                  the card never collapses if an image is missing/broken) */}
              <Image
                src={category.image}
                alt=""
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />

              {/* Pink brand overlay, deepening on hover to seat the revealed text */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/30 via-brand-pink/10 transition-all duration-500 group-hover:from-brand-pink/95 group-hover:via-brand-pink/80 group-hover:to-brand-pink/30" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <h3 className="break-words text-base font-normal uppercase leading-tight tracking-wide text-white sm:text-lg md:text-xl">
                  {category.name}
                </h3>

                {/* Revealed on hover: store count, a few names, and a link to the filtered directory */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      {categoryStores.length}{" "}
                      {categoryStores.length === 1 ? "Store" : "Stores"}
                    </p>

                    <ul className="mt-2 space-y-1 text-sm text-white/90">
                      {previewStores.map((store) => (
                        <li key={store.id} className="truncate">
                          {store.name}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-yellow">
                      See more
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}