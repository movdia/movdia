# Implementation Plan: Portfolio Resume Site

**Branch**: `001-portfolio-site` | **Date**: 2026-02-21 | **Spec**: `specs/001-portfolio-site/spec.md`
**Input**: Feature specification from `specs/001-portfolio-site/spec.md`

## Summary

Build a heavily customized Docusaurus 3 static site serving as Mykhailo Ovdiienko's technical writer portfolio/resume. Custom TypeScript components, parallax effects, structured resume data, portfolio showcases, security headers, and GitHub Pages deployment. The site itself demonstrates technical depth beyond standard technical writing.

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode), Node.js 18+
**Primary Dependencies**: Docusaurus 3.x, React 18.x, CSS Modules
**Storage**: N/A (pure static site, all data in JSON/TS files)
**Testing**: Lighthouse CI, manual browser testing
**Target Platform**: GitHub Pages (static hosting, HTTPS via GitHub)
**Project Type**: Static site (SSG)
**Performance Goals**: Lighthouse ≥ 90 all categories, < 3s load on 3G
**Constraints**: No runtime dependencies, no server, no databases, pure static output
**Scale/Scope**: Single-user portfolio, ~10-15 pages

## Constitution Check

| Gate | Status | Notes |
|------|--------|-------|
| Docusaurus-Native | ✅ | All customization via swizzling + plugins |
| TypeScript Everywhere | ✅ | Strict mode, all custom code in TS |
| Content-Structure Separation | ✅ | Resume data in `/src/data/`, components in `/src/components/` |
| Progressive Enhancement | ✅ | SSG ensures base content without JS |
| Security As A Feature | ✅ | Headers via custom plugin + GitHub Pages config |
| Simplicity Over Cleverness | ✅ | CSS Modules, one component per file, named exports |
| No External Runtime Dependencies | ✅ | Pure static site |

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-site/
├── spec.md              # Feature specification
├── plan.md              # This file
└── tasks.md             # Task breakdown
```

### Source Code (Docusaurus project at repository root)

```text
./                            # Repository root = Docusaurus project root
├── docusaurus.config.ts      # Main Docusaurus configuration
├── tsconfig.json             # TypeScript configuration (strict)
├── sidebars.ts               # Sidebar configuration for docs
├── package.json              # Dependencies and scripts
├── static/                   # Static assets
│   ├── img/                  # Images, icons, OG images
│   └── _headers              # Security headers (GitHub Pages via Cloudflare, or custom plugin)
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Hero/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ParallaxSection/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ExperienceTimeline/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── SkillsGrid/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── PortfolioCard/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ContactSection/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ScrollReveal/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── SectionHeading/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── css/
│   │   └── custom.css        # Global theme overrides, CSS custom properties
│   ├── data/                 # Structured content data
│   │   ├── resume.ts         # Experience, education, contact
│   │   ├── skills.ts         # Skills with categories and proficiency
│   │   └── portfolio.ts      # Portfolio items with categories
│   ├── pages/
│   │   ├── index.tsx         # Homepage (hero + resume sections)
│   │   ├── index.module.css
│   │   ├── portfolio.tsx     # Portfolio showcase page
│   │   └── portfolio.module.css
│   ├── theme/                # Swizzled Docusaurus theme components
│   │   ├── NotFound/         # Custom 404 page
│   │   │   └── index.tsx
│   │   └── Footer/           # Custom footer
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── plugins/
│   │   └── security-headers/ # Custom Docusaurus plugin for security meta tags
│   │       └── index.ts
│   └── types/
│       └── index.ts          # Shared TypeScript interfaces
├── docs/                     # Docusaurus docs — hosts writing samples
│   ├── intro.md              # Docs landing page
│   ├── api-documentation/    # Sample API docs written by candidate
│   │   └── sample-api.mdx
│   ├── markdown-samples/     # Sample Markdown documentation
│   │   └── getting-started.mdx
│   └── technical-guides/     # Sample technical guides
│       └── deployment-guide.mdx
└── blog/                     # Optional: technical blog posts
    └── (empty for now)
```

**Structure Decision**: Docusaurus project lives at repository root (standard Docusaurus layout). Custom components in `src/components/`, structured data in `src/data/`, swizzled themes in `src/theme/`, writing samples in `docs/`.

## Key Technical Decisions

### Parallax Implementation
CSS-only parallax using `perspective` and `translateZ` on scroll containers. No JavaScript parallax libraries. Falls back gracefully when `prefers-reduced-motion` is set. This keeps bundle size minimal and demonstrates CSS competence.

### Security Headers Strategy
GitHub Pages doesn't support custom HTTP headers natively. Strategy:
1. Add `<meta>` tags for CSP and other policies via a custom Docusaurus plugin (injected into `<head>`)
2. Document the limitation clearly — show awareness that meta-tag CSP is less secure than HTTP headers
3. Include a `_headers` file for Cloudflare/Netlify compatibility (shows knowledge even if not used on GitHub Pages)
4. Discuss HTTP header alternatives in a docs page (demonstrates the knowledge)

### Scroll Animations
Intersection Observer API for scroll-triggered reveal animations. No animation libraries. CSS transitions for hover effects. All animations respect `prefers-reduced-motion`.

### Resume Data Architecture
TypeScript interfaces define the shape of all resume data. Data files export typed constants. Components consume these via imports. Swapping placeholder → real data = editing `src/data/*.ts` files only.

## Complexity Tracking

No constitution violations. All decisions align with the established principles.
