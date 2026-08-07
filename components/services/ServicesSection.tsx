"use client";

import ServiceGrid from "./ServiceGrid";
import ServiceModal from "./ServiceModal";
import { MallService, SERVICES } from "@/data/data";
import { useState } from "react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] =
  useState<MallService | null>(null);

return (
  <>
    <ServiceGrid
      services={SERVICES}
      onSelect={setSelectedService}
    />

    <ServiceModal
      service={selectedService}
      onClose={() => setSelectedService(null)}
    />
  </>
);
}