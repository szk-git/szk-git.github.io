---
title: UX Review
parent: Design
nav_order: 1
description: Heuristic evaluation of UI against Nielsen's 10 usability heuristics
---

# UX Review

**Invoke:** `/ux-review`  **Category:** Design

## What it does

Evaluates UI against Nielsen's 10 usability heuristics — rates severity of each issue, describes the problem, and suggests a specific fix. Ends with a prioritized top-3 list of highest-impact improvements.

## Install

```bash
mkdir -p .claude/skills/ux-review
curl -o .claude/skills/ux-review/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/design/ux-review/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/design/ux-review/SKILL.md)

## Usage

```
/ux-review the onboarding flow for new users
/ux-review the settings page — users report it's confusing
/ux-review the checkout process from cart to confirmation
```

## Tailoring tips

- Add your target user persona to the arguments for persona-specific evaluation
- Add brand/UX guidelines to `.claude/specs/` for context-aware feedback
- Pair with `/wireframe-critique` for designs that haven't been built yet
