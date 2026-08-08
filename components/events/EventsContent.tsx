"use client";

import Link from "next/link";
import { Event } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  event: Event;
  current: number;
  total: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export default function EventsContent({  event,
  current,
  total,
  setCurrent,
}: Props) {
  const previous = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  // ANIMATION VARIANTS
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      filter: "blur(6px)",
      transition: {
        duration: 0.25,
      },
    },
  };
  
  return (
    <div className="max-w-lg md:ml-18">
      <AnimatePresence mode="wait">
        <motion.div
          key={event.id}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.p variants={itemVariants} className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            {event.category}
          </motion.p>

          <motion.h3 variants={itemVariants} className="font-display text-5xl leading-none md:text-6xl">
            {event.title}
          </motion.h3>

          <motion.p variants={itemVariants} className="mt-8 text-sm tracking-wider text-brand-muted">
            {event.startDate}
          </motion.p>

          <motion.p variants={itemVariants} className="mt-6 leading-8 text-brand-muted">
            {event.description}
          </motion.p>

          <motion.div>
            <Link
              href={`/events/${event.slug}`}
              className="
                mt-2
                inline-flex
                items-center
                border-b
                border-brand-sand
                pb-1
                text-sm
                font-semibold
                transition
                hover:text-brand-gold
              "
            >
              Read More
            </Link>
          </motion.div>
          
        </motion.div>
      </AnimatePresence>

      {/* Navigation goes here later */}

      <div className="mt-10 flex gap-8">

        <button
          onClick={previous}
          aria-label="Previous event"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full border border-brand-sand/30
            transition-all duration-300
            hover:border-brand-gold
            hover:text-brand-gold
            cursor-pointer
          "
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next event"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full border border-brand-sand/30
            transition-all duration-300
            hover:border-brand-gold
            hover:text-brand-gold
            cursor-pointer
          "
        >
          →
        </button>

      </div>

    </div>
  );
}