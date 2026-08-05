"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { STORES } from "@/data/data";

export default function FeaturedStores() {
  const featuredStores = STORES.filter((store) => store.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-brand-dark/10" />

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-brand-dark">
            Our Picks
          </span>

          <div className="h-px flex-1 bg-brand-dark/10" />
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredStores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/stores/${store.slug}`}>
                <motion.article
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group overflow-hidden"
                >
                  {/* Image */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <motion.div
                      variants={{
                        rest: {
                          scale: 1,
                        },
                        hover: {
                          scale: 1.08,
                        },
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full"
                    >
                      <Image
                        src={store.images[0]}
                        alt={store.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay */}

                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0,
                        },
                        hover: {
                          opacity: 1,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute inset-0 bg-black/35"
                    />

                    {/* Arrow */}

                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0,
                          x: -8,
                        },
                        hover: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-dark"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  {/* Content */}

                  <motion.div
                    variants={{
                      rest: {
                        y: 0,
                      },
                      hover: {
                        y: -4,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="pt-5"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                      {store.category}
                    </p>

                    <h3 className="font-display text-2xl text-brand-dark">
                      {store.name}
                    </h3>
                  </motion.div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}