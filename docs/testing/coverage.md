---
title: Coverage
parent: Testing
nav_order: 4
description: Analyze test coverage gaps and generate missing tests for uncovered paths
---

# Coverage

**Invoke:** `/coverage`  **Category:** Testing

## What it does

Runs coverage analysis, identifies high-priority gaps (business-critical paths with no coverage), writes tests for the most important uncovered areas, and flags dead code or hard-to-test code that needs refactoring. Targets meaningful coverage of business logic — not 100% for its own sake.

## Install

```bash
mkdir -p .claude/skills/coverage
curl -o .claude/skills/coverage/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/testing/coverage/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/testing/coverage/SKILL.md)

## Usage

```
/coverage the payments module — we have almost no tests there
/coverage identify the biggest coverage gaps in src/services/
/coverage improve branch coverage in the authorization middleware
```

## Tailoring tips

- Add your coverage targets to `.claude/specs/testing-standards.md` (e.g., "we target 80% branch coverage on business logic")
- Specify which directories are highest priority in the arguments
- Pair with `/unit-tests` or `/integration` to write the tests identified
