---
title: Integration Tests
parent: Testing
nav_order: 2
description: Write integration tests covering real component interactions and service boundaries
---

# Integration Tests

**Invoke:** `/integration`  **Category:** Testing

## What it does

Writes integration tests that exercise the full stack from entry point to database — sets up real test infrastructure, handles seed data and teardown, and covers successful flows, validation errors, not-found cases, and auth failures. Only mocks external third-party services.

## Install

```bash
mkdir -p .claude/skills/integration
curl -o .claude/skills/integration/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/testing/integration/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/testing/integration/SKILL.md)

## Usage

```
/integration the user registration and email verification flow
/integration all order management endpoints including payment processing
/integration the background job queue with worker processing
```

## Tailoring tips

- Add your database and test isolation strategy to `.claude/specs/testing-standards.md`
- Specify your test database setup in the arguments (e.g., "we use SQLite for tests")
- Pair with `/unit-tests` — unit tests cover logic, integration tests cover wiring
