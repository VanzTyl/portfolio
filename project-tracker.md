───────────────────────────────────────────────
# PROJECT TRACKER
───────────────────────────────────────────────

## Current Build Version
1.13.0

## Last Updated
2026-04-06

───────────────────────────────────────────────
## What Was Requested
───────────────────────────────────────────────
User requested the addition of external links to projects: specifically a "View Repository" button and a live deployment redirect icon. Requested a new "Visibility" status (Public/Private) and conditioned the live redirect icon to only show if the project is public. Added two new non-featured 2026 projects ("Sense of Self" and "Unveil") to the centralized data file to test the terminal-only visibility.

───────────────────────────────────────────────
## Changes Made
───────────────────────────────────────────────
- Modified: `/data/projects.ts` (Expanded the schema to include `visibility`, `repoUrl`, and `liveUrl`. Added "Sense of Self" and "Unveil" as 2026 projects with `featured: false`).
- Modified: `/app/projects/page.tsx` (Updated the Terminal UI to display a visibility badge [Green for Public, Red for Private]. Added inline ExternalLink icon to the header for live URLs, and a Github repository button above the content overview).
- Modified: `/components/Projects.tsx` (Updated the Expanded Detail View to include the visibility badge and compact action buttons for Code/Live URLs).

───────────────────────────────────────────────
## Project Directory Outline
───────────────────────────────────────────────
/portfolio
├── /data
│   └── projects.ts       <-- Modified (Schema expanded)
├── /app
│   ├── /projects
│   │   └── page.tsx      <-- Modified (Repo & Live links added)
│   ├── layout.tsx
│   ├── page.tsx          
│   └── globals.css       
├── /components
│   ├── NavBar.tsx        
│   ├── Hero.tsx          
│   ├── ContactModal.tsx  
│   ├── SkillsMatrix.tsx  
│   ├── Experience.tsx    
│   ├── Education.tsx     
│   └── Projects.tsx      <-- Modified (Repo & Live links added)
└── project-tracker.md    <-- Modified (Version bumped to 1.13.0)

───────────────────────────────────────────────
## Build History
───────────────────────────────────────────────
### v1.13.0 — External Links & Visibility Badges
- Added Repository and Live URLs to project data.
- Implemented Public/Private visibility badges.
- Integrated GitHub and ExternalLink buttons into Terminal and Expanded Card views.

### v1.12.0 — Data Centralization & Animation Fix
- Extracted all project arrays into `data/projects.ts`.
- Restored `Projects.tsx` card animation physics.
- Implemented dynamic date-grouping in terminal directory.

### v1.11.0 — Hybrid Project Routing
- Implemented dual-project display architectures: Interactive glading cards on root route, Developer Terminal on nested `/projects` route. 
- Integrated standard `next/link` mechanisms between the two contexts.

### v0.10.0 — Multi-Route Terminal Architecture
- Built dedicated `/projects` route using an IDE/Developer Terminal visual layout.
- Integrated Framer Motion `AnimatePresence` for seamless data cross-fading between project tabs.
- Upgraded `NavBar.tsx` with robust Next.js routing logic to handle cross-page anchor links and dynamic background states.

### v0.9.1 — Physics-Based Layout Timing
- Refined `Projects.tsx` layout animations. Fixed layout duration to 1s.
- Implemented dynamic delay calculation for the detail pane to prevent visual clipping before the rightmost cards complete their glide.

### v0.9.0 — Shared Layout Animations
- Fixed `Experience.tsx` scroll animation loop.
- Refactored `Projects.tsx` to support state-based layout morphing between a 3-column grid and a split detail-view architecture.

### v0.8.0 — Global Navigation & Modal Wiring
- Overhauled `/components/NavBar.tsx` to include internal state for `<ContactModal />`.
- Implemented smooth-scroll routing logic for in-page navigation.
- Added dynamic glassmorphism on scroll `window.scrollY`.
- Updated `/app/page.tsx` to wrap components in targetable anchor `id` tags (`#skills`, `#experience`, etc.).
───────────────────────────────────────────────
### v0.7.0 — Projects Showcase
- Created `/components/Projects.tsx`.
- Integrated Latik Delights, NaviGuide, and the newly provided E-Coinmerce project into a responsive card grid.
- Sequenced into `/app/page.tsx`.

### v0.6.0 — Education Timeline
- Created `/components/Education.tsx`.
- Integrated CIIT, TIP, and STI academic data into a card-based timeline.

### v0.5.1 — Skills Matrix Refinement
- Updated `/components/SkillsMatrix.tsx` to strictly use master outline data.
- Changed scroll animations to `viewport={{ once: false }}`.

### v0.5.0 — Experience Timeline
- Created `/components/Experience.tsx`.
- Mapped operational roles onto a vertical timeline.

### v0.4.0 — Core Skills Matrix
- Built animated `SkillsMatrix.tsx` component.

### v0.3.3 — Tailwind v4 Migration Fix
- Migrated all color tokens to `/app/globals.css` using Tailwind v4 native CSS variables.

### v0.3.2 — Modal Contrast Fix
- Corrected ContactModal optical transparency.

### v0.3.1 — UI Refinement
- Optically centered NavBar CTA button.

### v0.3.0 — Persistent Nav CTA & Contact Modal
- Created `ContactModal.tsx`.

### v0.2.0 — Hero Section Construction
- Built scalable `Hero.tsx` component.

### v0.1.1 — Theme Initialization & Global Navigation
- Configured Tailwind themes and ReactLenis.

### v0.1.0 — Initialization
- Session initiated.
───────────────────────────────────────────────