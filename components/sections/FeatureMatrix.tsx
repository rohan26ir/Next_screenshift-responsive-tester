'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, MousePointer2, Camera, Layers, Check, Terminal, ChevronRight } from 'lucide-react';

const cardHoverMotion = {
  whileHover: { y: -6, transition: { duration: 0.25, ease: 'easeOut' as const } },
};

export const FeatureMatrix: React.FC = () => {
  const [activeMobileCard, setActiveMobileCard] = useState<number>(0);

  const features = [
    {
      id: 'localhost',
      icon: Code2,
      category: 'Net Engine',
      title: 'Zero-Config Localhost',
      description: 'Test Next.js, Vite, and Remix on localhost:3000 with real-time CSP and X-Frame-Options stripping.',
      visual: (
        <div className="bg-[#FDF2F8] p-2.5 rounded-xl border border-[#F3E8EE] font-mono text-[11px] text-[#4A1D36] flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate">localhost:3000</span>
          </div>
          <span className="text-[10px] text-[#9D4E7C] font-bold shrink-0">0ms sync</span>
        </div>
      ),
      check: 'Fast Refresh Synced',
    },
    {
      id: 'touch',
      icon: MousePointer2,
      category: 'Synthetic Events',
      title: 'Natural Touch Physics',
      description: 'Converts mouse interactions into authentic TouchEvent streams with inertia, touch radius, and swipe detection.',
      visual: (
        <div className="p-2.5 bg-[#FDF2F8] rounded-xl border border-[#F3E8EE] flex items-center justify-between text-[11px] font-mono text-[#9D4E7C]">
          <span>onTouchStart()</span>
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-[#9D4E7C]"
          />
        </div>
      ),
      check: 'Swiper & Carousel Ready',
    },
    {
      id: 'mockup',
      icon: Camera,
      category: 'Mockup Export',
      title: '1-Click Framed PNG',
      description: 'Render ultra-crisp composite screenshots inside physical hardware bezels for PRs, reviews, and client decks.',
      visual: (
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-lg bg-[#E8A0BF]/25 text-[#9D4E7C] text-[10px] font-mono font-bold">
            2x Retina PNG
          </span>
          <span className="px-2 py-1 rounded-lg bg-[#E8A0BF]/25 text-[#9D4E7C] text-[10px] font-mono font-bold">
            3x Ultra PNG
          </span>
        </div>
      ),
      check: 'Instant Clipboard Copy',
    },
    {
      id: 'bezels',
      icon: Layers,
      category: 'Hardware Fidelity',
      title: 'Dynamic Island & Bezels',
      description: 'Avoid layout breakage beneath iPhone Dynamic Islands, punch-holes, bottom sheets, and safe area insets.',
      visual: (
        <div className="bg-[#FDF2F8] p-2 rounded-xl border border-[#F3E8EE] flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-4 bg-black rounded-full flex items-center justify-between px-2 cursor-pointer transition-all"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span className="text-[7px] font-mono text-emerald-400 font-bold">DEV</span>
          </motion.div>
        </div>
      ),
      check: 'env(safe-area-inset) Safe',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10" id="features">
      {/* Section Header: Compact & Centered to guarantee full viewport visibility */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE] shadow-sm">
          <Zap className="w-3.5 h-3.5 text-[#9D4E7C]" />
          <span>Built for Modern Frontend Workflows</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#4A1D36] tracking-tight">
          Everything engineers need to ship flawless mobile experiences.
        </h2>
        <p className="text-xs sm:text-sm text-[#4A1D36]/80 font-medium max-w-2xl mx-auto">
          ScreenShift delivers pixel-accurate hardware simulation, localhost tunneling, and touch physics in one lightweight extension.
        </p>
      </motion.div>

      {/* 4-Card Balanced Layout: 4 columns on desktop, 2x2 on tablet, horizontal snap on mobile */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 sm:pb-0 no-scrollbar"
        onScroll={(e) => {
          const el = e.currentTarget;
          const index = Math.round(el.scrollLeft / (el.clientWidth * 0.8));
          if (index !== activeMobileCard) setActiveMobileCard(index);
        }}
      >
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              {...cardHoverMotion}
              className="w-[82vw] sm:w-auto shrink-0 snap-center bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#F3E8EE] shadow-[3px_3px_12px_rgba(157,78,124,0.06),-3px_-3px_12px_#FFFFFF] flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(157,78,124,0.12)]"
            >
              <div className="space-y-3">
                {/* Card Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-2 py-0.5 rounded-full border border-[#F3E8EE]">
                    {feat.category}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#4A1D36] tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#4A1D36]/80 leading-relaxed mt-1">
                    {feat.description}
                  </p>
                </div>

                {/* Micro-interaction visual demonstration */}
                <div className="pt-1">
                  {feat.visual}
                </div>
              </div>

              {/* Bottom Feature Check */}
              <div className="mt-4 pt-3 border-t border-[#F3E8EE]">
                <span className="text-xs font-semibold text-[#9D4E7C] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#9D4E7C]" />
                  <span>{feat.check}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Swipe Indicators (Only visible on small mobile screens) */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3">
        {features.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeMobileCard === i ? 'w-5 bg-[#9D4E7C]' : 'w-1.5 bg-[#E8A0BF]/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};
