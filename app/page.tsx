"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import Deals from "@/components/Deals"

export default function Home() {
  return (
    <>
      <Hero />
      <StoreCategories />
      <Deals />
    </>
  );
}