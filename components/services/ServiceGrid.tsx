"use client";

import { MallService } from "@/data/data";
import ServiceCard from "./ServiceCard";
import ServiceRow from "./ServiceRow";

interface Props {
  services: MallService[];
  onSelect: (service: MallService) => void;
}

export default function ServiceGrid({
  services,
  onSelect,
}: Props) {
  const rows: MallService[][] = [];

  for (let i = 0; i < services.length; i += 2) {
    rows.push(services.slice(i, i + 2));
  }

  return (
    <div className="space-y-8 px-6 py-20 lg:space-y-12 lg:px-8 md:mt-14">
        <h1 className="text-center text-4xl font-bold text-brand-dark md:text-5xl">
          Our Services
        </h1>
      {rows.map((row, index) => (
        <ServiceRow
          key={index}
          delay={index * 0.08}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {row.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={onSelect}
              />
            ))}
          </div>
        </ServiceRow>
      ))}
    </div>
  );
}