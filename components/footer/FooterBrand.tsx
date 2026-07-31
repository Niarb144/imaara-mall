"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterBrand() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          yPercent: -12,
        },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="footer-reveal relative isolate flex min-h-[42rem] items-center justify-center overflow-hidden"
    >
      {/* Soft radial glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[46rem]
          w-[46rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-orange/10
          blur-[150px]
        "
      />

      {/* Decorative gradients */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      {/* Giant Parallax Word */}

      <h2
        ref={titleRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          font-display
          uppercase
          leading-none
          tracking-[-0.08em]
          text-brand-sand/5
          select-none
          text-[clamp(6rem,22vw,18rem)]
          will-change-transform
        "
      >
        IMAARA
      </h2>

      {/* Foreground */}

      <div className="relative z-10 flex flex-col items-center gap-8">

        <div className="footer-item">
          <Image
            src="/images/logo.png"
            alt="Imaara Mall"
            width={140}
            height={140}
            priority
            className="h-auto w-28 lg:w-36"
          />
        </div>

        <div className="footer-item text-center">

          <h3 className="text-6xl md:text-7xl">
            IMAARA
          </h3>

          <p className="mt-5 max-w-xl text-lg text-brand-sand/75">
            Bringing together shopping, dining,
            entertainment and unforgettable experiences
            in one destination.
          </p>

        </div>

      </div>
    </section>
  );
}