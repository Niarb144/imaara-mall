"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import Deals from "@/components/Deals"

export default function Home() {
  return (
    <>
      <Hero />
      <StoreCategories />
      <ServicesScrollSection />
      <Deals />
    </>
  );
}