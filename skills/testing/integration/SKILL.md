---
name: integration
description: Write integration tests for $ARGUMENTS — test real component interactions without mocking internals
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Write integration tests for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed test framework and database
- Read `.claude/specs/testing-standards.md` if it exists — follow the test DB setup and isolation strategy

Then:
1. Read the module, API route, or service being tested — understand its external contracts
2. Identify integration boundaries: database, external APIs, message queues, file system
3. Set up test infrastructure using the project's approach:
   - Use a real (test) database if applicable — run migrations before tests
   - Use in-memory alternatives or test containers based on the project's existing pattern
   - Mock only external third-party services (payment processors, email providers, etc.)
4. Write tests that exercise the full stack from the entry point:
   - For APIs: HTTP request → route handler → service → database → response
   - For services: service method → dependencies → return value / side effects
5. Cover: successful flows, validation errors, not-found cases, auth failures
6. Ensure test setup and teardown properly clean state between tests
7. Include a seed data helper if multiple tests need the same starting state

Tests should catch integration bugs that unit tests miss — don't duplicate unit test cases.
