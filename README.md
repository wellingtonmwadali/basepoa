# Tigoni — Highland Kenya Experience Website

A production-grade **Next.js 14 + TypeScript** website for the Tigoni tourism destination in Kiambu County, Kenya.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animation)
- **Lucide React** (icons)
- **Google Fonts** — Cormorant Garamond, Jost, Playfair Display

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tigoni/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles, fonts, CSS variables
│   ├── about/page.tsx
│   ├── activities/page.tsx
│   ├── restaurants/page.tsx
│   ├── accommodations/page.tsx
│   ├── destinations/page.tsx
│   └── blog/page.tsx
├── components/
│   ├── Navbar.tsx           # Sticky nav with dropdowns
│   ├── Footer.tsx           # Footer with newsletter
│   └── sections/
│       ├── Hero.tsx         # Full-screen hero with parallax
│       ├── CategoryLinks.tsx
│       ├── ActivitiesSection.tsx
│       ├── RestaurantsSection.tsx
│       ├── AccommodationsSection.tsx
│       ├── DestinationsSection.tsx
│       └── MembershipBanner.tsx
├── lib/
│   └── useScrollAnimation.ts  # IntersectionObserver hook
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/about` | About Tigoni and the region |
| `/activities` | All tours and activities |
| `/restaurants` | Dining experiences |
| `/accommodations` | Where to stay |
| `/destinations` | Other nearby destinations |
| `/blog` | Travel stories and guides |

## Design System

- **Colors**: Forest greens (`forest-*`), warm cream (`cream-*`), earthy browns (`earth-*`)
- **Fonts**: Cormorant Garamond (display), Jost (body), Playfair Display (accent)
- **Images**: Unsplash (loaded remotely — no local images required)
- **Animations**: CSS scroll-triggered fade-ups + mouse parallax on hero

## Notes

- Images are loaded from `images.unsplash.com` (configured in `next.config.js`)
- Fonts are loaded from Google Fonts CDN in `globals.css`
- No authentication or database — purely static/SSG
- Mobile responsive at all breakpoints
