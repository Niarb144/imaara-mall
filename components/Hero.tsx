"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, type HeroSlide } from "@/data/data";

const AUTOPLAY_MS = 6000;
const PARALLAX_FACTOR = 0.35;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [entered, setEntered] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickingRef = useRef(false);

  const goTo = (index: number) => {
    if (index === current) return;
    setPrevious(current);
    setCurrent(index);
    setEntered(false);
  };

  const goToNext = () => goTo((current + 1) % HERO_SLIDES.length);

  // Kick off the "slide in" transition on the frame after the index changes,
  // so the incoming slide reliably animates from translate-x-full -> 0.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [current]);

  // Autoplay, restarting whenever the active slide changes (including
  // manual thumbnail clicks) so a click doesn't get immediately overridden.
  useEffect(() => {
    timerRef.current = setInterval(goToNext, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Parallax: shift the background layer at a fraction of scroll speed.
  // Skipped for users who've asked for reduced motion, rAF-throttled otherwise.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * PARALLAX_FACTOR);
        tickingRef.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-[70dvh] min-h-[480px] w-full overflow-hidden bg-brand-dark"
      aria-roledescription="carousel"
      aria-label="Mall highlights"
    >
      {/* Outgoing slide stays in place, revealed as the incoming one slides away */}
      {previous !== null && (
        <HeroSlideView
          slide={HERO_SLIDES[previous]}
          className="z-10"
          parallaxOffset={parallaxOffset}
        />
      )}

      {/* Incoming slide covers the previous one, sliding in from the right */}
      <HeroSlideView
        key={current}
        slide={HERO_SLIDES[current]}
        active
        className={`z-20 transition-transform duration-700 ease-in-out ${
          entered ? "translate-x-0" : "translate-x-full"
        }`}
        onTransitionEnd={() => setPrevious(null)}
        parallaxOffset={parallaxOffset}
      />

      {/* Bottom-right thumbnail preview / controls */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:gap-3">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.title} slide`}
            aria-current={index === current}
            onClick={() => goTo(index)}
            className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-24 ${
              index === current
                ? "border-brand-yellow"
                : "border-white/40 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function HeroSlideView({
  slide,
  className = "",
  active = false,
  onTransitionEnd,
  parallaxOffset = 0,
}: {
  slide: HeroSlide;
  className?: string;
  active?: boolean;
  onTransitionEnd?: () => void;
  parallaxOffset?: number;
}) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      onTransitionEnd={onTransitionEnd}
      aria-hidden={!active}
    >
      {/* Background layer — scaled up so the parallax shift never exposes an edge */}
      <div
        className="absolute inset-0 scale-110 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
      >
        <Image
          src={slide.image}
          alt=""
          fill
          priority={active}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end gap-3 px-6 pb-28 sm:px-10 sm:pb-32">
        <p className="font-accent text-2xl text-brand-yellow sm:text-3xl">
          {slide.tagline}
        </p>
        <h1 className="max-w-xl text-4xl leading-none text-white sm:text-6xl">
          {slide.title}
        </h1>
        <a
          href={slide.link}
          className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
        >
          Explore
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
        </a>
      </div>
    </div>
  );
}