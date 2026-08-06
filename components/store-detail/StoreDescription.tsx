"use client";

import { motion } from "framer-motion";
import { Store } from "@/data/data";

interface Props {
  store: Store;
  children?: React.ReactNode;
}

export default function StoreDescription({
  store,
  children,
}: Props) {
  return (
    <section
      id="store-content"
      className="py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
            ease: [0.22,1,0.36,1],
          }}
          className="lg:col-span-7"
        >

          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[.35em]
              text-brand-gold
            "
          >
            About The Store
          </p>

          <h2
            className="
              font-display
              text-4xl
              leading-tight

              md:text-5xl
            "
          >
            A Premium Shopping Experience
          </h2>

          <div
            className="
              mt-10
              space-y-6
              text-lg
              leading-9
              text-brand-dark/75
            "
          >
            <p>
              {store.description}
            </p>

            <p>
              Explore an exceptional selection of products
              and services curated to deliver quality,
              convenience and memorable shopping experiences
              within Imaara Mall.
            </p>

            <p>
              Whether you're discovering something new or
              returning for your favourite collections,
              {` ${store.name}`} offers an inviting
              environment designed around comfort,
              accessibility and premium service.
            </p>

          </div>

        </motion.div>

        {/* Right */}

        <div className="lg:col-span-5">
            {children}
        </div>

      </div>
    </section>
  );
}