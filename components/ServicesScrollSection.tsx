"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data/data";
import { SERVICE_ICONS } from "@/components/ServiceIcons";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const bg = bgRef.current;
      if (!section || !track || !bg) return;

      // How far the track needs to travel so the last card's edge lands
      // flush against the right edge of the viewport.
      const getScrollDistance = () =>
        Math.max(track.scrollWidth - section.clientWidth, 0);

      // A single timeline drives both the card track and the background
      // parallax, scrubbed 1:1 to scroll position (no manual onUpdate math —
      // that's what was leaving the track out of sync with the real scroll
      // position and causing the pin to release before the animation
      // visually finished).
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, { x: () => -getScrollDistance(), ease: "none" }, 0);
      // Subtle parallax: background drifts a little slower than the cards,
      // so it reads as "still" while still having depth.
      tl.to(bg, { xPercent: -6, ease: "none" }, 0);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Still background, with a slow parallax drift tied to the same scroll */}
      <div ref={bgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/services-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mx-auto mb-10 w-full max-w-7xl px-4 sm:mb-14">
          <p className="font-accent text-2xl text-brand-yellow">Here to help</p>
          <h2 className="text-3xl text-white sm:text-4xl">Mall Services &amp; Amenities</h2>
        </div>

        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-6 pl-4 pr-4 will-change-transform sm:gap-8 sm:pl-10 sm:pr-10"
        >
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id];

            return (
              <div
                key={service.id}
                className="flex w-[78vw] shrink-0 flex-col justify-between rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:w-[340px] sm:p-8"
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-dark">
                    <Icon />
                  </span>

                  <h3 className="mt-6 text-xl font-normal uppercase tracking-wide text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/75">{service.description}</p>
                </div>

                <Link
                  href={service.link}
                  className="mt-6 inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-yellow transition-colors hover:text-white"
                >
                  Learn more
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}