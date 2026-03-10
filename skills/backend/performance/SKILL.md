---
name: performance
description: Profile and optimize backend performance bottlenecks for $ARGUMENTS
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Profile and optimize backend performance for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed database, caching layer, and framework
- Read `.claude/specs/architecture.md` if it exists — understand the system's scale requirements and known constraints

Then:
1. Identify the performance concern (slow endpoints, high memory, database query time, etc.)
2. Read relevant route handlers, database queries, and any caching layers
3. Analyze for common bottlenecks:
   - Synchronous blocking in async contexts
   - Missing database indexes
   - N+1 query patterns
   - Unoptimized serialization / large payloads
   - Missing pagination on list endpoints
   - Unbounded in-memory collections
4. Propose specific fixes in priority order (highest impact first), using the project's available tools
5. Suggest caching strategies appropriate for the tech stack (framework cache, Redis, HTTP cache headers)
6. Write a benchmark or load test script in the project's language/tools to verify improvement
7. Document the before/after expected improvement in `docs/performance.md`

Make only the changes necessary to address the identified bottleneck — do not refactor unrelated code.
