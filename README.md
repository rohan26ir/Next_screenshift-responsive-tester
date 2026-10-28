# screenShift 📱⚡

> **Precision Responsive Mobile Simulator & Web Testing Platform**  
> Test responsive designs across 40+ authentic physical devices, realistic bezels, and synthetic touch physics in one click.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-F012BE?style=for-the-badge&logo=framer)](https://motion.dev/)

---

## 🌟 Key Features

### 📐 1 by 1 100vh Section-by-Section Takeover
- **Immersive Viewport Snapping**: Each section occupies `100vh` and smoothly takes over the screen 1 by 1 upon scrolling.
- **Physical Elevation Shadows**: Incoming sections cast realistic, physical 3D elevation drop shadows onto underlying sheets.
- **Floating Section Navigator**: A quick-jump dot rail tracking `01 Simulator`, `02 Devices`, `03 Features`, `04 Pricing`, `05 FAQ`, and `06 Get Started`.

### 〰️ Motion Along a Path ([motion.dev](https://motion.dev/docs/react-animation#motion-along-a-path))
- **Live Viewport Continuum**: Interactive SVG wave trajectory illustrating real-time responsive breakpoint handshakes (375px → 673px → 768px → 1280px → 1920px → 2560px).
- **Native CSS Motion Path**: Elements smoothly glide along harmonic SVG curves using `offsetPath: path(...)`, `offsetRotate: 'auto'`, and `offsetDistance: ['0%', '100%']`.
- **Badge Orbit**: Glowing starlight comets cycling along the perimeter of the *Extensive Device Matrix* badge.

### 📱 40+ Authentic Device Catalog
- **Mobile Flagships**: iPhone 16 Pro Max, iPhone 15 Pro, Galaxy S24 Ultra, Pixel 8 Pro.
- **Foldables & Tablets**: Galaxy Z Fold, iPad Pro 12.9", iPad Mini.
- **Laptops & Ultrawides**: MacBook Air, Studio Display, 4K Ultrawide 3440×1440.
- **Hardware Bezel Fidelity**: Realistic dynamic islands, camera notches, punch-holes, and chin bezels.

### ⚡ Developer Workflow First
- **Zero-Config Localhost**: Seamless testing for Next.js, Vite, and Remix on `localhost:3000` with instant hot-reloading.
- **Synthetic Touch Events**: Converts standard mouse drag into authentic `TouchEvent` streams (`touchstart`, `touchmove`, `touchend`) with realistic inertia and ripple feedback.
- **High-Contrast Mode**: Built-in accessibility mode switcher with session persistence.
- **Custom Lottie 404 Experience**: Standalone animated Not-Found page powered by `@lottiefiles/dotlottie-react`.

---

## 🎨 Color Palette & Design Tokens

| Token | Hex Code | Purpose |
|---|---|---|
| **Deep Mauve** | `#4A1D36` | Primary brand headers, typography, dark buttons |
| **Vibrant Plum** | `#9D4E7C` | Accent icons, highlights, active indicators, borders |
| **Rose Glow** | `#E8A0BF` | Subtler glows, badge highlights, active gradients |
| **Blush Canvas** | `#FDF2F8` | Main page background, soft card surfaces |
| **Border Tone** | `#F3E8EE` | Clean card dividing lines and chassis borders |

---

## 📁 Project Structure

```
web-screenshift/
├── app/
│   ├── layout.tsx         # Global layout with ScrollProgress & Navbar
│   ├── page.tsx           # 100vh Section-by-section takeover landing page
│   ├── globals.css        # Global styles & Tailwind v4 config
│   ├── not-found.tsx      # Lottie-powered 404 handler
│   ├── about/             # Detailed about view
│   ├── devices/           # 40+ Hardware matrix catalog & code generator
│   └── privacy/           # Privacy policy
├── components/
│   ├── data/
│   │   └── devices.ts     # 40+ Device catalog specifications (DPR, bezels, viewport)
│   ├── icons/
│   │   └── ChromeIcon.tsx # Authentic multi-color Chrome SVG icon
│   ├── sections/
│   │   ├── Navbar.tsx     # Header with contrast toggle & smooth jump links
│   │   ├── HeroSimulator.tsx # Top hero with Chrome install CTA & trust badges
│   │   ├── DeviceShowcase.tsx # Motion Along Path & Swiper hardware carousel
│   │   ├── FeatureMatrix.tsx # 4-Card technical engine specs
│   │   ├── PricingSection.tsx # Billing toggle & pricing tier cards
│   │   ├── FaqSection.tsx # Expandable developer Q&A accordion
│   │   ├── PreFooterCta.tsx # Dark mauve conversion banner
│   │   ├── Footer.tsx     # Sitemap, newsletter & navigation
│   │   └── NotFoundView.tsx # Interactive 404 with Lottie animation
│   └── ui/
│       ├── Button.tsx     # Neomorphic, primary, and outline buttons
│       ├── Progress.tsx   # Base UI progress bar primitives
│       └── ScrollProgress.tsx # Top scroll indicator & floating top button
├── public/
│   ├── animations/
│   │   └── 404.json       # Custom Lottie animation asset
│   └── dotlottie-player.wasm # Local offline Wasm player
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **npm**, **pnpm**, or **yarn**

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/rohan26ir/Next_screenshift-responsive-tester.git
cd Next_screenshift-responsive-tester
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Production Build
Validate and build for production:

```bash
npm run build
npm run start
```

---

## 🔒 Security & Privacy
- **100% Client-Side**: No URLs, private code, or development tokens leave your browser.
- **Credential Protection**: Strict `.gitignore` policy safeguarding environment variables (`.env*`), private keys (`*.pem`, `*.key`), and secrets.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
