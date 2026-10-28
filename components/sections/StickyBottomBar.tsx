'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface StickyBottomBarProps {
  show: boolean;
  onDismiss: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ show, onDismiss }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-auto sm:w-[460px] z-50 bg-[#FFFFFF] rounded-2xl p-4 border border-[#F3E8EE] shadow-[0_12px_40px_rgba(157,78,124,0.22)] flex items-center justify-between gap-3 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center shrink-0 relative">
              <Smartphone className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-[#4A1D36] truncate">
                Ready to test on 40+ devices?
              </div>
              <div className="text-[11px] text-[#9D4E7C] font-medium truncate">
                Chrome Extension • Free & No Sign-up
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="sm"
                icon={Sparkles}
                onClick={() => window.open('https://chromewebstore.google.com', '_blank')}
                className="text-xs px-3.5 py-2 font-bold shadow-sm"
              >
                Launch Free
              </Button>
            </motion.div>
            <button
              type="button"
              onClick={onDismiss}
              className="p-1 rounded-lg text-[#9D4E7C] hover:bg-[#FDF2F8] transition-colors"
              aria-label="Dismiss sticky trigger"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
