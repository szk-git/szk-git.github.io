---
title: Code Review
parent: QA
nav_order: 1
description: Thorough code quality review — correctness, security, performance, maintainability
---

# Code Review

**Invoke:** `/code-review`  **Category:** QA

## What it does

Performs a structured code review across five dimensions: correctness, security, performance, maintainability, and error handling. Quotes specific code, explains the problem, provides the corrected version. Severity-rated findings (must fix / should fix / consider).

## Install

```bash
mkdir -p .claude/skills/code-review
curl -o .claude/skills/code-review/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/qa/code-review/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/qa/code-review/SKILL.md)

## Usage

```
/code-review src/services/billing.ts
/code-review the new authentication middleware added in the last commit
/code-review all files changed in the checkout refactor PR
```

## Tailoring tips

- Add your coding standards to `.claude/specs/coding-standards.md` for project-specific style checks
- Specify the review focus in arguments if needed (e.g., "focus on security and error handling")
- Pair with `/security-audit` for dedicated security-focused review

## Related skills

- [PR Review](/qa/pr-review) — review a specific pull request with scope and intent analysis
- [Security Audit](/qa/security-audit) — deep-dive into security vulnerabilities
