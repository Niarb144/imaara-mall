"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_PANELS } from "@/data/data";

export default function Hero() {
  // Desktop hover-expand state
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Mobile carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  // Track which slide is centered as the user swipes, to drive the dots.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    const slide = slideRefs.current[index];
    trackRef.current?.scrollTo({ left: slide?.offsetLeft ?? 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black sm:h-[75dvh] sm:min-h-[480px] md:h-[90dvh]">
      {/* =====================================================================
          Mobile — swipeable scroll-snap carousel
      ===================================================================== */}
      <div className="sm:hidden">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {HERO_PANELS.map((panel, index) => (
            <a
              key={panel.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              href={panel.link}
              className="relative flex h-[70vh] min-h-[420px] w-full shrink-0 snap-center flex-col justify-end overflow-hidden p-6"
            >
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              <div className="relative z-10">
                <h2 className="text-3xl leading-none text-white">{panel.title}</h2>
                <p className="mt-3 text-sm text-white/80">{panel.tagline}</p>
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
            </a>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 py-4">
          {HERO_PANELS.map((panel, index) => (
            <button
              key={panel.id}
              type="button"
              aria-label={`Go to ${panel.title} slide`}
              aria-current={index === activeIndex}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-brand-yellow" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* =====================================================================
          Desktop — hover-expand grid 
      ===================================================================== */}
      <div className="hidden h-[80%] w-full gap-4 p-6 mt-20 pt-4 sm:flex">
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
              className="group relative flex min-w-0 basis-0 overflow-hidden rounded transition-[flex-grow] duration-500 ease-out"
            >
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-1 flex-col justify-end p-8">
                <h2 className="text-4xl leading-none text-white">{panel.title}</h2>

                {/* Tagline + link — revealed only on the expanded card */}
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    isHovered
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-white/80">{panel.tagline}</p>
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