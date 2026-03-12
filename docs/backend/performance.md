---
title: Performance
parent: Backend
nav_order: 4
description: Profile and optimize backend bottlenecks — queries, caching, async patterns
---

# Performance

**Invoke:** `/performance`  **Category:** Backend

## What it does

Identifies and fixes backend performance bottlenecks — slow database queries, N+1 patterns, synchronous blocking, missing pagination, large payloads, and caching opportunities. Suggests targeted fixes in priority order and writes a benchmark to verify improvement.

## Install

```bash
mkdir -p .claude/skills/performance
curl -o .claude/skills/performance/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/performance/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/backend/performance/SKILL.md)

## Usage

```
/performance the /api/reports endpoint is slow under load
/performance optimize the user listing query — it times out on large datasets
/performance review the background job processor for memory leaks
```

## Tailoring tips

- Mention your caching layer in `.claude/specs/tech-stack.md` (Redis, Memcached, in-process)
- Describe your scale in the arguments (number of users, requests/second) for appropriate recommendations
- Pair with `/database` for deeper query and index analysis

## Related skills

- [Database](/backend/database) — deep-dive into query and index optimization
- [Docker](/devops/docker) — optimize container resource limits and caching
