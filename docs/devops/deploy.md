---
title: Deploy
parent: DevOps
nav_order: 3
description: Generate deployment strategy, runbook, and rollback plan for any hosting target
---

# Deploy

**Invoke:** `/deploy`  **Category:** DevOps

## What it does

Generates a deployment strategy and runbook — recommends blue/green, canary, rolling, or recreate strategy based on your requirements, writes a pre-deployment checklist, step-by-step deployment commands, a rollback runbook, and success/health verification steps.

## Install

```bash
mkdir -p .claude/skills/deploy
curl -o .claude/skills/deploy/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/devops/deploy/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/devops/deploy/SKILL.md)

## Usage

```
/deploy generate a zero-downtime deployment runbook for the API service
/deploy create a deployment strategy for the database migration in v2.0
/deploy write a rollback procedure for our Kubernetes deployment
```

## Tailoring tips

- Add your hosting platform to `.claude/specs/deployment.md` (AWS ECS, Fly.io, Heroku, Kubernetes, etc.)
- Specify your risk tolerance in the arguments (e.g., "zero downtime required" or "brief maintenance window OK")
- Pair with `/ci-cd` to automate the runbook steps in your pipeline

## Related skills

- [CI/CD](/devops/ci-cd) — automate the runbook steps in your pipeline
- [Docker](/devops/docker) — containerize first, then plan deployment
- [Architect](/agents/architect) — review architecture before major deployment changes
