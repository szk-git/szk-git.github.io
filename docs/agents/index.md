---
title: Agents
nav_order: 9
has_children: true
description: Claude Code orchestration and planning agents — architect, multi-pass reviewer, and sprint planner
---

# Agent Skills

Orchestration and planning skills that coordinate multi-step workflows: system architecture, comprehensive reviews, and sprint planning.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [Architect](architect.md) | `/architect` | System architecture design and ADR generation |
| [Reviewer](reviewer.md) | `/reviewer` | Multi-pass review: correctness, security, performance, tests |
| [Sprint Planner](sprint-planner.md) | `/sprint-planner` | Sprint planning and ticket breakdown |

## Install all agent skills

```bash
for skill in architect reviewer sprint-planner; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/agents/$skill/SKILL.md
done
```
