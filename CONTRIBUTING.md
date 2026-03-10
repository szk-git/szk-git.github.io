# Contributing to Claude Skills Library

Thank you for contributing! This library grows through community skills.

## Adding a New Skill

### 1. Create the skill file

Place your skill at `skills/<category>/<name>/SKILL.md`:

```yaml
---
name: your-skill-name
description: One-line description of what the skill does for $ARGUMENTS
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Your prompt body here.

Use $ARGUMENTS where the user's input should be inserted.

Steps Claude should follow:
1. ...
2. ...
3. ...
```

**Guidelines for the prompt body:**
- Be specific about what Claude should analyze and produce
- Include numbered steps for complex workflows
- Specify output format (e.g., "write to `docs/output.md`")
- Mention which tools are needed (and list them in `allowed-tools`)

### 2. Create the docs page

Add a corresponding page at `docs/<category>/<name>.md`:

```markdown
---
title: Your Skill Name
parent: Category Name
nav_order: N
description: Short description for search
---

# Your Skill Name

**Invoke:** `/your-skill-name`  **Category:** Category

## What it does

...

## Install

\`\`\`bash
curl -o .claude/skills/your-skill-name/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/category/your-skill-name/SKILL.md
\`\`\`

## Prompt

\`\`\`
[paste full prompt body]
\`\`\`

## Tailoring tips

...
```

### 3. Update the category index

Add your skill to `docs/<category>/index.md`.

### 4. Submit a Pull Request

- One skill per PR
- Test your skill in a real Claude Code session before submitting
- Include a brief description of what problem it solves

## Skill Quality Checklist

- [ ] `name` matches the directory name
- [ ] `description` is clear and includes `$ARGUMENTS` if applicable
- [ ] `allowed-tools` lists only what's needed
- [ ] Prompt body has clear numbered steps
- [ ] Docs page has install curl command
- [ ] Docs page has full prompt preview
- [ ] Tested in a real Claude Code session

## Categories

| Category | Use for |
|----------|---------|
| `backend` | Server-side code, APIs, databases |
| `frontend` | UI components, styling, browser code |
| `design` | UX, design systems, visual review |
| `testing` | Test generation and quality |
| `qa` | Code review, security, audits |
| `devops` | Infrastructure, CI/CD, deployment |
| `agents` | Multi-step orchestration and planning |

If your skill doesn't fit, propose a new category in your PR description.

## License

By contributing, you agree your skills are published under the MIT License.
