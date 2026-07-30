"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoreCategories from "./StoreCategories";
import ServicesSection from "./ServiceSection";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps CategorySection + ServicesSection together.
 *
 * CategorySection scrolls completely normally — nothing is pinned or clipped
 * while its own content (however tall) scrolls into and out of view. Only
 * once its bottom edge naturally reaches the bottom of the viewport (i.e. the
 * moment normal scrolling would start revealing whatever comes next) does
 * ScrollTrigger pin it in place for one extra viewport-height of scroll,
 * during which ServicesSection slides up from below to cover it. `snap`
 * ensures the user can't get stuck halfway through the reveal — releasing
 * the scroll mid-transition snaps forward or back to a clean state.
 */
export default function CategoryToServicesTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: categoryRef.current,
        start: "bottom bottom",
        end: "+=100%",
        pin: categoryRef.current,
        pinSpacing: true,
        scrub: 0.3,
        snap: {
          snapTo: (value) => (value < 0.5 ? 0 : 1),
          duration: 0.4,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          gsap.set(servicesRef.current, { yPercent: 100 - self.progress * 100 });
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div ref={categoryRef} className="relative z-0">
        <StoreCategories />
      </div>

      <div
        ref={servicesRef}
        className="relative z-10 translate-y-full will-change-transform"
      >
        <ServicesSection />
      </div>
    </div>
  );
}