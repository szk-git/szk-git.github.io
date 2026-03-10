---
title: Architect
parent: Agents
nav_order: 1
description: System architecture design and ADR generation for any scale and technology
---

# Architect

**Invoke:** `/architect`  **Category:** Agents

## What it does

Designs system architecture — reads existing codebase structure, proposes component diagrams (Mermaid/ASCII), identifies architectural concerns (scalability, SPOF, consistency), generates Architecture Decision Records (ADRs), and recommends an MVP slice vs. deferred work.

## Install

```bash
mkdir -p .claude/skills/architect
curl -o .claude/skills/architect/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/agents/architect/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/agents/architect/SKILL.md)

## Usage

```
/architect design the notification system — real-time push, email, and in-app
/architect review our current architecture for the 10x scale milestone
/architect propose a service boundary split for the monolith checkout module
```

## Tailoring tips

- Add your scale requirements and constraints to `.claude/specs/architecture.md`
- Add your preferred tech stack to `.claude/specs/tech-stack.md` for stack-aware recommendations
- Pair with `/sprint-planner` to break the architecture into implementable tickets
