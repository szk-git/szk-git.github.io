---
title: QA
nav_order: 7
has_children: true
description: Claude Code skills for code quality — code review, PR review, and security audits
---

# QA Skills

Skills for code quality and security including thorough code reviews, PR analysis, and OWASP security audits.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [Code Review](code-review.md) | `/code-review` | Thorough code quality and style review |
| [PR Review](pr-review.md) | `/pr-review` | Pull request review with actionable feedback |
| [Security Audit](security-audit.md) | `/security-audit` | OWASP Top 10 vulnerability analysis |

## Install all QA skills

```bash
for skill in code-review pr-review security-audit; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/qa/$skill/SKILL.md
done
```
