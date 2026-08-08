import type { MallService } from "@/data/data";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12.5a11 11 0 0 1 14 0" />
      <path d="M8 16a6.5 6.5 0 0 1 8 0" />
      <path d="M11 19.5a2 2 0 0 1 2 0" />
    </svg>
  );
}

export function PrayerRoomIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function AccessibilityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="4.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 8v5" />
      <path d="M9 10.5h6" />
      <path d="M12 13l-3 7" />
      <path d="M12 13l4 2.5" />
      <path d="M16 15.5a4 4 0 1 1-6.2 3" />
    </svg>
  );
}

export function ParkingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M9.5 16V8h2.5a2.5 2.5 0 0 1 0 5H9.5" />
    </svg>
  );
}

export function AtmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14.5h4" />
      <circle cx="16.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const SERVICE_ICONS: Record<
  MallService["icon"],
  IconComponent
> = {
  wifi: WifiIcon,
  prayer: PrayerRoomIcon,
  accessibility: AccessibilityIcon,
  parking: ParkingIcon,
  atm: AtmIcon,
};