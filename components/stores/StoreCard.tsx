"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Store } from "@/data/data";

interface Props {
  store: Store;
}

export default function StoreCard({
  store,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: .7,
        ease: [0.22,1,0.36,1],
      }}
    >
      <Link href={`/stores/${store.slug}`}>

        <motion.article
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="
            group
            relative
            h-[350px]
            overflow-hidden
            border
            border-brand-dark/10
            bg-brand-light
          "
        >

          {/* IMAGE */}

          <motion.div
            variants={{
              rest:{
                y:"100%"
              },
              hover:{
                y:0
              }
            }}
            transition={{
              duration:.55,
              ease:[0.22,1,0.36,1]
            }}
            className="absolute inset-0"
          >

            <Image
              src={store.images[0]}
              alt={store.name}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

          </motion.div>

          {/* CONTENT */}

          <div className="relative flex h-full flex-col justify-end p-8">

            <motion.div

              variants={{
                rest:{
                  y:0
                },

                hover:{
                  y:-8
                }

              }}

              transition={{
                duration:.4
              }}

            >

              <motion.p

                variants={{
                  rest:{
                    opacity:.7
                  },

                  hover:{
                    opacity:1
                  }
                }}

                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[.3em]
                  text-brand-gold
                "
              >

                {store.category}

              </motion.p>

              <h3
                className="
                  font-display
                  text-3xl
                  leading-tight
                  text-brand-dark
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >

                {store.name}

              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-brand-dark/60
                  transition-colors
                  duration-300
                  group-hover:text-white/80
                "
              >

                {store.floor}

                {" • "}

                {store.unit}

              </p>

            </motion.div>

          </div>

          {/* Arrow */}

          <motion.div

            variants={{
              rest:{
                opacity:0,
                scale:.8,
                rotate:-20
              },

              hover:{
                opacity:1,
                scale:1,
                rotate:0
              }

            }}

            transition={{
              duration:.3
            }}

            className="
              absolute
              right-6
              top-6
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
            "
          >

            <ArrowUpRight size={18}/>

          </motion.div>

        </motion.article>

      </Link>
    </motion.div>
  );
}