import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS } from "@/data/data";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
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

function formatDateRange(startDate: string, endDate?: string) {
  const start = formatDate(startDate);

  if (!endDate) {
    return start;
  }

  return `${start} – ${formatDate(endDate)}`;
}

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({
  params,
}: EventPageProps) {
  const { slug } = await params;

  const event = EVENTS.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* ---------------------------------------------------------------- */}
      {/* Header / Breadcrumb                                             */}
      {/* ---------------------------------------------------------------- */}

      <header className="border-t border-black mt-10 md:mt-20 pt-6 md:pt-10">
        <div className="relative flex min-h-[86px] items-center justify-center border-b border-neutral-200 px-6 md:px-16">
          <nav
            aria-label="Breadcrumb"
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2
              md:left-16
            "
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-opacity hover:opacity-60"
                >
                  Home
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="text-neutral-400"
              >
                ›
              </li>

              <li>
                <Link
                  href="/events"
                  className="transition-opacity hover:opacity-60"
                >
                  Events
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="text-neutral-400"
              >
                ›
              </li>

              <li className="hidden text-neutral-500 sm:block">
                {event.title}
              </li>
            </ol>
          </nav>

          <h1 className="font-serif text-[30px] font-normal tracking-tight md:text-[32px]">
            Events
          </h1>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Event Detail                                                     */}
      {/* ---------------------------------------------------------------- */}

      <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16">
          {/* ------------------------------------------------------------ */}
          {/* Image                                                        */}
          {/* ------------------------------------------------------------ */}

          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 lg:aspect-[4/3]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              sizes="
                (max-width: 1023px) 100vw,
                60vw
              "
              className="object-cover"
            />
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Details Card                                                 */}
          {/* ------------------------------------------------------------ */}

          <div className="flex flex-col justify-center border border-black px-7 py-9 sm:px-10 sm:py-12 lg:-ml-px lg:px-12 xl:px-16">
            {/* Category */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              {event.category}
            </p>

            {/* Title */}
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              {event.title}
            </h2>

            {/* Date */}
            <div className="mt-8 border-y border-neutral-200 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Date
              </p>

              <p className="mt-1 text-sm font-medium">
                {formatDateRange(
                  event.startDate,
                  event.endDate
                )}
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <p className="text-sm leading-7 text-neutral-600">
                {event.description}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/events"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-black
                  pb-2
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  transition-opacity
                  hover:opacity-50
                "
              >
                <span aria-hidden="true">←</span>
                Back to events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}