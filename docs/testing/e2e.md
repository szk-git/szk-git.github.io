---
title: E2E Tests
parent: Testing
nav_order: 3
description: Write end-to-end tests for critical user journeys using Playwright or Cypress
---

# E2E Tests

**Invoke:** `/e2e`  **Category:** Testing

## What it does

Writes end-to-end tests for critical user journeys — uses Page Object Model pattern, adds `data-testid` attributes where needed, covers happy paths and key error states, and handles async operations correctly. Works with Playwright (preferred), Cypress, or other E2E frameworks.

## Install

```bash
mkdir -p .claude/skills/e2e
curl -o .claude/skills/e2e/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/testing/e2e/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/testing/e2e/SKILL.md)

## Usage

```
/e2e the complete checkout flow from cart to order confirmation
/e2e user login, password reset, and account deletion flows
/e2e the admin dashboard CRUD operations for user management
```

## Tailoring tips

- Add your E2E framework to `.claude/specs/tech-stack.md` (Playwright, Cypress, etc.)
- Add your test environment URL pattern to `.claude/specs/testing-standards.md`
- The skill will add `data-testid` attributes to source files — review those changes before committing
