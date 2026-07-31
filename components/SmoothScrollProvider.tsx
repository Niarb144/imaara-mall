"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Wraps the scrollable page content in the #smooth-wrapper / #smooth-content
 * structure ScrollSmoother requires, and initializes it.
 *
 * Deliberately does NOT wrap Navbar — Navbar uses CSS `position: sticky`,
 * which breaks inside a ScrollSmoother content div (its transforms remove
 * the normal viewport-relative containing block sticky needs). Navbar stays
 * a normal sibling outside this wrapper, so its sticky behavior is
 * unaffected; everything else (page content + Footer) lives inside.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}