---
title: Wireframe Critique
parent: Design
nav_order: 3
description: Critique wireframes and UI mockups — layout, hierarchy, flow, and feasibility
---

# Wireframe Critique

**Invoke:** `/wireframe-critique`  **Category:** Design

## What it does

Analyzes wireframes or UI mockups across 8 dimensions: information hierarchy, layout, user flow, missing states, content fit, responsive behavior, consistency, and implementation feasibility. Provides specific, prioritized improvement suggestions.

## Install

```bash
mkdir -p .claude/skills/wireframe-critique
curl -o .claude/skills/wireframe-critique/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/design/wireframe-critique/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/design/wireframe-critique/SKILL.md)

## Usage

```
/wireframe-critique the new dashboard layout in docs/wireframes/dashboard-v2.md
/wireframe-critique the mobile checkout flow described in the Figma notes
/wireframe-critique the admin user management screen
```

## Tailoring tips

- Describe the wireframe in your arguments if it's not in a readable file (paste ASCII art or describe the layout)
- Add your design system constraints to `.claude/specs/` for feasibility checks against existing components
- Pair with `/ux-review` after building to catch issues in the implemented version

## Related skills

- [UX Review](/design/ux-review) — review the implemented version after building
- [Design System](/design/design-system) — check feasibility against existing component specs
