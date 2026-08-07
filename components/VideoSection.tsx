"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const card = cardRef.current;
    const video = videoRef.current;

    if (!section || !title || !card || !video) return;

    let timeline: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      gsap.set(card, {
        y: 250,
      });

      timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      timeline
        .to(
          card,
          {
            y: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            boxShadow: "none",
          },
          0
        )
        .to(
          video,
          {
            scale: 1.02,
          },
          0
        )
        .to(
          title,
          {
            opacity: 0,
            y: -60,
          },
          0
        );

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        once: true,
        onEnter: () => {
          video.play().catch(() => {});
        },
      });
    }, section);

    return () => {
      timeline?.scrollTrigger?.kill();
      timeline?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      <div
        ref={titleRef}
        className="title absolute inset-x-0 top-24 z-10 text-center px-6"
      >
        <h2 className="text-8xl tracking-tight">
          The Imaara Mall
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-neutral-300">
          Access true premium shopping under the Imaara Lights. A place that's
          home to your designer favourites, all a few steps from one another.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <div
          ref={cardRef}
          className="
            relative
            w-[72vw]
            max-w-[100vw]
            aspect-video
            overflow-hidden
            rounded
            bg-black
            shadow-2xl
          "
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/videos/mall.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}