"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------
const MAIN_NAV = [
  { label: "What's New", href: "/whats-new" },
  {
    label: "Shop",
    href: "/directory",
    dropdown: ["Fashion", "Beauty", "Electronics", "Kids"],
  },
  {
    label: "Dine",
    href: "/dining",
    dropdown: ["Restaurants", "Cafes", "Fast Casual"],
  },
  {
    label: "Stay",
    href: "/stay",
    dropdown: ["Hotels", "Serviced Apartments"],
  },
  {
    label: "Entertain",
    href: "/events",
    dropdown: ["Cinema", "Kids Zone", "Live Events"],
  },
  {
    label: "Plan Your Visit",
    href: "/visit",
    dropdown: ["Getting Here", "Parking", "Accessibility"],
  },
  { label: "Services", href: "/services" },
];

const QUICK_LINKS = [
  { label: "Grand Atrium", href: "/directory/grand-atrium" },
  { label: "Garden Terrace", href: "/directory/garden-terrace" },
  { label: "Riverside Walk", href: "/directory/riverside-walk" },
  { label: "Offers", href: "/offers" },
  { label: "Events", href: "/events" },
  { label: "Exhibition Hall", href: "/directory/exhibition-hall" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Collapse the black quick-links bar once the page has been scrolled,
  // bring it back when the user returns to the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* =====================================================================
          Main nav row — logo, links, and a couple of quick actions
      ===================================================================== */}
      <div className="border-b border-brand-dark/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Imaara Mall"
              width={56}
              height={56}
              priority
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 md:flex">
            {MAIN_NAV.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 py-4 text-sm font-semibold uppercase tracking-wide text-brand-dark transition-colors hover:text-brand-orange"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </a>

                {item.dropdown && (
                  <div className="invisible absolute left-1/2 top-full z-10 min-w-[180px] -translate-x-1/2 translate-y-1 rounded-xl border border-brand-dark/10 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block rounded-lg px-3 py-2 text-sm text-brand-dark hover:bg-brand-sand"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop-only quick actions */}
          <div className="hidden items-center gap-4 text-sm font-semibold text-brand-dark md:flex">
            <a
              href="https://wa.me/000000000"
              aria-label="Chat with us"
              className="flex h-8 w-8 items-center justify-center rounded-full text-brand-green transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.8-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
              </svg>
            </a>
            <a href="/gift-cards" className="hover:text-brand-orange">
              Gift Cards
            </a>
          </div>

          {/* Mobile menu button — two asymmetric bars that form an X when open */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-[60] flex h-11 w-11 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-0.5 rounded-full bg-brand-dark transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 translate-y-[3.5px]" : "w-6"
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-brand-dark transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 -translate-y-[3.5px]" : "w-4"
              }`}
            />
          </button>
        </div>
      </div>

      {/* =====================================================================
          Secondary quick-links bar — desktop only, collapses once scrolled
      ===================================================================== */}
      <div
        className={`hidden overflow-hidden bg-brand-dark transition-[max-height,opacity] duration-300 ease-in-out md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-white transition-colors hover:text-brand-lime"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* =====================================================================
          Mobile full-screen menu — circle expands from the menu button
          and grows until it fills the screen as a plain rectangle.
      ===================================================================== */}
      <div
        aria-hidden={!menuOpen}
        style={{
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 34px) 34px)"
            : "circle(0% at calc(100% - 34px) 34px)",
        }}
        className={`fixed inset-0 z-50 bg-brand-dark transition-[clip-path] duration-700 ease-in-out md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-10 overflow-y-auto px-8 py-24">
          <ul className="space-y-4">
            {MAIN_NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl font-normal uppercase tracking-wide text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-px w-full bg-white/15" />

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wide text-brand-lime"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}