'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isHighContrast?: boolean;
  onToggleContrast?: () => void;
  onOpenSimulator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isHighContrast: controlledHighContrast,
  onToggleContrast,
  onOpenSimulator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [internalContrast, setInternalContrast] = useState<boolean>(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const saved = sessionStorage.getItem('screenshift-contrast');
      if (saved === 'standard') {
        setInternalContrast(false);
        document.documentElement.classList.remove('contrast-125');
      } else {
        // Initial state is always High-Contrast Mode
        setInternalContrast(true);
        document.documentElement.classList.add('contrast-125');
        sessionStorage.setItem('screenshift-contrast', 'high');
        try {
          localStorage.removeItem('screenshift-contrast');
        } catch {
          // ignore
        }
      }
    }
  }, []);

  const isContrastActive =
    controlledHighContrast !== undefined ? controlledHighContrast : internalContrast;

  const handleToggle = () => {
    if (onToggleContrast) {
      onToggleContrast();
    } else {
      setInternalContrast((prev) => {
        const next = !prev;
        if (typeof document !== 'undefined') {
          if (next) {
            document.documentElement.classList.add('contrast-125');
            sessionStorage.setItem('screenshift-contrast', 'high');
          } else {
            document.documentElement.classList.remove('contrast-125');
            sessionStorage.setItem('screenshift-contrast', 'standard');
          }
        }
        return next;
      });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#FDF2F8]/90 backdrop-blur-md border-b border-[#F3E8EE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with screenShift Mauve/Slate Tokens (SPA Client Navigation) */}
        <Link href="/" title="screenShift" aria-label="screenShift" className="flex items-center gap-2 group focus:outline-none">
          <motion.svg
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-6 h-6 text-[#9D4E7C] shrink-0"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon points="55,0 30,55 52,55 40,100 70,45 48,45" />
          </motion.svg>
          <span className="font-extrabold text-2xl tracking-tighter text-[#4A1D36]">
            screen<span className="text-[#9D4E7C]">Shift</span>
          </span>
        </Link>

        {/* Desktop Navigation: 3 Extension Menus + Mode Toggle + Contact & GitHub Repo Buttons */}
        <div className="hidden md:flex items-center gap-8">
          {/* 3 Core Extension Menus */}
          <nav className="flex items-center gap-7 text-sm font-semibold text-[#4A1D36]/80">
            <Link
              href="/devices"
              className="hover:text-[#9D4E7C] transition-colors relative group py-1"
            >
              Devices
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9D4E7C] group-hover:w-full transition-all duration-200" />
            </Link>
            <Link
              href="/#features"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('features');
                }
              }}
              className="hover:text-[#9D4E7C] transition-colors relative group py-1"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9D4E7C] group-hover:w-full transition-all duration-200" />
            </Link>
            <Link
              href="/about"
              className="hover:text-[#9D4E7C] transition-colors relative group py-1"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9D4E7C] group-hover:w-full transition-all duration-200" />
            </Link>
          </nav>

          {/* Action Items Group */}
          <div className="flex items-center gap-2.5">
            {/* Mode Toggle Button (Icon Only, No Text) */}
            <motion.button
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={handleToggle}
              aria-label="Toggle theme contrast"
              title={isContrastActive ? 'Switch to Standard Mode' : 'Switch to High-Contrast Mode'}
              className="w-10 h-10 rounded-xl bg-[#FFFFFF] hover:bg-[#FDF2F8] text-[#4A1D36] hover:text-[#9D4E7C] border border-[#F3E8EE] shadow-[2px_2px_8px_rgba(157,78,124,0.08),-2px_-2px_8px_#FFFFFF] flex items-center justify-center transition-colors cursor-pointer"
            >
              <motion.div
                key={isContrastActive ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                {isContrastActive ? (
                  <Sun className="w-4 h-4 text-[#9D4E7C]" />
                ) : (
                  <Moon className="w-4 h-4 text-[#4A1D36]" />
                )}
              </motion.div>
            </motion.button>

            {/* Contact Button (Next.js Link for instant SPA routing) */}
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="bg-[#FFFFFF] hover:bg-[#FDF2F8] text-[#4A1D36] border border-[#F3E8EE] rounded-xl px-4 py-2 text-sm font-semibold shadow-[2px_2px_8px_rgba(157,78,124,0.08),-2px_-2px_8px_#FFFFFF] transition-all cursor-pointer inline-block"
              >
                Contact
              </Link>
            </motion.div>

            {/* GitHub Repo Button */}
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9D4E7C] hover:bg-[#8A3F6C] text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-[0_4px_14px_rgba(157,78,124,0.3)] flex items-center gap-2 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Hamburger & Mode Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleToggle}
            aria-label="Toggle theme contrast"
            className="p-2 rounded-xl border border-[#F3E8EE] bg-white text-[#4A1D36] hover:bg-[#FDF2F8] transition-colors"
          >
            {isContrastActive ? (
              <Sun className="w-4 h-4 text-[#9D4E7C]" />
            ) : (
              <Moon className="w-4 h-4 text-[#4A1D36]" />
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#F3E8EE] bg-white text-[#4A1D36] hover:bg-[#FDF2F8] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#9D4E7C]" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden border-b border-[#F3E8EE] bg-white px-6 py-6 flex flex-col gap-4 shadow-xl overflow-hidden"
          >
            <Link
              href="/devices"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#4A1D36] hover:text-[#9D4E7C]"
            >
              Devices
            </Link>
            <Link
              href="/#features"
              onClick={() => scrollToSection('features')}
              className="text-base font-semibold text-[#4A1D36] hover:text-[#9D4E7C]"
            >
              Features
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#4A1D36] hover:text-[#9D4E7C]"
            >
              About
            </Link>

            <div className="pt-4 border-t border-[#F3E8EE] flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#FFFFFF] text-[#4A1D36] border border-[#F3E8EE] rounded-xl py-2.5 text-sm font-semibold shadow-sm hover:bg-[#FDF2F8]"
              >
                Contact
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#9D4E7C] hover:bg-[#8A3F6C] text-white rounded-xl py-2.5 text-sm font-semibold shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub Repo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
