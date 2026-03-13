---
title: Testing
nav_order: 6
has_children: true
description: Claude Code skills for test generation and quality — unit, integration, e2e, and coverage
---

# Testing Skills

Skills for test generation and quality improvement across unit, integration, end-to-end, and coverage analysis.

Use these skills when adding or improving test coverage. They generate tests that follow your project's conventions — framework choice, file locations, and mocking patterns — when you provide a `testing-standards.md` spec. Start with `/coverage` to find gaps, then use the other skills to fill them.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [Unit Tests](unit-tests.md) | `/unit-tests` | Comprehensive unit test generation |
| [Integration](integration.md) | `/integration` | Integration test suites for APIs and services |
| [E2E](e2e.md) | `/e2e` | End-to-end tests with Playwright or Cypress |
| [Coverage](coverage.md) | `/coverage` | Coverage gap analysis and test generation |

## Install all testing skills

```bash
for skill in unit-tests integration e2e coverage; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/testing/$skill/SKILL.md
done
```
