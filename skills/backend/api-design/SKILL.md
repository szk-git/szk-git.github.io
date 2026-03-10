---
name: api-design
description: Design REST or GraphQL APIs — route structure, error handling patterns, and API spec for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Design a well-structured API for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed framework, language, and conventions
- Read `.claude/specs/architecture.md` if it exists — respect existing service boundaries and auth model

Then:
1. Analyze existing codebase for conventions (routes, controllers, resolvers, or equivalent patterns)
2. Propose resource model and route structure following REST best practices or GraphQL schema design
3. Define request/response shapes using the project's type system (TypeScript interfaces, Python dataclasses, JSON Schema, etc.)
4. Document error codes and edge cases (400, 401, 403, 404, 409, 422, 500)
5. Generate an API spec appropriate for the tech stack (OpenAPI 3.1, GraphQL SDL, tRPC router, or similar)
6. Write example requests for each endpoint using the project's conventions (curl, fetch, httpx, etc.)

Output as `docs/api.md` or update existing API docs. Include a changelog entry if docs already exist.
