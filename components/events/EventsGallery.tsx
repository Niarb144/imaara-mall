"use client";

import { motion, LayoutGroup } from "framer-motion";
import EventImage from "./EventImage";
import { Event } from "@/data/data";

interface Props {
  events: Event[];
  current: number;
  setCurrent: (n: number) => void;
}

export default function EventsGallery({
  events,
  current,
  setCurrent,
}: Props) {
  const active = events[current];

  const next = events[(current + 1) % events.length];

  const nextNext =
    events[(current + 2) % events.length];

  return (
    <LayoutGroup>
      <div className="relative flex min-h-[650px] items-center justify-center">

        {/* HERO */}

        <motion.div
          layout
          animate={{
            rotate: 6,
          }}
          className="
            relative
            h-[520px]
            w-[360px]
            z-20
          "
        >
          <EventImage
            event={active}
            active
          />
        </motion.div>

        {/* NEXT */}

        <motion.div
          layout
          className="
            absolute
            bottom-8
            right-2
            h-[250px]
            w-[180px]
            z-10
          "
        >
          <EventImage
            event={next}
            onClick={() =>
              setCurrent((current + 1) % events.length)
            }
          />
        </motion.div>

        {/* THIRD */}

        <motion.div
          layout
          className="
            absolute
            bottom-20
            right-32
            h-[180px]
            w-[130px]
            opacity-60
            z-0
          "
        >
          <EventImage
            event={nextNext}
            onClick={() =>
              setCurrent((current + 2) % events.length)
            }
          />
        </motion.div>

      </div>
    </LayoutGroup>
  );
}