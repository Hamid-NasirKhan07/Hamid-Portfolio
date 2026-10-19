# Hamid Nasir Khan — CRM, Automation & AI Agent Developer Portfolio

A futuristic, high-performance personal portfolio built with **Next.js 14 (App Router)**, **TypeScript (Strict)**, and **Tailwind CSS**. Designed specifically to convert international clients, startups, and agencies hiring for autonomous AI agents, multi-system n8n automations, enterprise CRM architectures (Podio, GoHighLevel), and custom web development.

---

## 🎨 Design Tokens Summary (Extracted from Reference Template)

Replicated directly from `https://cheaphostings.org/html/alex-portfolio/`:

- **Color Palette**:
  - Deep Space Canvas: `--bg-deep: #020409`
  - Dark Charcoal Navy: `--bg-dark: #060c18`
  - Frosted Card Surface: `--bg-card: rgba(255, 255, 255, 0.04)`
  - Electric Violet Accent: `--accent: #6c63ff`
  - Neon Cyan Accent: `--accent2: #00d4ff`
  - Cyber Pink Accent: `--accent3: #ff6b9d`
  - Golden Highlight: `--gold: #f5c842`
  - Mint Status Glow: `--neon-green: #2dffb3`
  - Primary Text: `--text: #e8eaf6`
  - Muted Text: `--text-muted: rgba(232, 234, 246, 0.55)`
  - Precision Border: `--border: rgba(108, 99, 255, 0.18)`
  - Atmospheric Glow: `--glow: 0 0 60px rgba(108, 99, 255, 0.25)`
- **Typography**:
  - Headings & Names: `'Bebas Neue', sans-serif` (uppercase, condensed, massive clamp scales)
  - Body & Descriptions: `'Outfit', sans-serif` (weights 300, 400, 500, 600, 700)
  - Eyebrows, Badges, Code & Buttons: `'Space Mono', monospace` (letter-spacing: 0.15em to 0.3em, uppercase)
- **Border Radii**:
  - Button elements: `4px` - `6px` (crisp technical cut)
  - Cards & Containers: `8px` - `12px`
  - Modals: `14px` - `16px`
  - Status Pills & Badges: `100px` (fully rounded)
  - Social Buttons: `50%` (`46px x 46px`)
  - Image Frames: `2px` (precision border with offset geometry)
- **Shadows & Glows**:
  - Card Hover: `0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px #6c63ff`
  - Button Glow: `0 0 30px rgba(108, 99, 255, 0.45)`
  - Modal Elevation: `0 40px 120px rgba(0, 0, 0, 0.8), 0 0 80px rgba(108, 99, 255, 0.15)`
  - Pulse Dot: `0 0 8px #2dffb3`
- **Easings & Transitions**:
  - Default transitions: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`
  - Modal transition: `0.45s cubic-bezier(0.23, 1, 0.32, 1)`
  - Lenis smooth scroll: cubic easing with `touchMultiplier: 1.8`
- **Animation System**:
  - `orbFloat`: 14s ease-in-out infinite alternate ambient floating orbs
  - `pulse-dot`: 2s green availability badge pulse
  - `scroll-line`: 1.8s vertical scroll indicator
  - `glitch1`: 6s chromatic aberration text glitch on the main headline
  - `marquee`: 25s smooth infinite loop strip
  - Dual custom cursor with trailing ring and interactive hover expansion
  - Animated count-up numbers and skill fill progress bars on viewport scroll

---

## 🏗️ Architecture & Reusability (100% Data-Driven)

All text, links, metadata, toggles, and data arrays live inside the `/data` directory. Components strictly render data with no hardcoded strings in JSX.

```
├── data/
│   ├── site.config.ts    # Owner information, SEO meta, section toggles, nav items
│   ├── projects.ts       # 6 projects + detail modal data (role, year, stack, highlights)
│   ├── automations.ts    # n8n node graphs with problem-solution-result stories
│   ├── ai-agents.ts      # Agent types + interactive terminal simulation scripts
│   ├── services.ts       # 6 services with deliverables and badges
│   ├── experience.ts     # Career timeline (work, education, certification)
│   ├── process.ts        # 5-step delivery methodology
│   ├── stats.ts          # Count-up metrics and skill progress bars
│   ├── testimonials.ts   # Client endorsements with project contexts
│   ├── faq.ts            # High-conversion accordion Q&A
│   └── socials.ts        # Social links & contact information
├── types/
│   └── index.ts          # Strict TypeScript schemas for all data entities
├── components/
│   ├── ui/               # Reusable primitives (CustomCursor, SmoothScroll, Modal, Section, etc.)
│   └── sections/         # Modular section views
└── app/
    ├── api/contact/      # Zod validation + honeypot + Resend email handler
    ├── layout.tsx        # Fonts, JSON-LD structured data (Person + ProfessionalService)
    ├── globals.css       # Token variables, keyframes, utilities
    ├── sitemap.ts        # Automated SEO sitemap
    ├── robots.ts         # Robots.txt
    └── icon.tsx          # Dynamic high-DPI favicon
```

### Section Visibility Toggles

In `data/site.config.ts`, you can toggle any section on or off with a boolean:

```typescript
sections: {
  hero: true,
  about: true,
  projects: true,
  stats: true,
  services: true,
  automations: true,
  aiAgents: true,
  experience: true,
  process: true,
  testimonials: true,
  faq: true,
  bookingCta: true,
  contact: true,
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.18+` or `20+` (tested on Node v24)
- npm, pnpm, or yarn

### Installation & Local Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

### Production Build

```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file in the project root:

```env
# Resend API Key for contact form delivery (optional - logs to console in dev if omitted)
RESEND_API_KEY=re_your_api_key_here

# Destination email for form submissions
CONTACT_EMAIL=hamidksoftwaredeveloper@gmail.com
```

---

## 🎨 How to Re-Skin for a New Client in 5 Minutes

1. **Edit Theme Variables in `app/globals.css`**:
   Change the CSS variables in `:root` (e.g. swap `--accent` to emerald green `#10b981` or royal blue `#2563eb`).
2. **Update `data/site.config.ts`**:
   Replace name, headline, title, bio paragraphs, and social links.
3. **Update `data/projects.ts` & `data/services.ts`**:
   Add the client's projects and offerings.
4. **Deploy**:
   Push to GitHub and connect to Vercel.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub / GitLab.
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import the repository.
4. (Optional) Add your `RESEND_API_KEY` and `CONTACT_EMAIL` under **Environment Variables**.
5. Click **"Deploy"**. Next.js App Router will generate static pages and API routes automatically.

---

## 📝 Contact & Social Configuration

1. **Calendly**: Configured with `https://calendly.com/hamidksoftwaredeveloper/30min`.
2. **Contact Email**: Configured with `hamidksoftwaredeveloper@gmail.com`.
3. **LinkedIn**: Configured with `https://www.linkedin.com/in/hamidnkhan`.
4. **GitHub**: Configured with `http://github.com/Hamid-NasirKhan07`.
5. **Upwork**: Removed for now as requested (can be re-enabled anytime in `data/socials.ts`).
6. **Images**: Project cards and portrait frames use high-resolution Unsplash photography. You can drop your personal headshots into `/public` and update the paths in `data/site.config.ts` and `data/projects.ts`.
