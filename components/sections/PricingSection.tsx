'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF2F8] text-xs font-bold text-[#9D4E7C] border border-[#F3E8EE]">
            <Sparkles className="w-4 h-4 text-[#9D4E7C]" />
            <span>Transparent & Developer Friendly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A1D36] tracking-tight">
            Start Free, Upgrade for Power Features
          </h2>
          <p className="text-base text-[#4A1D36]/80">
            Install the community extension for essential testing, or unlock full multi-device synchronization and QA exports with Pro.
          </p>

          {/* Interactive Billing Toggle with Animated Sliding Pill */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="bg-[#FDF2F8] p-1.5 rounded-2xl border border-[#F3E8EE] flex items-center relative">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-4 py-1.5 rounded-xl text-xs font-bold transition-colors z-10 ${billingCycle === 'monthly' ? 'text-white' : 'text-[#4A1D36]/70 hover:text-[#4A1D36]'
                  }`}
              >
                {billingCycle === 'monthly' && (
                  <motion.div
                    layoutId="billing-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-[#9D4E7C] rounded-xl -z-10 shadow-sm"
                  />
                )}
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`relative px-4 py-1.5 rounded-xl text-xs font-bold transition-colors z-10 flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-[#4A1D36]/70 hover:text-[#4A1D36]'
                  }`}
              >
                {billingCycle === 'annual' && (
                  <motion.div
                    layoutId="billing-pill"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    className="absolute inset-0 bg-[#9D4E7C] rounded-xl -z-10 shadow-sm"
                  />
                )}
                <span>Annual</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${billingCycle === 'annual'
                      ? 'bg-white text-[#9D4E7C]'
                      : 'bg-[#E8A0BF]/50 text-[#9D4E7C]'
                    }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Community Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-[#FDF2F8] rounded-3xl p-8 border border-[#F3E8EE] shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-md"
          >
            <div>
              <h3 className="text-xl font-bold text-[#4A1D36]">Community</h3>
              <p className="text-xs text-[#4A1D36]/70 mt-1">For hobbyists and casual testing</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-[#4A1D36]">$0</span>
                <span className="text-xs font-semibold text-[#4A1D36]/70">forever free</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-[#4A1D36]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> 15+ Core Mobile & Tablet Presets
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Localhost & Live URL Testing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Synthetic Touch Events
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Portrait & Landscape Toggles
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F3E8EE]">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
                >
                  Install Extension Free
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Pro Tier (Featured / High Contrast Highlight) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-[#FFFFFF] rounded-3xl p-8 border-2 border-[#9D4E7C] shadow-[0_16px_40px_rgba(157,78,124,0.18)] relative flex flex-col justify-between -translate-y-2 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(157,78,124,0.25)]"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9D4E7C] text-white text-xs font-bold uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#4A1D36]">ScreenShift Pro</h3>
              <p className="text-xs text-[#4A1D36]/70 mt-1">For frontend engineers & QA teams</p>
              <div className="mt-6 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-black text-[#9D4E7C]"
                  >
                    {billingCycle === 'annual' ? '$9' : '$12'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs font-semibold text-[#4A1D36]/70">
                  {billingCycle === 'annual' ? '/ month (billed annually)' : '/ month (billed monthly)'}
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-[#4A1D36]">
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> All 40+ Devices (Foldables & Ultrawide)
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> One-Click Framed Screenshot Exports
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Multi-Device Synchronized Scrolling
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Custom Resolution & DPR Overrides
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Priority Feature Updates
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F3E8EE]">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={Sparkles}
                  iconPosition="right"
                  onClick={() => alert('Starting 14-Day Free Pro Trial!')}
                >
                  Start 14-Day Free Trial
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Team Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="bg-[#FDF2F8] rounded-3xl p-8 border border-[#F3E8EE] shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-md"
          >
            <div>
              <h3 className="text-xl font-bold text-[#4A1D36]">Team / Studio</h3>
              <p className="text-xs text-[#4A1D36]/70 mt-1">For agencies and product organizations</p>
              <div className="mt-6 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-black text-[#4A1D36]"
                  >
                    {billingCycle === 'annual' ? '$29' : '$36'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs font-semibold text-[#4A1D36]/70">
                  {billingCycle === 'annual' ? '/ month for 5 seats (annual)' : '/ month for 5 seats'}
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-[#4A1D36]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Everything in Pro for all team members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Shared Preset Collections
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Centralized Billing & Seat Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9D4E7C] shrink-0" /> Dedicated Support Slack Channel
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F3E8EE]">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={() => alert('Contacting ScreenShift Enterprise Sales!')}
                >
                  Contact Team Sales
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
