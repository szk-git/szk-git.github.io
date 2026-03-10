---
title: PR Review
parent: QA
nav_order: 2
description: Pull request review with structured feedback — breaking changes, missing tests, security, approval recommendation
---

# PR Review

**Invoke:** `/pr-review`  **Category:** QA

## What it does

Reviews a pull request or diff — reads all changed files, verifies the implementation matches the stated intent, identifies breaking changes, missing tests, security issues, and scope creep. Produces a structured review with required changes, suggestions, and an approval recommendation.

## Install

```bash
mkdir -p .claude/skills/pr-review
curl -o .claude/skills/pr-review/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/qa/pr-review/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/qa/pr-review/SKILL.md)

## Usage

```
/pr-review the changes in the feature/payment-refactor branch
/pr-review this diff: [paste diff or describe PR]
/pr-review PR #142 — adding multi-factor authentication
```

## Tailoring tips

- Add your PR standards to `.claude/specs/coding-standards.md` (e.g., "all PRs must include tests")
- For GitHub repos, run `git diff main...feature-branch` first and paste the output
- Pair with `/security-audit` for security-sensitive PRs
