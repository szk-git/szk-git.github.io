---
title: Unit Tests
parent: Testing
nav_order: 1
description: Generate comprehensive unit tests for any language and testing framework
---

# Unit Tests

**Invoke:** `/unit-tests`  **Category:** Testing

## What it does

Generates comprehensive unit tests — happy paths, edge cases, error cases, and side effect verification. Matches your project's test framework and conventions, mocks external dependencies, and places tests in the project's standard location.

## Install

```bash
mkdir -p .claude/skills/unit-tests
curl -o .claude/skills/unit-tests/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/testing/unit-tests/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/testing/unit-tests/SKILL.md)

## Usage

```
/unit-tests the payment processing module
/unit-tests all functions in src/utils/validation.ts
/unit-tests the UserService class focusing on error paths
```

## Tailoring tips

- Add your test framework to `.claude/specs/tech-stack.md` for correct syntax (Jest, Vitest, pytest, Go test, etc.)
- Add coverage requirements to `.claude/specs/testing-standards.md` to guide which paths to prioritize
- Pair with `/coverage` to identify gaps in existing test suites
