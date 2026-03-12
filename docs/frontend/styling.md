---
title: Styling
parent: Frontend
nav_order: 2
description: Implement and refactor styling — design tokens, responsive layout, consistent patterns
---

# Styling

**Invoke:** `/styling`  **Category:** Frontend

## What it does

Implements or refactors styling — applies design tokens consistently, enforces responsive patterns, removes magic values, adds dark mode support, and extracts reusable utilities. Works with any styling approach (CSS Modules, Tailwind, CSS-in-JS, plain CSS).

## Install

```bash
mkdir -p .claude/skills/styling
curl -o .claude/skills/styling/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/frontend/styling/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/frontend/styling/SKILL.md)

## Usage

```
/styling refactor the dashboard layout to use design tokens instead of hardcoded values
/styling make the checkout flow fully responsive for mobile
/styling add dark mode support to the navigation and sidebar
```

## Tailoring tips

- Add your styling framework to `.claude/specs/tech-stack.md` (Tailwind, CSS Modules, etc.)
- Include your token naming convention in `.claude/specs/coding-standards.md` for consistent output
- Pair with `/design-system` if you need to generate tokens first

## Related skills

- [Component](/frontend/component) — build the component before applying styling
- [Design System](/design/design-system) — generate or audit tokens before refactoring styles
