"use client";

import ServiceGrid from "./ServiceGrid";
import ServiceModal from "./ServiceModal";
import { MallService, SERVICES } from "@/data/data";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";

export default function ServicesSection() {
  const [selectedService, setSelectedService] =
  useState<MallService | null>(null);

return (
  <>
    <LayoutGroup id="services">
        <ServiceGrid
            services={SERVICES}
            onSelect={setSelectedService}
        />

        <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
        />
    </LayoutGroup>
  </>
);
}