'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Code2,
  Users,
  Globe,
  Lock,
  HeartHandshake,
  Compass,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { PreFooterCta } from '@/components/sections/PreFooterCta';

export const AboutUsView: React.FC = () => {
  const router = useRouter();
  const stats = [
    { value: '45,000+', label: 'Active Developers', note: 'Daily testing workflows' },
    { value: '180+', label: 'Countries Reached', note: 'Global community' },
    { value: '40+', label: 'Device Silhouettes', note: '1:1 hardware accuracy' },
    { value: '0ms', label: 'Localhost Latency', note: 'Local-first execution' },
  ];

  const values = [
    {
      icon: Cpu,
      category: 'Pixel Precision',
      title: 'Hardware-Faithful Emulation',
      description:
        'Generic resize bars ignore physical hardware. ScreenShift renders real device viewports with exact Retina DPR scaling, Dynamic Island safe-areas, and authentic corner squircles.',
      badge: '1:1 Fidelity',
    },
    {
      icon: Zap,
      category: 'Speed & Ergonomics',
      title: 'Zero-Latency Localhost First',
      description:
        'No spinning up slow remote cloud VMs or waiting for emulators to boot. ScreenShift runs directly in your Chrome browser on localhost:3000, Vite, Next.js, and staging with instant fast refresh.',
      badge: '0ms Overhead',
    },
    {
      icon: Lock,
      category: 'Privacy by Architecture',
      title: '100% Local, Zero Data Telemetry',
      description:
        'Your code, secret staging environments, and client mockups never touch our servers. All frame manipulations, screenshot stitching, and tests execute 100% client-side on your own machine.',
      badge: 'Zero Tracking',
    },
    {
      icon: Code2,
      category: 'Developer Focused',
      title: 'Built by Engineers for Engineers',
      description:
        'From instant keyboard orientation shortcuts to copy-ready CSS media queries, Tailwind config breakpoints, and framed composite PNG exports for GitHub PRs, every tool speeds up your workflow.',
      badge: 'Dev Native',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'The Spark',
      description:
        'Born out of frustration when responsive sites broke under the new iPhone Dynamic Island and high-DPR screens that generic browser devtools failed to detect.',
    },
    {
      year: '2024',
      title: 'ScreenShift v1 Launch',
      description:
        'Released to the Chrome Web Store. Grew organically through word of mouth among frontend developers seeking 1-click framed screenshots.',
    },
    {
      year: '2025',
      title: 'Global Community',
      description:
        'Surpassed 25,000 active developers. Added dual-screen foldable simulation, tablet canvas modes, and advanced TouchEvent synthesis.',
    },
    {
      year: '2026',
      title: 'The Modern Device Lab',
      description:
        'Expanded to 40+ hardware silhouettes, dynamic safe-area rotation recalculations, and transparent PNG composite exports for production-grade design QA.',
    },
  ];

  const personas = [
    {
      role: 'Frontend Engineers',
      sub: 'Next.js, Vite, React & Tailwind',
      points: [
        'Test breakpoints without dragging clumsy browser windows',
        'Verify CSS env(safe-area-inset) for notch compatibility',
        'Copy-paste tailored Tailwind and CSS media queries',
      ],
    },
    {
      role: 'UI/UX & Product Designers',
      sub: 'Figma to Code Reviewers',
      points: [
        'Validate typography scale on real Retina display ratios',
        'Export clean composite mockup PNGs for presentations',
        'Audit mobile ergonomics, reachability, and tap targets',
      ],
    },
    {
      role: 'QA & Agency Teams',
      sub: 'Cross-Device Deliverables',
      points: [
        'Deliver verified responsive builds across 40+ viewports',
        'Attach framed bug reports directly into Jira or GitHub PRs',
        'Zero setup required for client staging environments',
      ],
    },
  ];

  return (
    <div className="bg-[#FDF2F8] text-[#4A1D36] relative selection:bg-[#E8A0BF]/30 selection:text-[#9D4E7C]">
      {/* ========================================================= */}
      {/* SECTION 1: HERO STORY & METRICS (Sticks at top-20)        */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-10 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 sm:py-16 overflow-hidden">
        {/* Ambient Top Glow matching HeroSimulator */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#E8A0BF]/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 sm:space-y-12">
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_2px_8px_rgba(157,78,124,0.08)] text-xs font-bold text-[#9D4E7C]"
            >
              <Sparkles className="w-4 h-4 text-[#9D4E7C]" />
              <span>The Team &amp; Mission Behind ScreenShift</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4A1D36] leading-[1.12]"
            >
              Empowering developers to build for{' '}
              <span className="text-[#9D4E7C] bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] bg-clip-text text-transparent">
                every screen on Earth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#4A1D36]/80 font-medium leading-relaxed max-w-3xl mx-auto"
            >
              We created ScreenShift to eliminate the friction of modern responsive device fragmentation.
              No expensive cloud device farms, no inaccurate resize handles—just instant, 1:1 hardware simulation right inside your browser.
            </motion.p>

            {/* Quick Action Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/devices"
                className="inline-flex items-center gap-2 bg-[#9D4E7C] hover:bg-[#8A3F6C] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-[0_4px_14px_rgba(157,78,124,0.3)] transition-all cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore Device Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FDF2F8] text-[#4A1D36] border border-[#F3E8EE] px-6 py-3 rounded-xl font-bold text-sm shadow-[2px_2px_8px_rgba(157,78,124,0.08),-2px_-2px_8px_#FFFFFF] transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#9D4E7C]" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Counter Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-[#F3E8EE] p-5 sm:p-6 shadow-[0_4px_20px_rgba(157,78,124,0.06)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#9D4E7C] tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-[#4A1D36] mt-1 block">
                    {stat.label}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#4A1D36]/60 mt-3 pt-2 border-t border-[#F3E8EE]">
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THE PROBLEM & WHY WE BUILT THIS (Overtakes 1)  */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-20 bg-[#FFFFFF] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 sm:py-16 shadow-[0_-14px_40px_rgba(157,78,124,0.08)] border-t border-[#F3E8EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Story Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#F3E8EE]">
                <Compass className="w-3.5 h-3.5" />
                <span>The Origin Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#4A1D36] tracking-tight leading-tight">
                Why traditional responsive testing leaves critical bugs hidden.
              </h2>
              <p className="text-sm sm:text-base text-[#4A1D36]/80 leading-relaxed font-medium">
                In 2023, while shipping modern web applications for clients, our team kept stumbling upon mobile bugs that standard Chrome DevTools simply couldn’t reproduce.
              </p>
              <p className="text-sm sm:text-base text-[#4A1D36]/80 leading-relaxed font-medium">
                Fixed headers clipped behind the iPhone Dynamic Island, touch carousels stuttered because synthetic click events didn’t match real finger inertia, and 3x Retina DPR caused canvas blurriness that only appeared on physical devices.
              </p>
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#FDF2F8] border border-[#F3E8EE] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#4A1D36]/90 font-semibold leading-relaxed">
                    ScreenShift bridges this gap: giving developers 1:1 hardware silhouettes, accurate DPR scaling, and orientation safe-area recalculations directly in their browser.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Visuals */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-4">
              {/* Outdated Approach */}
              <div className="bg-[#FAF5F8] p-5 sm:p-6 rounded-2xl border border-[#F3E8EE] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#4A1D36]/70">
                  <span>The Outdated Approach</span>
                  <span className="text-rose-600 font-mono">Traditional DevTools</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-rose-200 text-xs font-mono text-neutral-600 space-y-1.5">
                  <div className="flex items-center justify-between text-rose-600 font-bold">
                    <span>Generic Viewport Bar</span>
                    <span>✕ No Hardware Insets</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-normal">
                    Flat rectangular box, ignores notch safe-areas, stuck with 1x pixel ratio, and rigid mouse clicks without touch inertia.
                  </p>
                </div>
              </div>

              {/* The ScreenShift Approach */}
              <div className="bg-gradient-to-br from-[#9D4E7C]/10 to-[#E8A0BF]/10 p-5 sm:p-6 rounded-2xl border border-[#9D4E7C]/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#4A1D36]">
                  <span className="flex items-center gap-1.5 text-[#9D4E7C]">
                    <Sparkles className="w-4 h-4" />
                    <span>The ScreenShift Approach</span>
                  </span>
                  <span className="text-emerald-600 font-mono font-bold">1:1 Hardware Precision</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#9D4E7C]/20 text-xs font-mono text-[#4A1D36] space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between text-[#9D4E7C] font-bold">
                    <span>Dynamic Hardware Bezels</span>
                    <span>✓ 40+ Exact Silhouettes</span>
                  </div>
                  <p className="text-[11px] text-[#4A1D36]/80 leading-normal">
                    Authentic squircle curves, physical Dynamic Island safe area offsets, multi-DPR Retina rendering, and native TouchEvent inertia streams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: CORE ENGINEERING VALUES (Overtakes 2)          */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-30 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 sm:py-16 shadow-[0_-14px_40px_rgba(157,78,124,0.08)] border-t border-[#F3E8EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-white px-3 py-1 rounded-full border border-[#F3E8EE]">
              <Cpu className="w-3.5 h-3.5" />
              <span>Architectural Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4A1D36] tracking-tight">
              Our Core Engineering Values
            </h2>
            <p className="text-sm sm:text-base text-[#4A1D36]/70 font-medium">
              Every feature in ScreenShift is guided by four foundational commitments to web developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#F3E8EE] p-6 sm:p-7 shadow-[0_6px_24px_rgba(157,78,124,0.06)] hover:shadow-[0_12px_28px_rgba(157,78,124,0.1)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#FDF2F8] border border-[#F3E8EE] flex items-center justify-center text-[#9D4E7C] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#9D4E7C] bg-[#FDF2F8] px-2.5 py-0.5 rounded-full border border-[#F3E8EE]">
                        {val.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9D4E7C]">
                        {val.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#4A1D36] tracking-tight mt-0.5">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A1D36]/80 mt-1.5 leading-relaxed font-normal">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: EVOLUTION TIMELINE (Overtakes 3)                */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-40 bg-[#FFFFFF] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 sm:py-16 shadow-[0_-14px_40px_rgba(157,78,124,0.08)] border-t border-[#F3E8EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#F3E8EE]">
              <Rocket className="w-3.5 h-3.5" />
              <span>Evolution Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4A1D36] tracking-tight">
              From a developer itch to global extension.
            </h2>
            <p className="text-sm text-[#4A1D36]/70 font-medium">
              How our obsession with responsive precision evolved into a laboratory used by 45,000+ teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FDF2F8]/80 border border-[#F3E8EE] flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div>
                  <span className="text-3xl font-mono font-black text-[#9D4E7C] block">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-[#4A1D36] mt-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#4A1D36]/80 mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="h-1 w-12 bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: WHO USES SCREENSHIFT (Overtakes 4)              */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-50 bg-[#FDF2F8] will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 sm:py-16 shadow-[0_-14px_40px_rgba(157,78,124,0.08)] border-t border-[#F3E8EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-white px-3 py-1 rounded-full border border-[#F3E8EE]">
              <Users className="w-3.5 h-3.5" />
              <span>Target Audiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4A1D36] tracking-tight">
              Designed for High-Velocity Teams
            </h2>
            <p className="text-sm text-[#4A1D36]/70 font-medium">
              See how ScreenShift fits effortlessly into modern digital product workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#F3E8EE] p-6 sm:p-7 shadow-[0_8px_30px_rgba(157,78,124,0.06)] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#4A1D36]">
                      {p.role}
                    </h3>
                    <p className="text-xs font-mono text-[#9D4E7C] font-semibold mt-0.5">
                      {p.sub}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#4A1D36]/85 font-medium">
                    {p.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#9D4E7C] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: PRE-FOOTER CTA TAKEOVER (Instant Setup Cta)    */}
      {/* ========================================================= */}
      <section className="sticky top-20 z-[60] bg-[#4A1D36] text-white will-change-transform min-h-[calc(100vh-5rem)] flex flex-col justify-center shadow-[0_-20px_50px_rgba(74,29,54,0.4)]">
        <PreFooterCta onScrollToSimulator={() => router.push('/devices')} />
      </section>
    </div>
  );
};
