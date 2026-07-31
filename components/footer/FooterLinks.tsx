"use client";

import Link from "next/link";
import { footerLinks } from "@/data/data";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <div className="space-y-5">

      <h3 className="text-2xl">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="group inline-flex items-center text-brand-sand/75 transition hover:text-brand-lime"
            >
              <span className="relative">

                {link.title}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />

              </span>
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default function FooterLinks() {
  return (
    <section className="footer-reveal grid gap-10 sm:grid-cols-2">

      <LinkColumn
        title="Explore"
        links={footerLinks.explore}
      />

      <LinkColumn
        title="Information"
        links={footerLinks.information}
      />

    </section>
  );
}