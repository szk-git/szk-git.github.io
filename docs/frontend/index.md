---
title: Frontend
nav_order: 4
has_children: true
description: Claude Code skills for UI development — components, styling, and accessibility
---

# Frontend Skills

Skills for UI development covering component design, styling patterns, and accessibility compliance.

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
