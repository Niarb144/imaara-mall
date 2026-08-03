"use client";

import { useState } from "react";
import { events } from "@/data/data";
import EventsContent from "./EventsContent";
import EventsGallery from "./EventsGallery";

export default function EventsSection() {
  const [current, setCurrent] = useState(0);

  const active = events[current];

  // console.log(events[current]);

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-brand-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mb-20 text-center">
          <h2 className="font-display text-5xl md:text-6xl">
            What's Happening
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <EventsContent
            event={active}
          />

          <EventsGallery
            events={events}
            current={current}
            setCurrent={setCurrent}
          />

        </div>
      </div>
    </section>
  );
}