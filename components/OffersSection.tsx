"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OFFERS, STORES } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

export default function OffersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const seeAllRef = useRef<HTMLAnchorElement>(null);

  const rows = Math.ceil(OFFERS.length / 2);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const cards = cardRefs.current.filter(Boolean) as HTMLAnchorElement[];
      if (!section || cards.length === 0) return;

      // Every card starts well below its resting grid position, hidden
      // beneath the fold, so the initial view is just the title + tagline.
      gsap.set(cards, { yPercent: 90, opacity: 0 });
      if (seeAllRef.current) {
        gsap.set(seeAllRef.current, { opacity: 0, y: 18 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (rows + 1)}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Staggered along the shared timeline (not gsap's `stagger` option,
      // since we want each card's rise to be independently scrubbable) —
      // card 1 starts first, each subsequent card starts a beat later,
      // with enough overlap that the motion still feels continuous.
      cards.forEach((card, index) => {
        tl.to(
          card,
          { yPercent: 0, opacity: 1, ease: "power2.out", duration: 1 },
          index * 0.8
        );
      });

      // "See all offers" fades/rises in right as the last card settles.
      if (seeAllRef.current) {
        tl.to(
          seeAllRef.current,
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 },
          cards.length * 0.8
        );
      }
    }, sectionRef);

    return () => ctx.revert();
    // rows is derived from static OFFERS data — it never changes across
    // renders, so it's safe (and avoids dep-array churn) to omit it here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-brand-sand"
    >
      {/* Centered title + tagline — sits behind the cards so, as each card
          rises, it moves up and over this text */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-[20vw] leading-none tracking-tight text-brand-dark sm:text-[9rem]">
          Offers
        </h2>
        <p className="font-accent mt-4 text-2xl text-brand-pink sm:text-3xl">
          This week, save a little more
        </p>
      </div>

      {/* Two-column grid of offer cards. Rows are explicitly sized as equal
          fractions of the section's own height (rather than left to size
          from aspect-ratio/content), so however many rows there are, they
          always sum to exactly the space available — no row can ever push
          past the bottom edge and get clipped by overflow-hidden. */}
      <div
        className="relative z-10 mx-auto grid h-full w-full max-w-4xl grid-cols-2 gap-2 px-4 py-6 sm:gap-4 sm:py-10 md:max-w-5xl md:gap-6 lg:max-w-6xl"
        style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
      >
        {OFFERS.map((offer, index) => {
          const store = STORES.find((s) => s.id === offer.storeId);

          // Row-aware transform origin: on hover, a card scales up to show
          // a fuller view. Scaling from dead-center would push the top row
          // up past the section's top edge (and the bottom row down past
          // its bottom edge) — right back into the same overflow-hidden
          // clipping this layout was built to avoid. Growing top-row cards
          // downward and bottom-row cards upward keeps the expansion
          // entirely inside the section regardless of which row it's in.
          const rowIndex = Math.floor(index / 2);
          const originClass =
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
              className={`group relative h-full w-full overflow-hidden rounded-lg shadow-xl transition-transform duration-300 ease-out will-change-transform md:hover:z-30 md:hover:scale-125 md:hover:shadow-2xl ${originClass}`}
            >
              <Image
                src={offer.image}
                alt=""
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-yellow sm:text-xs">
                  {store?.name}
                </p>
                <h3 className="mt-1 text-sm font-normal uppercase leading-tight text-white sm:text-lg">
                  {offer.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Appears once the last card has settled */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center sm:bottom-10">
        <Link
          ref={seeAllRef}
          href="/offers"
          className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          See all offers
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}