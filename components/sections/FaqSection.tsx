'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'Does ScreenShift work on local development servers like http://localhost:3000?',
      a: 'Yes, absolutely! ScreenShift is engineered specifically for frontend developers. It uses Chrome Extension Manifest V3 Declarative Net Request rules to automatically bypass X-Frame-Options and CSP headers for localhost ports (3000, 5173, 8080, etc.), enabling live hot-reloading without any extra proxy setup.',
    },
    {
      q: 'How does touch simulation behave compared to Chrome DevTools?',
      a: 'Standard browser devtools only mimic desktop mouse drag. ScreenShift converts mouse interactions directly into true synthetic TouchEvents (touchstart, touchmove, touchend) with realistic touch point radii, smooth inertia scrolling, and visual touch ripple indicators.',
    },
    {
      q: 'Can I export framed mockup screenshots for client decks and GitHub PRs?',
      a: 'Yes! With a single click on the camera icon, ScreenShift renders an ultra-crisp 2x or 3x composite PNG of the active website inside the authentic physical hardware bezel—ideal for portfolio showcases, design review presentations, and QA bug reports.',
    },
    {
      q: 'What device categories and viewports are included?',
      a: 'Over 40+ precision presets are built-in: modern iPhones (16 Pro Max, 15 Pro, 14, SE), Android flagships (Galaxy S24, Pixel 8, OnePlus, Xiaomi), iPads & Galaxy Tabs, Foldables (Pixel Fold, Galaxy Fold/Flip), and Ultrawide studio displays.',
    },
    {
      q: 'Is my local code or private browsing data uploaded to external servers?',
      a: 'Never. ScreenShift operates 100% locally on your machine via client-side Chrome APIs. No URLs, code snippets, network tokens, or browser cookies ever leave your device.',
    },
    // {
    //   q: 'Can I test responsive breakpoint transitions on the fly?',
    //   a: 'Yes. You can instantly flip orientations between portrait and landscape, switch between physical bezels and borderless viewports, and jump between breakpoints with instantaneous zero-reload animations.',
    // },
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
      {/* Section Header with Viewport Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A1D36] tracking-tight">
          Got Questions? We Have Answers.
        </h2>
        <p className="text-sm sm:text-base text-[#4A1D36]/80 font-medium">
          Everything you need to know about ScreenShift extension, security, and developer workflows.
        </p>
      </motion.div>

      {/* Accessible Accordion Component with Animated Spring Expansion */}
      <div className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = activeFaqIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className={`bg-[#FFFFFF] rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                ? 'border-[#9D4E7C]/60 shadow-[0_8px_24px_rgba(157,78,124,0.12)]'
                : 'border-[#F3E8EE] shadow-[2px_2px_8px_rgba(157,78,124,0.04)] hover:border-[#E8A0BF]'
                }`}
            >
              <button
                type="button"
                onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#4A1D36] hover:text-[#9D4E7C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D4E7C]"
              >
                <span className="text-base sm:text-lg">{item.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen
                    ? 'bg-[#E8A0BF]/30 border-[#9D4E7C]/40 text-[#9D4E7C]'
                    : 'bg-[#FDF2F8] border-[#F3E8EE] text-[#4A1D36]'
                    }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A1D36]/80 leading-relaxed border-t border-[#F3E8EE]/60">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
