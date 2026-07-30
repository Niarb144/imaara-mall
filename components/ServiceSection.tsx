import Link from "next/link";
import { SERVICES, type MallService } from "@/data/data";

// -----------------------------------------------------------------------------
// Icons — kept local to this component (data.ts stays framework-agnostic)
// -----------------------------------------------------------------------------
function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M5 12.5a11 11 0 0 1 14 0" />
      <path d="M8 16a6.5 6.5 0 0 1 8 0" />
      <path d="M11 19.5a2 2 0 0 1 2 0" />
    </svg>
  );
}

function PrayerRoomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 8v5" />
      <path d="M9 10.5h6" />
      <path d="M12 13l-3 7" />
      <path d="M12 13l4 2.5" />
      <path d="M16 15.5a4 4 0 1 1-6.2 3" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M9.5 16V8h2.5a2.5 2.5 0 0 1 0 5H9.5" />
    </svg>
  );
}

function AtmIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14.5h4" />
      <circle cx="16.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SERVICE_ICONS: Record<MallService["id"], () => React.JSX.Element> = {
  "free-wifi": WifiIcon,
  "prayer-rooms": PrayerRoomIcon,
  "accessible-parking": AccessibilityIcon,
  "ample-parking": ParkingIcon,
  atms: AtmIcon,
};

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
                  href={service.link}
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