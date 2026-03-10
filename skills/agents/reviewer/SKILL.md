---
name: reviewer
description: Multi-pass review orchestration agent for $ARGUMENTS — combines code, security, performance, and test coverage review
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Orchestrate a comprehensive multi-pass review of: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/coding-standards.md` if it exists — apply team-specific standards in Pass 1
- Read `.claude/specs/security-requirements.md` if it exists — apply compliance requirements in Pass 2
- Read `.claude/specs/testing-standards.md` if it exists — apply coverage targets in Pass 4

Run four sequential review passes and compile a unified report:

**Pass 1 — Correctness & Logic**
Read all relevant files. Identify logic errors, incorrect assumptions, missing edge cases, and behavioral bugs. Rate each finding: Critical / High / Medium / Low.

**Pass 2 — Security**
Re-read with a security focus. Check OWASP Top 10 vulnerabilities, injection risks, auth gaps, sensitive data handling, and input validation. Rate findings.

**Pass 3 — Performance**
Re-read with a performance focus. Identify N+1 queries, missing indexes, synchronous blocking, excessive memory use, and missing caching opportunities. Rate findings.

**Pass 4 — Test Coverage**
Identify which paths and branches have no test coverage. List specific scenarios that are untested. Assess overall test quality.

**Final Report** — Write to `review-report.md`:
- Executive summary (2-3 sentences)
- Critical findings (must fix before merge)
- High/Medium findings (should fix soon)
- Low findings (backlog)
- Test coverage gaps
- Overall recommendation: Approve / Request Changes / Major Rework Needed
