﻿"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/landding-page/HeroSection";
import TechStackSection from "@/landding-page/TechStackSection";
import ProjectsSection from "@/landding-page/ProjectsSection";
import StickyContactPopup from "@/landding-page/StickyContactPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <StickyContactPopup />
    </>
  );
}
