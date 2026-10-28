'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#ECECEE] text-[#121212] pt-16 sm:pt-20 pb-10 border-t border-neutral-300">
      {/* Angled Geometric Background Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute right-0 top-0 h-full w-[75%] sm:w-[58%] text-[#E1E1E4]/90"
          viewBox="0 0 700 600"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <polygon points="260,0 420,0 160,600 0,600" />
          <polygon points="540,0 700,0 440,600 280,600" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Navigation Columns (Left) + Newsletter Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Columns Group (Navigation & Legal) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
          >
            {/* /Navigation Column */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                /Navigation
              </div>
              <div className="h-px bg-neutral-300 w-full mb-3" />
              <ul className="space-y-0 text-sm font-medium text-neutral-800">
                <li className="border-b border-neutral-300/80 py-2.5">
                  <Link
                    href="/#simulator"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    Projects
                  </Link>
                </li>
                <li className="border-b border-neutral-300/80 py-2.5">
                  <Link
                    href="/about"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    About Us
                  </Link>
                </li>
                <li className="border-b border-neutral-300/80 py-2.5">
                  <Link
                    href="/contact"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link
                    href="/devices"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    Devices Matrix
                  </Link>
                </li>
              </ul>
            </div>

            {/* /Legal Column */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                /Legal
              </div>
              <div className="h-px bg-neutral-300 w-full mb-3" />
              <ul className="space-y-0 text-sm font-medium text-neutral-800">
                <li className="border-b border-neutral-300/80 py-2.5">
                  <Link
                    href="/privacy"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-2.5">
                  <Link
                    href="/terms"
                    className="hover:text-black hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    Terms and Condition
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Floating Card: Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-start lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)] border border-neutral-200/90"
            >
              <h3 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#121212] leading-snug">
                <span className="text-[#E12B2B]">Get Special Offer</span> and
                <br />
                Latest Updates
              </h3>

              <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
                New work, process breakdowns, and updates from the ScreenShift team.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <div>
                  <label
                    htmlFor="footer-email"
                    className="block text-xs font-semibold text-neutral-600 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#121212] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#121212] hover:bg-black text-white text-sm font-bold rounded-xl py-3 px-4 flex items-center justify-between shadow-lg shadow-neutral-900/20 active:scale-[0.99] transition-all cursor-pointer group"
                >
                  <span>{subscribed ? 'Subscribed!' : 'Count me in!'}</span>
                  {subscribed ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#E12B2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Section: Get in touch & Giant Typography */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-neutral-300/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="text-xs font-semibold text-neutral-500 mb-1">
                Get in touch
              </div>
              <div className="h-px bg-neutral-300 w-48 mb-3" />
            </div>

            <a
              href="mailto:hello@screenshift.dev"
              className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121212] hover:text-[#E12B2B] tracking-tight transition-colors"
            >
              hello@screenshift.dev
            </a>

            <div className="text-base sm:text-lg font-bold text-neutral-800">
              +123 456 789
            </div>

            {/* Social Icons (Facebook, X, Instagram) */}
            <div className="flex items-center gap-2.5 pt-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl border border-neutral-300 bg-white/70 hover:bg-white flex items-center justify-center text-neutral-800 hover:text-black hover:border-neutral-500 shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl border border-neutral-300 bg-white/70 hover:bg-white flex items-center justify-center text-neutral-800 hover:text-black hover:border-neutral-500 shadow-sm transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-neutral-300 bg-white/70 hover:bg-white flex items-center justify-center text-neutral-800 hover:text-black hover:border-neutral-500 shadow-sm transition-all"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Right: Giant Brand Emblem & Wordmark */}
          <div className="lg:col-span-7 flex items-baseline justify-start lg:justify-end gap-3 sm:gap-4 overflow-hidden select-none">
            <motion.svg
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[#9D4E7C] shrink-0"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="55,0 30,55 52,55 40,100 70,45 48,45" />
            </motion.svg>

            <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-[#4A1D36] leading-none">
              screen<span className="text-[#9D4E7C]">Shift</span>
            </span>
          </div>
        </div>

        {/* Bottom Credits Row */}
        <div className="mt-12 pt-6 border-t border-neutral-300/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-neutral-600">
          <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider">
            <span>©2026 screenShift</span>
            <span>/</span>
            <span className='group'>MADE BY <a href="https://meetrohan.netlify.app/" target="_blank" className='capitalize group-hover:text-red-400 transition-colors' >rohan</a></span>
          </div>

          <div className="text-[11px] font-mono text-neutral-500">
            CHROME EXTENSION MV3 • ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};
