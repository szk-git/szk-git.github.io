# Deployment

> Copy this file to `.claude/specs/deployment.md` in your project and fill it in.
> Skills use this for deployment runbooks, CI/CD pipelines, and Docker configurations.

## Hosting Platform

<!-- Examples: AWS ECS, AWS Lambda, GCP Cloud Run, Azure App Service, Fly.io, Heroku, Railway, Vercel, self-hosted -->
-

## Environments

<!-- List your environments in promotion order -->
- Development:
- Staging:
- Production:

## Container Strategy

<!-- Examples: "Docker + ECS", "Kubernetes (EKS)", "no containers — PaaS", "serverless functions" -->
-

## CI/CD Platform

<!-- Examples: GitHub Actions, GitLab CI, CircleCI, Buildkite, Jenkins -->
-

## Deployment Strategy

<!-- Examples: "blue/green on production", "rolling on staging", "manual approval gate before prod" -->
- Staging:
- Production:
- Rollback approach:

## Database Migration Strategy

<!-- Examples: "run migrations before deploy", "run after deploy", "feature flags for schema changes" -->
-

## Environment Variables / Secrets

<!-- How are secrets provided to the application? -->
- Local dev:
- Staging:
- Production:

## Health Check / Readiness

<!-- How do you verify a deployment is healthy? -->
- Health endpoint: <!-- e.g., GET /health -->
- Readiness check:
- Success criteria:

## Deployment Approvals

<!-- Who must approve production deploys? What gates exist? -->
-

## On-Call / Incident Response

<!-- Who gets paged on deployment failures? What's the rollback SLA? -->
-
