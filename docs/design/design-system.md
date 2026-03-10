---
title: Design System
parent: Design
nav_order: 2
description: Generate or extend design system tokens and component specs
---

# Design System

**Invoke:** `/design-system`  **Category:** Design

## What it does

Generates or extends a design system — audits existing tokens for inconsistencies, proposes a three-level token hierarchy (primitive → semantic → component), generates token files in your project's format, and documents component specs with states and variants.

## Install

```bash
mkdir -p .claude/skills/design-system
curl -o .claude/skills/design-system/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/design/design-system/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/design/design-system/SKILL.md)

## Usage

```
/design-system audit our current tokens for inconsistencies
/design-system generate a complete token set for the new brand colors
/design-system document the Button component spec including all variants and states
```

## Tailoring tips

- Add your token format to `.claude/specs/tech-stack.md` (CSS custom properties, Style Dictionary, Tailwind config)
- Pair with `/styling` to apply the new tokens across existing components
- Include brand palette in the arguments for color-specific token generation
