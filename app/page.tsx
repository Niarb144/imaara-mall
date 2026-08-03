"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OffersSection from "@/components/OffersSection";
import VideoSection from "@/components/VideoSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <CallToAction />
      <StoreCategories />
      <ServicesScrollSection />
      <OffersSection />
    </>
  );
}