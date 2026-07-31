"use client";

import { ArrowRight } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <section className="footer-reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md">

      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-lime/10" />

      <div className="relative grid gap-12 p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-12">

        <div className="space-y-5">
          <span className="font-accent text-xl text-brand-orange">
            Stay Connected
          </span>

          <h2 className="max-w-xl text-5xl leading-none">
            Never miss a new store,
            exclusive offer or event.
          </h2>

          <p className="max-w-lg text-brand-sand/75">
            Join our newsletter for opening announcements, seasonal
            promotions, family activities and exciting experiences happening
            at Imaara Mall.
          </p>
        </div>

        <form className="flex flex-col justify-center gap-4">

          <input
            type="email"
            placeholder="Your email address"
            className="h-16 rounded-full border border-white/15 bg-white/5 px-7 text-lg outline-none transition focus:border-brand-orange"
          />

          <button
            className="group flex h-16 items-center justify-center gap-3 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white transition hover:bg-brand-lime hover:text-brand-dark"
          >
            Subscribe

            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={20}
            />
          </button>

        </form>

      </div>

    </section>
  );
}