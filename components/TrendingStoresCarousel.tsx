"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { trendingStores, type TrendingStore } from "@/data/data";

/**
 * Trending Mall Stores — sliding carousel
 * ----------------------------------------
 * Recreates the "Trending Mall Stores" marquee: a fixed title/CTA panel on
 * the left, and an endless, gently auto-scrolling row of variable-width
 * store cards on the right. Drag to browse manually, hover to pause.
 *
 * - GSAP drives the infinite scroll loop (a single tween looping over a
 *   duplicated track — the most jank-free way to do a continuous marquee).
 * - Framer Motion handles the entrance stagger and hover/press
 *   micro-interactions on each card and the CTA button.
 */

const SIZE_CLASSES: Record<TrendingStore["size"], string> = {
  narrow: "w-[160px] sm:w-[190px]",
  regular: "w-[240px] sm:w-[280px]",
  wide: "w-[300px] sm:w-[360px]",
};

const PX_PER_SECOND = 55; // marquee speed — tune to taste

function Card({ store, index }: { store: TrendingStore; index: number }) {
  return (
    <motion.div
      className={`group relative shrink-0 ${SIZE_CLASSES[store.size]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4), ease: "easeOut" }}
    >
      <Link
        href={store.href ?? "#"}
        className="block outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-sm"
        tabIndex={-1}
        aria-hidden={false}
      >
        <motion.div
          className={`relative w-full overflow-hidden bg-neutral-100 ${
            store.featured ? "h-[300px] sm:h-[400px]" : "h-[250px] sm:h-[380px]"
          }`}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <Image
            src={store.image}
            alt={store.name}
            fill
            draggable={false}
            sizes="(max-width: 640px) 60vw, 360px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] pointer-events-none select-none"
          />
        </motion.div>

        <p className="mt-4 text-lg sm:text-xl text-neutral-900">{store.name}</p>
      </Link>
    </motion.div>
  );
}

export default function TrendingStoresCarousel({
  title = "Trending Mall\nStores",
  ctaLabel = "Explore all brands",
  ctaHref = "/brands",
  items = trendingStores,
}: {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items?: TrendingStore[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const dragState = useRef({ dragging: false, startX: 0, startTrackX: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  // Render the item list twice back-to-back so the loop is seamless: once
  // the track has scrolled exactly the width of one full set, snapping the
  // tween's repeat is invisible to the eye.
  const loopItems = [...items, ...items];

  const buildTween = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    tweenRef.current?.kill();

    const setWidth = track.scrollWidth / 2;
    gsap.set(track, { x: 0 });

    if (prefersReducedMotion) return; // keep it static for reduced-motion users

    tweenRef.current = gsap.to(track, {
      x: -setWidth,
      duration: setWidth / PX_PER_SECOND,
      ease: "none",
      repeat: -1,
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    buildTween();

    const ro = new ResizeObserver(() => buildTween());
    if (viewportRef.current) ro.observe(viewportRef.current);

    return () => {
      ro.disconnect();
      tweenRef.current?.kill();
    };
  }, [buildTween]);

  const pause = () => tweenRef.current?.pause();
  const resume = () => {
    if (!dragState.current.dragging) tweenRef.current?.play();
  };

  // --- manual drag-to-scroll, layered on top of the autoplay tween ---
  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startTrackX: gsap.getProperty(track, "x") as number,
    };
    setIsDragging(true);
    pause();
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    const delta = e.clientX - dragState.current.startX;
    const setWidth = track.scrollWidth / 2;
    let next = dragState.current.startTrackX + delta;

    // wrap so dragging feels endless in both directions
    if (next > 0) next -= setWidth;
    if (next < -setWidth) next += setWidth;

    gsap.set(track, { x: next });
  };

  const endDrag = () => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    setIsDragging(false);

    // resume the loop tween from wherever the track currently sits
    const track = trackRef.current;
    if (track && tweenRef.current) {
      const setWidth = track.scrollWidth / 2;
      const currentX = gsap.getProperty(track, "x") as number;
      tweenRef.current.kill();
      tweenRef.current = gsap.to(track, {
        x: currentX - setWidth,
        duration: (currentX - -setWidth) / PX_PER_SECOND,
        ease: "none",
        onComplete: buildTween,
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 px-6 sm:px-12">
        {/* Fixed title panel */}
        <motion.div
          className="shrink-0 sm:w-[280px] flex flex-col justify-center"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl leading-[1.05] text-neutral-900 whitespace-pre-line">
            {title}
          </h2>

          <motion.div className="mt-8 w-fit" whileHover="hover" initial="rest" animate="rest">
            <Link
              href={ctaHref}
              className="inline-block border border-neutral-900 px-6 py-3 text-xs tracking-[0.15em] uppercase text-neutral-900 hover:bg-brand-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-neutral-900"
            >
              <motion.span
                className="inline-block"
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {ctaLabel}
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scrolling viewport */}
        <div
          ref={viewportRef}
          className={`relative flex-1 overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {/* fade masks so cards feel like they slide in/out rather than get cut off */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div ref={trackRef} className="flex items-end gap-6 sm:gap-8 will-change-transform">
            {loopItems.map((store, i) => (
              <Card key={`${store.id}-${i}`} store={store} index={i % items.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}