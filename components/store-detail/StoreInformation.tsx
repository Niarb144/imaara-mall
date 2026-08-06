"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  Clock3,
  MapPinned,
} from "lucide-react";

import { Store } from "@/data/data";

interface Props {
  store: Store;
}

export default function StoreInformation({
  store,
}: Props) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: .8,
        ease: [0.22,1,0.36,1],
      }}
      className="
        sticky
        top-28
        border
        border-brand-dark/10
        bg-white
        p-10
      "
    >

      <p
        className="
          mb-8
          text-xs
          uppercase
          tracking-[.35em]
          text-brand-gold
        "
      >
        Visit Information
      </p>

      <div className="space-y-8">

        <InfoRow
          icon={<MapPinned size={18} />}
          title="Location"
          value={`${store.floor} • ${store.unit}`}
        />

        <InfoRow
          icon={<Clock3 size={18} />}
          title="Opening Hours"
          value={store.workingHours}
        />

        <InfoRow
          icon={<Phone size={18} />}
          title="Phone"
          value={store.mobileContact}
        />

        <InfoRow
          icon={<Mail size={18} />}
          title="Email"
          value={store.email}
        />

        <InfoRow
          icon={<Globe size={18} />}
          title="Website"
          value={
            <Link
              href={store.websiteUrl}
              target="_blank"
              className="hover:text-brand-gold"
            >
              Visit Website
            </Link>
          }
        />

      </div>

    </motion.aside>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}

function InfoRow({
  icon,
  title,
  value,
}: InfoRowProps) {
  return (
    <div className="flex gap-5">

      <div className="mt-1 text-brand-gold">
        {icon}
      </div>

      <div>

        <p
          className="
            text-xs
            uppercase
            tracking-[.25em]
            text-brand-dark/50
          "
        >
          {title}
        </p>

        <div className="mt-2 text-brand-dark">
          {value}
        </div>

      </div>

    </div>
  );
}