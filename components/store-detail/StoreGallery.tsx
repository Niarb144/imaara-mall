"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Store } from "@/data/data";

interface Props {
  store: Store;
}

export default function StoreGallery({
  store,
}: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14">

          <p
            className="
              mb-5
              uppercase
              tracking-[.35em]
              text-xs
              text-brand-gold
            "
          >
            Gallery
          </p>

          <h2
            className="
              font-display
              text-5xl
            "
          >
            Explore {store.name}
          </h2>

        </div>

        <div
          className="
            grid
            grid-cols-12
            gap-3
            auto-rows-[220px]
          "
        >

          {store.images.map((image, i) => (

            <motion.button

              key={image}

              onClick={() => setIndex(i)}

              whileHover={{
                scale: 0.98,
              }}

              transition={{
                duration: .35,
              }}

              className={`
                relative
                overflow-hidden

                ${i === 0
                  ? "col-span-12 md:col-span-8 row-span-2"
                  : "col-span-6 md:col-span-4"
                }
              `}
            >

              <motion.div

                whileHover={{
                  scale: 1.08,
                }}

                transition={{
                  duration: .6,
                  ease:[0.22,1,0.36,1]
                }}

                className="h-full w-full"

              >

                <Image

                  src={image}

                  alt={`${store.name} ${i+1}`}

                  fill

                  className="object-cover"

                />

              </motion.div>

            </motion.button>

          ))}

        </div>

      </div>

      <Lightbox

        open={index >= 0}

        close={() => setIndex(-1)}

        index={index}

        slides={store.images.map((image) => ({
          src: image,
        }))}

        plugins={[
          Zoom,
          Thumbnails,
        ]}

      />

    </section>
  );
}