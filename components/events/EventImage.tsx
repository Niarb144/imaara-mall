"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Event } from "@/data/data";

interface Props {
  event: Event;
  active?: boolean;
  onClick?: () => void;
}

export default function EventImage({
  event,
  active,
  onClick,
}: Props) {
  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={
        active
          ? {
              rotate: -6,
              y: 8,
              scale: 1.03,
            }
          : {
              scale: 1.02,
            }
      }
      transition={{
        layout: {
          duration: 0.7,
        },
        type: "spring",
        stiffness: 110,
        damping: 18,
      }}
      className={`
        relative
        h-full
        w-full
        overflow-hidden
        rounded
        shadow-2xl
        cursor-pointer
      `}
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}