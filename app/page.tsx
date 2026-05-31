import BlogSection from "@/components/home/BlogSection";
import CreatorsSection from "@/components/home/CreatorsSection";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <CreatorsSection />
      <BlogSection />
      <CtaSection />
    </main>
  );
}
