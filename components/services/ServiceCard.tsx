"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Wifi,
  Landmark,
  Accessibility,
  Car,
  CreditCard,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

import { MallService } from "@/data/data";

interface Props {
  service: MallService;
  onClick: (service: MallService) => void;
}

const ICONS: Record<string, LucideIcon> = {
  wifi: Wifi,
  prayer: Landmark,
  accessibility: Accessibility,
  parking: Car,
  atm: CreditCard,
};

export default function ServiceCard({
  service,
  onClick,
}: Props) {
  const Icon = ICONS[service.icon] ?? HelpCircle;

  return (
    <motion.button
      layoutId={`service-card-${service.id}`}
      onClick={() => onClick(service)}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        group
        relative
        w-full
        overflow-hidden
        border border-white/10
        bg-brand-dark
        p-8
        text-left
        transition-colors
        hover:border-brand-gold/30
        cursor-pointer
      "
    >
      {/* Gold accent */}
      <motion.div
        variants={{
          rest: { width: 40 },
          hover: { width: 120 },
        }}
        transition={{ duration: 0.35 }}
        className="absolute left-0 top-0 h-px bg-brand-yellow/50"
      />

      <div className="flex items-start justify-between">
        <motion.div
          variants={{
            rest: {
              rotate: 0,
              scale: 1,
            },
            hover: {
              rotate: -8,
              scale: 1.08,
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            size={32}
            className="text-brand-yellow/50 transition-colors group-hover:text-brand-yellow"
          />
        </motion.div>

        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: 6 },
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight
            size={22}
            className="
              text-white/40
              transition-colors
              group-hover:text-brand-gold
            "
          />
        </motion.div>
      </div>

      <div className="mt-12">
        <motion.h3
         layoutId={`service-title-${service.id}`}
         className="font-display text-3xl text-brand-sand">
          {service.title}
        </motion.h3>

        <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
          {service.description}
        </p>
      </div>
    </motion.button>
  );
}