---
title: Design
nav_order: 5
has_children: true
description: Claude Code skills for UX/UI design — heuristic reviews, design systems, and wireframe critique
---

# Design Skills

Skills for UX/UI design work including heuristic evaluations, design system generation, and wireframe analysis.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [UX Review](ux-review.md) | `/ux-review` | Heuristic evaluation and UX recommendations |
| [Design System](design-system.md) | `/design-system` | Token generation and component specs |
| [Wireframe Critique](wireframe-critique.md) | `/wireframe-critique` | Layout, flow, and feasibility analysis |

## Install all design skills

```bash
for skill in ux-review design-system wireframe-critique; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/design/$skill/SKILL.md
done
```
