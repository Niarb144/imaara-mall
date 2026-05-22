"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

// ── Animation constants ───────────────────────────────────────────────────────
const SCALE_PEAK   = 2.4;
const DURATION_OUT = 380;
const HOLD         = 300;
const DURATION_IN  = 460;
const GAP          = 180;
const PAUSE_END    = 1000;

// Custom expansion order (zero-based indices into each word)
// UNDER:  U=0, N=1, D=2, E=3, R=4  → U, D, R, E
const UNDER_ORDER = [0, 2, 4, 3];
// CONSTRUCTION: C=0,O=1,N=2,S=3,T=4,R=5,U=6,C=7,T=8,I=9,O=10,N=11 → O, U, I, N, C, T
const CONST_ORDER = [1, 6, 9, 2, 0, 4];


function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }
function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3); }

function getScale(elapsed: number, startMs: number): number {
  const t = elapsed - startMs;
  if (t < 0) return 1;
  if (t < DURATION_OUT) return 1 + (SCALE_PEAK - 1) * easeOutQuart(t / DURATION_OUT);
  if (t < DURATION_OUT + HOLD) return SCALE_PEAK;
  const rt = t - DURATION_OUT - HOLD;
  if (rt < DURATION_IN) return SCALE_PEAK + (1 - SCALE_PEAK) * easeOutCubic(rt / DURATION_IN);
  return 1;
}

// ── Stretch text component ────────────────────────────────────────────────────
function StretchText({
  word,
  order,
  className,
}: {
  word: string;
  order: number[];
  className?: string;
}) {
  const wrapRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const innerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const naturalWidths = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    // Measure natural widths once
    naturalWidths.current = innerRefs.current.map(
      (el) => el?.getBoundingClientRect().width ?? 0
    );

    // Build per-letter start times (all from t=0)
    const startTimes = order.map((_, step) => step * GAP);

    const underDuration =
      (order.length - 1) * GAP + DURATION_OUT + HOLD + DURATION_IN;
    const totalDuration = underDuration + PAUSE_END;
    const loopStart = performance.now();

    function frame(now: number) {
      const elapsed = now - loopStart;

      order.forEach((letterIdx, step) => {
        const scale = getScale(elapsed, startTimes[step]);
        const natW = naturalWidths.current[letterIdx] ?? 0;
        const wrap = wrapRefs.current[letterIdx];
        const inner = innerRefs.current[letterIdx];
        if (wrap) wrap.style.width = `${natW * scale}px`;
        if (inner) inner.style.transform = `scaleX(${scale})`;
      });

      if (elapsed < totalDuration) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        // Reset and loop
        order.forEach((letterIdx) => {
          const natW = naturalWidths.current[letterIdx] ?? 0;
          const wrap = wrapRefs.current[letterIdx];
          const inner = innerRefs.current[letterIdx];
          if (wrap) wrap.style.width = `${natW}px`;
          if (inner) inner.style.transform = "scaleX(1)";
        });
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(frame);
  }, [order]);

  useEffect(() => {
    // Wait for fonts before measuring
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => requestAnimationFrame(animate));
    });
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <span className={`inline-flex ${className ?? ""}`}>
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="inline-flex justify-center overflow-visible"
          ref={(el) => { wrapRefs.current[i] = el; }}
          style={{ willChange: "width" }}
        >
          <span
            ref={(el) => { innerRefs.current[i] = el; }}
            className="inline-block whitespace-nowrap"
            style={{ transformOrigin: "center bottom", willChange: "transform" }}
          >
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}

// ─── Social icons (inline SVG) ─────────────────────────────────────────────────
const Instagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.027 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.1 24 12.073z" />
  </svg>
);
const TikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function UnderConstructionPage() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true });

  return (
    <main className="min-h-screen bg-[#111111] flex flex-col overflow-hidden">
      {/* ── Hero ── */}
      <section className="flex-1 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 pt-8 pb-8 overflow-hidden">
        {/* UNDER */}
          <div
            className="leading-none select-none text-white"
            style={{
              fontSize: "clamp(5rem, 18vw, 18rem)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            <StretchText word="UNDER" order={UNDER_ORDER} />
          </div>

          {/* CONSTRUCTION */}
          <div
            className="leading-none select-none text-white"
            style={{
              fontSize: "clamp(2.2rem, 7.5vw, 7.5rem)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              letterSpacing: "0.04em",
            }}
          >
            <StretchText word="CONSTRUCTION" order={CONST_ORDER} />
          </div>

      </section>

      {/* ── Footer bar ── */}
      <motion.footer
        ref={footerRef}
        className="bg-[#1a1a1a] border-t border-white/10 px-6 md:px-12 lg:px-20 py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left – tagline + brand */}
          <div className="flex flex-col gap-3">
            <p
              className="text-white text-lg md:text-2xl font-light leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We&apos;re giving the site<br />
              a little makeover.
            </p>

            {/* Imaara Wewe colourful wordmark */}
            <div
              className="text-2xl md:text-3xl font-black uppercase leading-none"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              <span className="text-[#FF3CAC]">I</span>
              <span className="text-[#FF8C00]">m</span>
              <span className="text-[#FFD700]">a</span>
              <span className="text-[#39FF14]">a</span>
              <span className="text-[#00CFFF]">r</span>
              <span className="text-[#BF5FFF]">a</span>
              <span className="text-white"> </span>
              <span className="text-[#FF3CAC]">n</span>
              <span className="text-[#FF8C00]">a</span>
              <span className="text-[#FFD700]"> </span>
              <span className="text-[#FF3CAC]">W</span>
              <span className="text-[#FF8C00]">e</span>
              <span className="text-[#FFD700]">w</span>
              <span className="text-[#39FF14]">e</span>
            </div>
          </div>

          {/* Middle – message + contact */}
          <div className="flex flex-col gap-2">
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Come back later for our big reveal.<br />
              We promise, it&apos;ll be worth it.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-widest mt-2">
              In the meantime, reach us at:
            </p>
            <a
              href="mailto:MARKETING@THEIMAARA.CO.KE"
              className="text-white text-sm md:text-base font-semibold tracking-wide hover:text-[#FF3CAC] transition-colors"
            >
              MARKETING@THEIMAARA.CO.KE
            </a>
          </div>

          {/* Right – logo + socials */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <img src="/images/logo.png" alt="Imaara Logo" width={56} height={56} className="w-14 h-14" />
              <span
                className="text-white text-xs tracking-[0.25em] uppercase mt-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                THE<br />IMAARA
              </span>
            </div>

            <div className="flex gap-4 text-white/60">
              <a href="https://www.instagram.com/theimaaramall/" aria-label="Instagram" className="hover:text-[#FF3CAC] transition-colors">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/theimaaramall" aria-label="Facebook" className="hover:text-[#00CFFF] transition-colors">
                <Facebook />
              </a>
              <a href="https://www.tiktok.com/@theimaaramall?_r=1&_t=ZS-96ZIjZEC6q0" aria-label="TikTok" className="hover:text-[#39FF14] transition-colors">
                <TikTok />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Playfair+Display:wght@300;400&family=Fredoka+One&display=swap');
      `}</style>
    </main>
  );
}
