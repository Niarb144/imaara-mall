"use client";

import Image from "next/image";
import { Event } from "@/data/data";

interface Props {
  event: Event;
}

export default function EventsGallery({ event }: Props) {
  return (
    <div
      className="
        relative
        flex
        min-h-[700px]
        items-center
        justify-center
      "
    >
      {/* Main Card */}

      <div
        className="
          relative
          h-[620px]
          w-[420px]
          -rotate-6
          overflow-hidden
          rounded-lg
          shadow-2xl
        "
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Preview */}

      <div
        className="
          absolute
          bottom-12
          right-0
          h-[300px]
          w-[210px]
          overflow-hidden
          rounded-md
          shadow-xl
        "
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}