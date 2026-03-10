---
title: Docker
parent: DevOps
nav_order: 1
description: Generate optimized Dockerfile and docker-compose for any runtime and application type
---

# Docker

**Invoke:** `/docker`  **Category:** DevOps

## What it does

Generates or improves Docker configuration — multi-stage Dockerfile with minimal base image, non-root user, optimized layer caching, and a docker-compose with health checks, named volumes, and environment variable references. Also generates `.dockerignore` and `.env.example`.

## Install

```bash
mkdir -p .claude/skills/docker
curl -o .claude/skills/docker/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/devops/docker/SKILL.md
```

[View raw SKILL.md](https://github.com/szk-git/szk-git.github.io/blob/main/skills/devops/docker/SKILL.md)

## Usage

```
/docker containerize this Node.js API with a PostgreSQL database
/docker optimize our existing Dockerfile — it's slow to build and large
/docker add a docker-compose for local development with hot reload
```

## Tailoring tips

- Add your runtime and dependencies to `.claude/specs/tech-stack.md` for accurate base image selection
- Add your deployment target to `.claude/specs/deployment.md` (e.g., AWS ECS, Fly.io, Kubernetes)
- Pair with `/ci-cd` to add Docker build and push steps to your pipeline
