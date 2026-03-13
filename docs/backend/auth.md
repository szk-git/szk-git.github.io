---
title: Auth
parent: Backend
nav_order: 3
description: Implement or audit authentication and authorization for any auth pattern
---

# Auth

**Invoke:** `/auth`  **Category:** Backend

## What it does

Implements or audits your authentication and authorization layer — token handling, session management, role/permission checks, middleware, and security hardening. Checks for common auth vulnerabilities and generates tests. Adapts to any auth pattern (JWT, sessions, OAuth, API keys).

## Install

```bash
mkdir -p .claude/skills/auth
curl -o .claude/skills/auth/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/auth/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/backend/auth/SKILL.md)

## Usage

```
/auth implement JWT authentication with refresh tokens
/auth audit our existing session-based auth for security issues
/auth add role-based access control to the admin endpoints
```

## Tailoring tips

- Specify your auth provider in `.claude/specs/tech-stack.md` (e.g., Auth0, Clerk, custom)
- Add your permission model to `.claude/specs/architecture.md` for role-aware output
- Pair with `/security-audit` for a comprehensive security review after implementing auth

## Related skills

- [API Design](/backend/api-design) — define which endpoints require authentication
- [Security Audit](/qa/security-audit) — audit the auth implementation for vulnerabilities
