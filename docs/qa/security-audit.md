---
title: Security Audit
parent: QA
nav_order: 3
description: Security vulnerability analysis — OWASP Top 10, injection, auth gaps, misconfigurations
---

# Security Audit

**Invoke:** `/security-audit`  **Category:** QA

## What it does

Audits code for security vulnerabilities across OWASP Top 10 (2021) — broken access control, injection risks, cryptographic failures, misconfigurations, auth weaknesses, logging failures, and SSRF. Rates each finding (Critical/High/Medium/Low) and produces a prioritized remediation plan.

## Install

```bash
mkdir -p .claude/skills/security-audit
curl -o .claude/skills/security-audit/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/qa/security-audit/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/qa/security-audit/SKILL.md)

## Usage

```
/security-audit the user authentication and session management code
/security-audit all API endpoint handlers for injection and auth risks
/security-audit the file upload feature before it goes to production
```

## Tailoring tips

- Add your security requirements to `.claude/specs/security-requirements.md` for compliance-specific checks
- Mention your threat model in the arguments (e.g., "external-facing API, multi-tenant")
- Pair with `/auth` to fix auth vulnerabilities found in the audit

## Related skills

- [Auth](/backend/auth) — fix auth vulnerabilities found in the audit
- [Code Review](/qa/code-review) — broader quality review beyond security
