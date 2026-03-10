# Architecture

> Copy this file to `.claude/specs/architecture.md` in your project and fill it in.
> Skills use this to give architecture-aware recommendations aligned with your system design.

## System Overview

<!-- 1-3 sentences describing what your system does -->
-

## Architecture Style

<!-- Examples: Monolith, Microservices, Modular monolith, Serverless, Event-driven -->
-

## Service / Module Boundaries

<!-- List your main services or modules and their responsibilities -->
-

## Data Flow

<!-- Describe how data flows through the system at a high level -->
-

## Communication Patterns

<!-- Examples: REST between services, gRPC for internal, events via Kafka/SQS, BFF pattern -->
-

## State Management

<!-- Backend: where state lives (DB, Redis, etc.). Frontend: state library or pattern used -->
-

## Authentication / Authorization Model

<!-- Examples: JWT with refresh tokens, sessions, OAuth with provider, RBAC with roles: [admin, user, viewer] -->
- Auth mechanism:
- Auth provider: <!-- e.g., custom, Auth0, Clerk -->
- Permission model: <!-- e.g., RBAC, ABAC, flat permissions -->
-

## Scalability Constraints

<!-- Examples: "single-region deployment", "must handle 10k concurrent users", "database is the bottleneck" -->
-

## Key Architectural Decisions Already Made

<!-- List decisions that are settled and should not be revisited -->
-

## Areas Under Active Design / Not Yet Decided

<!-- List areas where recommendations are welcome -->
-
