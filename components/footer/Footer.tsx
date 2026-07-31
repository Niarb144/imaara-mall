"use client";

import FooterReveal from "./FooterReveal";
import FooterNewsletter from "./FooterNewsletter";
import FooterLinks from "./FooterLinks";
import FooterAddress from "./FooterAddress";
import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-brand-dark text-brand-sand overflow-hidden"
    >
      <FooterReveal>
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-20 lg:px-10">
          <FooterNewsletter />

          <div className="grid gap-20 lg:grid-cols-[1fr_1fr]">

                <FooterAddress />

                <FooterLinks />

            </div>

          <FooterBrand />

          <FooterBottom />
        </div>
      </FooterReveal>
    </footer>
  );
}