# Movdia Portfolio Constitution

## Core Principles

### I. Docusaurus-Native

All customization builds on top of Docusaurus — not against it. Swizzle components when needed, use the plugin system, respect the content layer (MDX). No ejecting the entire theme. No replacing the build system. The site must remain upgradeable to future Docusaurus versions without a rewrite.

### II. The Site Is The Resume

Every technical decision must be defensible in an interview. If a feature exists, the candidate must be able to explain why it was built that way, what alternatives were considered, and what tradeoffs were made. No cargo-culted features. No "cool for cool's sake" without a story.

### III. TypeScript Everywhere

All custom components, plugins, and configuration use TypeScript. No `any` types except where Docusaurus types are genuinely incomplete. Strict mode enabled. This demonstrates engineering rigor — a technical writer who codes.

### IV. Content-Structure Separation

Content (resume data, portfolio pieces, writing samples) is stored as structured data (JSON/MDX) separate from presentation components. Swapping placeholder content for real content must require zero component changes — only data file edits.

### V. Progressive Enhancement

The site must be fully functional without JavaScript for core content (resume, skills, contact). Enhanced features (parallax, animations, interactive elements) layer on top. Screen readers and keyboard navigation must work. Lighthouse accessibility score ≥ 90.

### VI. Security As A Feature

Security headers (CSP, X-Frame-Options, Permissions-Policy, etc.) are configured and documented. The candidate must be able to discuss each header's purpose in an interview. HTTPS enforced. No inline scripts that break CSP. All third-party resources use SRI where possible.

### VII. Simplicity Over Cleverness

Prefer readable code over clever abstractions. One component per file. Named exports. Descriptive variable names. Comments explain "why," not "what." If a junior developer can't understand a component in 30 seconds, it's too complex.

## Technical Constraints

- **Framework**: Docusaurus 3.x (latest stable)
- **Language**: TypeScript 5.x, strict mode
- **Styling**: CSS Modules (Docusaurus default) + CSS custom properties for theming. No CSS-in-JS libraries.
- **Package Manager**: npm (GitHub Pages compatibility, simplicity)
- **Node Version**: 18+ (LTS)
- **Target Browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Build Target**: Static site (SSG only, no SSR)
- **Deployment**: GitHub Pages via GitHub Actions
- **No External Runtime Dependencies**: No databases, no APIs, no serverless functions. Pure static.

## Quality Gates

- `npm run build` must succeed with zero warnings
- `npm run typecheck` must pass
- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 90
- Lighthouse Best Practices ≥ 90
- Lighthouse SEO ≥ 90
- All links must resolve (no 404s)
- Dark mode must work correctly on every page

## Governance

This constitution defines the boundaries for all implementation decisions. Any deviation must be documented with rationale in the relevant spec or plan document. The constitution can be amended — but amendments require explicit justification.

**Version**: 1.0.0 | **Ratified**: 2026-02-21 | **Last Amended**: 2026-02-21
