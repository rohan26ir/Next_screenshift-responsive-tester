import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Scale,
  Sparkles,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Smartphone,
  ShieldCheck,
  Mail,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions — ScreenShift Chrome Extension',
  description:
    'Terms of Service, software license agreement, and commercial usage conditions for ScreenShift Chrome Extension and web services.',
};

export default function TermsAndConditionsPage() {
  const lastUpdated = 'October 27, 2026';

  const termsHighlights = [
    {
      category: 'Commercial Rights',
      title: 'Agency & Commercial License',
      description:
        'Use ScreenShift for client deliverables, agency projects, portfolio mockups, and internal QA testing with zero royalty fees.',
      badge: '100% Commercial',
      icon: Scale,
    },
    {
      category: 'Export Ownership',
      title: 'Full Mockup IP Ownership',
      description:
        'High-resolution composite screenshots and device mockup PNG files generated with ScreenShift are 100% owned by you without requiring attribution.',
      badge: 'Full IP Rights',
      icon: Sparkles,
    },
    {
      category: 'Customer Guarantee',
      title: '14-Day Money-Back Guarantee',
      description:
        'Full 14-day risk-free refund guarantee on all ScreenShift Pro and Team subscription licenses with instant self-service cancellation.',
      badge: 'Risk Free',
      icon: CreditCard,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FDF2F8] text-[#4A1D36] py-16 sm:py-24 overflow-hidden">
      {/* Background Radial Glow matching HeroSimulator */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-b from-[#E8A0BF]/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================= */}
        {/* HERO SECTION (Matching HeroSimulator / PricingSection)    */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Badge Pill matching Home Page */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F3E8EE] shadow-[0_2px_8px_rgba(157,78,124,0.08)] text-xs font-bold text-[#9D4E7C]">
            <Scale className="w-4 h-4 text-[#9D4E7C]" />
            <span>Developer Software License &amp; Agreement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4A1D36] leading-[1.12]">
            ScreenShift{' '}
            <span className="text-[#9D4E7C] bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] bg-clip-text text-transparent">
              Terms &amp; Conditions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A1D36]/80 font-medium leading-relaxed">
            Please review these terms governing your download, installation, and commercial or personal use of the ScreenShift Chrome Extension and related web services.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#4A1D36]/70">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F3E8EE]">
              <Sparkles className="w-3.5 h-3.5 text-[#9D4E7C]" />
              Commercial Use Allowed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F3E8EE]">
              Effective Date: <strong className="text-[#9D4E7C] font-bold">{lastUpdated}</strong>
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3 HIGHLIGHT CARDS (Matching FeatureMatrix Bento Row)       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {termsHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FFFFFF] rounded-2xl border border-[#F3E8EE] p-6 sm:p-7 shadow-[3px_3px_12px_rgba(157,78,124,0.06),-3px_-3px_12px_#FFFFFF] hover:shadow-[0_12px_28px_rgba(157,78,124,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#E8A0BF]/30 text-[#9D4E7C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9D4E7C] bg-[#FDF2F8] px-2.5 py-1 rounded-full border border-[#F3E8EE]">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A1D36] tracking-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4A1D36]/80 mt-1.5 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* STRUCTURED LEGAL TERMS SECTIONS (Matching Home Card)      */}
        {/* ========================================================= */}
        <article className="bg-[#FFFFFF] rounded-3xl border border-[#F3E8EE] p-6 sm:p-12 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-10 text-sm sm:text-base leading-relaxed text-[#4A1D36]/80 font-medium">
          {/* Section 1: Acceptance of Terms */}
          <section className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 1</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By installing, downloading, adding to Google Chrome, accessing, or using the <strong>ScreenShift – Responsive Mobile Simulator</strong> browser extension or visiting our website (collectively, the &quot;Software&quot; or &quot;Services&quot;), you agree to be legally bound by these Terms and Conditions (&quot;Terms&quot;).
            </p>
            <p>
              If you are entering into this agreement on behalf of an organization, enterprise, or company, you represent and warrant that you possess the authority to bind such entity to these Terms. If you do not agree to all provisions contained herein, you must immediately uninstall and discontinue using ScreenShift.
            </p>
          </section>

          {/* Section 2: Description of Service */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Section 2</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              2. Description of Service &amp; Local Execution
            </h2>
            <p>
              ScreenShift is a developer productivity utility engineered to facilitate responsive web design testing, mobile emulation, and user interface inspection. ScreenShift renders authentic device hardware frames (such as Dynamic Islands, camera notches, and display bezels), dispatches synthetic TouchEvents, and enables localhost web development preview.
            </p>
            <p>
              ScreenShift functions strictly within your local browser environment. The Software does not transmit, host, proxy, or mirror your target websites through external third-party servers.
            </p>
          </section>

          {/* Section 3: License Grant & Tiers (Cards matching PricingSection) */}
          <section id="license-tiers" className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
                <Scale className="w-3.5 h-3.5" />
                <span>Section 3</span>
              </div>
              <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
                3. License Grant &amp; Tiers
              </h2>
              <p className="text-xs sm:text-sm text-[#4A1D36]/70">
                Subject to your compliance with these Terms, ScreenShift grants you a non-exclusive, non-transferable, revocable license to utilize the Software according to your designated tier:
              </p>
            </div>

            {/* License Tiers Grid matching Home Page Pricing style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#FDF2F8] p-5 rounded-2xl border border-[#F3E8EE] space-y-2">
                <div className="font-bold text-sm text-[#4A1D36]">Community (Free)</div>
                <div className="text-xs text-[#4A1D36]/80 leading-relaxed">
                  Single-user personal and open-source testing on 15+ core viewports and localhost development servers.
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-5 rounded-2xl border-2 border-[#9D4E7C] shadow-[0_4px_16px_rgba(157,78,124,0.12)] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[#9D4E7C]">Pro Tier</div>
                  <span className="text-[10px] font-bold text-[#9D4E7C] bg-[#FDF2F8] px-2 py-0.5 rounded-full border border-[#F3E8EE]">Popular</span>
                </div>
                <div className="text-xs text-[#4A1D36]/80 leading-relaxed">
                  Commercial web development, 40+ devices, framed 2x/3x PNG exports, synchronized scrolling, and custom viewports.
                </div>
              </div>

              <div className="bg-[#FDF2F8] p-5 rounded-2xl border border-[#F3E8EE] space-y-2">
                <div className="font-bold text-sm text-[#4A1D36]">Team / Studio</div>
                <div className="text-xs text-[#4A1D36]/80 leading-relaxed">
                  Multi-seat agency usage, centralized team billing, custom device collections, and priority support.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Network Headers & Localhost Rules */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <Layers className="w-3.5 h-3.5" />
              <span>Section 4</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              4. Network Headers &amp; Localhost Rules
            </h2>
            <p>
              To permit iframe rendering of local dev servers (e.g. Next.js, Vite, Remix, or Astro running on <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] text-xs border border-[#F3E8EE]">localhost:3000</code>), ScreenShift utilizes Chrome Extension Manifest V3 <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] text-xs border border-[#F3E8EE]">declarativeNetRequest</code> rules to strip restrictive <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] text-xs border border-[#F3E8EE]">X-Frame-Options</code> and frame-ancestors headers on designated development ports.
            </p>
            <p>
              You agree not to modify the extension rules to bypass security policies on unauthorized third-party production websites without express owner authorization.
            </p>
          </section>

          {/* Section 5: Ownership of Code & Mockup Exports */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 5</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              5. Ownership of Code &amp; Mockup Exports
            </h2>
            <p>
              <strong>Your Code Belongs to You:</strong> ScreenShift claims zero intellectual property rights, copyright, or ownership over websites, client projects, codebases, or URLs inspected via the extension.
            </p>
            <p>
              <strong>Export Rights:</strong> High-resolution composite screenshots and mockup PNG files generated using the ScreenShift camera export feature are 100% owned by you. You may publish, display, market, and monetize these mockups freely without requiring attribution.
            </p>
            <p>
              ScreenShift retains all right, title, and interest in and to the extension code, user interface designs, logo marks, and proprietary device simulation algorithms.
            </p>
          </section>

          {/* Section 6: Subscription Billing & 14-Day Refund Policy */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Section 6</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              6. Billing, Cancellation, &amp; 14-Day Refund Policy
            </h2>
            <p>
              <strong>Subscriptions:</strong> Pro and Team licenses are billed on an automated recurring basis (either monthly or annually, as selected during checkout). Payments are securely handled via our authorized payment processor (Stripe).
            </p>
            <p>
              <strong>Self-Serve Cancellation:</strong> You may cancel your subscription at any time from your customer portal. Upon cancellation, your access remains active until the end of your prepaid billing period with no subsequent charges.
            </p>
            <p>
              <strong>14-Day Money-Back Guarantee:</strong> If ScreenShift does not fit your responsive development workflow, you may contact <a href="mailto:hello@screenshift.dev" className="text-[#9D4E7C] hover:text-[#8A3F6C] font-bold underline">hello@screenshift.dev</a> within 14 days of your initial purchase for a full, unconditional refund.
            </p>
          </section>

          {/* Section 7: Prohibited Uses */}
          <section className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="bg-[#FDF2F8] p-6 sm:p-8 rounded-2xl border border-[#F3E8EE] space-y-3">
              <div className="flex items-center gap-2 text-[#9D4E7C] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Section 7: Acceptable Use Policy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#4A1D36]">
                7. Prohibited Uses
              </h2>
              <p className="text-xs sm:text-sm text-[#4A1D36]/80">You agree not to engage in any of the following prohibited behaviors:</p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4A1D36]/80 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4E7C] font-bold">&bull;</span>
                  <span>Reverse engineering, decompiling, or attempting to extract the source algorithms of ScreenShift Pro features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4E7C] font-bold">&bull;</span>
                  <span>Reselling, sublicensing, or redistributing ScreenShift license keys to unauthorized third parties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4E7C] font-bold">&bull;</span>
                  <span>Utilizing the extension to inject malicious scripts, adware, or fraudulent automated clicks into third-party web domains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4E7C] font-bold">&bull;</span>
                  <span>Interfering with or disrupting the integrity or delivery of the Chrome extension services.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Disclaimer of Warranties */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Section 8</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              8. Disclaimer of Warranties
            </h2>
            <p>
              SCREENSHIFT IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. WE DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              While ScreenShift accurately replicates hardware viewports, pixel ratios, and touch events based on published manufacturer hardware specifications, we do not warrant that simulated web rendering will identical-match 100% of vendor-specific hardware rendering bugs or browser quirks.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 9</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              9. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL SCREENSHIFT, ITS AFFILIATES, OFFICERS, OR DEVELOPERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, CODE INTEGRITY, OR GOODWILL) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE.
            </p>
            <p>
              Our total aggregate liability under these Terms shall not exceed the amount actually paid by you to ScreenShift during the twelve (12) months preceding the claim.
            </p>
          </section>

          {/* Section 10: Governing Law & Contact Box (PreFooterCta Style) */}
          <section className="space-y-6 border-t border-[#F3E8EE] pt-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
                <span>Section 10</span>
              </div>
              <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </div>

            <div className="bg-[#4A1D36] text-white p-7 sm:p-9 rounded-2xl border border-[#9D4E7C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E8A0BF] uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  <span>Legal &amp; Licensing Inquiries</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Have questions regarding our software terms?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                  Reach out to our legal and customer success team at hello@screenshift.dev or submit an inquiry through our Contact Page.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="mailto:hello@screenshift.dev"
                  className="bg-[#9D4E7C] hover:bg-[#8A3F6C] text-white rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@screenshift.dev</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Contact Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
