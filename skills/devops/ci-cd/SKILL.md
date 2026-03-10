---
name: ci-cd
description: Generate or improve CI/CD pipeline configuration for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Generate or improve CI/CD pipeline for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed CI platform, package manager, and build tools
- Read `.claude/specs/deployment.md` if it exists — configure deploy stages to match the listed environments and approval gates

Then:
1. Identify the CI/CD platform in use from the project (check `.github/workflows/`, `.gitlab-ci.yml`, etc.) or use GitHub Actions as default
2. Read existing pipeline configuration and understand current workflow
3. Design pipeline stages:
   - **Lint** — code style and static analysis (fast, runs first)
   - **Test** — unit tests with coverage report
   - **Build** — compile/bundle artifacts
   - **Integration test** — against real services (parallel to build if possible)
   - **Security scan** — dependency audit, SAST
   - **Deploy** — environment-specific deployments with manual approval for production
4. Optimize for speed:
   - Cache dependencies (node_modules, pip, go modules)
   - Run independent jobs in parallel
   - Skip expensive steps on non-main branches where safe
5. Security:
   - Use OIDC / short-lived tokens instead of long-lived secrets where possible
   - Pin action versions to SHA hashes (GitHub Actions)
   - Minimal permissions per job
6. Add status badge snippet for README

Output to `.github/workflows/` or equivalent. Document required secrets/variables.
