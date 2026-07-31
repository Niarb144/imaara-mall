"use client";

import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { mallInfo } from "@/data/data";

export default function FooterAddress() {
  return (
    <section className="footer-reveal space-y-8">

      <h3 className="text-2xl">
        Visit Us
      </h3>

      <div className="space-y-6">

        <div className="flex gap-4">

          <MapPin className="mt-1 text-brand-orange" />

          <div className="space-y-1">
            {mallInfo.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

        </div>

        <div className="flex gap-4">

          <Phone className="text-brand-orange" />

          <a
            href={`tel:${mallInfo.phone}`}
            className="transition hover:text-brand-lime"
          >
            {mallInfo.phone}
          </a>

        </div>

        <div className="flex gap-4">

          <Mail className="text-brand-orange" />

          <a
            href={`mailto:${mallInfo.email}`}
            className="transition hover:text-brand-lime"
          >
            {mallInfo.email}
          </a>

        </div>

        <div className="flex gap-4">

          <Clock3 className="text-brand-orange" />

          <div>
            {mallInfo.openingHours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}