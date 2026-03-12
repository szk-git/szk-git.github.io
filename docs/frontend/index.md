---
title: Frontend
nav_order: 4
has_children: true
description: Claude Code skills for UI development — components, styling, and accessibility
---

# Frontend Skills

Skills for UI development covering component design, styling patterns, and accessibility compliance.

Use these skills when building user-facing interfaces. They handle component architecture, styling patterns (CSS Modules, Tailwind, styled-components), and WCAG accessibility compliance. Provide a `tech-stack.md` spec and the output adapts to React, Vue, Svelte, or your framework of choice.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [Component](component.md) | `/component` | UI component design and implementation |
| [Styling](styling.md) | `/styling` | CSS/styling patterns and design tokens |
| [Accessibility](accessibility.md) | `/accessibility` | WCAG 2.2 AA compliance and a11y fixes |

## Install all frontend skills

```bash
for skill in component styling accessibility; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/frontend/$skill/SKILL.md
done
```
