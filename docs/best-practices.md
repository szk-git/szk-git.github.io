---
title: Best Practices
description: Tips for getting the most out of Claude Code skills
---

# Best Practices

## Write specific arguments

The more context you give a skill, the better the output. Compare:

**Vague:**
```
/api-design make an API
```

**Specific:**
```
/api-design design a REST API for order management with CRUD for orders, line items, and inventory reservation. Orders transition through draft → confirmed → fulfilled → cancelled.
```

Specific arguments help the skill make the right trade-offs without guessing. Include entity names, business rules, and constraints when you can.

## Fill in your specs first

The single biggest quality improvement is adding a `tech-stack.md` spec. Even five bullet points transform output from generic examples to code that matches your project.

Start here:

```bash
mkdir -p .claude/specs
curl -o .claude/specs/tech-stack.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/specs/tech-stack.md
```

Open the file and fill in your languages, frameworks, and tools. See [Team Specs](/specs) for all available spec templates.

## Combine skills in sequence

Skills work well together. Run them in order for complex tasks:

**Building a new feature:**
1. `/architect` — plan the system design and decide on component boundaries
2. `/api-design` — design the API surface based on the architecture
3. `/database` — model the data layer to support the API
4. `/unit-tests` — generate tests for the new code

**Pre-release review:**
1. `/code-review` — catch quality and correctness issues
2. `/security-audit` — check for OWASP vulnerabilities
3. `/coverage` — identify untested paths and generate missing tests

**Shipping to production:**
1. `/docker` — containerize the application
2. `/ci-cd` — set up the build and test pipeline
3. `/deploy` — generate a deployment runbook with rollback steps

## Customize skills after installing

Skills are just markdown files. After installing, edit `.claude/skills/<name>/SKILL.md` to tailor it:

- **Add project-specific instructions** — e.g., "Always use our shared error format from `src/lib/errors.ts`"
- **Restrict tool access** — tighten `allowed-tools` in the frontmatter to only what's needed
- **Set output paths** — e.g., "Write tests to `__tests__/<module>.test.ts`"
- **Append coding standards** — add your team's naming conventions or patterns directly into the prompt

## Commit skills and specs to your repo

Skills and specs live in `.claude/` — commit them so the whole team benefits:

```bash
git add .claude/skills/ .claude/specs/
git commit -m "Add Claude Code skills and team specs"
```

This creates a shared standard for AI-assisted development. When someone new joins the team, they get the same skills and context automatically.
