import Image from "next/image";
import Link from "next/link";
import type { Offer } from "@/data/data";

interface OfferCardProps {
  offer: Offer;
}

function formatDate(date?: string) {
  if (!date) return null;

  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function OfferCard({ offer }: OfferCardProps) {
  const start = formatDate(offer.startDate);
  const end = formatDate(offer.endDate);

  const validity =
    start && end
      ? `${start} – ${end}`
      : start
        ? `From ${start}`
        : null;

  const content = (
    <>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1199px) 50vw,
            33vw
          "
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>

      {/* Content */}
      <div className="pt-3">
        {validity && (
          <p className="mb-2 text-[13px] font-medium tracking-tight text-neutral-400">
            {validity}
          </p>
        )}

        <div className="border-t border-neutral-300 pt-3">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black">
            {offer.brand}
          </p>

          <h2 className="max-w-[95%] text-[16px] font-semibold leading-[1.25] tracking-[-0.015em] text-black">
            {offer.title}
          </h2>

          {offer.description && (
            <p className="mt-2 line-clamp-2 text-sm leading-5 text-neutral-600">
              {offer.description}
            </p>
          )}

          <span className="mt-3 inline-flex text-[13px] font-semibold text-black">
            Find out more
          </span>
        </div>
      </div>
    </>
  );

  /**
   * Store offers navigate directly to the associated store.
   *
   * Mall-wide offers can later be changed to /offers/[id].
   */
  if (offer.storeId) {
    return (
      <Link
        href={`/stores/${offer.storeId}`}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        aria-label={`${offer.title} at ${offer.brand}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <Link
      href={`/offers/${offer.id}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
      aria-label={offer.title}
    >
      {content}
    </Link>
  );
}