"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SERVICES } from "@/data/data";
import { SERVICE_ICONS } from "@/components/ServiceIcons";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    const bg = bgRef.current;

    if (!section || !sticky || !track || !bg) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(track.scrollWidth - sticky.clientWidth, 0);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(bg, {
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "100vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden bg-brand-dark"
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0"
        >
          <Image
            src="/images/services-background.jpg"
            alt=""
            fill
            priority={false}
            className="object-cover opacity-25"
          />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-center">
          <div className="mx-auto mb-10 w-full max-w-7xl px-4 sm:mb-14">
            <p className="font-accent text-2xl text-brand-yellow">
              Here to help
            </p>

            <h2 className="text-3xl text-white sm:text-4xl">
              Mall Services & Amenities
            </h2>
          </div>

          <div
            ref={trackRef}
            className="
              flex
              w-max
              items-stretch
              gap-6
              pl-4
              pr-4
              will-change-transform
              sm:gap-8
              sm:pl-10
              sm:pr-10
            "
          >
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.id];

              return (
                <div
                  key={service.id}
                  className="
                    flex
                    w-[78vw]
                    shrink-0
                    flex-col
                    justify-between
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/10
                    p-6
                    backdrop-blur-sm
                    sm:w-[340px]
                    sm:p-8
                  "
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-dark">
                      <Icon />
                    </span>

                    <h3 className="mt-6 text-xl uppercase tracking-wide text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/75">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="/services"
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
      </div>
    </section>
  );
}