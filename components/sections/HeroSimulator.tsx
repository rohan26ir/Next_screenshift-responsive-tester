
import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ChromeIcon } from '@/components/icons/ChromeIcon';
import { DeviceSpec } from '@/components/data/devices';

export interface HeroSimulatorProps {
  activeDevice?: DeviceSpec;
  onSelectDevice?: (device: DeviceSpec) => void;
  frameRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroSimulator: React.FC<HeroSimulatorProps> = ({ frameRef }) => {
  return (
    <section ref={frameRef as any} className="relative pt-12 pb-24 overflow-hidden" id="simulator">
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-[#E8A0BF]/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_2px_8px_rgba(157,78,124,0.08)] text-xs font-bold text-[#9D4E7C]"
          >
            <Sparkles className="w-4 h-4 text-[#9D4E7C]" />
            <span>Chrome Manifest V3 Extension • 40+ Devices • Instant Localhost Sync</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4A1D36] leading-[1.12]"
          >
            Test responsive designs across{' '}
            <span className="text-[#9D4E7C] bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] bg-clip-text text-transparent">
              40+ realistic devices
            </span>{' '}
            in one click.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#4A1D36]/80 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The realistic mobile simulator for frontend engineers, QA testers, and designers.
            Preview live URLs and <code className="bg-[#E8A0BF]/25 text-[#9D4E7C] px-2 py-0.5 rounded font-mono text-sm font-semibold">localhost</code> with pixel-accurate bezels, touch physics, and instant mockup capture.
          </motion.p>

          {/* Dual Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ChromeIcon}
              iconPosition="left"
              onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
              className="w-full sm:w-auto text-base px-8 py-4 font-bold"
            >
              Install For Chrome
            </Button>

            <Button
              variant="neomorphic"
              size="lg"
              icon={ExternalLink}
              onClick={() => {
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-base px-7 py-4"
            >
              Start 14-Day Free Trial
            </Button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-[#9D4E7C]"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#9D4E7C]" /> No Signup Required
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9D4E7C]" /> 100% Client-Side Privacy
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#9D4E7C]" /> Zero-Config Hot Reload
            </span>
          </motion.div>
        </div>

      </div >
    </section >
  );
};
