"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------
const MAIN_NAV = [
  { label: "What's New", href: "/whats-new" },
  {
    label: "Shop",
    href: "/stores",
    dropdown: ["Fashion", "Beauty", "Electronics", "Kids"],
  },
  {
    label: "Dine",
    href: "/stores/dining",
    dropdown: ["Restaurants", "Cafes", "Fast Casual"],
  },
  {
    label: "Entertain",
    href: "/events",
    dropdown: ["Kids Zone", "Live Events"],
  },
  {
    label: "Plan Your Visit",
    href: "/services",
    dropdown: ["Getting Here", "Parking", "Accessibility"],
  },
  { label: "Services", href: "/services" },
];

const QUICK_LINKS = [
  { label: "Rooftop", href: "/rooftop" },
  { label: "Gym", href: "/stores/gym" },
  { label: "Offers", href: "/offers" },
  { label: "Events", href: "/events" },
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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

  // Collapse any open mobile submenu whenever the whole overlay closes, so
  // it doesn't reopen already-expanded next time.
  useEffect(() => {
    if (!menuOpen) setOpenSubmenu(null);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* =====================================================================
          Main nav row — logo, centered search (desktop), WhatsApp + menu
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

          {/* Centered search bar — desktop only, mobile stays logo + menu only */}
          <div className="hidden flex-1 md:flex md:justify-center md:px-6">
            <label className="relative w-full max-w-md">
              <span className="sr-only">Search</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-dark/40" />
              <input
                type="search"
                placeholder="Search stores, dining, offers..."
                className="w-full rounded-full border border-brand-dark/15 bg-brand-sand/50 py-2.5 pl-10 pr-4 text-sm text-brand-dark placeholder:text-brand-dark/40 focus:border-brand-orange focus:bg-white focus:outline-none"
              />
            </label>
          </div>

          {/* WhatsApp (desktop only) + menu button (all breakpoints) */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://wa.me/254757800800"
              target="_blank"
              aria-label="Chat with us"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-brand-green transition-transform hover:-translate-y-0.5 md:flex"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.8-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z" />
              </svg>
            </a>

            {/* Menu button — same asymmetric-bars-to-X animation as before,
                shown on every breakpoint */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[60] flex h-11 w-11 flex-col items-end justify-center gap-[6px] cursor-pointer"
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
          Full-screen menu — circle expands from the menu button and grows
          until it fills the screen. Same animation as before, available on
          every breakpoint.
      ===================================================================== */}
      <div
        aria-hidden={!menuOpen}
        style={{
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 34px) 34px)"
            : "circle(0% at calc(100% - 34px) 34px)",
        }}
        className={`fixed inset-0 z-50 bg-brand-purple transition-[clip-path] duration-700 ease-in-out ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-8 py-24">
          <nav className="mx-auto flex min-h-full max-w-3xl flex-col justify-center gap-10">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-1 md:grid-cols-2 md:gap-y-2">
            {MAIN_NAV.map((item) => {
              if (!item.dropdown) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-2xl font-normal uppercase tracking-wide text-white transition-colors duration-300 hover:bg-brand-yellow hover:text-brand-dark md:text-4xl"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              const isOpen = openSubmenu === item.label;

              return (
                <li key={item.label} className="group/item">
                  <div className="flex items-center justify-between gap-2 rounded-xl transition-colors duration-300 md:hover:bg-brand-yellow">
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 px-4 py-3 text-2xl font-normal uppercase tracking-wide text-white transition-colors duration-300 md:group-hover/item:text-brand-dark md:text-4xl"
                    >
                      {item.label}
                    </a>

                    {/* Mobile-only arrow toggle */}
                    <button
                      type="button"
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenSubmenu((prev) => (prev === item.label ? null : item.label))
                      }
                      className="flex h-11 w-11 shrink-0 items-center justify-center text-white md:hidden"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Desktop: hover-revealed submenu */}
                  <div className="hidden overflow-hidden md:block md:max-h-0 md:opacity-0 md:transition-all md:duration-300 md:group-hover/item:max-h-40 md:group-hover/item:opacity-100">
                    <ul className="mt-1 space-y-1 pb-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors duration-200 hover:bg-brand-yellow hover:text-brand-dark"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile: arrow-toggled accordion submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="mt-1 space-y-1 pl-4">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <a
                            href="#"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors duration-200 hover:bg-brand-yellow hover:text-brand-dark"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="h-px w-full bg-white/15" />

          <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block rounded-lg px-2 py-1 text-sm font-bold uppercase tracking-wide text-brand-lime transition-colors duration-300 hover:bg-brand-yellow hover:text-brand-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}