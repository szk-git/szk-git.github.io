---
title: Component
parent: Frontend
nav_order: 1
description: Design and implement UI components — props API, variants, accessibility, tests
---

# Component

**Invoke:** `/component`  **Category:** Frontend

## What it does

Designs and implements a UI component — props/API surface, variants, state management, accessibility (ARIA, keyboard nav), tests, and stories. Framework agnostic; reads your team's specs to match your component library and styling conventions.

## Install

```bash
mkdir -p .claude/skills/component
curl -o .claude/skills/component/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/frontend/component/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/frontend/component/SKILL.md)

## Usage

```
/component build a DataTable with sortable columns and row selection
/component create a multi-step form wizard with validation
/component add a Toast notification system with queue management
```

## Tailoring tips

- Add your component framework to `.claude/specs/tech-stack.md` (React, Vue, Svelte, etc.)
- Add your design system to `.claude/specs/tech-stack.md` for consistent token usage
- Pair with `/styling` for design token application and `/accessibility` for a11y audit after building
