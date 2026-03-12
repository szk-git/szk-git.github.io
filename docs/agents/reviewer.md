---
title: Reviewer
parent: Agents
nav_order: 2
description: Multi-pass review agent — correctness, security, performance, and test coverage in one pass
---

# Reviewer

**Invoke:** `/reviewer`  **Category:** Agents

## What it does

Orchestrates a comprehensive four-pass review: correctness & logic, security (OWASP), performance, and test coverage. Compiles a unified report with severity-rated findings, a prioritized remediation list, and an overall approval recommendation. Writes the report to `review-report.md`.

## Install

```bash
mkdir -p .claude/skills/reviewer
curl -o .claude/skills/reviewer/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/agents/reviewer/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/agents/reviewer/SKILL.md)

## Usage

```
/reviewer the entire payments module before the v2 release
/reviewer all files in src/api/ before this goes to production
/reviewer the authentication refactor PR — comprehensive review needed
```

## Tailoring tips

- Add your quality standards to `.claude/specs/coding-standards.md` for project-specific checks
- Add security requirements to `.claude/specs/security-requirements.md` for compliance-aware review
- Use this before major releases; use `/code-review` or `/pr-review` for routine reviews

## Related skills

- [Code Review](/qa/code-review) — lightweight review for routine changes
- [PR Review](/qa/pr-review) — scoped review for individual pull requests
- [Security Audit](/qa/security-audit) — dedicated deep-dive on security findings
