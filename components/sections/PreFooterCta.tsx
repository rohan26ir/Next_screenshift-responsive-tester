'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PreFooterCtaProps {
  onScrollToSimulator: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onScrollToSimulator }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#4A1D36] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#E8A0BF]" />
          <span>Instant Setup • No Sign Up Needed</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-black tracking-tight leading-tight"
        >
          Stop guessing mobile layouts. Test accurately today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto font-medium"
        >
          Join thousands of developers shipping responsive websites with zero surprises. Install ScreenShift directly from the Chrome Web Store in under 10 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="secondary"
              size="lg"
              icon={Sparkles}
              iconPosition="right"
              onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
              className="w-full sm:w-auto px-8 py-4 text-base font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            >
              Launch Free Simulator
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={onScrollToSimulator}
              className="w-full sm:w-auto px-8 py-4 text-base font-extrabold border-white text-white hover:bg-white hover:text-[#9D4E7C]"
            >
              Explore Device Matrix
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
