# Claude Skills Library

A public, browsable library of [Claude Code](https://claude.ai/code) skills organized by engineering domain.

**Site:** https://szk-git.github.io
**Skills:** `skills/` directory — copy these into your project
**Docs:** `docs/` directory — rendered as GitHub Pages

## What is a Skill?

A skill is a `SKILL.md` file placed in `.claude/skills/<name>/` in your project. Claude Code picks it up automatically and makes it available as a `/name` slash command.

## Quick Install

```bash
# Pick a skill from the library and drop it in your project
mkdir -p .claude/skills/api-design
curl -o .claude/skills/api-design/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/api-design/SKILL.md
```

Then in Claude Code: `/api-design design a REST API for user management`

## Skills Index

### Backend
- [`api-design`](skills/backend/api-design/SKILL.md) — REST/GraphQL API design with OpenAPI spec
- [`database`](skills/backend/database/SKILL.md) — Schema design, migrations, query optimization
- [`auth`](skills/backend/auth/SKILL.md) — Authentication and authorization implementation
- [`performance`](skills/backend/performance/SKILL.md) — Performance profiling and optimization

### Frontend
- [`component`](skills/frontend/component/SKILL.md) — UI component design and implementation
- [`styling`](skills/frontend/styling/SKILL.md) — CSS/styling patterns and design tokens
- [`accessibility`](skills/frontend/accessibility/SKILL.md) — WCAG compliance and a11y fixes

### Design
- [`ux-review`](skills/design/ux-review/SKILL.md) — UX heuristic evaluation and recommendations
- [`design-system`](skills/design/design-system/SKILL.md) — Design system tokens and component specs
- [`wireframe-critique`](skills/design/wireframe-critique/SKILL.md) — Wireframe analysis and improvement suggestions

### Testing
- [`unit-tests`](skills/testing/unit-tests/SKILL.md) — Unit test generation for functions and modules
- [`integration`](skills/testing/integration/SKILL.md) — Integration test suites for APIs and services
- [`e2e`](skills/testing/e2e/SKILL.md) — End-to-end test scenarios with Playwright/Cypress
- [`coverage`](skills/testing/coverage/SKILL.md) — Coverage gap analysis and test recommendations

### QA
- [`code-review`](skills/qa/code-review/SKILL.md) — Thorough code quality and style review
- [`pr-review`](skills/qa/pr-review/SKILL.md) — Pull request review with actionable feedback
- [`security-audit`](skills/qa/security-audit/SKILL.md) — Security vulnerability analysis (OWASP Top 10)

### DevOps
- [`docker`](skills/devops/docker/SKILL.md) — Dockerfile and docker-compose generation
- [`ci-cd`](skills/devops/ci-cd/SKILL.md) — CI/CD pipeline configuration (GitHub Actions, etc.)
- [`deploy`](skills/devops/deploy/SKILL.md) — Deployment strategy and runbook generation

### Agents
- [`architect`](skills/agents/architect/SKILL.md) — System architecture design and ADR generation
- [`reviewer`](skills/agents/reviewer/SKILL.md) — Multi-pass review orchestration agent
- [`sprint-planner`](skills/agents/sprint-planner/SKILL.md) — Sprint planning and ticket breakdown agent

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit new skills or improve existing ones.

## License

MIT — see [LICENSE](LICENSE)
