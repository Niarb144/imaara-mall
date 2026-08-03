"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OffersSection from "@/components/OffersSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <StoreCategories />
      <ServicesScrollSection />
      <OffersSection />
    </>
  );
}