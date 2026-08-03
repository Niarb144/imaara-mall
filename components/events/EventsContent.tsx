"use client";

import Link from "next/link";
import { Event } from "@/data/data";

interface Props {
  event: Event;
}

export default function EventsContent({ event }: Props) {
  return (
    <div className="max-w-lg ml-10">

      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
        {event.category}
      </p>

      <h3 className="font-display text-5xl leading-none md:text-6xl">
        {event.title}
      </h3>

      <p className="mt-8 text-sm tracking-wider text-brand-muted">
        {event.date}
      </p>

      <p className="mt-6 leading-8 text-brand-muted">
        {event.description}
      </p>

      <Link
        href={`/events/${event.slug}`}
        className="
          mt-8
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

      {/* Navigation goes here later */}

      <div className="mt-20 flex gap-8">

        <button
          className="text-3xl transition hover:text-brand-gold"
        >
          ←
        </button>

        <button
          className="text-3xl transition hover:text-brand-gold"
        >
          →
        </button>

      </div>

    </div>
  );
}