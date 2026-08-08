"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { planYourVisitCards } from "@/data/data";


const EASE = [0.16, 1, 0.3, 1] as const; // expo-out — smooth, no overshoot

export default function PlanYourVisitSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Column ratio drives the "push" — the hovered card's column grows, the
  // other one is gently squeezed. Plain CSS transition on grid-template-
  // columns keeps this buttery since it's a single composited property.
  const columns =
    hovered === null ? "1fr 1fr" : hovered === 0 ? "1.18fr 0.82fr" : "0.82fr 1.18fr";

  return (
    <section className={`font-display w-full bg-white py-20 sm:py-28`}>
      <motion.h2
        className="text-center text-5xl sm:text-6xl text-neutral-900 mb-16 sm:mb-20"
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        Plan Your Visit
      </motion.h2>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div
          className="grid gap-6 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ gridTemplateColumns: columns }}
        >
          {planYourVisitCards.map((card, i) => {
            const isHovered = hovered === i;
            const isDimmed = hovered !== null && !isHovered;

            return (
              <motion.div
                key={card.id}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <a
                  href={card.href}
                  aria-label={`${card.title} — ${card.eyebrow}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className="group block h-[300px] sm:h-[400px] rounded-none outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-neutral-900"
                  style={{
                    transform: isHovered
                      ? "scale(1.045)"
                      : isDimmed
                      ? "scale(0.97)"
                      : "scale(1)",
                    zIndex: isHovered ? 20 : 10,
                    transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* clips the inner image's own slow zoom without clipping the
                      outer scale, which is applied one level up */}
                  <div className="relative h-full w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      draggable={false}
                      sizes="(max-width: 668px) 100vw, 50vw"
                      className="object-cover pointer-events-none select-none transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20 transition-opacity duration-700 group-hover:from-black/70" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                      <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-white/90">
                        {card.eyebrow}
                      </span>
                      <span
                        className="mt-3 text-4xl sm:text-5xl leading-tight text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}