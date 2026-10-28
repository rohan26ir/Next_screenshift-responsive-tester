[PROJECT & CORE CONTEXT]
PROJECT: ScreenShift — Responsive mobile simulator previewing localhost & live URLs across 40+ viewports.
AUDIENCE: Frontend engineers, QA specialists, and product designers.
PRIMARY OUTCOME: Click "Launch Free Simulator" or "Start 14-Day Trial".
SITE ARCHITECTURE: Single-page high-converting SaaS landing page with deep-linked anchor navigation and sticky bottom conversion trigger.

[CREATIVE & DESIGN SYSTEM]
DESIGN SYSTEM / TOKENS:
- Background: #FDF2F8 (Light Blush)
- Surface/Card: #FFFFFF with soft neomorphic shadows (rgba(157, 78, 124, 0.08)) and subtle 1px border (#F3E8EE)
- Primary Brand: #E8A0BF (Soft Pink)
- Primary Accent/Text: #9D4E7C (Deep Mauve — minimum 4.5:1 WCAG AA contrast against blush)
- Slate Neutral: #4A1D36 (High-contrast body text)
- Typography: Inter / System Sans-serif fallback; JetBrains Mono / monospace fallback for viewport specs
VISUAL STYLE: High-contrast neomorphism (soft elevation shadows + crisp accessible borders) paired with clean SaaS bento grids.
VERIFIED CONTENT & ASSETS: 
- Tagline: "Test responsive designs across 40+ realistic devices in one click."
- Device Categories: Mobile (iOS/Android), Tablet, Foldable, Desktop Ultrawide.

[FUNCTIONAL SPECIFICATION]
KEY COMPONENTS & VIEWS:
1. Top Sticky Nav (Logo, Product, Devices, Pricing, FAQ, Theme/Contrast Toggle, CTA)
2. Hero Section: Headline, dual CTA, and interactive device frame mockup switcher with animated transitions
3. Device Showcase Slider: Swiper.js carousel cycling through realistic interactive device viewports
4. Feature Matrix: Bento-style showcase (Localhost tunneling, touch events, multi-device sync)
5. Interactive FAQ: Accessible accordion (single open item at a time with spring animations)
6. Sticky Bottom CTA Bar: Quick conversion prompt that smoothly reveals after 30% scroll
RESPONSIVE & ACCESSIBILITY: WCAG 2.1 AA compliant contrast; full keyboard navigation on accordion, slider controls, and modals; mobile-friendly drawer menu.

[DATA & STATE CONTRACT]
STATE & ENV CONFIG:
- Environment Variables: Reads public simulator endpoint via `process.env.NEXT_PUBLIC_SIMULATOR_URL || 'http://localhost:3000'`
- Active Device State: { id: string, name: string, category: 'mobile' | 'tablet' | 'desktop', width: number, height: number, bezelType: 'island' | 'notch' | 'punch-hole' | 'monitor' }
- Mock URL State: string (controlled input synced with frame preview)
- FAQ State: activeIndex (number | null)

[ENGINEERING & BUILD RULES]
TECH STACK & CONSTRAINTS:
- Framework: Next.js (App Router, `'use client'` single-file page component)
- Styling: Tailwind CSS (with arbitrary values where needed for exact hexes)
- Animation: Framer Motion (`motion`, `AnimatePresence`) for micro-interactions, accordion springs, and modal transitions
- Carousel: Swiper.js (React integration: `Swiper`, `SwiperSlide`, Autoplay, Navigation, Pagination modules)
- Icons: Lucide-React
- Environment: Next.js client-safe environment variables (`NEXT_PUBLIC_*`)
UI COMPONENT SYSTEM:
- Implement a single, reusable polymorphic `<Button />` component:
  - Props: variant ('primary' | 'secondary' | 'neomorphic' | 'outline' | 'ghost'), size ('sm' | 'md' | 'lg'), icon (optional Lucide icon), children, onClick, className, fullWidth (boolean).
  - 'primary': #9D4E7C background, white text, subtle hover lift.
  - 'secondary': #E8A0BF background, dark mauve text.
  - 'neomorphic': #FFFFFF background with soft inset/outset shadow (`shadow-[4px_4px_10px_rgba(157,78,124,0.12),-4px_-4px_10px_#FFFFFF]`).
  - 'outline': 1.5px border in #9D4E7C, transparent background.
  - 'ghost': transparent background, hover state with soft blush tint.
- All CTA triggers, device selectors, and action items must reuse this `<Button />` component.
EXECUTION SCOPE: Single-file complete Next.js client component (`page.jsx` or `page.tsx`). Fully imports or provides inline fallbacks for external dependencies.
DO NOT CHANGE / DO NOT INVENT: Do not use low-contrast text on blush backgrounds. Do not leave placeholder comments like `// implement later`.

[DELIVERABLE DEFINITION]
OUTPUT FORMAT: Fully runnable, complete Next.js client page component code with all imports clearly defined.
DONE WHEN (ACCEPTANCE CRITERIA):
- Code compiles without syntax errors, missing closures, or undefined hooks.
- Swiper carousel renders smoothly with interactive slide navigation.
- Framer Motion drives device frame resizing and accordion expansion.
- Fallback mock URL cleanly pulls from `NEXT_PUBLIC_SIMULATOR_URL`.
- Button component variant rules are strictly adhered to across all CTAs.