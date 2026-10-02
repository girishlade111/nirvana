# Nirvana

A modern, implementation-ready documentation website built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. Nirvana provides token-driven UI guidance optimized for consistency, accessibility, and fast delivery across documentation sites.

## 🌐 Live Demo

- **Original Reference**: [https://prium.github.io/nirvana/v2.1.0/](https://prium.github.io/nirvana/v2.1.0/)
- **This Repository**: [https://github.com/girishlade111/nirvana](https://github.com/girishlade111/nirvana)

## ✨ Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Animations**: Framer Motion 12 for smooth, performant animations
- **Design System**: Token-driven architecture with semantic color, spacing, typography, and motion tokens
- **Accessibility**: WCAG 2.2 AA compliant with keyboard-first interactions
- **Component Library**: Reusable, accessible UI components (Hero, Navigation, Retreats, Testimonials, etc.)
- **Responsive Design**: Mobile-first approach with fluid typography and spacing
- **Developer Experience**: ESLint, TypeScript strict mode, and comprehensive documentation

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm 10+ (or yarn/pnpm/bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/nirvana.git
cd nirvana/nirvana-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗️ Project Structure

```
nirvana/
├── DESIGN.md                    # Design system specification
├── SKILL.md                     # AI agent skill definition
├── index.html                   # Static HTML reference
├── .gitignore                   # Git ignore rules
├── nirvana-website/             # Next.js application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── app/                 # Next.js App Router pages
│   │   │   ├── globals.css      # Global styles with design tokens
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── page.tsx         # Homepage
│   │   ├── components/          # React components
│   │   │   ├── AdventureCta.tsx
│   │   │   ├── ExploreNature.tsx
│   │   │   ├── FeaturedIn.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Introduction.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Retreats.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── SpaBanner.tsx
│   │   │   ├── SplitSection.tsx
│   │   │   └── Testimonials.tsx
│   │   └── lib/
│   │       └── animations.ts    # Framer Motion animation utilities
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   └── README.md
```

## 🎨 Design System

### Design Tokens

The design system uses semantic tokens for consistency:

**Typography**
- Primary Font: PT Sans (16px base, 23.2px line height)
- Scale: xs(12px) → sm(16px) → md(21.33px) → lg(28.43px) → xl(37.9px) → 2xl(67.34px)

**Colors**
- Text Primary: `#7f7f7f`
- Text Secondary: `#0a2d63`
- Text Tertiary: `#ffffff`
- Surface Base: `#000000`
- Surface Strong: `#fafafa`

**Spacing**
- Scale: 4px → 5px → 6.4px → 8px → 12.8px → 16px → 19.2px → 21.33px

**Motion**
- Instant: 150ms
- Fast: 200ms
- Normal: 400ms

**Border Radius**
- xs: 3px
- sm: 50px

### Accessibility

- WCAG 2.2 AA compliance target
- Keyboard-first navigation
- Focus-visible indicators
- Sufficient color contrast ratios
- Semantic HTML structure
- ARIA labels where needed

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `Hero` | Main landing section with animated entrance |
| `Navigation` | Responsive header with scroll progress |
| `Introduction` | Brand story and mission statement |
| `ExploreNature` | Feature showcase with imagery |
| `Retreats` | Program/service cards grid |
| `Testimonials` | Social proof carousel |
| `FeaturedIn` | Partner/logo strip |
| `SpaBanner` | Promotional banner section |
| `SplitSection` | Two-column content layout |
| `AdventureCta` | Call-to-action section |
| `Footer` | Site footer with links |
| `ScrollProgress` | Top progress indicator |

## 🔧 Configuration

### Tailwind CSS v4

Custom design tokens are defined in `src/app/globals.css` using CSS custom properties and the `@theme` directive.

### Next.js Config

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options
};

export default nextConfig;
```

### TypeScript

Strict mode enabled with path aliases for clean imports.

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Static Export

```bash
# Build for static hosting
npm run build
# Output in .next/static or configure output: 'export'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the design system tokens (no raw hex values)
- Implement all component states: default, hover, focus-visible, active, disabled, loading, error
- Ensure keyboard, pointer, and touch accessibility
- Write testable accessibility acceptance criteria
- Prefer system consistency over local visual exceptions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Prium Nirvana v2.1.0](https://prium.github.io/nirvana/v2.1.0/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Made with ❤️ for developers who value clean, accessible, and performant documentation sites.**

---

Built by [Girish Lade](https://ladestack.in)