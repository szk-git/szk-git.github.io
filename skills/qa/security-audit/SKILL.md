---
name: security-audit
description: Security vulnerability audit of $ARGUMENTS — OWASP Top 10 and common implementation flaws
allowed-tools: Read,Grep
version: 1.0
license: MIT
---

Perform a security audit of: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/security-requirements.md` if it exists — apply the listed compliance requirements and policies
- Read `.claude/specs/architecture.md` if it exists — understand the threat model and trust boundaries

Check against OWASP Top 10 (2021) and common implementation vulnerabilities:

1. **A01 Broken Access Control** — missing auth checks, IDOR vulnerabilities, privilege escalation paths
2. **A02 Cryptographic Failures** — weak algorithms, hardcoded secrets, unencrypted sensitive data
3. **A03 Injection** — SQL injection, command injection, LDAP injection, XSS in templates
4. **A04 Insecure Design** — missing rate limiting, no abuse prevention, missing security controls
5. **A05 Security Misconfiguration** — default credentials, verbose error messages, open CORS, debug mode in prod
6. **A06 Vulnerable Components** — check `package.json` / lockfile for known CVEs (note: can't run audit, flag for manual check)
7. **A07 Auth Failures** — weak passwords allowed, missing MFA for admin, session fixation
8. **A08 Software Integrity** — unsigned dependencies, missing integrity checks
9. **A09 Logging Failures** — no audit trail for sensitive actions, passwords/tokens in logs
10. **A10 SSRF** — user-controlled URLs fetched server-side without validation

For each finding: severity (Critical/High/Medium/Low), location (file:line), description, and remediation.

End with a prioritized remediation plan. Flag Critical and High findings clearly.
