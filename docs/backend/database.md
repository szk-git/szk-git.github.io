---
title: Database
parent: Backend
nav_order: 2
description: Schema design, migrations, index strategy, and query optimization for any database
---

# Database

**Invoke:** `/database`  **Category:** Backend

## What it does

Designs or optimizes your database layer — entity-relationship model, migration files, index strategy, query optimization, and data integrity constraints. Works with any SQL or NoSQL database; reads team specs to match your ORM and migration conventions.

## Install

```bash
mkdir -p .claude/skills/database
curl -o .claude/skills/database/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/database/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/backend/database/SKILL.md)

## Usage

```
/database design a schema for a multi-tenant SaaS application
/database optimize the queries in the reporting module
/database write migrations to add soft-delete to all user-facing tables
```

## Tailoring tips

- Add your ORM and database type to `.claude/specs/tech-stack.md` (e.g., "Prisma + PostgreSQL")
- Pair with `/api-design` — design the data model first, then the API
- For NoSQL, mention your document store in the arguments for appropriate advice

## Related skills

- [API Design](/backend/api-design) — design the API surface on top of the data model
- [Performance](/backend/performance) — optimize slow queries and indexing strategy
