\---

name: design-system-nirvana

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Nirvana



\## Mission

Deliver implementation-ready design-system guidance for Nirvana that can be applied consistently across documentation site interfaces.



\## Brand

\- Product/brand: Nirvana

\- URL: https://prium.github.io/nirvana/v2.1.0/

\- Audience: developers and technical teams

\- Product surface: documentation site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=PT Sans`, `font.family.stack=PT Sans, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=23.2px`

\- Typography scale: `font.size.xs=12px`, `font.size.sm=16px`, `font.size.md=21.33px`, `font.size.lg=28.43px`, `font.size.xl=37.9px`, `font.size.2xl=67.34px`

\- Color palette: `color.text.primary=#7f7f7f`, `color.text.secondary=#0a2d63`, `color.text.tertiary=#ffffff`, `color.text.inverse=#6a6a6a`, `color.surface.base=#000000`, `color.surface.strong=#fafafa`

\- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=6.4px`, `space.4=8px`, `space.5=12.8px`, `space.6=16px`, `space.7=19.2px`, `space.8=21.33px`

\- Radius/shadow/motion tokens: `radius.xs=3px`, `radius.sm=50px` | `shadow.1=rgb(0, 0, 0) 0px 0px 0px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=400ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



