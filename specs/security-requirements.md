# Security Requirements

> Copy this file to `.claude/specs/security-requirements.md` in your project and fill it in.
> Skills use this for security audits, auth implementation, and code reviews.

## Compliance Requirements

<!-- Examples: SOC 2 Type II, GDPR, HIPAA, PCI DSS, ISO 27001, none -->
-

## Data Classification

<!-- Describe what types of sensitive data your system handles -->
- PII: <!-- e.g., "email, name, address — stored in users table" -->
- Financial: <!-- e.g., "no card data — delegated to Stripe" -->
- Health:
- Other sensitive:

## Authentication Requirements

<!-- Examples: "MFA required for admin accounts", "password min 12 chars", "sessions expire after 24h" -->
- Password policy:
- MFA:
- Session timeout:
- Account lockout:

## Authorization Model

<!-- Describe your permission model — see architecture.md if already defined there -->
-

## Network Security

<!-- Examples: "all traffic over HTTPS", "internal services on private VPC", "rate limiting on all public endpoints" -->
-

## Secrets Management

<!-- Examples: "AWS Secrets Manager", "Doppler", ".env files (dev only)", "no hardcoded secrets" -->
-

## Audit Logging Requirements

<!-- What user actions must be logged for compliance or security? -->
- Required audit events:
- Log retention:

## Known Security Constraints / Accepted Risks

<!-- Document any known issues that are accepted / won't fix with reason -->
-

## Security Review Requirements

<!-- Examples: "security review required for any auth changes", "OWASP Top 10 check before each release" -->
-
