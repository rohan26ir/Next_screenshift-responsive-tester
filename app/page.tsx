'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HeroSimulator } from '@/components/sections/HeroSimulator';
import { DeviceShowcase } from '@/components/sections/DeviceShowcase';
import { FeatureMatrix } from '@/components/sections/FeatureMatrix';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PreFooterCta } from '@/components/sections/PreFooterCta';
import { DEVICE_CATALOG, DeviceSpec } from '@/components/data/devices';

export default function ScreenShiftLandingPage() {
  const [activeDevice, setActiveDevice] = useState<DeviceSpec>(DEVICE_CATALOG[0]);

  const heroFrameRef = useRef<HTMLDivElement>(null);

  const handleSelectDevice = (device: DeviceSpec) => {
    setActiveDevice(device);
    if (heroFrameRef.current) {
      const topOffset = heroFrameRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleScrollToSimulator = () => {
    if (heroFrameRef.current) {
      heroFrameRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('simulator');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDF2F8] text-[#4A1D36] relative">
      {/* 1. Hero Section (Sticks at top-20, overtaken by Section 2) */}
      <section className="sticky top-20 z-10 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <HeroSimulator
          activeDevice={activeDevice}
          onSelectDevice={handleSelectDevice}
          frameRef={heroFrameRef}
        />
      </section>

      {/* 2. Device Showcase (Overtakes Hero, sticks at top-20, overtaken by Section 3) */}
      <section className="sticky top-20 z-20 bg-[#FFFFFF] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <DeviceShowcase
          activeDeviceId={activeDevice.id}
          onSelectDevice={handleSelectDevice}
        />
      </section>

      {/* 3. Feature Matrix (Overtakes Device Showcase, sticks at top-20, overtaken by Section 4) */}
      <section className="sticky top-20 z-30 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <FeatureMatrix />
      </section>

      {/* 4. Pricing Tiers (Overtakes Feature Matrix, sticks at top-20, overtaken by Section 5) */}
      <section className="sticky top-20 z-40 bg-[#FFFFFF] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <PricingSection />
      </section>

      {/* 5. FAQ Section (Overtakes Pricing, sticks at top-20, overtaken by Section 6) */}
      <section className="sticky top-20 z-50 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <FaqSection />
      </section>

      {/* 6. Pre-Footer Call to Action Banner (Overtakes FAQ) */}
      <section className="sticky top-20 z-[60] bg-[#4A1D36] text-white will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <PreFooterCta onScrollToSimulator={handleScrollToSimulator} />
      </section>


    </div>
  );
}
