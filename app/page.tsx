"use client";

import Hero from "@/components/Hero"
import CategoryToServicesTransition from "@/components/CategoryToServiceTransition";
import Deals from "@/components/Deals"

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryToServicesTransition />
      <Deals />
    </>
  );
}