"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function StoreHero() {
  const scrollToDirectory = () => {
    document
      .getElementById("store-directory")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-brand-light px-6">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm uppercase tracking-[0.3em] text-brand-dark/60">
          <Link
            href="/"
            className="transition-colors hover:text-brand-gold"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span>Store Directory</span>
        </nav>

        {/* Heading */}

        <motion.h1
          className="font-display text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.8,
          }}
        >
          Store Directory
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-dark/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.35,
          }}
        >
          Discover fashion, dining, entertainment and lifestyle brands
          thoughtfully curated to create a premium shopping experience at
          Imaara Mall.
        </motion.p>

        <motion.button
          onClick={scrollToDirectory}
          className="group mt-14 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-brand-dark transition-colors hover:text-brand-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.55,
          }}
        >
          Explore Stores

          <ChevronDown
            size={18}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}