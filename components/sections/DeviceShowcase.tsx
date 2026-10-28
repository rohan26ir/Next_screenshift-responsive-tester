'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Smartphone, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DeviceSpec, DeviceCategory, DEVICE_CATALOG } from '@/components/data/devices';

interface DeviceShowcaseProps {
  activeDeviceId: string;
  onSelectDevice: (device: DeviceSpec) => void;
}

export const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({
  activeDeviceId,
  onSelectDevice,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<'all' | DeviceCategory>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredDevices =
    activeFilter === 'all'
      ? DEVICE_CATALOG
      : DEVICE_CATALOG.filter((d) => d.category === activeFilter);

  return (
    <div className="py-20 bg-[#FFFFFF]" id="devices">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE] mb-3">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Extensive Device Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A1D36] tracking-tight">
              40+ Precision Viewports & Hardware Bezels
            </h2>
            <p className="text-base text-[#4A1D36]/80 mt-2 max-w-xl">
              Cycle through authentic mobile flagships, tablets, foldables, and ultra-wide displays with real physical pixel ratios and camera notches.
            </p>
          </div>

          {/* Filter Buttons with Hover & Tap Physics */}
          <div className="flex items-center gap-2 flex-wrap">
            {(['all', 'mobile', 'tablet', 'desktop'] as const).map((filter) => (
              <motion.div
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Button
                  variant={activeFilter === filter ? 'primary' : 'neomorphic'}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="capitalize"
                >
                  {filter === 'all' ? 'All Devices (40+)' : filter}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative pb-12"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="!pb-14"
            >
              {filteredDevices.map((dev) => {
                const isActive = activeDeviceId === dev.id;
                return (
                  <SwiperSlide key={dev.id} className="h-auto">
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`h-full flex flex-col justify-between bg-[#FDF2F8] rounded-3xl p-6 border transition-all duration-300 group ${isActive
                        ? 'border-[#9D4E7C] shadow-[0_12px_32px_rgba(157,78,124,0.18)] ring-2 ring-[#9D4E7C]/20'
                        : 'border-[#F3E8EE] shadow-[4px_4px_12px_rgba(157,78,124,0.06),-4px_-4px_12px_#FFFFFF] hover:shadow-[0_12px_30px_rgba(157,78,124,0.14)]'
                        }`}
                    >
                      <div>
                        {/* Top Card Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white text-[#9D4E7C] border border-[#F3E8EE]">
                            {dev.brand}
                          </span>
                          {dev.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8A0BF] text-[#4A1D36] animate-pulse">
                              {dev.badge}
                            </span>
                          )}
                        </div>

                        {/* Visual Device Thumbnail Chassis */}
                        <div className="h-40 my-3 bg-white rounded-2xl border border-[#F3E8EE] flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-[1.04] transition-transform duration-300">
                          <div className="w-14 h-24 rounded-xl border-2 border-[#9D4E7C] bg-[#FDF2F8] flex flex-col items-center justify-between p-1.5 shadow-md">
                            {dev.bezelType === 'island' && (
                              <div className="w-5 h-1 bg-[#9D4E7C] rounded-full group-hover:scale-110 transition-transform" />
                            )}
                            {dev.bezelType === 'notch' && (
                              <div className="w-6 h-1 bg-[#9D4E7C] rounded-b-md" />
                            )}
                            {dev.bezelType === 'punch-hole' && (
                              <div className="w-1.5 h-1.5 bg-[#9D4E7C] rounded-full" />
                            )}
                            <div className="text-[8px] font-mono font-bold text-[#9D4E7C]">
                              {dev.width}px
                            </div>
                            <div className="w-6 h-0.5 bg-[#9D4E7C]/60 rounded-full" />
                          </div>
                          <span className="text-[11px] font-mono text-[#9D4E7C] mt-2 font-semibold">
                            {dev.screenSize} Display
                          </span>
                        </div>

                        {/* Title & Technical Specs */}
                        <h3 className="text-lg font-bold text-[#4A1D36] tracking-tight">
                          {dev.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-mono text-[#4A1D36]/80 bg-white p-3 rounded-xl border border-[#F3E8EE]">
                          <div>
                            <span className="text-[10px] uppercase text-[#9D4E7C] block font-sans font-bold">
                              Viewport
                            </span>
                            {dev.width} × {dev.height}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-[#9D4E7C] block font-sans font-bold">
                              DPR Ratio
                            </span>
                            {dev.dpr}x Retina
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-[#9D4E7C] block font-sans font-bold">
                              Bezel Style
                            </span>
                            <span className="capitalize">{dev.bezelType}</span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-[#9D4E7C] block font-sans font-bold">
                              Category
                            </span>
                            <span className="capitalize">{dev.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Button */}
                      <div className="mt-5 pt-4 border-t border-[#F3E8EE]">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            variant={isActive ? 'primary' : 'outline'}
                            size="sm"
                            fullWidth
                            icon={isActive ? Check : Sparkles}
                            onClick={() => onSelectDevice(dev)}
                          >
                            {isActive ? 'Active in Simulator' : 'Preview Device'}
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Direct Link to Devices Detail Page */}
            <div className="mt-8 text-center">
              <Link
                href="/devices"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FDF2F8] hover:bg-[#F3E8EE] text-[#9D4E7C] font-bold text-sm border border-[#F3E8EE] shadow-sm hover:shadow-md transition-all group"
              >
                <Smartphone className="w-4 h-4 text-[#9D4E7C]" />
                <span>Explore Full 40+ Hardware Matrix &amp; Developer Code Snippets</span>
                <ArrowRight className="w-4 h-4 text-[#9D4E7C] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
