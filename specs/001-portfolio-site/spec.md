# Feature Specification: Portfolio Resume Site

**Feature Branch**: `001-portfolio-site`
**Created**: 2026-02-21
**Status**: Draft
**Input**: User description: "Build a heavily customized Docusaurus-based portfolio/resume site that goes far beyond a default static site. The site itself should be the resume."

## User Scenarios & Testing

### User Story 1 - Recruiter Views Resume (Priority: P1)

A recruiter lands on the site and immediately sees a polished, professional landing page with Mykhailo's name, title ("Technical Writer"), and a compelling hero section. They can navigate to see work experience, skills, education, and contact information — all the standard resume sections, but presented in a visually impressive way that stands out from PDF resumes.

**Why this priority**: This is the core purpose. Without resume content, the site has no value.

**Independent Test**: Navigate to the site root — hero section loads, all resume sections are accessible and display content. Site is fully navigable with keyboard and screen reader.

**Acceptance Scenarios**:

1. **Given** a recruiter visits the homepage, **When** the page loads, **Then** they see a hero section with name, title, and a compelling visual design with parallax effects
2. **Given** a recruiter is on the homepage, **When** they scroll or navigate, **Then** they see sections for: Experience, Skills, Education, and Contact
3. **Given** a recruiter uses a mobile device, **When** they view any page, **Then** the layout is responsive and all content is accessible
4. **Given** a recruiter uses dark mode, **When** they toggle the theme, **Then** all custom components render correctly in both themes

---

### User Story 2 - Recruiter Explores Portfolio Showcases (Priority: P2)

A recruiter wants to see concrete examples of work. They navigate to a portfolio/showcase section and find categorized examples: Markdown documentation, API documentation, Word/PDF documents, and technical writing samples. Each showcase has a title, description, technology tags, and either embedded content or links to live examples.

**Why this priority**: Proof of competence. The resume claims skills; the portfolio proves them.

**Independent Test**: Navigate to the portfolio section — categorized showcase cards load, clicking a card shows detailed content. Docusaurus docs section used to host actual documentation samples (eating your own dog food).

**Acceptance Scenarios**:

1. **Given** a recruiter navigates to the portfolio section, **When** the page loads, **Then** they see categorized showcase cards (Markdown Docs, API Docs, Writing Samples, etc.)
2. **Given** a recruiter clicks a showcase card, **When** the detail page loads, **Then** they see the project description, technologies used, and the actual work sample or link
3. **Given** the site uses Docusaurus docs feature, **When** a recruiter browses the docs section, **Then** they see real documentation samples written in MDX — demonstrating the technical writer using Docusaurus as intended

---

### User Story 3 - Recruiter Evaluates Technical Depth (Priority: P3)

A recruiter or hiring manager inspects the site's source code, network headers, or Lighthouse scores. They see proper security headers, excellent performance metrics, clean TypeScript code, and engineering best practices — validating that this candidate can do more than write docs.

**Why this priority**: The "win-factor." This differentiates from other candidates but is invisible to non-technical viewers.

**Independent Test**: Run Lighthouse audit — all scores ≥ 90. Inspect response headers — CSP, X-Frame-Options, Permissions-Policy present. View source — TypeScript, clean architecture, documented code.

**Acceptance Scenarios**:

1. **Given** a technical reviewer runs Lighthouse, **When** the audit completes, **Then** all four scores (Performance, Accessibility, Best Practices, SEO) are ≥ 90
2. **Given** a technical reviewer inspects HTTP headers, **When** they check the response, **Then** they see Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy headers
3. **Given** a technical reviewer views the GitHub repository, **When** they browse the source, **Then** they see TypeScript strict mode, CSS Modules, clean component architecture, and meaningful commit history

---

### Edge Cases

- What happens when JavaScript is disabled? Core resume content must still be readable (SSG provides this by default).
- How does the site handle very long content in showcase sections? Content should be scrollable or paginated, not overflow.
- What happens on extremely narrow screens (320px)? Layout must not break; content remains readable.
- What happens if a user navigates to a non-existent page? Custom 404 page should maintain site branding.

## Requirements

### Functional Requirements

- **FR-001**: Site MUST display a hero section with name, professional title, and visual effects (parallax)
- **FR-002**: Site MUST include resume sections: Experience, Skills, Education, Contact
- **FR-003**: Site MUST support dark/light theme toggle with correct styling on all custom components
- **FR-004**: Site MUST include a portfolio/showcase section with categorized project cards
- **FR-005**: Site MUST use Docusaurus docs feature to host at least one documentation sample
- **FR-006**: Site MUST include proper security headers configuration (CSP, X-Frame-Options, etc.)
- **FR-007**: Site MUST be fully responsive (mobile, tablet, desktop)
- **FR-008**: Site MUST be deployable to GitHub Pages via GitHub Actions
- **FR-009**: Site MUST include a custom 404 page
- **FR-010**: Site MUST have parallax scrolling effects on the homepage
- **FR-011**: Site MUST use CSS Modules for all custom component styling
- **FR-012**: Site MUST have keyboard-navigable and screen-reader-accessible content
- **FR-013**: Resume data (experience, skills, education) MUST be stored as structured data files (JSON/TS), separate from components
- **FR-014**: Site MUST include subtle animations/transitions for visual polish (scroll-triggered reveals, hover effects)

### Key Entities

- **ResumeData**: Work experience entries, education entries, skills list, contact info — structured as TypeScript interfaces
- **PortfolioItem**: Title, description, category (markdown-docs | api-docs | writing-sample | other), technologies array, content or external link, thumbnail
- **SiteConfig**: Name, title, tagline, social links, navigation structure

## Success Criteria

### Measurable Outcomes

- **SC-001**: Lighthouse Performance score ≥ 90
- **SC-002**: Lighthouse Accessibility score ≥ 90
- **SC-003**: Lighthouse Best Practices score ≥ 90
- **SC-004**: Lighthouse SEO score ≥ 90
- **SC-005**: All security headers present and correctly configured (verifiable via securityheaders.com)
- **SC-006**: Site builds with zero warnings (`npm run build`)
- **SC-007**: TypeScript compiles with zero errors in strict mode
- **SC-008**: Site loads in under 3 seconds on 3G throttled connection
- **SC-009**: All custom components render correctly in both light and dark themes
- **SC-010**: A non-technical recruiter can find resume information within 10 seconds of landing
