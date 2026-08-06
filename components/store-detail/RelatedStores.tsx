"use client";

import { motion } from "framer-motion";

import { Store, STORES } from "@/data/data";
import StoreCard from "@/components/stores/StoreCard";

interface Props {
  store: Store;
}

export default function RelatedStores({
  store,
}: Props) {
  const relatedStores = STORES.filter(
    (item) =>
      item.category === store.category &&
      item.id !== store.id
  ).slice(0, 3);

  if (relatedStores.length === 0) {
    return null;
  }

  return (
    <section className="bg-white border-t border-brand-dark/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[.35em]
              text-brand-gold
            "
          >
            You May Also Like
          </p>

          <h2
            className="
              font-display
              text-4xl
              md:text-5xl
            "
          >
            More {store.category} Stores
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-brand-dark/65
            "
          >
            Continue exploring premium {store.category.toLowerCase()}
            {" "}brands and discover more experiences available
            throughout Imaara Mall.
          </p>
        </motion.div>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {relatedStores.map((relatedStore) => (
            <StoreCard
              key={relatedStore.id}
              store={relatedStore}
            />
          ))}
        </div>

      </div>
    </section>
  );
}