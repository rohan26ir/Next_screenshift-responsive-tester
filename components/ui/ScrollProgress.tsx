'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { ChevronUp, Download } from 'lucide-react';
import { Progress } from '@/components/ui/Progress';
import { ChromeIcon } from '@/components/icons/ChromeIcon';

/**
 * ScrollProgress Component
 * 
 * Features:
 * 1. Top Header Progress Bar: Global reading progress along top viewport edge (0% -> 100%).
 * 2. Floating Action Stack (bottom-right):
 *    - Download Button (Above Progress Button):
 *      Shows download icon; on hover, smoothly expands with Framer Motion spring animation
 *      to reveal "Install For Chrome" badge + Chrome icon. On click, opens Chrome Web Store.
 *    - Progress Button (Below):
 *      Circular progress ring + vertical Base UI track. Smooth scroll to top on click.
 *      (Dot removed as requested).
 * 
 * Reference: https://motion.dev/examples/react-base-progress
 */

export type ProgressDirection = 'top-to-bottom' | 'bottom-to-top';

export const ScrollProgress: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(0);
  const [direction, setDirection] = useState<ProgressDirection>('bottom-to-top');
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  // Framer Motion useScroll hook
  const { scrollY, scrollYProgress } = useScroll();

  // Snappy spring interpolation as recommended by Motion recipes
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 28,
    restDelta: 0.001,
  });

  // Track percentage for Base UI ARIA values and visual counters
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    setCurrentPercent(Math.round(latest * 100));
  });

  // Toggle button visibility once scrolled past initial threshold
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 140);
  });

  // Check scroll on initial mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.scrollY > 140);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDirection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection((prev) =>
      prev === 'bottom-to-top' ? 'top-to-bottom' : 'bottom-to-top'
    );
  };

  // Circular ring geometry
  const radius = 21;

  return (
    <>
      {/* 1. Global Top Viewport Progress Bar (Base UI Anatomy) */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
        <Progress.Root
          value={currentPercent}
          min={0}
          max={100}
          orientation="horizontal"
          direction="ltr"
          className="w-full h-full bg-transparent"
        >
          <Progress.Track className="w-full h-full bg-[#E8A0BF]/15">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: '0% 50%' }}
              className="h-full w-full bg-gradient-to-r from-[#9D4E7C] via-[#E8A0BF] to-[#9D4E7C] shadow-[0_0_10px_rgba(157,78,124,0.5)]"
            />
          </Progress.Track>
        </Progress.Root>
      </div>

      {/* 2. Floating Action Widget Stack: Download Button (Above) + Top Scroll Progress (Below) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 24 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2.5"
          >
            {/* Top Item: Extension Download Button (Above Progress Button) */}
            <motion.button
              type="button"
              layout
              onMouseEnter={() => setIsDownloadHovered(true)}
              onMouseLeave={() => setIsDownloadHovered(false)}
              onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              aria-label="Install screenShift for Chrome"
              className="relative h-12 bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_8px_24px_rgba(157,78,124,0.22)] hover:shadow-[0_12px_30px_rgba(157,78,124,0.32)] hover:border-[#E8A0BF] rounded-full flex items-center cursor-pointer p-1.5 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D4E7C] transition-colors"
            >
              {/* Circular Icon Container */}
              <div className="w-9 h-9 rounded-full bg-[#E8A0BF]/25 text-[#9D4E7C] group-hover:bg-[#9D4E7C] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <Download className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </div>

              {/* Smooth Framer Motion Expansion on Hover */}
              <AnimatePresence>
                {isDownloadHovered && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, x: -6 }}
                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                    exit={{ opacity: 0, width: 0, x: -6 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="flex items-center gap-2.5 pl-3 pr-4 whitespace-nowrap overflow-hidden"
                  >
                    <span className="text-xs font-bold text-[#4A1D36] tracking-tight">
                      Install For Chrome
                    </span>
                    <ChromeIcon className="w-4 h-4 shrink-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Bottom Item: Top Scroll Progress Button Cluster */}
            <div
              className="flex items-center gap-2.5"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {/* Tooltip & Percentage Badge */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4A1D36] text-white text-xs font-semibold shadow-lg backdrop-blur-md border border-white/10"
                  >
                    <span>{currentPercent}%</span>
                    <span className="text-white/40">•</span>
                    <button
                      type="button"
                      onClick={toggleDirection}
                      className="text-[#E8A0BF] hover:text-white transition-colors underline underline-offset-2 text-[11px] cursor-pointer"
                      title={`Current mode: ${direction}. Click to toggle.`}
                    >
                      {direction === 'bottom-to-top' ? 'Bottom ↑ Top' : 'Top ↓ Bottom'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Vertical Base UI Progress Pill Track */}
              <div
                onClick={toggleDirection}
                title={`Vertical Progress: ${direction === 'bottom-to-top' ? 'Bottom to Top' : 'Top to Bottom'} (click to switch)`}
                className="cursor-pointer group flex flex-col items-center gap-1"
              >
                <Progress.Root
                  value={currentPercent}
                  min={0}
                  max={100}
                  orientation="vertical"
                  direction={direction}
                  className="w-2 h-11 bg-white/80 rounded-full border border-[#F3E8EE] shadow-[0_2px_8px_rgba(157,78,124,0.12)] p-0.5 overflow-hidden transition-all duration-200 group-hover:scale-105"
                >
                  <Progress.Track className="w-full h-full rounded-full bg-[#E8A0BF]/20 overflow-hidden relative">
                    <Progress.Indicator className="rounded-full bg-gradient-to-b from-[#9D4E7C] to-[#E8A0BF]" />
                  </Progress.Track>
                </Progress.Root>
              </div>

              {/* Circular Progress Top Scroll Button */}
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Scroll to top of page. Current scroll progress: ${currentPercent}%`}
                className="relative w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_8px_24px_rgba(157,78,124,0.22)] flex items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D4E7C] transition-shadow hover:shadow-[0_12px_28px_rgba(157,78,124,0.32)]"
              >
                {/* SVG Circular Progress Track & Fill */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
                  viewBox="0 0 48 48"
                >
                  {/* Background Ring Track */}
                  <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="#F3E8EE"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Smooth Animated Spring Indicator */}
                  <motion.circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="#9D4E7C"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="none"
                    style={{ pathLength: smoothProgress }}
                  />
                </svg>

                {/* Center Icon & Micro-Interaction */}
                <div className="relative z-10 text-[#9D4E7C] group-hover:text-[#4A1D36] transition-transform duration-200 group-hover:-translate-y-0.5">
                  <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
