---
title: Sprint Planner
parent: Agents
nav_order: 3
description: Break features into sprint-ready tickets with estimates, acceptance criteria, and dependencies
---

# Sprint Planner

**Invoke:** `/sprint-planner`  **Category:** Agents

## What it does

Breaks down features or projects into sprint-ready tickets — writes user stories, implementation tickets with acceptance criteria, story point estimates (Fibonacci), dependencies, parallelization opportunities, and a week-by-week sprint proposal. Output is formatted for copy-paste into GitHub Issues or Jira.

## Install

```bash
mkdir -p .claude/skills/sprint-planner
curl -o .claude/skills/sprint-planner/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/agents/sprint-planner/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/agents/sprint-planner/SKILL.md)

## Usage

```
/sprint-planner implement user notifications — push, email, and in-app
/sprint-planner the Q2 checkout redesign epic
/sprint-planner migrate the authentication system from sessions to JWT
```

## Tailoring tips

- Add your sprint length and team size to `.claude/specs/` for right-sized ticket estimates
- Add your issue tracker format to `.claude/specs/coding-standards.md` (GitHub Issues labels, Jira fields)
- Pair with `/architect` first for large epics to establish architecture before ticket breakdown
