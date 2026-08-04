"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const video = videoRef.current;

    if (!section || !card || !video) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(card, {
            y: 250,
        });

    
        tl.to(card,{
            y:0,
            width:"100vw",
            height:"100vh",
            borderRadius:0,
            ease:"none"
        },0);

      tl.add(() => {
        video.play().catch(() => {});
      }, 0);

      tl.to(card, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        boxShadow: "none",
      });

      tl.to(
        video,
        {
          scale: 1.02,
        },
        0
      );

      const title = section.querySelector(".title");

        tl.to(title,{
            opacity:0,
            y:-60,
        },0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] overflow-hidden bg-white"
    >
        <div className="pt-18 mt-10 p-2 text-center">

            <h2
                className="
                text-8xl
                tracking-tight
            "
            >
                The Imaara Mall
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-neutral-500">
                Access true premium shopping under the Imaara Lights. A place that's home to
                your designer favourites, all a few steps from one another.
            </p>

        </div>
      <div className="absolute left-0 right-0 bottom-0 flex items-end justify-center pt:8 md:pt-24 pb-0">
        <div
          ref={cardRef}
          className="
            relative
            w-[72vw]
            max-w-[100vw]
            aspect-video
            overflow-hidden
            rounded
            shadow-2xl
            bg-black
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