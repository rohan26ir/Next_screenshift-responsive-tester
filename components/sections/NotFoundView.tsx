'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Smartphone,
  Sparkles,
  MonitorOff,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#E8A0BF]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl w-full mx-auto text-center space-y-8 relative z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_2px_10px_rgba(157,78,124,0.1)] text-xs font-bold text-[#9D4E7C]"
        >
          <Sparkles className="w-4 h-4 text-[#9D4E7C]" />
          <span>Error 404 • Uncharted Viewport</span>
        </motion.div>

        {/* Central Broken Device Mockup Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-56 sm:w-64 h-36 sm:h-40 rounded-[20px] bg-gradient-to-br from-[#FFFFFF] to-[#FDF2F8] border-2 border-[#E8A0BF]/60 p-2.5 shadow-[0_16px_40px_rgba(157,78,124,0.18)] flex flex-col justify-between overflow-hidden"
        >
          {/* Simulated Hardware Notch / Speaker Bar */}
          <div className="w-20 h-1.5 rounded-full bg-[#4A1D36]/20 mx-auto" />

          {/* Glitch / Resolution Indicator */}
          <div className="space-y-1.5 my-auto">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E8A0BF]/30 text-[#9D4E7C] mx-auto shadow-inner">
              <MonitorOff className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs font-bold text-[#9D4E7C] tracking-wider">
              VIEWPORT: 404 × 0
            </div>
            <div className="text-[11px] font-medium text-[#4A1D36]/70">
              Signal Lost • Route Missing
            </div>
          </div>

          {/* Bottom Virtual Home Indicator Bar */}
          <div className="w-16 h-1 rounded-full bg-[#4A1D36]/25 mx-auto" />
        </motion.div>

        {/* Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#4A1D36] leading-tight">
            Page drifted off canvas.
          </h1>
          <p className="text-base sm:text-lg text-[#4A1D36]/75 max-w-xl mx-auto font-medium leading-relaxed">
            The URL or responsive device profile you were searching for does not exist or may have been relocated.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowLeft}
              iconPosition="left"
              className="w-full sm:w-auto px-7 py-3.5 text-sm"
            >
              Back to Home
            </Button>
          </Link>

          <Link href="/devices" className="w-full sm:w-auto">
            <Button
              variant="neomorphic"
              size="lg"
              icon={Smartphone}
              iconPosition="left"
              className="w-full sm:w-auto px-7 py-3.5 text-sm"
            >
              Explore 40+ Devices
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
