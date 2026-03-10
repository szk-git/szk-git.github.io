---
name: styling
description: Implement or refactor styling for $ARGUMENTS — design tokens, responsive layout, consistent patterns
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Implement or refactor styling for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed styling framework and component library
- Read `.claude/specs/coding-standards.md` if it exists — follow the token naming and responsive conventions

Then:
1. Identify the styling approach in the project (CSS Modules, Tailwind, styled-components, CSS-in-JS, plain CSS, SCSS, etc.)
2. Read existing design tokens, theme variables, or utility config
3. Implement the styling using the project's existing tokens and utilities — avoid magic values
4. Ensure responsive behavior following the project's breakpoint system (mobile-first by default)
5. Check for common styling issues:
   - Hardcoded values instead of tokens/variables
   - Fixed pixel sizes that don't scale with user font preferences
   - Missing focus-visible styles
   - Missing dark mode handling if the project supports it
6. Extract repeated style patterns into reusable utilities if they appear 3+ times
7. Verify styles match the design spec or described intent

Do not change component logic — styling changes only.
