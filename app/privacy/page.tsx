import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  ServerOff,
  CheckCircle2,
  Mail,
  FileText,
  KeyRound,
  Trash2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — ScreenShift Chrome Extension',
  description:
    'ScreenShift Chrome Extension privacy policy, data handling practices, and Google Chrome Web Store Developer Policy compliance disclosures.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 27, 2026';

  const privacyHighlights = [
    {
      category: 'Client Sandbox',
      title: '100% Client-Side Execution',
      description:
        'All viewport transformations, resolution scaling, and touch gestures run directly within your browser. Zero website data is routed through external servers.',
      badge: '0 Remote Servers',
      icon: ServerOff,
    },
    {
      category: 'Telemetry Free',
      title: 'Zero Tracking or Analytics',
      description:
        'We do not inject tracking pixels, Google Analytics, behavioral session recorders, or background beacons into your inspected localhost tabs.',
      badge: '0 Trackers',
      icon: EyeOff,
    },
    {
      category: 'Data Ownership',
      title: 'No Data Selling or Renting',
      description:
        'We never sell, broker, rent, or transfer your browsing history, cookies, or localhost credentials to advertisers or data brokers.',
      badge: '100% Private',
      icon: Lock,
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
            <ShieldCheck className="w-4 h-4 text-[#9D4E7C]" />
            <span>Google Chrome Web Store Verified Policy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4A1D36] leading-[1.12]">
            ScreenShift{' '}
            <span className="text-[#9D4E7C] bg-gradient-to-r from-[#9D4E7C] to-[#E8A0BF] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A1D36]/80 font-medium leading-relaxed">
            ScreenShift is built with privacy-by-design. We do not collect, transmit, sell, or monetize your personal data, localhost URLs, or client source code.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-[#4A1D36]/70">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F3E8EE]">
              <Sparkles className="w-3.5 h-3.5 text-[#9D4E7C]" />
              Manifest V3 Compliant
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
          {privacyHighlights.map((item, idx) => {
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
        {/* STRUCTURED LEGAL POLICY SECTIONS (Matching Home Card)     */}
        {/* ========================================================= */}
        <article className="bg-[#FFFFFF] rounded-3xl border border-[#F3E8EE] p-6 sm:p-12 shadow-[0_8px_30px_rgba(157,78,124,0.08)] space-y-10 text-sm sm:text-base leading-relaxed text-[#4A1D36]/80 font-medium">
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 1</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              1. Introduction &amp; Single-Purpose Statement
            </h2>
            <p>
              This Privacy Policy applies to the <strong>ScreenShift – Responsive Mobile Simulator</strong> browser extension (&quot;Extension&quot;), created for web developers, designers, and QA engineers to preview responsive viewports and test localhost servers.
            </p>
            <p>
              In strict accordance with Google&apos;s Single Purpose policy, ScreenShift has a single function: <strong>to simulate responsive mobile and desktop screen sizes with authentic device hardware frames and synthetic touch events for user-inspected web pages.</strong>
            </p>
            <p>
              ScreenShift does not inject advertisements, redirect user searches, harvest credentials, or execute background data mining.
            </p>
          </section>

          {/* Section 2: Permissions Justification Table */}
          <section id="manifest-permissions" className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
                <KeyRound className="w-3.5 h-3.5" />
                <span>Section 2</span>
              </div>
              <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
                2. Manifest V3 Permissions &amp; Technical Justification
              </h2>
              <p className="text-xs sm:text-sm text-[#4A1D36]/70">
                ScreenShift requests the absolute minimum Chrome permissions necessary to perform responsive viewport testing.
              </p>
            </div>

            {/* Clean Table matching Home Page Styling */}
            <div className="overflow-x-auto rounded-2xl border border-[#F3E8EE] bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FDF2F8] border-b border-[#F3E8EE] text-[#4A1D36] font-bold">
                    <th className="p-3.5 w-1/4">Permission</th>
                    <th className="p-3.5 w-1/3">Data Accessed</th>
                    <th className="p-3.5">Purpose &amp; Technical Necessity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3E8EE]">
                  <tr className="hover:bg-[#FDF2F8]/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-[#9D4E7C]">activeTab</td>
                    <td className="p-3.5">Active tab URL, Title, and Favicon.</td>
                    <td className="p-3.5">
                      Invoked only when you click the extension action button to automatically preload your active website into the simulation workspace.
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF2F8]/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-[#9D4E7C]">storage</td>
                    <td className="p-3.5">Selected device preset, zoom level, and bezel toggle.</td>
                    <td className="p-3.5">
                      Saves your UI preferences locally on your computer using <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">chrome.storage.local</code> so settings persist across browser restarts.
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF2F8]/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-[#9D4E7C]">declarativeNetRequest</td>
                    <td className="p-3.5">HTTP response headers of framed domains.</td>
                    <td className="p-3.5">
                      Temporarily removes blocking headers (<code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">X-Frame-Options</code> and <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">frame-ancestors</code>) solely inside the simulator iframe so local development servers can be tested without CORS blocks.
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FDF2F8]/40 transition-colors">
                    <td className="p-3.5 font-mono font-bold text-[#9D4E7C]">&lt;all_urls&gt;</td>
                    <td className="p-3.5">Framed iframe DOM events.</td>
                    <td className="p-3.5">
                      Required for the synthetic touch simulator content script to convert desktop mouse clicks into native touch gestures (<code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">touchstart</code>, <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">touchmove</code>).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Information We Explicitly Do NOT Collect */}
          <section className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 3</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              3. Information We Do NOT Collect
            </h2>
            <p>
              To eliminate any ambiguity, ScreenShift explicitly confirms that it does NOT collect, inspect, transmit, or monetize any of the following:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Personally Identifiable Information (Name, email, phone)',
                'Browsing history, bookmarks, or browsing habits',
                'Form inputs, keystrokes, passwords, or credentials',
                'Authentication cookies, bearer tokens, or session IDs',
                'Financial, credit card, payment, or billing details',
                'IP addresses, MAC addresses, or device fingerprints',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FDF2F8] border border-[#F3E8EE] text-xs sm:text-sm text-[#4A1D36]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9D4E7C] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Chrome Web Store Limited Use Disclosure */}
          <section className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="bg-[#FDF2F8] p-6 sm:p-8 rounded-2xl border border-[#F3E8EE] space-y-3">
              <div className="flex items-center gap-2 text-[#9D4E7C] font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Section 4: Compliance Disclosure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#4A1D36]">
                4. Chrome Web Store Limited Use Disclosure
              </h2>
              <p className="text-xs sm:text-sm text-[#4A1D36]/80 leading-relaxed">
                ScreenShift strictly complies with the <strong>Chrome Web Store Developer Program Policies</strong>, including the User Data Limited Use requirements:
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#4A1D36]/80 pl-4 border-l-2 border-[#9D4E7C]">
                <p>
                  <strong>No Transfer to Third Parties:</strong> The use of information received from Google APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements. We do not transfer your data to third parties.
                </p>
                <p>
                  <strong>No Advertising or Monetization:</strong> We do not use or transfer user data to serve ads, personalized retargeting, or data brokerage.
                </p>
                <p>
                  <strong>No Credit Evaluation:</strong> We do not use or transfer user data to determine creditworthiness or for lending purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Storage and Security */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 5</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              5. Local Storage &amp; Sandboxed Security
            </h2>
            <p>
              All user preferences (favorite device viewports, scale factors, zoom options) are stored locally in your browser using Chrome&apos;s sandboxed <code className="font-mono bg-[#FDF2F8] px-1.5 py-0.5 rounded text-[#9D4E7C] border border-[#F3E8EE]">chrome.storage.local</code> API.
            </p>
            <p>
              This storage is sandboxed to the extension ID and is completely inaccessible to the websites you visit or test.
            </p>
          </section>

          {/* Section 6: User Rights & 1-Click Complete Data Purge */}
          <section className="space-y-4 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <Trash2 className="w-3.5 h-3.5" />
              <span>Section 6</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              6. User Rights &amp; 1-Click Complete Data Deletion
            </h2>
            <p>
              Because ScreenShift does not operate external databases, your data is retained only on your local machine for as long as you keep the extension installed.
            </p>
            <div className="bg-[#FDF2F8] p-5 rounded-xl border border-[#F3E8EE] space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-[#4A1D36]">To permanently delete all locally stored preferences at any time:</div>
              <ol className="list-decimal pl-5 space-y-1 text-[#4A1D36]/80">
                <li>Right-click the ScreenShift extension icon in your Chrome toolbar.</li>
                <li>Select <strong>&quot;Remove from Chrome...&quot;</strong>.</li>
                <li>Chrome will instantly delete the extension and permanently purge all associated local storage.</li>
              </ol>
            </div>
          </section>

          {/* Section 7: Children's Privacy & Policy Versioning */}
          <section className="space-y-3 border-t border-[#F3E8EE] pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#F3E8EE] text-xs font-bold text-[#9D4E7C]">
              <span>Section 7 &amp; 8</span>
            </div>
            <h2 className="text-2xl font-black text-[#4A1D36] tracking-tight">
              7. Children&apos;s Privacy (COPPA) &amp; Policy Versioning
            </h2>
            <p>
              ScreenShift is a technical development utility intended for professional software developers and designers. We do not knowingly target or collect personal information from children under the age of 13.
            </p>
            <p>
              If we update this Privacy Policy (for example, to support new Chrome extension API standards), we will revise the &quot;Effective Date&quot; at the top of this document and publish notice in the Chrome Web Store release notes.
            </p>
          </section>

          {/* Section 8: Contact Box (PreFooterCta Style) */}
          <section className="border-t border-[#F3E8EE] pt-8">
            <div className="bg-[#4A1D36] text-white p-7 sm:p-9 rounded-2xl border border-[#9D4E7C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E8A0BF] uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  <span>Privacy &amp; Compliance Inquiries</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Have questions about our privacy practices?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                  Reach out directly to our engineering and compliance team. We respond to all developer inquiries within 24 hours.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="mailto:privacy@screenshift.dev"
                  className="bg-[#9D4E7C] hover:bg-[#8A3F6C] text-white rounded-xl px-5 py-3 text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>privacy@screenshift.dev</span>
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
