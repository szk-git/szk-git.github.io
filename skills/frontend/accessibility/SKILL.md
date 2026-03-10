---
name: accessibility
description: Audit and fix accessibility issues in $ARGUMENTS — WCAG 2.2 AA compliance, keyboard nav, screen reader support
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Audit and fix accessibility issues in: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed UI framework for correct ARIA patterns
- Read `.claude/specs/coding-standards.md` if it exists — check for any project-specific a11y requirements

Then:
1. Read the component(s) or page(s) specified
2. Check against WCAG 2.2 AA criteria:
   - 1.1.1 Non-text content: images have meaningful alt text
   - 1.3.1 Info and Relationships: semantic HTML (headings, lists, landmarks)
   - 1.4.3 Contrast: flag any low-contrast text (can't verify visually, note for manual check)
   - 2.1.1 Keyboard: all interactive elements reachable and operable by keyboard
   - 2.4.3 Focus Order: logical tab order
   - 2.4.7 Focus Visible: visible focus indicator on all interactive elements
   - 3.3.1 Error Identification: form errors are described in text
   - 4.1.2 Name, Role, Value: interactive elements have accessible names and correct ARIA roles
3. List all violations found with severity (critical / serious / moderate)
4. Fix each violation in the code
5. Note any issues that require manual testing (color contrast, screen reader flow)

Output a summary of changes made and any remaining manual checks needed.
