"use client";

import { useState } from "react";
import Image from "next/image";
import { HERO_PANELS } from "@/data/data";

export default function Hero() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black sm:h-[75dvh] sm:min-h-[480px]">
      <div className="flex h-full w-full flex-col gap-1 p-1 sm:flex-row sm:gap-2 sm:p-2">
        {HERO_PANELS.map((panel) => {
          const isHovered = hoveredId === panel.id;
          const isDimmed = hoveredId !== null && !isHovered;

          return (
            <a
              key={panel.id}
              href={panel.link}
              onMouseEnter={() => setHoveredId(panel.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(panel.id)}
              onBlur={() => setHoveredId(null)}
              style={{ flexGrow: isHovered ? 3 : isDimmed ? 0.6 : 1 }}
              className="group relative flex min-h-[180px] min-w-0 basis-0 overflow-hidden rounded transition-[flex-grow] duration-500 ease-out sm:min-h-0"
            >
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-1 flex-col justify-end p-4 sm:p-8">
                <h2 className="text-2xl leading-none text-white sm:text-4xl">
                  {panel.title}
                </h2>

                {/* Tagline + link — revealed only on the expanded card */}
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isHovered
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/80 sm:text-base">
                      {panel.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-yellow">
                      Explore
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