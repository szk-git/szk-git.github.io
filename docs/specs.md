---
title: Team Specs
nav_order: 10
description: Context files that tell skills about your team's tech stack, standards, and preferences
---

# Team Specs

Specs are context files you add to `.claude/specs/` in your project. Every skill in this library reads them before generating output — so instead of generic examples, you get code that matches your tech stack, naming conventions, and team requirements.

**You fill them in once. Every skill benefits automatically.**

## Quick Setup

```bash
mkdir -p .claude/specs

# Copy all spec templates
for spec in tech-stack coding-standards architecture testing-standards security-requirements deployment; do
  mkdir -p .claude/specs
  curl -o .claude/specs/$spec.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/specs/$spec.md
done

# Open each file and fill in your project's details
```

## Spec Files

| Spec | Purpose | Template |
|------|---------|----------|
| `tech-stack.md` | Languages, frameworks, libraries, and tools. **Most impactful — all skills read it.** | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/tech-stack.md) |
| `coding-standards.md` | Naming conventions, style rules, import patterns, error handling | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/coding-standards.md) |
| `architecture.md` | System overview, service boundaries, auth model, key ADRs | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/architecture.md) |
| `testing-standards.md` | Test frameworks, file locations, coverage targets, mocking strategy | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/testing-standards.md) |
| `security-requirements.md` | Compliance, data classification, auth policies, audit logging | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/security-requirements.md) |
| `deployment.md` | Hosting platform, environments, CI/CD platform, deploy strategy | [View](https://github.com/szk-git/szk-git.github.io/blob/main/specs/deployment.md) |

To install a single spec:

```bash
curl -o .claude/specs/<spec-name>.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/specs/<spec-name>.md
```

## Which Skills Use Which Specs

| Spec | Primary skills |
|------|----------------|
| `tech-stack.md` | All skills |
| `coding-standards.md` | `/code-review`, `/pr-review`, `/component`, `/styling` |
| `architecture.md` | `/architect`, `/api-design`, `/database`, `/performance` |
| `testing-standards.md` | `/unit-tests`, `/integration`, `/e2e`, `/coverage` |
| `security-requirements.md` | `/security-audit`, `/auth`, `/reviewer` |
| `deployment.md` | `/deploy`, `/ci-cd`, `/docker` |

## Tips

- Specs are **optional** — skills work without them, just more generically
- Keep entries **concise bullet points** — Claude reads them as context, not documentation
- **Commit `.claude/specs/`** to share context with your whole team
- **Update specs** when your stack or standards change
- You can add **custom spec files** for project-specific context (e.g., `.claude/specs/domain-glossary.md`)
