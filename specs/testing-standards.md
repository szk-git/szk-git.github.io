# Testing Standards

> Copy this file to `.claude/specs/testing-standards.md` in your project and fill it in.
> Skills use this to generate tests that match your patterns and coverage expectations.

## Test Framework(s)

<!-- See tech-stack.md — duplicate here if different per layer -->
- Unit:
- Integration:
- E2E:

## Test File Location

<!-- Examples: "co-located: src/foo.test.ts next to src/foo.ts", "centralized: tests/ directory" -->
-

## Naming Conventions

<!-- Examples: "describe('FunctionName') / it('returns X when Y')", "test_function_name_condition" -->
-

## Coverage Targets

<!-- Examples: "80% branch coverage on src/services/", "100% on critical payment paths" -->
- Overall target:
- Critical paths (must be 100%):
- Excluded from coverage:

## Mocking Strategy

<!-- Examples: "mock at module boundary, never internal functions", "use MSW for HTTP mocking", "prefer real DB in integration tests" -->
-

## Test Database Setup

<!-- Examples: "SQLite in-memory for unit, real Postgres test DB for integration", "Docker Compose for integration tests" -->
-

## E2E Environment

<!-- Examples: "test against staging", "local dev server on port 3000", "use Playwright test config" -->
-

## What We Test at Each Level

<!-- Describe what belongs in unit vs integration vs e2e -->
- Unit tests:
- Integration tests:
- E2E tests:

## Things We Don't Test (and Why)

<!-- Examples: "no unit tests for DB migrations — covered by integration", "no E2E for admin flows — team is small" -->
-
