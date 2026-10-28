'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Video, ChevronDown, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setBudget('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#121212] py-12 sm:py-20 antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Badge, Giant Headline, Subtitle, Prefer a Call Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {/* Top Group */}
            <div className="space-y-6">
              {/* Badge */}
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-400 text-xs font-medium text-neutral-800 tracking-tight">
                  Contact Us
                </span>
              </div>

              {/* Headline with Red Accent Dot */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#121212] leading-[1.06]">
                Let&apos;s work
                <br />
                together<span className="text-[#E12B2B]">.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 max-w-md font-normal leading-relaxed pt-1">
                Tell us what you&apos;re building. We&apos;ll help you test and ship it, fast and properly.
              </p>
            </div>

            {/* Bottom: Prefer a Call Neomorphic Card with generous top gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 sm:mt-28 lg:mt-36 bg-[#EBECEF] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-neutral-300/60 max-w-lg"
            >
              <div>
                <div className="text-sm font-bold text-neutral-900">Prefer a call?</div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Book a 15-min intro call with us.
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setShowCallModal(true)}
                className="bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-bold px-4 py-2.5 rounded-xl border border-neutral-200/90 shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
              >
                <span>Book a Call</span>
                <Video className="w-4 h-4 text-[#E12B2B]" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Neomorphic Outer Container + Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            {/* Outer Grey Frame */}
            <div className="bg-[#EBECEF] p-3 sm:p-4 rounded-[36px] shadow-sm border border-neutral-300/40">
              {/* Inner White Form Container */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 md:p-9 shadow-[0_12px_36px_rgba(0,0,0,0.04)] border border-neutral-200/80">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* Submission Success Feedback */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-neutral-900">
                        We got your message!
                      </h3>
                      <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong>{fullName}</strong>. We will review your inquiry and get back to you at <strong>{email}</strong> within 12 hours.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="bg-neutral-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                        >
                          Send another note
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Contact Form Matching Image Reference */
                    <form key="form" onSubmit={handleSubmit} className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-medium text-neutral-700 mb-2"
                        >
                          Full name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-neutral-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Your Budget / Inquiry */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-medium text-neutral-700 mb-2"
                        >
                          Your budget
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all appearance-none cursor-pointer bg-white"
                          >
                            <option value="">Select budget range</option>
                            <option value="starter">&lt; $50 / Individual Developer Pro</option>
                            <option value="team">$50 - $250 / Small Team (5-10 seats)</option>
                            <option value="studio">$250 - $1,000 / Studio & Product Agency</option>
                            <option value="enterprise">$1,000+ / Custom Enterprise Deployment</option>
                            <option value="device_request">Custom Viewport & Hardware Bezel Request</option>
                            <option value="support">General Developer Support / Feedback</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-medium text-neutral-700 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Let us know about your project..."
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-y"
                        />
                      </div>

                      {/* Submit Button (Black with red diagonal arrow) */}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#0F0F11] hover:bg-black text-white text-sm font-bold rounded-2xl py-3.5 px-6 flex items-center justify-between shadow-[0_12px_28px_rgba(0,0,0,0.22)] active:scale-[0.99] transition-all cursor-pointer group disabled:opacity-70"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Count me in!'}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#E12B2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Book a Call Modal */}
      <AnimatePresence>
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-neutral-200 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E12B2B] flex items-center justify-center mx-auto">
                <Video className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900">
                Book a 15-Minute Intro Call
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Connect with our product engineer to walk through ScreenShift features, custom viewport requests, or agency team licenses.
              </p>

              <div className="p-3 bg-[#EBECEF] rounded-xl text-xs font-mono font-bold text-neutral-800">
                calendar@screenshift.dev
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-neutral-300 text-xs font-bold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="mailto:calendar@screenshift.dev?subject=ScreenShift%2015-min%20Intro%20Call"
                  className="flex-1 py-2.5 rounded-xl bg-[#0F0F11] hover:bg-black text-white text-xs font-bold transition-colors text-center cursor-pointer shadow-md"
                >
                  Confirm Call
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
