---
name: component
description: Design and implement a UI component for $ARGUMENTS — props API, variants, accessibility, and tests
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Design and implement a UI component for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed UI framework, component library, and styling approach
- Read `.claude/specs/coding-standards.md` if it exists — follow the naming and file structure conventions

Then:
1. Analyze existing components in the codebase for naming conventions, prop patterns, and styling approach
2. Define the component's props/API — keep it minimal and composable, typed using the project's type system
3. Implement the component following the project's framework (React, Vue, Svelte, Web Components, etc.)
4. Add variants/sizes if the design requires (use props, not separate components)
5. Ensure keyboard navigation works (focusable, correct tab order, keyboard shortcuts)
6. Add ARIA attributes for screen reader support
7. Write stories or visual tests if the project uses Storybook, Ladle, or Histoire
8. Write unit/component tests using the project's test framework

Follow the project's existing file structure (co-located test, separate story, etc.).
