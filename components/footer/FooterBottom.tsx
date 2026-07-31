"use client";

import Link from "next/link";
import { footerLinks, mallInfo } from "@/data/data";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <section className="footer-reveal border-t border-white/10 pt-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="footer-item flex flex-col gap-2 text-sm text-brand-sand/70">
          <p>
            © {year} {mallInfo.name}. All rights reserved.
          </p>

          <p>
            Designed for unforgettable shopping experiences.
          </p>
        </div>

        {/* Middle */}

        <div className="footer-item hidden lg:flex">
          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-[0.25em] uppercase text-brand-sand/60 backdrop-blur">
            The Heart of Shopping
          </div>
        </div>

        {/* Right */}

        <nav
          aria-label="Legal"
          className="footer-item flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {footerLinks.legal.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative text-sm text-brand-sand/70 transition-colors duration-300 hover:text-brand-lime"
            >
              {link.title}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-brand-orange
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

      </div>
    </section>
  );
}