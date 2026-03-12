---
title: CI/CD
parent: DevOps
nav_order: 2
description: Generate CI/CD pipeline configuration for GitHub Actions or any CI platform
---

# CI/CD

**Invoke:** `/ci-cd`  **Category:** DevOps

## What it does

Generates or improves CI/CD pipeline configuration — lint, test, build, security scan, and deploy stages with dependency caching, parallel jobs, and minimal permissions. Defaults to GitHub Actions; adapts to GitLab CI, CircleCI, or others based on your project setup.

## Install

```bash
mkdir -p .claude/skills/ci-cd
curl -o .claude/skills/ci-cd/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/devops/ci-cd/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/devops/ci-cd/SKILL.md)

## Usage

```
/ci-cd set up a full CI pipeline with tests, build, and deploy to staging
/ci-cd add a security scanning stage to our existing GitHub Actions workflow
/ci-cd optimize our pipeline — it takes 20 minutes and should be under 5
```

## Tailoring tips

- Add your CI platform to `.claude/specs/tech-stack.md` for the correct config format
- Add your deployment targets to `.claude/specs/deployment.md` (staging, production, approval gates)
- Pair with `/docker` to include container build and push steps

## Related skills

- [Docker](/devops/docker) — add container build steps to the pipeline
- [Deploy](/devops/deploy) — automate deployment as the final pipeline stage
- [E2E Tests](/testing/e2e) — include E2E test execution in CI
