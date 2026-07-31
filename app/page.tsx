"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OffersSection from "@/components/OffersSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StoreCategories />
      <ServicesScrollSection />
      <OffersSection />
    </>
  );
}