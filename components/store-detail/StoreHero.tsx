"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";

import { Store } from "@/data/data";

interface Props {
  store: Store;
}

export default function StoreHero({ store }: Props) {
  const scrollToContent = () => {
    document
      .getElementById("store-content")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative h-[85vh] min-h-[700px] overflow-hidden">

      {/* Background */}

      <Image
        src={store.images[0]}
        alt={store.name}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Content */}

      <div className="absolute inset-0 flex items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-20">

          {/* Breadcrumb */}

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
            className="mb-10 flex items-center gap-2 text-sm text-white/70"
          >
            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/stores"
              className="hover:text-white"
            >
              Stores
            </Link>

            <span>/</span>

            <span>{store.name}</span>

          </motion.nav>

          {/* Category */}

          <motion.p

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: .1,
              duration: .7,
            }}

            className="
              mb-4
              uppercase
              tracking-[.4em]
              text-brand-gold
              text-sm
            "
          >

            {store.category}

          </motion.p>

          {/* Name */}

          <motion.h1

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .2,
              duration: .8,
              ease: [0.22,1,0.36,1],
            }}

            className="
              max-w-3xl
              font-display
              text-5xl
              text-white

              md:text-7xl
            "
          >

            {store.name}

          </motion.h1>

          {/* Description */}

          <motion.p

            initial={{
              opacity: 0,
              y: 25,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .35,
              duration: .7,
            }}

            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/80
            "
          >

            {store.description}

          </motion.p>

          {/* Meta */}

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .5,
            }}

            className="
              mt-10
              flex
              flex-wrap
              gap-8
              text-white/90
            "
          >

            <div className="flex items-center gap-3">

              <MapPin size={18} />

              <span>

                {store.floor}

                {" • "}

                {store.unit}

              </span>

            </div>

            <div className="flex items-center gap-3">

              <Clock size={18} />

              <span>

                {store.workingHours}

              </span>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.button

        onClick={scrollToContent}

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          delay: 1,
        }}

        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white
        "
      >

        <motion.div

          animate={{
            y: [0, 8, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >

          <ChevronDown size={28} />

        </motion.div>

      </motion.button>

    </section>
  );
}