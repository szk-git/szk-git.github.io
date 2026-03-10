---
name: design-system
description: Generate or extend design system tokens and component specs for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Generate or extend design system for: $ARGUMENTS

1. Audit existing design tokens (colors, typography, spacing, radii, shadows, motion)
2. Identify inconsistencies — hardcoded values, duplicated tokens, missing semantic aliases
3. Propose or extend the token structure:
   - Primitive tokens: raw values (e.g., `color-blue-500: #3b82f6`)
   - Semantic tokens: intent-based (e.g., `color-action-primary: {color-blue-500}`)
   - Component tokens: component-scoped (e.g., `button-bg-default: {color-action-primary}`)
4. Generate token files in the project's format (CSS custom properties, Tailwind config, Style Dictionary JSON, etc.)
5. Document component specs for any new components: anatomy, states (default, hover, focus, active, disabled), variants, spacing
6. Create a usage guide showing do/don't examples for the most commonly misused tokens

Output to the project's design system directory and update `docs/design-system.md`.
