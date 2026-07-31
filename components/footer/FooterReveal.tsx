"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterReveal({
  children,
}: PropsWithChildren) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = container.current;

    if (!footer) return;

    const animation = gsap.fromTo(
      footer,
      {
        yPercent: 35,
      },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
    },
    });

    tl.from(".footer-reveal", {
    opacity: 0,
    y: 80,
    stagger: 0.18,
    ease: "power3.out",
    })
    .from(
    ".footer-item",
    {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
    },
    "-=0.5"
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative will-change-transform"
    >
      {children}
    </div>
  );
}