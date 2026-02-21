# Tasks: Portfolio Resume Site

**Input**: Design documents from `specs/001-portfolio-site/`
**Prerequisites**: plan.md (required), spec.md (required)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Docusaurus project with TypeScript, establish project structure

- [ ] T001 Initialize Docusaurus 3 project with TypeScript template at repository root
- [ ] T002 Configure `tsconfig.json` with strict mode
- [ ] T003 [P] Create `src/types/index.ts` with shared TypeScript interfaces (ResumeData, PortfolioItem, Skill, etc.)
- [ ] T004 [P] Set up `src/css/custom.css` with CSS custom properties (color palette, spacing, typography)
- [ ] T005 [P] Create placeholder structured data files: `src/data/resume.ts`, `src/data/skills.ts`, `src/data/portfolio.ts`

**Checkpoint**: Docusaurus builds successfully, strict TypeScript compiles, data layer ready

---

## Phase 2: User Story 1 — Recruiter Views Resume (Priority: P1) 🎯 MVP

**Goal**: Recruiter lands on the site and sees a polished, professional resume with all key sections

**Independent Test**: `npm run build` succeeds; homepage displays hero, experience, skills, education, contact sections; responsive on mobile; dark mode works

### Implementation for User Story 1

- [ ] T006 [US1] Create `src/components/Hero/index.tsx` and `styles.module.css` — name, title, tagline, CTA buttons, parallax background
- [ ] T007 [US1] Create `src/components/ParallaxSection/index.tsx` and `styles.module.css` — CSS-only parallax wrapper using perspective/translateZ
- [ ] T008 [P] [US1] Create `src/components/SectionHeading/index.tsx` and `styles.module.css` — reusable section title with decorative accent
- [ ] T009 [P] [US1] Create `src/components/ScrollReveal/index.tsx` and `styles.module.css` — Intersection Observer wrapper for scroll-triggered animations
- [ ] T010 [US1] Create `src/components/ExperienceTimeline/index.tsx` and `styles.module.css` — vertical timeline layout for work experience entries
- [ ] T011 [P] [US1] Create `src/components/SkillsGrid/index.tsx` and `styles.module.css` — categorized skills display with proficiency indicators
- [ ] T012 [P] [US1] Create `src/components/ContactSection/index.tsx` and `styles.module.css` — contact info with social links
- [ ] T013 [US1] Build `src/pages/index.tsx` and `index.module.css` — compose homepage from all components above, wire data from `src/data/`
- [ ] T014 [US1] Swizzle and customize Footer — `src/theme/Footer/index.tsx` and `styles.module.css`
- [ ] T015 [US1] Verify dark/light theme works on all custom components, fix any theme issues in `custom.css`

**Checkpoint**: Homepage fully functional with all resume sections, responsive, dark mode working

---

## Phase 3: User Story 2 — Recruiter Explores Portfolio Showcases (Priority: P2)

**Goal**: Portfolio section with categorized showcase cards + Docusaurus docs hosting writing samples

**Independent Test**: Portfolio page loads with categorized cards; clicking cards navigates to detail; docs section contains sample documentation

### Implementation for User Story 2

- [ ] T016 [P] [US2] Create `src/components/PortfolioCard/index.tsx` and `styles.module.css` — showcase card with thumbnail, title, description, category tag, technology pills
- [ ] T017 [US2] Build `src/pages/portfolio.tsx` and `portfolio.module.css` — portfolio page with category filter and grid of PortfolioCards
- [ ] T018 [P] [US2] Create `docs/intro.md` — docs landing page introducing the writing samples section
- [ ] T019 [P] [US2] Create `docs/api-documentation/sample-api.mdx` — sample REST API documentation demonstrating API docs skills
- [ ] T020 [P] [US2] Create `docs/markdown-samples/getting-started.mdx` — sample getting-started guide demonstrating Markdown/MDX skills
- [ ] T021 [P] [US2] Create `docs/technical-guides/deployment-guide.mdx` — sample deployment guide demonstrating technical guide writing
- [ ] T022 [US2] Configure `sidebars.ts` for docs navigation structure
- [ ] T023 [US2] Update `docusaurus.config.ts` navbar to include Portfolio and Docs links

**Checkpoint**: Portfolio page works, docs section browsable, all showcase content accessible

---

## Phase 4: User Story 3 — Recruiter Evaluates Technical Depth (Priority: P3)

**Goal**: Security headers, Lighthouse optimization, code quality, deployment pipeline

**Independent Test**: Lighthouse all ≥ 90; security headers present; GitHub Actions deploys successfully

### Implementation for User Story 3

- [ ] T024 [P] [US3] Create `src/plugins/security-headers/index.ts` — Docusaurus plugin injecting CSP and security meta tags into `<head>`
- [ ] T025 [P] [US3] Create `static/_headers` file — Cloudflare/Netlify compatible security headers (demonstrates knowledge)
- [ ] T026 [US3] Create custom 404 page — `src/theme/NotFound/index.tsx` with site branding
- [ ] T027 [P] [US3] Add SEO meta tags and OG image configuration in `docusaurus.config.ts`
- [ ] T028 [US3] Create `.github/workflows/deploy.yml` — GitHub Actions workflow for building and deploying to GitHub Pages
- [ ] T029 [US3] Performance optimization — image optimization, font loading strategy, preload critical assets
- [ ] T030 [US3] Final `docusaurus.config.ts` cleanup — ensure all plugins, presets, and metadata are correctly configured

**Checkpoint**: Site deploys to GitHub Pages, Lighthouse scores ≥ 90, security headers configured

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Visual refinement, animation tuning, final QA

- [ ] T031 [P] Add scroll-triggered animations to all homepage sections using ScrollReveal
- [ ] T032 [P] Add hover effects and micro-interactions to cards, buttons, timeline
- [ ] T033 Verify responsive design at 320px, 768px, 1024px, 1440px breakpoints
- [ ] T034 Verify `prefers-reduced-motion` disables all animations
- [ ] T035 Verify keyboard navigation works across all interactive elements
- [ ] T036 Run Lighthouse audit, fix any issues below 90
- [ ] T037 Final build verification: `npm run build` with zero warnings

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (US1 - Resume)**: Depends on Phase 1 completion
- **Phase 3 (US2 - Portfolio)**: Depends on Phase 1; can run in parallel with Phase 2 for independent components
- **Phase 4 (US3 - Technical Depth)**: Depends on Phase 2 and Phase 3 (needs pages to exist for headers/SEO)
- **Phase 5 (Polish)**: Depends on Phases 2-4

### Parallel Opportunities

Within Phase 1:
- T003, T004, T005 can run in parallel (different files)

Within Phase 2:
- T008, T009 can run in parallel
- T011, T012 can run in parallel
- T006, T007 are sequential (Hero depends on Parallax concepts)

Within Phase 3:
- T016 can run in parallel with T018-T021
- T018, T019, T020, T021 can all run in parallel (different doc files)

Within Phase 4:
- T024, T025, T027 can run in parallel

Within Phase 5:
- T031, T032 can run in parallel

## Implementation Strategy

Full build approach — all phases sequentially, no MVP cutoff. But each phase checkpoint validates independently before moving forward.
