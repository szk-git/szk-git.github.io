---
name: docker
description: Generate or optimize Dockerfile and docker-compose configuration for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Generate or optimize Docker configuration for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed runtime and language for correct base image
- Read `.claude/specs/deployment.md` if it exists — use the listed container strategy and deployment target

Then:
1. Read existing Dockerfile, docker-compose.yml, and `.dockerignore` if they exist
2. Identify the runtime and application type from the codebase (web server, worker, CLI, etc.)
3. Generate or improve the Dockerfile:
   - Use official minimal base image (alpine or distroless where appropriate)
   - Multi-stage build: separate build and runtime stages
   - Non-root user for the runtime stage
   - Proper layer ordering for cache efficiency (dependencies before source code)
   - Correct `EXPOSE`, `HEALTHCHECK`, `CMD` / `ENTRYPOINT`
4. Generate or improve docker-compose.yml:
   - Services, volumes, networks with explicit names
   - Environment variable references (no hardcoded secrets — use `.env` file)
   - Health check dependencies (`depends_on` with `condition: service_healthy`)
5. Generate or update `.dockerignore` to exclude `node_modules`, `.git`, test files, etc.
6. Note any environment variables required with descriptions in a `.env.example` file

Output files to project root. Document any required environment variables.
