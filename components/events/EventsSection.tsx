"use client";

import { events } from "@/data/data";
import EventsContent from "./EventsContent";
import EventsGallery from "./EventsGallery";

export default function EventsSection() {
  const activeEvent = events[0];

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-brand-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="font-display text-5xl md:text-6xl">
            What's Happening
          </h2>
        </div>

        {/* Desktop Layout */}
        <div
          className="
            grid
            gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >
          <EventsContent event={activeEvent} />

          <EventsGallery event={activeEvent} />
        </div>

      </div>
    </section>
  );
}