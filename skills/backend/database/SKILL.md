---
name: database
description: Design database schemas, write migrations, and optimize queries for $ARGUMENTS
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Design or optimize database layer for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed database engine and ORM/query builder
- Read `.claude/specs/architecture.md` if it exists — respect existing data model and service boundaries

Then:
1. Analyze existing schema files, models, and ORM/migration configuration
2. Propose entity-relationship model with proper normalization (3NF by default, denormalize only with justification)
3. Write migration files in the format used by the project (SQL, ORM-specific DSL, etc.)
4. Define indexes for common query patterns — explain each index choice
5. Identify N+1 query risks and suggest eager loading or batching strategies appropriate for the ORM/driver in use
6. Write optimized query examples for the most common access patterns
7. Note any potential data integrity issues (missing constraints, missing foreign keys)

Output migrations to the project's standard migrations directory. Document schema decisions in `docs/database.md`.
