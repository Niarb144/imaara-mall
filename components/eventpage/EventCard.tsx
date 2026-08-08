import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/data/data";

interface EventCardProps {
  event: Event;
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDateRange(event: Event) {
  const start = formatDate(event.startDate);

  if (!event.endDate) {
    return start;
  }

  const end = formatDate(event.endDate);

  return `${start} – ${end}`;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="
        group
        block
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-black
        focus-visible:ring-offset-4
      "
      aria-label={`View ${event.title}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1199px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.035]
          "
        />
      </div>

      {/* Event information */}
      <div className="pt-3">
        <p className="mb-2 text-[13px] font-medium tracking-tight text-neutral-400">
          {formatDateRange(event)}
        </p>

        <div className="border-t border-neutral-300 pt-3">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black">
            {event.category}
          </p>

          <h2 className="text-[17px] font-semibold leading-[1.25] tracking-[-0.015em] text-black">
            {event.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-5 text-neutral-600">
            {event.description}
          </p>

          <span className="mt-3 inline-flex text-[13px] font-semibold text-black">
            Find out more
          </span>
        </div>
      </div>
    </Link>
  );
}