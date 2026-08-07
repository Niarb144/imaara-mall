"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { OFFERS, STORES } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

export default function OffersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const seeAllRef = useRef<HTMLAnchorElement>(null);

  const rows = Math.ceil(OFFERS.length / 2);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;

    const cards = cardRefs.current.filter(
      Boolean
    ) as HTMLAnchorElement[];

    const button = seeAllRef.current;

    if (!section || !sticky || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        yPercent: 90,
        opacity: 0,
      });

      if (button) {
        gsap.set(button, {
          y: 18,
          opacity: 0,
        });
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
          },
          index * 0.8
        );
      });

      if (button) {
        tl.to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          cards.length * 0.8
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-dark"
      style={{
        height: `${(rows + 1) * 100}vh`,
      }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0 bg-brand-dark" />

        {/* Heading */}

        <div className="absolute inset-x-0 top-16 z-0 text-center">
          <p className="font-accent text-2xl text-brand-yellow">
            Offers
          </p>

          <h2 className="mt-3 text-4xl text-white">
            This week, save a little more
          </h2>
        </div>

        {/* Grid */}

        <div
          className="relative z-10 mx-auto grid h-full w-full max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:gap-6"
          style={{
            gridTemplateRows: `repeat(${rows}, minmax(0,1fr))`,
          }}
        >
          {OFFERS.map((offer, index) => {
            const store = STORES.find(
              (s) => s.id === offer.storeId
            );

            const rowIndex = Math.floor(index / 2);

            const origin =
              rowIndex === 0
                ? "md:origin-top"
                : rowIndex === rows - 1
                ? "md:origin-bottom"
                : "md:origin-center";

            return (
              <Link
                key={offer.id}
                href={`/directory/${offer.storeId}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative h-full overflow-hidden shadow-xl transition-transform duration-300 md:hover:z-30 md:hover:scale-125 ${origin}`}
              >
                <Image
                  src={offer.image}
                  alt=""
                  fill
                  sizes="(min-width:768px) 20vw,45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-yellow">
                    {store?.name}
                  </p>

                  <h3 className="mt-1 text-lg uppercase text-white">
                    {offer.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}

        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
          <Link
            ref={seeAllRef}
            href="/offers"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            See all offers

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}