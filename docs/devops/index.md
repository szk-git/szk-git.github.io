---
title: DevOps
nav_order: 8
has_children: true
description: Claude Code skills for infrastructure — Docker, CI/CD pipelines, and deployment runbooks
---

# DevOps Skills

Skills for infrastructure and deployment including Docker configuration, CI/CD pipelines, and deployment runbooks.

Use these skills when containerizing applications, setting up CI/CD, or planning deployments. They read your `deployment.md` spec to target the right platform and produce production-ready configuration files and runbooks.

| Skill | Invoke | Description |
|-------|--------|-------------|
| [Docker](docker.md) | `/docker` | Dockerfile and docker-compose generation |
| [CI/CD](ci-cd.md) | `/ci-cd` | Pipeline configuration for GitHub Actions and more |
| [Deploy](deploy.md) | `/deploy` | Deployment strategy and runbook generation |

## Install all DevOps skills

```bash
for skill in docker ci-cd deploy; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/devops/$skill/SKILL.md
done
```
