"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FeatureRow } from "@/data/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * One text/image row.
 *
 * Two independent GSAP behaviours layered on top of each other:
 *
 * 1. Staggered reveal — the text fades/slides in on a ScrollTrigger that
 *    fires while the row is still low in the viewport (`start: "top 85%"`);
 *    the image's own trigger fires later (`start: "top 65%"`), so it
 *    visibly follows the text in as the user keeps scrolling, rather than
 *    both arriving at once.
 * 2. Parallax drag — for as long as the row is passing through the
 *    viewport, the image content is scrubbed a few percent up/down
 *    relative to the page scroll (`scrub: true`), so it visibly moves at a
 *    different speed than the text sitting next to it, which scrolls at
 *    the normal 1:1 rate.
 */
export default function FeatureRow({
  row,
  reverse = false,
}: {
  row: FeatureRow;
  reverse?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageOuterRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const imageOuter = imageOuterRef.current;
    const imageInner = imageInnerRef.current;
    if (!section || !text || !imageOuter || !imageInner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%" },
        }
      );

      gsap.fromTo(
        imageOuter,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 65%" },
        }
      );

      // Parallax drag: the inner image sits 20% taller than its frame so it
      // always covers the edges while it drifts. yPercent range is small
      // and symmetric so it never actually leaves the frame.
      gsap.fromTo(
        imageInner,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 py-16 sm:py-24`}
    >
      <div ref={textRef} className="w-full md:w-1/2 flex flex-col justify-center max-w-md">
        {row.eyebrow && (
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 mb-3">
            {row.eyebrow}
          </span>
        )}
        <h2 className="text-4xl sm:text-5xl text-neutral-900 leading-tight">{row.title}</h2>
        <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed">
          {row.description}
        </p>
        <a
          href={row.ctaHref}
          className="mt-8 inline-block w-fit border border-neutral-900 px-6 py-3 text-xs tracking-[0.15em] uppercase text-neutral-900 transition-colors hover:bg-brand-lime hover:text-white"
        >
          {row.ctaLabel}
        </a>
      </div>

      <div
        ref={imageOuterRef}
        className="relative w-full md:w-1/2 h-[420px] sm:h-[560px] overflow-hidden bg-neutral-100"
      >
        <div ref={imageInnerRef} className="absolute inset-[-10%]">
          <Image
            src={row.image}
            alt={row.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}