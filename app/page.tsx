"use client";

import Hero from "@/components/Hero"
import StoreCategories from "@/components/StoreCategories";
import ServicesScrollSection from "@/components/ServicesScrollSection";
import OffersSection from "@/components/OffersSection";
import VideoSection from "@/components/VideoSection";
import CallToAction from "@/components/CallToAction";
import EventsSection from "@/components/events/EventsSection";
import TrendingStoresCarousel from "@/components/TrendingStoresCarousel";
import PlanYourVisitSection from "@/components/PlanYourVisit";
import FeatureRowsSection from "@/components/FeaturesRowSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      {/* <CallToAction /> */}
      <EventsSection />
      <TrendingStoresCarousel />
      <PlanYourVisitSection />
      <ServicesScrollSection />
      <FeatureRowsSection />
      {/* <StoreCategories /> */}
      
      <OffersSection />
    </>
  );
}