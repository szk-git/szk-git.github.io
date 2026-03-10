---
name: deploy
description: Generate deployment strategy, runbook, and rollback plan for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Generate deployment strategy and runbook for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/deployment.md` if it exists — use the listed hosting platform, environments, and deployment strategy preferences
- Read `.claude/specs/tech-stack.md` if it exists — use the listed runtime and container setup

Then:
1. Understand the application type from the codebase (web service, background worker, static site, database migration) and hosting target
2. Recommend a deployment strategy based on risk tolerance:
   - **Blue/Green** — zero-downtime, instant rollback (recommended for stateful services)
   - **Canary** — gradual traffic shift (recommended for high-traffic services)
   - **Rolling** — gradual instance replacement (good default for stateless services)
   - **Recreate** — downtime accepted, simplest (only for dev/non-critical)
3. Generate a pre-deployment checklist:
   - Database migrations (run before or after cutover?)
   - Feature flags to enable/disable
   - Dependencies updated in correct order
   - Smoke test plan
4. Generate the deployment runbook (step-by-step commands)
5. Generate the rollback runbook (what to do if deployment fails)
6. Define success metrics and monitoring checks to verify deployment health

Output as `docs/deploy-runbook.md`. Keep commands copy-pasteable.
