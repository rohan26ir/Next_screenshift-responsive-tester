'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { DeviceSpec } from '@/components/data/devices';

interface DeviceLineupHeroProps {
  onSelectDevice: (device: DeviceSpec) => void;
  devices: DeviceSpec[];
}

export const DeviceLineupHero: React.FC<DeviceLineupHeroProps> = ({
  onSelectDevice,
  devices,
}) => {
  // Find key lineup devices
  const iphoneSE = devices.find((d) => d.id === 'iphone-se-3') || devices[4];
  const iphone14 = devices.find((d) => d.id === 'iphone-14') || devices[3];
  const iphone16 = devices.find((d) => d.id === 'iphone-16-pro-max') || devices[0];
  const galaxyS24 = devices.find((d) => d.id === 'samsung-s24-ultra') || devices[1];
  const ipadPro = devices.find((d) => d.id === 'ipad-pro-13') || devices[5];
  const macbook = devices.find((d) => d.id === 'macbook-pro-16') || devices[7];

  const lineup = [
    { spec: iphoneSE, height: 130, width: 68, label: '4.7" SE' },
    { spec: iphone14, height: 155, width: 74, label: '6.1" Notch' },
    { spec: iphone16, height: 180, width: 84, label: '6.9" Dynamic Island', featured: true },
    { spec: galaxyS24, height: 175, width: 82, label: '6.8" Ultra' },
    { spec: ipadPro, height: 210, width: 150, label: '13" iPad Pro' },
    { spec: macbook, height: 180, width: 220, label: '16" MacBook Pro', isLaptop: true },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-[#F3E8EE] p-6 sm:p-10 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F3E8EE] pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#9D4E7C] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Multi-Device Vector Lineup</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#4A1D36] tracking-tight">
            Authentic Proportions Across All Screen Classes
          </h2>
        </div>
        <div className="text-xs font-mono text-[#4A1D36]/70">
          Click any silhouette to inspect full specifications
        </div>
      </div>

      {/* Lineup Stage with Transparent Checkerboard Floor (Matching Reference Image) */}
      <div
        className="relative w-full rounded-2xl p-6 sm:p-10 flex items-end justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto min-h-[280px] border border-[#F3E8EE] select-none"
        style={{
          backgroundColor: '#FAF5F8',
          backgroundImage: `
            linear-gradient(45deg, #F0E6EC 25%, transparent 25%),
            linear-gradient(-45deg, #F0E6EC 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #F0E6EC 75%),
            linear-gradient(-45deg, transparent 75%, #F0E6EC 75%)
          `,
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0',
        }}
      >
        {lineup.map((item, idx) => {
          if (!item.spec) return null;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.05 }}
              onClick={() => onSelectDevice(item.spec)}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="flex flex-col items-center cursor-pointer shrink-0 group relative"
            >
              {/* Silhouette chassis with real hardware contours */}
              <div
                className={`relative flex flex-col justify-between p-1.5 transition-all duration-300 drop-shadow-[0_14px_26px_rgba(0,0,0,0.24)] ${
                  item.spec.id === 'samsung-s24-ultra'
                    ? 'rounded-[2px] border border-[#7D7972] bg-gradient-to-b from-[#3A3835] to-[#1E1D1B]'
                    : item.isLaptop
                    ? 'rounded-t-lg rounded-b-xs border border-neutral-600 bg-neutral-900'
                    : item.spec.category === 'tablet'
                    ? 'rounded-[7px] border border-neutral-600 bg-neutral-900'
                    : 'rounded-[6px] border border-neutral-600 bg-neutral-900'
                } ${
                  item.featured
                    ? 'ring-2 ring-[#9D4E7C] ring-offset-2 ring-offset-[#FAF5F8]'
                    : 'group-hover:border-[#9D4E7C]'
                }`}
                style={{
                  height: item.height,
                  width: item.width,
                }}
              >
                {/* Physical side buttons on Phone */}
                {!item.isLaptop && (
                  <>
                    <div className="absolute -left-[2px] top-6 w-[2px] h-3 bg-neutral-500 rounded-l-xs" />
                    <div className="absolute -left-[2px] top-11 w-[2px] h-5 bg-neutral-500 rounded-l-xs" />
                    <div className="absolute -right-[2px] top-9 w-[2px] h-6 bg-neutral-500 rounded-r-xs" />
                  </>
                )}

                {/* Top Notch or Island */}
                <div className="w-full flex justify-center pt-0.5 z-10">
                  {item.spec.bezelType === 'island' && (
                    <div className="w-7 h-2 bg-black rounded-full flex items-center justify-between px-1">
                      <div className="w-0.5 h-0.5 rounded-full bg-neutral-700" />
                      <div className="w-0.5 h-0.5 rounded-full bg-emerald-400" />
                    </div>
                  )}
                  {item.spec.bezelType === 'notch' && (
                    <div className="w-8 h-1.5 bg-black rounded-b-xs" />
                  )}
                  {item.spec.bezelType === 'punch-hole' && (
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-0.5" />
                  )}
                  {item.spec.bezelType === 'monitor' && (
                    <div className="w-5 h-1 bg-black rounded-b-xs" />
                  )}
                </div>

                {/* Inner Screen Display */}
                <div
                  className={`w-full flex-1 my-1 bg-gradient-to-b from-white to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-1 text-center overflow-hidden ${
                    item.spec.id === 'samsung-s24-ultra' ? 'rounded-[1px]' : 'rounded-[3px]'
                  }`}
                >
                  <span className="text-[7px] font-mono font-bold text-[#4A1D36] truncate max-w-full">
                    {item.spec.width}×{item.spec.height}
                  </span>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex justify-center pb-0.5">
                  <div className="w-6 h-0.5 bg-white/40 rounded-full" />
                </div>
              </div>

              {/* Laptop Base */}
              {item.isLaptop && (
                <div className="w-[110%] h-1 bg-neutral-700 rounded-b-sm shadow-md" />
              )}

              {/* Label */}
              <div className="mt-2 text-center">
                <span className="text-[10px] font-mono font-bold text-[#4A1D36] group-hover:text-[#9D4E7C] block transition-colors">
                  {item.spec.name}
                </span>
                <span className="text-[9px] font-mono text-[#4A1D36]/60">
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
