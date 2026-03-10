---
title: Home
layout: home
nav_order: 1
---

# Claude Skills Library

A public, browsable library of [Claude Code](https://claude.ai/code) skills organized by engineering domain.

Each skill is a `SKILL.md` file you drop into `.claude/skills/` in your project — then invoke it with `/skill-name` in any Claude Code session.

---

## Quick Start

```bash
# Create the skills directory in your project
mkdir -p .claude/skills/api-design

# Grab a skill
curl -o .claude/skills/api-design/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/api-design/SKILL.md

# Use it
# /api-design design a REST API for user management
```

---

## Quick Start with Team Specs

Skills work out of the box, but become much more powerful when you add [Team Specs](docs/specs.md) — context files that tell skills about your tech stack and conventions.

```bash
# Add your tech stack context (biggest impact)
curl -o .claude/specs/tech-stack.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/specs/tech-stack.md
# Fill it in — skills auto-detect and use it
```

---

## Categories

| Category | Skills | Description |
|----------|--------|-------------|
| [Backend](docs/backend/) | api-design, database, auth, performance | Server-side design and implementation |
| [Frontend](docs/frontend/) | component, styling, accessibility | UI development and standards |
| [Design](docs/design/) | ux-review, design-system, wireframe-critique | UX/UI design assistance |
| [Testing](docs/testing/) | unit-tests, integration, e2e, coverage | Quality assurance and test generation |
| [QA](docs/qa/) | code-review, pr-review, security-audit | Code quality and security |
| [DevOps](docs/devops/) | docker, ci-cd, deploy | Infrastructure and deployment |
| [Agents](docs/agents/) | architect, reviewer, sprint-planner | Orchestration and planning agents |
| [Team Specs](docs/specs.md) | tech-stack, coding-standards, architecture... | Context files to tailor skills to your team |

---

## How Skills Work

Skills are plain Markdown files with YAML frontmatter. Claude Code reads them from `.claude/skills/` and makes them available as slash commands.

```yaml
---
name: api-design
description: Design REST or GraphQL APIs
allowed-tools: Read,Write,Grep
---

Your prompt template here with $ARGUMENTS placeholder...
```

See [How to Install](docs/how-to-install.md) for full setup instructions.
