---
name: auth
description: Implement or audit authentication and authorization for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Implement or review authentication and authorization for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed auth provider and framework
- Read `.claude/specs/architecture.md` if it exists — use the defined auth mechanism and permission model
- Read `.claude/specs/security-requirements.md` if it exists — apply the listed auth policies (MFA, session timeout, etc.)

Then:
1. Identify the auth pattern in use (JWT, sessions, OAuth 2.0, API keys, OIDC) or recommend one based on the use case
2. Implement or audit token/session generation, validation, and refresh logic
3. Implement or audit authorization middleware — check role/permission handling matches the project's model
4. Verify secrets are never logged or returned in responses
5. Check for common auth vulnerabilities:
   - Timing attacks in credential/token comparison
   - Missing rate limiting on login/token endpoints
   - Insecure token storage guidance for clients
   - Missing secure cookie flags if session-based
6. Generate route protection middleware if missing, in the project's framework style
7. Write tests for: valid auth, expired token, tampered token, missing token, insufficient permissions

Output updated auth files and document the auth flow in `docs/auth.md`.
