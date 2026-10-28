'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Tablet,
  Monitor,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  ExternalLink,
  Search,
  SlidersHorizontal,
  Code2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Maximize2,
  HelpCircle,
  FileQuestion,
  Download,
} from 'lucide-react';
import { DEVICE_CATALOG, DeviceSpec, DeviceCategory } from '@/components/data/devices';
import { DeviceMockupCard } from '@/components/sections/DeviceMockupCard';
import { DeviceLineupHero } from '@/components/sections/DeviceLineupHero';
import { Button } from '@/components/ui/Button';

export const DevicesDetailView: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceSpec>(DEVICE_CATALOG[0]);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [showBezel, setShowBezel] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'css' | 'tailwind' | 'meta' | 'safeArea'>('css');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Group devices by Brand / Category matching reference layout
  const appleDevices = useMemo(
    () => DEVICE_CATALOG.filter((d) => d.brand === 'Apple' && d.category === 'mobile'),
    []
  );

  const samsungDevices = useMemo(
    () =>
      DEVICE_CATALOG.filter(
        (d) => d.brand === 'Android' && d.id.includes('samsung')
      ),
    []
  );

  const pixelDevices = useMemo(
    () =>
      DEVICE_CATALOG.filter(
        (d) => d.brand === 'Android' && (d.id.includes('pixel') || d.id.includes('oneplus'))
      ),
    []
  );

  const tabletDevices = useMemo(
    () => DEVICE_CATALOG.filter((d) => d.category === 'tablet' || d.category === 'foldable'),
    []
  );

  const desktopDevices = useMemo(
    () => DEVICE_CATALOG.filter((d) => d.category === 'desktop' || d.category === 'watch'),
    []
  );

  // Filtered devices for master search
  const filteredDevices = useMemo(() => {
    if (!searchQuery.trim()) return DEVICE_CATALOG;
    const q = searchQuery.toLowerCase().trim();
    return DEVICE_CATALOG.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.brand.toLowerCase().includes(q) ||
        d.width.toString().includes(q) ||
        d.height.toString().includes(q) ||
        d.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Viewport dimensions considering orientation
  const currentWidth = isLandscape ? selectedDevice.height : selectedDevice.width;
  const currentHeight = isLandscape ? selectedDevice.width : selectedDevice.height;

  // Dynamic Safe Area insets calculation adapting to rotation orientation
  const currentSafeArea = useMemo(() => {
    const base = selectedDevice.safeArea ?? { top: 0, bottom: 0, left: 0, right: 0 };

    if (!isLandscape) {
      // Portrait: Hardware notch/island at top, home indicator at bottom
      return {
        top: base.top,
        bottom: base.bottom,
        left: 0,
        right: 0,
        notchPlacement: 'top' as const,
      };
    }

    // Landscape orientation: device rotated 90deg
    if (selectedDevice.category === 'mobile') {
      // On smartphones in landscape:
      // - System status bar inset at top collapses to 0px (WebKit/Android standard behavior)
      // - Hardware notch / camera moves to the physical left side (or symmetric for viewport-fit=cover)
      // - Home indicator bar at bottom becomes slimmer (21px on iOS, 16px on Android)
      const notchInset = base.top > 0 ? base.top : 0;
      const landscapeBottom = selectedDevice.brand === 'Apple' ? 21 : 16;
      const isIsland = selectedDevice.bezelType === 'island';

      return {
        top: 0,
        bottom: landscapeBottom,
        left: notchInset,
        right: isIsland ? notchInset : 0, // Dynamic Island provides balanced safe margins on both lateral edges
        notchPlacement: 'left' as const,
      };
    }

    if (selectedDevice.category === 'tablet') {
      return {
        top: 24,
        bottom: 20,
        left: 0,
        right: 0,
        notchPlacement: 'top' as const,
      };
    }

    if (selectedDevice.category === 'foldable') {
      return {
        top: 24,
        bottom: 20,
        left: 0,
        right: 0,
        notchPlacement: 'top' as const,
      };
    }

    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      notchPlacement: 'none' as const,
    };
  }, [selectedDevice, isLandscape]);

  // Code Snippets with dynamic orientation & safe area recalculation
  const codeSnippets = useMemo(() => {
    const orientation = isLandscape ? 'landscape' : 'portrait';
    const css = `@media screen and (max-width: ${currentWidth}px) and (orientation: ${orientation}) and (-webkit-min-device-pixel-ratio: ${selectedDevice.dpr}) {
  /* Targeted styles for ${selectedDevice.name} (${isLandscape ? 'Landscape' : 'Portrait'}) */
  :root {
    --safe-area-top: ${currentSafeArea.top}px;
    --safe-area-bottom: ${currentSafeArea.bottom}px;
    --safe-area-left: ${currentSafeArea.left}px;
    --safe-area-right: ${currentSafeArea.right}px;
  }
}`;

    const tailwind = `// tailwind.config.js - Breakpoint for ${selectedDevice.name} (${orientation})
module.exports = {
  theme: {
    extend: {
      screens: {
        '${selectedDevice.id}-${orientation}': {
          'raw': '(max-width: ${currentWidth}px) and (orientation: ${orientation}) and (-webkit-min-device-pixel-ratio: ${selectedDevice.dpr})',
        },
      },
    },
  },
};`;

    const meta = `<!-- HTML Responsive Viewport & Dynamic Notch Support -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />`;

    const safeArea = `/* Dynamic Safe Area Insets (Orientation: ${isLandscape ? 'Landscape' : 'Portrait'}) */
/* Note: In landscape, top inset collapses to 0px while lateral left/right adapts to notch */
.app-container {
  padding-top: env(safe-area-inset-top, ${currentSafeArea.top}px);
  padding-bottom: env(safe-area-inset-bottom, ${currentSafeArea.bottom}px);
  padding-left: env(safe-area-inset-left, ${currentSafeArea.left}px);
  padding-right: env(safe-area-inset-right, ${currentSafeArea.right}px);
  box-sizing: border-box;
}`;

    return { css, tailwind, meta, safeArea };
  }, [selectedDevice, isLandscape, currentWidth, currentSafeArea]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const handleSelectDevice = (device: DeviceSpec) => {
    setSelectedDevice(device);
    const inspector = document.getElementById('mockup-inspector');
    if (inspector) {
      inspector.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDF2F8] text-[#4A1D36] py-16 sm:py-24 overflow-hidden selection:bg-[#E8A0BF]/30 selection:text-[#9D4E7C]">
      {/* Background Radial Glow matching HeroSimulator */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#E8A0BF]/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (Matching Reference Image Header)         */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_2px_8px_rgba(157,78,124,0.08)] text-xs font-bold text-[#9D4E7C]"
          >
            <Smartphone className="w-4 h-4 text-[#9D4E7C]" />
            <span>Device Mockups &amp; Hardware Laboratory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4A1D36] leading-[1.12]"
          >
            Device mockups to download in{' '}
            <span className="text-[#9D4E7C] bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] bg-clip-text text-transparent">
              transparent PNG
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#4A1D36]/80 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Download free, realistic, vector, and transparent device mockups in PNG format for your websites, mobile apps, presentation decks, and responsive QA testing.
          </motion.p>

          {/* Quick Jump Anchor Links (Matching Reference Image) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold"
          >
            <span className="text-xs font-bold text-[#9D4E7C] uppercase tracking-wider mr-1">
              Jump to:
            </span>
            <a
              href="#iphones"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#F3E8EE] text-[#4A1D36] hover:bg-[#FDF2F8] hover:text-[#9D4E7C] shadow-xs transition-colors"
            >
              iPhones ({appleDevices.length})
            </a>
            <a
              href="#samsung"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#F3E8EE] text-[#4A1D36] hover:bg-[#FDF2F8] hover:text-[#9D4E7C] shadow-xs transition-colors"
            >
              Samsung Galaxy ({samsungDevices.length})
            </a>
            <a
              href="#pixel"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#F3E8EE] text-[#4A1D36] hover:bg-[#FDF2F8] hover:text-[#9D4E7C] shadow-xs transition-colors"
            >
              Google Pixel ({pixelDevices.length})
            </a>
            <a
              href="#tablets"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#F3E8EE] text-[#4A1D36] hover:bg-[#FDF2F8] hover:text-[#9D4E7C] shadow-xs transition-colors"
            >
              Tablets ({tabletDevices.length})
            </a>
            <a
              href="#desktops"
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#F3E8EE] text-[#4A1D36] hover:bg-[#FDF2F8] hover:text-[#9D4E7C] shadow-xs transition-colors"
            >
              Displays &amp; Laptops ({desktopDevices.length})
            </a>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2. HERO LINEUP GRAPHIC (Matching Reference Lineup)        */}
        {/* ========================================================= */}
        <DeviceLineupHero
          devices={DEVICE_CATALOG}
          onSelectDevice={handleSelectDevice}
        />

        {/* ========================================================= */}
        {/* 3. INTERACTIVE MOCKUP STUDIO INSPECTOR                    */}
        {/* ========================================================= */}
        <section
          id="mockup-inspector"
          className="bg-white rounded-3xl border border-[#F3E8EE] p-6 sm:p-10 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-8"
        >
          {/* Top Controls Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#F3E8EE]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#F3E8EE]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Mockup Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight flex items-center gap-3">
                <span>{selectedDevice.name}</span>
                {selectedDevice.badge && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E8A0BF] text-[#4A1D36]">
                    {selectedDevice.badge}
                  </span>
                )}
              </h2>
            </div>

            {/* Interactive Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setIsLandscape(!isLandscape)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  isLandscape
                    ? 'bg-[#9D4E7C] text-white border-[#9D4E7C] shadow-sm'
                    : 'bg-[#FDF2F8] text-[#4A1D36] border-[#F3E8EE] hover:bg-white'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isLandscape ? 'Landscape' : 'Portrait'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowBezel(!showBezel)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  showBezel
                    ? 'bg-[#9D4E7C] text-white border-[#9D4E7C] shadow-sm'
                    : 'bg-[#FDF2F8] text-[#4A1D36] border-[#F3E8EE] hover:bg-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showBezel ? 'Bezel On' : 'Bezel Off'}</span>
              </button>

              {/* Scale Zoom */}
              <div className="flex items-center rounded-xl bg-[#FDF2F8] border border-[#F3E8EE] p-1 text-xs font-mono font-bold text-[#4A1D36]">
                {[50, 75, 100].map((scale) => (
                  <button
                    key={scale}
                    type="button"
                    onClick={() => setZoomLevel(scale)}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      zoomLevel === scale ? 'bg-white text-[#9D4E7C] shadow-sm' : 'hover:text-[#9D4E7C]'
                    }`}
                  >
                    {scale}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2-Column Inspector: Chassis Canvas (Left) + Specifications (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Transparent Checkerboard Canvas with Selected Device */}
            <div
              className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl border border-[#F3E8EE] min-h-[460px] relative overflow-hidden select-none"
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
              <div className="absolute top-3 left-3 text-[11px] font-mono text-[#4A1D36]/70 bg-white/90 px-2.5 py-1 rounded-lg border border-[#F3E8EE] shadow-xs flex items-center gap-2">
                <span>Scale: {zoomLevel}%</span>
                <span>•</span>
                <span className="text-[#9D4E7C] font-bold">
                  {isLandscape ? 'Landscape' : 'Portrait'}
                </span>
                <span>•</span>
                <span>
                  Safe Insets: T:{currentSafeArea.top} B:{currentSafeArea.bottom} L:{currentSafeArea.left} R:{currentSafeArea.right}
                </span>
              </div>

              {/* Realistic Chassis Frame */}
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                style={{
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: 'center center',
                }}
                className={`relative transition-all duration-300 ${
                  showBezel
                    ? selectedDevice.id === 'samsung-s24-ultra'
                      ? 'p-2.5 bg-neutral-900 rounded-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-4 border-neutral-700/80'
                      : selectedDevice.category === 'tablet'
                      ? 'p-2.5 bg-neutral-900 rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-4 border-neutral-700/80'
                      : 'p-2.5 bg-neutral-900 rounded-[11px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-4 border-neutral-700/80'
                    : selectedDevice.id === 'samsung-s24-ultra'
                    ? 'p-0 rounded-[2px] shadow-lg border-2 border-[#9D4E7C]'
                    : 'p-0 rounded-[9px] shadow-lg border-2 border-[#9D4E7C]'
                }`}
              >
                <div
                  className={`bg-white relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    showBezel
                      ? selectedDevice.id === 'samsung-s24-ultra'
                        ? 'rounded-[1px]'
                        : selectedDevice.category === 'tablet'
                        ? 'rounded-[7px]'
                        : 'rounded-[8px]'
                      : selectedDevice.id === 'samsung-s24-ultra'
                      ? 'rounded-[1px]'
                      : 'rounded-[7px]'
                  }`}
                  style={{
                    width: isLandscape
                      ? selectedDevice.category === 'tablet'
                        ? 380
                        : selectedDevice.category === 'foldable'
                        ? 340
                        : 320
                      : selectedDevice.category === 'tablet'
                      ? 280
                      : selectedDevice.category === 'foldable'
                      ? 280
                      : 200,
                    height: isLandscape
                      ? selectedDevice.category === 'tablet'
                        ? 270
                        : selectedDevice.category === 'foldable'
                        ? 260
                        : 200
                      : selectedDevice.category === 'tablet'
                      ? 360
                      : selectedDevice.category === 'foldable'
                      ? 330
                      : 360,
                  }}
                >
                  {/* Dynamic Island / Notch - Adapts position to Orientation */}
                  {showBezel && (
                    <>
                      {!isLandscape ? (
                        /* Portrait: Notch at Top */
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                          {selectedDevice.bezelType === 'island' && (
                            <div className="w-16 h-3 bg-black rounded-full flex items-center justify-between px-1.5 shadow-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                          )}
                          {selectedDevice.bezelType === 'notch' && (
                            <div className="w-20 h-2.5 bg-black rounded-b-md flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-neutral-700" />
                            </div>
                          )}
                          {selectedDevice.bezelType === 'punch-hole' && (
                            <div className="w-2 h-2 rounded-full bg-black mt-0.5 shadow-sm" />
                          )}
                        </div>
                      ) : (
                        /* Landscape: Notch moves to the physical Left side */
                        selectedDevice.category === 'mobile' && (
                          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                            {selectedDevice.bezelType === 'island' && (
                              <div className="h-14 w-2.5 bg-black rounded-full flex flex-col items-center justify-between py-1.5 shadow-sm">
                                <div className="w-1 h-1 rounded-full bg-neutral-800" />
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                              </div>
                            )}
                            {selectedDevice.bezelType === 'notch' && (
                              <div className="h-16 w-2.5 bg-black rounded-r-md flex items-center justify-center">
                                <div className="w-1 h-1 rounded-full bg-neutral-700" />
                              </div>
                            )}
                            {selectedDevice.bezelType === 'punch-hole' && (
                              <div className="w-2 h-2 rounded-full bg-black shadow-sm" />
                            )}
                          </div>
                        )
                      )}
                    </>
                  )}

                  {/* Status Bar - Dynamically adapts height and clearance on rotation */}
                  <div
                    className={`flex items-center justify-between text-[8px] font-mono font-bold text-neutral-400 border-b border-neutral-100 bg-neutral-50/80 transition-all ${
                      isLandscape && selectedDevice.category === 'mobile'
                        ? 'px-8 py-1'
                        : 'px-3 pt-2 pb-1'
                    }`}
                  >
                    <span>9:41</span>
                    <span className="text-[#9D4E7C] font-semibold truncate max-w-[140px]">
                      {selectedDevice.name} • {isLandscape ? 'Landscape (Top: 0px)' : 'Portrait'}
                    </span>
                    <span>100% ⚡</span>
                  </div>

                  {/* Screen Content - Dynamically offsets for lateral safe area */}
                  <div
                    className="p-3 text-center flex flex-col items-center justify-center flex-1 space-y-2 select-none transition-all duration-300"
                    style={{
                      paddingLeft: isLandscape && showBezel && selectedDevice.category === 'mobile' ? 28 : 12,
                      paddingRight: isLandscape && showBezel && selectedDevice.bezelType === 'island' ? 24 : 12,
                    }}
                  >
                    <div className="w-7 h-7 rounded-xl bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center mx-auto">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#4A1D36]">localhost:3000</div>
                      <div className="text-[9px] font-mono text-[#9D4E7C]">
                        {currentWidth} × {currentHeight} px
                      </div>
                    </div>
                    <div className="w-full bg-[#FDF2F8] py-1.5 px-2 rounded-lg border border-[#F3E8EE] text-[8px] font-mono text-[#4A1D36]/80 flex items-center justify-between">
                      <span>Safe Insets: {isLandscape ? `L:${currentSafeArea.left}px R:${currentSafeArea.right}px` : `Top:${currentSafeArea.top}px`}</span>
                      <span className="text-emerald-600 font-bold">Dynamic env()</span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  {showBezel && (
                    <div className="pb-1.5 pt-0.5 flex justify-center">
                      <div
                        className={`bg-neutral-400 rounded-full transition-all ${
                          isLandscape ? 'w-24 h-1' : 'w-16 h-1'
                        }`}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Technical Specifications Matrix & Developer Code Snippets */}
            <div className="lg:col-span-7 space-y-6">
              {/* Technical Spec Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Logical Viewport
                  </span>
                  <div className="text-base font-mono font-black text-[#4A1D36] mt-0.5">
                    {currentWidth} × {currentHeight}{' '}
                    <span className="text-[10px] font-normal text-[#4A1D36]/70">px</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9D4E7C] mt-0.5">
                    {isLandscape ? 'Landscape Mode' : 'Portrait Mode'}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Physical Pixels
                  </span>
                  <div className="text-base font-mono font-black text-[#4A1D36] mt-0.5">
                    {Math.round(currentWidth * selectedDevice.dpr)} ×{' '}
                    {Math.round(currentHeight * selectedDevice.dpr)}{' '}
                    <span className="text-[10px] font-normal text-[#4A1D36]/70">px</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#4A1D36]/60 mt-0.5">
                    DPR: {selectedDevice.dpr}x Retina
                  </div>
                </div>

                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Safe Area Top
                  </span>
                  <div className="text-base font-mono font-black text-[#4A1D36] mt-0.5">
                    {currentSafeArea.top}{' '}
                    <span className="text-[10px] font-normal text-[#4A1D36]/70">
                      {isLandscape && selectedDevice.category === 'mobile' ? 'px (0 in landscape)' : 'px notch'}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9D4E7C] mt-0.5">
                    {isLandscape && selectedDevice.category === 'mobile' ? 'Top inset collapses' : 'System header space'}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Safe Area Bottom
                  </span>
                  <div className="text-base font-mono font-black text-[#4A1D36] mt-0.5">
                    {currentSafeArea.bottom}{' '}
                    <span className="text-[10px] font-normal text-[#4A1D36]/70">px home</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9D4E7C] mt-0.5">
                    {isLandscape ? 'Landscape home bar' : 'Portrait swipe indicator'}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Safe Area Left / Right
                  </span>
                  <div className="text-base font-mono font-black text-[#4A1D36] mt-0.5">
                    {currentSafeArea.left} / {currentSafeArea.right}{' '}
                    <span className="text-[10px] font-normal text-[#4A1D36]/70">px lateral</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9D4E7C] mt-0.5">
                    {isLandscape && currentSafeArea.left > 0 ? 'Notch lateral margin' : 'Zero side margin'}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE]">
                  <span className="text-[10px] uppercase font-bold text-[#9D4E7C] block">
                    Browser Engine
                  </span>
                  <div className="text-xs font-semibold text-[#4A1D36] mt-1 truncate">
                    {selectedDevice.os ?? 'Chromium / WebKit'}
                  </div>
                  <div className="text-[10px] font-mono text-[#4A1D36]/60 mt-0.5">
                    viewport-fit=cover
                  </div>
                </div>
              </div>

              {/* Developer Description */}
              <p className="text-xs sm:text-sm text-[#4A1D36]/80 leading-relaxed font-medium bg-[#FDF2F8]/60 p-4 rounded-xl border border-[#F3E8EE]">
                {selectedDevice.description ??
                  `${selectedDevice.name} simulates an authentic ${selectedDevice.category} environment with ${selectedDevice.dpr}x display scaling and hardware notch constraints.`}
              </p>

              {/* Code Snippets Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A1D36]">
                    <Code2 className="w-4 h-4 text-[#9D4E7C]" />
                    <span>Copy Responsive Code for {selectedDevice.name}:</span>
                  </div>

                  {/* Code Tabs */}
                  <div className="flex items-center gap-1 bg-[#FDF2F8] p-1 rounded-xl border border-[#F3E8EE] text-[11px] font-mono font-bold">
                    {(
                      [
                        { id: 'css', label: 'CSS Query' },
                        { id: 'tailwind', label: 'Tailwind' },
                        { id: 'safeArea', label: 'Safe Area' },
                        { id: 'meta', label: 'Meta Tag' },
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveCodeTab(tab.id)}
                        className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                          activeCodeTab === tab.id
                            ? 'bg-[#9D4E7C] text-white shadow-sm'
                            : 'text-[#4A1D36]/70 hover:text-[#4A1D36]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Code Block Container */}
                <div className="relative rounded-2xl bg-[#4A1D36] text-white p-4 font-mono text-xs overflow-x-auto shadow-inner border border-[#9D4E7C]/20">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-neutral-400">
                    <span>
                      {activeCodeTab === 'css' && 'styles.css'}
                      {activeCodeTab === 'tailwind' && 'tailwind.config.js'}
                      {activeCodeTab === 'safeArea' && 'globals.css'}
                      {activeCodeTab === 'meta' && 'index.html'}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(codeSnippets[activeCodeTab], activeCodeTab)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-sans text-xs transition-colors cursor-pointer"
                    >
                      {copiedSnippet === activeCodeTab ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E8A0BF]" />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-xs text-[#FDF2F8] leading-relaxed overflow-x-auto">
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CATEGORIZED MOCKUP SECTIONS (Matching Reference Image) */}
        {/* ========================================================= */}
        <div className="space-y-16">
          {/* Section 1: Apple iPhones */}
          <section id="iphones" className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#F3E8EE] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight">
                  iPhones &amp; Apple Devices{' '}
                  <span className="text-sm font-mono text-[#9D4E7C] font-semibold">
                    ({appleDevices.length})
                  </span>
                </h2>
                <p className="text-xs text-[#4A1D36]/70 mt-1">
                  Pixel-accurate Dynamic Islands, camera notches, and titanium metal finishes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {appleDevices.map((dev) => (
                <DeviceMockupCard
                  key={dev.id}
                  device={dev}
                  isSelected={selectedDevice.id === dev.id}
                  onSelect={handleSelectDevice}
                />
              ))}
            </div>
          </section>

          {/* Section 2: Samsung Galaxy Devices */}
          <section id="samsung" className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#F3E8EE] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight">
                  Samsung Galaxy Devices{' '}
                  <span className="text-sm font-mono text-[#9D4E7C] font-semibold">
                    ({samsungDevices.length})
                  </span>
                </h2>
                <p className="text-xs text-[#4A1D36]/70 mt-1">
                  Quad HD+ AMOLED displays, centered punch-holes, and One UI viewport scaling.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {samsungDevices.map((dev) => (
                <DeviceMockupCard
                  key={dev.id}
                  device={dev}
                  isSelected={selectedDevice.id === dev.id}
                  onSelect={handleSelectDevice}
                />
              ))}
            </div>
          </section>

          {/* Section 3: Google Pixel Devices */}
          <section id="pixel" className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#F3E8EE] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight">
                  Google Pixel Devices{' '}
                  <span className="text-sm font-mono text-[#9D4E7C] font-semibold">
                    ({pixelDevices.length})
                  </span>
                </h2>
                <p className="text-xs text-[#4A1D36]/70 mt-1">
                  Pure Android 15 rendering baselines, Chromium defaults, and camera visor styles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pixelDevices.map((dev) => (
                <DeviceMockupCard
                  key={dev.id}
                  device={dev}
                  isSelected={selectedDevice.id === dev.id}
                  onSelect={handleSelectDevice}
                />
              ))}
            </div>
          </section>

          {/* Section 4: Tablet & Foldable Mockups */}
          <section id="tablets" className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#F3E8EE] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight">
                  Tablets &amp; Foldable Mockups{' '}
                  <span className="text-sm font-mono text-[#9D4E7C] font-semibold">
                    ({tabletDevices.length})
                  </span>
                </h2>
                <p className="text-xs text-[#4A1D36]/70 mt-1">
                  iPad Pro tandem OLEDs, compact tablets, and adaptive folding screen viewports.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {tabletDevices.map((dev) => (
                <DeviceMockupCard
                  key={dev.id}
                  device={dev}
                  isSelected={selectedDevice.id === dev.id}
                  onSelect={handleSelectDevice}
                />
              ))}
            </div>
          </section>

          {/* Section 5: Displays, Laptops & Desktops */}
          <section id="desktops" className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#F3E8EE] pb-3">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#4A1D36] tracking-tight">
                  Displays, Laptops and Monitors{' '}
                  <span className="text-sm font-mono text-[#9D4E7C] font-semibold">
                    ({desktopDevices.length})
                  </span>
                </h2>
                <p className="text-xs text-[#4A1D36]/70 mt-1">
                  MacBook Pro notch viewports, iMac 4.5K retina, and UltraWide 21:9 monitors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {desktopDevices.map((dev) => (
                <DeviceMockupCard
                  key={dev.id}
                  device={dev}
                  isSelected={selectedDevice.id === dev.id}
                  onSelect={handleSelectDevice}
                />
              ))}
            </div>
          </section>
        </div>

        {/* ========================================================= */}
        {/* 5. MASTER SPECIFICATION TABLE (Border-free as requested)  */}
        {/* ========================================================= */}
        <section className="bg-white rounded-3xl border border-[#F3E8EE] p-6 sm:p-10 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#F3E8EE]">
              <span>Master Hardware Specification Matrix</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              Complete Technical Data Sheets
            </h2>
            <p className="text-xs sm:text-sm text-[#4A1D36]/80 font-medium">
              Side-by-side comparison of CSS viewports, physical pixel densities, aspect ratios, and safe area insets.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-1.5 text-xs sm:text-sm">
              <thead>
                <tr className="text-[#4A1D36] font-bold">
                  <th className="px-4 py-3">Device Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">CSS Viewport</th>
                  <th className="px-4 py-3">Physical Pixels</th>
                  <th className="px-4 py-3">DPR</th>
                  <th className="px-4 py-3">Aspect Ratio</th>
                  <th className="px-4 py-3">Bezel Style</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {DEVICE_CATALOG.map((dev) => (
                  <tr
                    key={dev.id}
                    onClick={() => handleSelectDevice(dev)}
                    className="group cursor-pointer bg-transparent hover:bg-[#FDF2F8] transition-colors duration-150"
                  >
                    <td className="px-4 py-3.5 font-bold text-[#4A1D36] group-hover:text-[#9D4E7C] transition-colors rounded-l-xl flex items-center gap-2">
                      <span>{dev.name}</span>
                      {dev.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E8A0BF] text-[#4A1D36]">
                          {dev.badge}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 capitalize text-[#4A1D36]/80">{dev.category}</td>
                    <td className="px-4 py-3.5 font-mono text-[#9D4E7C] font-semibold">
                      {dev.width} × {dev.height} px
                    </td>
                    <td className="px-4 py-3.5 font-mono text-[#4A1D36]/80">
                      {Math.round(dev.width * dev.dpr)} × {Math.round(dev.height * dev.dpr)} px
                    </td>
                    <td className="px-4 py-3.5 font-mono font-bold text-[#9D4E7C]">{dev.dpr}x</td>
                    <td className="px-4 py-3.5 font-mono">{dev.aspectRatio ?? '19.5:9'}</td>
                    <td className="px-4 py-3.5 capitalize text-[#4A1D36]/80">{dev.bezelType}</td>
                    <td className="px-4 py-3.5 text-right rounded-r-xl">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#9D4E7C] group-hover:text-[#8A3F6C] group-hover:underline">
                        <span>Inspect</span>
                        <span className="text-xs">→</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. EDITORIAL & FAQ SECTION (Matching Reference Image)     */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What is a Device Mockup? */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#F3E8EE] p-8 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Editorial Guide</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              What is a device mockup?
            </h2>
            <p className="text-sm text-[#4A1D36]/80 leading-relaxed font-medium">
              A device mockup is a high-fidelity visual representation of an authentic hardware chassis (such as an iPhone, Samsung Galaxy, or MacBook Pro) used by frontend developers and designers to showcase web interfaces in realistic physical contexts.
            </p>
            <p className="text-sm text-[#4A1D36]/80 leading-relaxed font-medium">
              Unlike generic flat screenshots, ScreenShift mockups include authentic hardware bezels, camera cutouts, Dynamic Islands, and pixel-density ratios (Retina DPR). This allows engineering teams to catch layout overflow, test safe area notch collisions, and present polished deliverables to stakeholders.
            </p>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#F3E8EE] p-8 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE]">
              <FileQuestion className="w-3.5 h-3.5" />
              <span>Mockup FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              Frequently asked questions
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#4A1D36]/80 font-medium">
              <div className="space-y-1.5 pb-3 border-b border-[#F3E8EE]">
                <h4 className="font-bold text-[#4A1D36]">Are these mockups free for commercial projects?</h4>
                <p>Yes. All screenshots and transparent framed PNG exports generated with ScreenShift can be freely used in commercial apps, client presentations, and portfolio showcases with zero royalty fees.</p>
              </div>
              <div className="space-y-1.5 pb-3 border-b border-[#F3E8EE]">
                <h4 className="font-bold text-[#4A1D36]">Can I export framed mockups of localhost development servers?</h4>
                <p>Yes. ScreenShift runs directly as a Chrome extension on your localhost:3000 server, automatically rendering live websites within physical device frames with 1-click 2x Retina PNG export.</p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-[#4A1D36]">How do I test safe area notch insets?</h4>
                <p>Simply copy our ready-to-use CSS <code className="font-mono bg-[#FDF2F8] px-1 py-0.5 rounded text-[#9D4E7C]">env(safe-area-inset-top)</code> snippets provided in the inspector above to prevent content clipping under Dynamic Islands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. PREFOOTER CTA (Matching Home Page & Reference Banner)  */}
        {/* ========================================================= */}
        <section className="bg-[#4A1D36] text-white p-8 sm:p-12 rounded-3xl border border-[#9D4E7C]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#E8A0BF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Chrome Extension Setup</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Test all 40+ mockups live on your localhost.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              Install ScreenShift from the Chrome Web Store in 10 seconds. Enjoy zero-config hot reload, touch gestures, and 1-click transparent device frame exports.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              variant="secondary"
              size="lg"
              icon={Sparkles}
              iconPosition="right"
              onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold shadow-lg"
            >
              Get ScreenShift Free
            </Button>
            <Link
              href="/#simulator"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-7 py-3.5 text-sm font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>Try Live Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
