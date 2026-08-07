import Link from "next/link";
import { SERVICES } from "@/data/data";
import { SERVICE_ICONS } from "@/components/ServiceIcons";

export default function ServicesSection() {
  return (
    <section className="relative rounded-t-[2.5rem] bg-white px-4 py-16 shadow-[0_-24px_40px_-32px_rgba(0,0,0,0.2)] sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="font-accent text-2xl text-brand-pink">Here to help</p>
          <h2 className="text-3xl sm:text-4xl">Mall Services &amp; Amenities</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id];

            return (
              <div key={service.id} className="flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                  <Icon />
                </span>

                <h3 className="mt-4 text-base font-normal uppercase tracking-wide text-brand-dark">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-brand-dark/70">{service.description}</p>

                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-orange transition-colors hover:text-brand-pink"
                >
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}