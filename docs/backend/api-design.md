---
title: API Design
parent: Backend
nav_order: 1
description: Generate API designs, route structures, error handling, and specs for any tech stack
---

# API Design

**Invoke:** `/api-design`  **Category:** Backend

## What it does

Analyzes your codebase and generates a full API design — resource model, routes, request/response shapes, error handling, and an API spec. Language and framework agnostic; reads your team's specs (if present) to match conventions.

## Install

```bash
mkdir -p .claude/skills/api-design
curl -o .claude/skills/api-design/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/api-design/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/backend/api-design/SKILL.md)

## Usage

```
/api-design design a REST API for user management with roles and permissions
/api-design add endpoints for the order fulfillment workflow
/api-design review and improve our existing /api/v2 routes
```

## Tailoring tips

- Add a `.claude/specs/tech-stack.md` to your project — the skill will read it and use your framework's conventions
- Pair with `/database` to design the data model before the API layer
- Pair with `/auth` to define protected endpoints and permission checks
- For GraphQL projects, mention "GraphQL" in your arguments
