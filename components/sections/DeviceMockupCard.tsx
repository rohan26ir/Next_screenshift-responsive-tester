'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Smartphone, Check } from 'lucide-react';
import { DeviceSpec } from '@/components/data/devices';

interface DeviceMockupCardProps {
  device: DeviceSpec;
  isSelected: boolean;
  onSelect: (device: DeviceSpec) => void;
}

export const DeviceMockupCard: React.FC<DeviceMockupCardProps> = ({
  device,
  isSelected,
  onSelect,
}) => {
  const isTablet = device.category === 'tablet';
  const isDesktop = device.category === 'desktop';
  const isWatch = device.category === 'watch';
  const isFoldable = device.category === 'foldable';

  // Device-specific real phone hardware markers
  const isIPhonePro =
    device.brand === 'Apple' && device.bezelType === 'island';
  const isIPhoneNotch =
    device.brand === 'Apple' &&
    device.bezelType === 'notch' &&
    device.id !== 'iphone-se-3';
  const isIPhoneSE = device.id === 'iphone-se-3';
  const isGalaxyUltra = device.id === 'samsung-s24-ultra';
  const isGalaxyFold = device.id === 'galaxy-z-fold-6';
  const isPixelFold = device.id === 'pixel-fold';
  const isMacBook = device.id.includes('macbook');
  const isIMac = device.id === 'imac-24';

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group bg-white rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
        isSelected
          ? 'border-[#9D4E7C] ring-2 ring-[#9D4E7C]/20 shadow-[0_14px_32px_rgba(157,78,124,0.16)]'
          : 'border-[#F3E8EE] shadow-[3px_3px_12px_rgba(157,78,124,0.06),-3px_-3px_12px_#FFFFFF] hover:shadow-[0_14px_30px_rgba(157,78,124,0.12)]'
      }`}
    >
      <div className="space-y-4">
        {/* ======================================================== */}
        {/* 1. TOP TRANSPARENT CHECKERBOARD CANVAS (Reference Image)  */}
        {/* ======================================================== */}
        <div
          onClick={() => onSelect(device)}
          className="relative h-64 sm:h-68 w-full rounded-xl overflow-hidden cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300 border border-[#F3E8EE] select-none"
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
          {/* Top Brand Pill Badge */}
          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#F3E8EE] shadow-xs">
              {device.brand}
            </span>
          </div>

          {device.badge && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#E8A0BF] text-[#4A1D36] shadow-xs">
                {device.badge}
              </span>
            </div>
          )}

          {/* ======================================================== */}
          {/* 2. REAL PHONE HARDWARE SILHOUETTE (Exact Vector Detailing)*/}
          {/* ======================================================== */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative flex items-center justify-center drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
          >
            {/* ---------------- A. IPHONE PRO (Dynamic Island & Titanium) ---------------- */}
            {isIPhonePro && (
              <div className="relative flex items-center justify-center">
                {/* Physical Hardware Buttons */}
                {/* Left: Action Button + Volume Rockers */}
                <div className="absolute -left-[3px] top-9 w-[3px] h-3 bg-neutral-600 rounded-l-xs" />
                <div className="absolute -left-[3px] top-14 w-[3px] h-5 bg-neutral-600 rounded-l-xs" />
                <div className="absolute -left-[3px] top-21 w-[3px] h-5 bg-neutral-600 rounded-l-xs" />
                {/* Right: Power / Siri Button */}
                <div className="absolute -right-[3px] top-14 w-[3px] h-8 bg-neutral-600 rounded-r-xs" />

                {/* Titanium Chassis Frame - Authentic, subtle, non-overly-rounded curvature */}
                <div className="w-26 h-48 rounded-[7px] p-[2.5px] bg-gradient-to-b from-[#4A4947] via-[#2A2928] to-[#1F1E1D] border border-[#6B6862] shadow-inner flex flex-col justify-between relative overflow-hidden">
                  {/* Outer Bezel Rim */}
                  <div className="absolute inset-0 rounded-[7px] border border-white/20 pointer-events-none" />

                  {/* Screen Edge (Black Display Border) */}
                  <div className="w-full h-full rounded-[5px] bg-black p-[2px] flex flex-col justify-between relative">
                    {/* Speaker Earpiece Slit */}
                    <div className="w-full flex justify-center pt-0.5 z-20">
                      <div className="w-7 h-0.5 bg-neutral-800 rounded-full" />
                    </div>

                    {/* Dynamic Island Floating Pill */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-9 h-2 bg-black rounded-full border border-neutral-900 flex items-center justify-between px-1 shadow-xs">
                        <div className="w-1 h-1 rounded-full bg-neutral-800" />
                        <div className="w-0.5 h-0.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>

                    {/* Inner Screen Display */}
                    <div className="w-full flex-1 rounded-[4px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-2 text-center select-none overflow-hidden relative">
                      <div className="w-5 h-5 rounded-lg bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center mb-1">
                        <Sparkles className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                        {device.width} × {device.height}
                      </span>
                      <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold">
                        {device.dpr}x Retina
                      </span>
                    </div>

                    {/* Apple Home Indicator Bar */}
                    <div className="w-full flex justify-center pb-1">
                      <div className="w-9 h-0.5 bg-black/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- B. IPHONE NOTCH (iPhone 14 / 13) ---------------- */}
            {isIPhoneNotch && (
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-[3px] top-8 w-[3px] h-2.5 bg-neutral-600 rounded-l-xs" />
                <div className="absolute -left-[3px] top-13 w-[3px] h-5 bg-neutral-600 rounded-l-xs" />
                <div className="absolute -left-[3px] top-20 w-[3px] h-5 bg-neutral-600 rounded-l-xs" />
                <div className="absolute -right-[3px] top-13 w-[3px] h-7 bg-neutral-600 rounded-r-xs" />

                <div className="w-26 h-48 rounded-[7px] p-[2.5px] bg-gradient-to-b from-[#2E333D] to-[#15181E] border border-neutral-600 shadow-inner flex flex-col justify-between relative overflow-hidden">
                  <div className="w-full h-full rounded-[5px] bg-black p-[2px] flex flex-col justify-between relative">
                    {/* Trapezoidal Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-11 h-2 bg-black rounded-b-md flex items-center justify-center">
                        <div className="w-5 h-0.5 bg-neutral-800 rounded-full" />
                      </div>
                    </div>

                    <div className="w-full flex-1 rounded-[4px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-2 text-center select-none overflow-hidden">
                      <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                        {device.width} × {device.height}
                      </span>
                      <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold">
                        Notch Baseline
                      </span>
                    </div>

                    <div className="w-full flex justify-center pb-1">
                      <div className="w-9 h-0.5 bg-black/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- C. IPHONE SE (Home Button & Forehead) ---------------- */}
            {isIPhoneSE && (
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-44 rounded-[5px] p-2 bg-gradient-to-b from-[#25282F] to-[#111216] border border-neutral-600 shadow-md flex flex-col justify-between">
                  {/* Top Forehead */}
                  <div className="w-full flex items-center justify-center gap-1.5 py-1">
                    <div className="w-1 h-1 rounded-full bg-neutral-800" />
                    <div className="w-6 h-0.5 bg-neutral-800 rounded-full" />
                  </div>

                  {/* 16:9 Screen */}
                  <div className="w-full flex-1 rounded-[2px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-1 text-center">
                    <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                      {device.width} × {device.height}
                    </span>
                    <span className="text-[8px] font-mono text-[#9D4E7C]">16:9 Screen</span>
                  </div>

                  {/* Bottom Chin Touch ID Ring */}
                  <div className="w-full flex justify-center py-1">
                    <div className="w-5 h-5 rounded-full border border-neutral-600 bg-neutral-900 flex items-center justify-center" />
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- D. SAMSUNG GALAXY S24 ULTRA (Sharp Boxy Corners) ---------------- */}
            {isGalaxyUltra && (
              <div className="relative flex items-center justify-center">
                {/* Right Edge: Volume + Power */}
                <div className="absolute -right-[3px] top-11 w-[3px] h-6 bg-neutral-600 rounded-r-xs" />
                <div className="absolute -right-[3px] top-20 w-[3px] h-4 bg-neutral-600 rounded-r-xs" />

                {/* S24 Ultra Sharp 90-Degree Boxy Chassis */}
                <div className="w-26 h-48 rounded-[2px] p-[2.5px] bg-gradient-to-b from-[#5C5A56] via-[#2F2E2C] to-[#1E1D1B] border border-[#7D7972] shadow-inner flex flex-col justify-between relative overflow-hidden">
                  <div className="w-full h-full rounded-[1px] bg-black p-[2px] flex flex-col justify-between relative">
                    {/* Centered Microscopic Punch-Hole Camera */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-black ring-1 ring-neutral-800" />
                    </div>

                    <div className="w-full flex-1 rounded-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-2 text-center select-none overflow-hidden">
                      <div className="w-5 h-5 rounded-lg bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center mb-1">
                        <Sparkles className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                        {device.width} × {device.height}
                      </span>
                      <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold">
                        Quad HD+ Boxy
                      </span>
                    </div>

                    <div className="w-full flex justify-center pb-0.5">
                      <div className="w-8 h-0.5 bg-black/60 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- E. ANDROID ROUNDED (S24, Pixel 9 Pro, OnePlus) ---------------- */}
            {!isTablet &&
              !isDesktop &&
              !isWatch &&
              !isFoldable &&
              !isIPhonePro &&
              !isIPhoneNotch &&
              !isIPhoneSE &&
              !isGalaxyUltra && (
                <div className="relative flex items-center justify-center">
                  <div className="absolute -right-[3px] top-11 w-[3px] h-6 bg-neutral-600 rounded-r-xs" />
                  <div className="absolute -right-[3px] top-19 w-[3px] h-4 bg-neutral-600 rounded-r-xs" />

                  <div className="w-26 h-48 rounded-[6px] p-[2.5px] bg-gradient-to-b from-[#353942] to-[#15171C] border border-neutral-600 shadow-inner flex flex-col justify-between relative overflow-hidden">
                    <div className="w-full h-full rounded-[5px] bg-black p-[2px] flex flex-col justify-between relative">
                      {/* Centered Punch Hole */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-black ring-1 ring-neutral-800" />
                      </div>

                      <div className="w-full flex-1 rounded-[4px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-2 text-center select-none overflow-hidden">
                        <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                          {device.width} × {device.height}
                        </span>
                        <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold">
                          {device.dpr}x AMOLED
                        </span>
                      </div>

                      <div className="w-full flex justify-center pb-0.5">
                        <div className="w-8 h-0.5 bg-black/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* ---------------- F. FOLDABLES (Full Wide Unfolded Dual-Screen or Clamshell) ---------------- */}
            {isFoldable && (
              <div className="relative flex items-center justify-center">
                {device.id === 'galaxy-z-flip-6' ? (
                  /* Clamshell Vertical Foldable */
                  <div className="relative flex items-center justify-center">
                    <div className="absolute -right-[3px] top-11 w-[3px] h-6 bg-neutral-600 rounded-r-xs" />
                    <div className="w-26 h-50 rounded-[6px] p-[2.5px] bg-gradient-to-b from-[#353942] to-[#15171C] border border-neutral-600 shadow-md flex flex-col justify-between relative overflow-hidden">
                      <div className="w-full h-full rounded-[4px] bg-black p-[2px] flex flex-col justify-between relative">
                        {/* Top punch-hole */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                          <div className="w-1.5 h-1.5 rounded-full bg-black ring-1 ring-neutral-800" />
                        </div>

                        {/* Top Half Screen */}
                        <div className="w-full flex-1 rounded-t-[3px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border-b border-neutral-800 flex flex-col items-center justify-center p-1 text-center select-none">
                          <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                            {device.width} × {Math.round(device.height / 2)}
                          </span>
                          <span className="text-[7.5px] font-mono text-[#9D4E7C]">Top Fold</span>
                        </div>

                        {/* Horizontal Hinge Spine Crease */}
                        <div className="w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 shadow-xs z-20" />

                        {/* Bottom Half Screen */}
                        <div className="w-full flex-1 rounded-b-[3px] bg-gradient-to-b from-[#FDF2F8] to-white flex flex-col items-center justify-center p-1 text-center select-none">
                          <span className="text-[8px] font-mono text-[#4A1D36]/80">22:9 Tall</span>
                          <span className="text-[7.5px] font-mono text-[#9D4E7C] font-semibold">Flip Dynamic</span>
                        </div>

                        <div className="w-full flex justify-center pb-0.5">
                          <div className="w-8 h-0.5 bg-black/60 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Wide Book Foldable (Galaxy Z Fold 6 & Pixel Fold) - Full Unfolded View */
                  <div className="relative flex items-center justify-center">
                    {/* Right Edge Hardware buttons */}
                    <div className="absolute -right-[3px] top-12 w-[3px] h-7 bg-neutral-600 rounded-r-xs" />
                    <div className="absolute -right-[3px] top-22 w-[3px] h-5 bg-neutral-600 rounded-r-xs" />

                    {/* Wide Dual Screen Chassis */}
                    <div className="w-54 sm:w-58 h-46 sm:h-50 rounded-[7px] p-[2.5px] bg-gradient-to-b from-[#3E4045] via-[#242528] to-[#141517] border border-neutral-600 shadow-md flex justify-between relative overflow-hidden">
                      <div className="w-full h-full rounded-[5px] bg-black p-[2px] flex relative overflow-hidden">
                        {/* Left Screen Display */}
                        <div className="flex-1 rounded-l-[4px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border-r border-neutral-700/50 p-2 flex flex-col items-center justify-center text-center select-none relative">
                          <span className="text-[10px] font-mono font-bold text-[#4A1D36]">
                            {Math.round(device.width / 2)} × {device.height}
                          </span>
                          <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold mt-0.5">
                            Left Display
                          </span>
                          <span className="text-[7.5px] font-mono text-[#4A1D36]/60 mt-1">
                            {device.dpr}x AMOLED
                          </span>
                        </div>

                        {/* Center Hinge Crease Seam */}
                        <div className="w-[3px] h-full bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 shrink-0 z-20 shadow-xs" />

                        {/* Right Screen Display with Camera */}
                        <div className="flex-1 rounded-r-[4px] bg-gradient-to-b from-[#FDF2F8] to-[#FFFFFF] p-2 flex flex-col items-center justify-center text-center select-none relative">
                          {/* Inner Under-Display / Punchhole Camera */}
                          <div className="absolute top-1.5 right-3 z-20">
                            <div className="w-1.5 h-1.5 rounded-full bg-black ring-1 ring-neutral-700" />
                          </div>

                          <div className="w-5 h-5 rounded-lg bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center mb-1">
                            <Sparkles className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#4A1D36]">
                            Full {device.width}px
                          </span>
                          <span className="text-[8px] font-mono text-[#9D4E7C] font-semibold">
                            Dual Canvas Mode
                          </span>
                        </div>

                        {/* Bottom Full Width Taskbar Bar */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex justify-center">
                          <div className="w-16 h-0.5 bg-black/60 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------- G. TABLETS (iPad Pro, iPad Air, Galaxy Tab S9 - Full Wide Mockup) ---------------- */}
            {isTablet && (
              <div className="relative flex items-center justify-center">
                {/* Physical Top Power / Touch ID & Volume buttons */}
                <div className="absolute -top-[2px] right-8 w-6 h-[2px] bg-neutral-600 rounded-t-xs" />
                <div className="absolute -right-[2px] top-7 w-[2px] h-7 bg-neutral-600 rounded-r-xs" />

                {/* Wide Tablet Chassis Frame */}
                <div className="w-54 sm:w-58 h-46 sm:h-50 rounded-[8px] p-[3px] bg-gradient-to-b from-[#3E4045] via-[#28292D] to-[#151618] border border-neutral-600 shadow-md flex flex-col justify-between relative overflow-hidden">
                  {/* Black Display Bezel */}
                  <div className="w-full h-full rounded-[6px] bg-black p-[2px] flex flex-col justify-between relative">
                    {/* Top Centered Front Camera */}
                    <div className="w-full flex justify-center pt-0.5 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 ring-1 ring-neutral-800" />
                    </div>

                    {/* Wide Full Inner Tablet Screen */}
                    <div className="w-full flex-1 my-1 rounded-[4px] bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-3 text-center select-none overflow-hidden relative">
                      <div className="w-6 h-6 rounded-lg bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center mb-1">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#4A1D36]">
                        {device.width} × {device.height}
                      </span>
                      <span className="text-[9px] font-mono text-[#9D4E7C] font-semibold mt-0.5">
                        {device.screenSize} • {device.aspectRatio ?? '4:3'}
                      </span>
                      <span className="text-[8px] font-mono text-[#4A1D36]/60 mt-0.5">
                        Full Retina Canvas
                      </span>
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="w-full flex justify-center pb-1">
                      <div className="w-16 h-0.5 bg-neutral-500/70 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- H. DESKTOP / LAPTOPS (MacBook Pro & iMac) ---------------- */}
            {isDesktop && (
              <div className="flex flex-col items-center">
                {/* MacBook Display Lid */}
                <div className="w-46 h-28 rounded-t-lg p-[3px] bg-gradient-to-b from-[#35373C] to-[#18191B] border border-neutral-600 shadow-sm flex flex-col justify-between relative">
                  {/* Notch on display */}
                  <div className="w-full flex justify-center">
                    <div className="w-4 h-1 bg-black rounded-b-xs" />
                  </div>

                  <div className="w-full flex-1 my-0.5 rounded bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center text-center p-1 select-none">
                    <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                      {device.width} × {device.height}
                    </span>
                    <span className="text-[8px] font-mono text-[#9D4E7C]">
                      {device.screenSize}
                    </span>
                  </div>
                </div>

                {/* MacBook Unibody Base with Thumb Notch */}
                <div className="w-50 h-2 bg-gradient-to-b from-[#4A4C52] to-[#2B2C30] rounded-b-md shadow-md flex justify-center items-start border-t border-white/20">
                  <div className="w-8 h-0.5 bg-neutral-900 rounded-b-sm" />
                </div>
              </div>
            )}

            {/* ---------------- I. APPLE WATCH ULTRA 2 ---------------- */}
            {isWatch && (
              <div className="flex flex-col items-center">
                <div className="w-8 h-3 bg-neutral-800 rounded-t-sm" />
                <div className="relative">
                  {/* Orange Action Button on Left */}
                  <div className="absolute -left-[3px] top-7 w-[3px] h-5 bg-[#F16428] rounded-l-xs" />
                  {/* Digital Crown on Right */}
                  <div className="absolute -right-[3px] top-4 w-[3px] h-4 bg-neutral-700 rounded-r-xs" />

                  <div className="w-20 h-24 rounded-[22px] p-1.5 bg-gradient-to-b from-[#7D7972] to-[#2C2B29] border border-[#8E8A83] shadow-md flex flex-col justify-between">
                    <div className="w-full flex-1 rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#FDF2F8] border border-[#F3E8EE] flex flex-col items-center justify-center p-1 text-center select-none">
                      <span className="text-[9px] font-mono font-bold text-[#4A1D36]">
                        {device.width} × {device.height}
                      </span>
                      <span className="text-[8px] font-mono text-[#9D4E7C]">49mm Titanium</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-3 bg-neutral-800 rounded-b-sm" />
              </div>
            )}
          </motion.div>

          {/* Quick Hover Tooltip */}
          <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg border border-[#F3E8EE] text-[9px] font-bold text-[#9D4E7C] shadow-xs">
            Inspect Mockup →
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. CARD DETAILS & CLEAN METADATA (No Color Swatches)     */}
        {/* ======================================================== */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-[#4A1D36] tracking-tight group-hover:text-[#9D4E7C] transition-colors truncate">
            {device.name}
          </h3>
          <p className="text-xs font-mono text-[#4A1D36]/70">
            {device.width} × {device.height} px • {device.dpr}x Retina
          </p>

          <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[#9D4E7C]">
            <span className="font-semibold bg-[#FDF2F8] px-2 py-0.5 rounded-full border border-[#F3E8EE] capitalize">
              {device.bezelType}
            </span>
            <span className="text-[#4A1D36]/60 font-medium">
              {device.screenSize} Display
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-4 pt-3 border-t border-[#F3E8EE]">
        <button
          type="button"
          onClick={() => onSelect(device)}
          className="w-full text-xs font-bold text-[#9D4E7C] hover:text-[#8A3F6C] flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FDF2F8] hover:bg-[#F3E8EE] transition-colors cursor-pointer"
        >
          <span>{isSelected ? 'Active in Studio' : 'Inspect Real Mockup'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
