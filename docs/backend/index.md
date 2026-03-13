---
title: Backend
nav_order: 3
has_children: true
description: Claude Code skills for server-side development — APIs, databases, auth, and performance
---

# Backend Skills

Skills for server-side development across APIs, databases, authentication, and performance optimization.

Use these skills when building or evolving server-side systems. They cover the full lifecycle from API surface design through data modeling, authentication, and runtime optimization. Each skill reads your `tech-stack.md` spec so output matches your framework — Express, Fastify, Django, Rails, Spring Boot, or anything else.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [API Design](api-design.md) | `/api-design` | REST/GraphQL API design with OpenAPI spec |
| [Database](database.md) | `/database` | Schema design, migrations, query optimization |
| [Auth](auth.md) | `/auth` | Authentication and authorization implementation |
| [Performance](performance.md) | `/performance` | Backend profiling and optimization |

## Install all backend skills

```bash
for skill in api-design database auth performance; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/$skill/SKILL.md
done
```
