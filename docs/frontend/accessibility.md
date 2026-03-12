---
title: Accessibility
parent: Frontend
nav_order: 3
description: Audit and fix WCAG 2.2 AA accessibility issues — keyboard nav, ARIA, screen reader support
---

# Accessibility

**Invoke:** `/accessibility`  **Category:** Frontend

## What it does

Audits and fixes accessibility issues against WCAG 2.2 AA — semantic HTML, ARIA attributes, keyboard navigation, focus management, and form error handling. Reports severity for each finding and fixes them in code. Notes issues requiring manual testing.

## Install

```bash
mkdir -p .claude/skills/accessibility
curl -o .claude/skills/accessibility/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/frontend/accessibility/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/frontend/accessibility/SKILL.md)

## Usage

```
/accessibility audit the checkout form for keyboard and screen reader users
/accessibility fix all accessibility issues in the navigation component
/accessibility review the modal dialog for focus trap and ARIA compliance
```

## Tailoring tips

- Mention your target conformance level in the arguments if different from WCAG 2.2 AA
- Add accessibility guidelines to `.claude/specs/coding-standards.md` for team-specific requirements
- Run after `/component` to catch a11y issues introduced during implementation

## Related skills

- [Component](/frontend/component) — run after building to catch a11y issues early
- [UX Review](/design/ux-review) — complement a11y audit with usability evaluation
