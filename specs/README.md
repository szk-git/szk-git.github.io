# Specs — Team & Project Context for Skills

The `specs/` folder contains **template context files** that you fill in once for your project. When a skill runs, it checks for these files and tailors its output to your team's conventions, tech stack, and requirements.

## How It Works

1. Copy the relevant spec templates into your project's `.claude/specs/` directory
2. Fill them in with your team's actual preferences and conventions
3. Every skill in this library reads `.claude/specs/` before generating output

```bash
# Copy all spec templates into your project
mkdir -p .claude/specs

for spec in tech-stack coding-standards architecture testing-standards security-requirements deployment; do
  curl -o .claude/specs/$spec.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/specs/$spec.md
done
```

## Available Templates

| File | Purpose |
|------|---------|
| [`tech-stack.md`](tech-stack.md) | Languages, frameworks, libraries, and versions |
| [`coding-standards.md`](coding-standards.md) | Style, naming, patterns, and conventions |
| [`architecture.md`](architecture.md) | System design principles and constraints |
| [`testing-standards.md`](testing-standards.md) | Test frameworks, coverage targets, and patterns |
| [`security-requirements.md`](security-requirements.md) | Security policies and compliance requirements |
| [`deployment.md`](deployment.md) | Hosting targets, environments, and deployment process |

## Example: Tailored vs. Generic Output

**Without specs:**
> "Generate unit tests using Jest or Vitest, or the testing framework in your project..."

**With `.claude/specs/tech-stack.md` filled in:**
> "Generating Vitest tests with `@testing-library/vue`, placing them in `src/**/*.test.ts` as per your project conventions..."

## Which Skills Use Which Specs

| Spec | Used by |
|------|---------|
| `tech-stack.md` | All skills (primary tailoring signal) |
| `coding-standards.md` | `/code-review`, `/pr-review`, `/component`, `/styling` |
| `architecture.md` | `/architect`, `/api-design`, `/database`, `/performance` |
| `testing-standards.md` | `/unit-tests`, `/integration`, `/e2e`, `/coverage` |
| `security-requirements.md` | `/security-audit`, `/auth`, `/reviewer` |
| `deployment.md` | `/deploy`, `/ci-cd`, `/docker` |

## Tips

- You don't need to fill in all specs — skills gracefully degrade when a spec file is absent or partially filled
- Keep specs concise (bullet points work great) — Claude reads them as context, not documentation
- Update specs when your tech stack or standards evolve
- Commit `.claude/specs/` to your repo to share context with your whole team
