---
title: How to Install Skills
nav_order: 2
description: Step-by-step guide to installing Claude Code skills in your project
---

# How to Install Skills

## What is a Skill?

A Claude Code skill is a `SKILL.md` file placed in `.claude/skills/<name>/` inside your project. Claude Code picks it up automatically and makes it available as a `/name` slash command in any session within that project.

## Prerequisites

- [Claude Code](https://claude.ai/code) installed
- A project directory (any language/framework)

## Install a Single Skill

```bash
# 1. Create the skills directory
mkdir -p .claude/skills/<skill-name>

# 2. Download the skill
curl -o .claude/skills/<skill-name>/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/<category>/<skill-name>/SKILL.md

# 3. Use it in Claude Code
# /skill-name your arguments here
```

### Example: Install the API Design skill

```bash
mkdir -p .claude/skills/api-design
curl -o .claude/skills/api-design/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/api-design/SKILL.md
```

Then in Claude Code:
```
/api-design design a REST API for a blog platform with posts, comments, and tags
```

## Install Multiple Skills at Once

```bash
# Backend bundle
for skill in api-design database auth performance; do
  mkdir -p .claude/skills/$skill
  curl -o .claude/skills/$skill/SKILL.md \
    https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/$skill/SKILL.md
done
```

## Verify Installation

```bash
ls .claude/skills/
# api-design/  database/  auth/  ...
```

Claude Code will automatically discover all skills in `.claude/skills/` — no configuration needed.

## File Structure

```
your-project/
└── .claude/
    └── skills/
        ├── api-design/
        │   └── SKILL.md
        ├── database/
        │   └── SKILL.md
        └── ...
```

## Committing Skills to Your Project

Skills are project-specific. Commit them to share with your team:

```bash
git add .claude/skills/
git commit -m "Add Claude Code skills for this project"
```

## Updating a Skill

Re-run the `curl` command to overwrite with the latest version:

```bash
curl -o .claude/skills/api-design/SKILL.md \
  https://raw.githubusercontent.com/szk-git/szk-git.github.io/main/skills/backend/api-design/SKILL.md
```

## Customizing a Skill

After installing, edit `.claude/skills/<name>/SKILL.md` directly to tailor it to your project's conventions. Common customizations:

- Add your tech stack to the prompt (e.g., "We use Fastify and Prisma")
- Restrict `allowed-tools` to only what's needed
- Add project-specific output paths
- Append your coding standards

## Troubleshooting

### Skill not showing up in Claude Code

- Confirm the file is at `.claude/skills/<name>/SKILL.md` — the filename must be exactly `SKILL.md`
- Make sure you are in the project root that contains the `.claude/` directory
- Restart your Claude Code session — skills are discovered on startup

### Permission denied during curl

- Check that you have write access to the target directory
- On macOS/Linux, make sure the `.claude/` directory exists first (`mkdir -p .claude/skills/<name>`)

### Skill gives generic output

- Add a `.claude/specs/tech-stack.md` file — this is the single biggest quality improvement
- See [Team Specs](/specs) for the full list of context files
- Include more detail in your arguments (see [Best Practices](/best-practices))

### Updates not taking effect

- Claude Code caches skill files per session — start a new session after updating a `SKILL.md`

## Uninstall a Skill

Delete the skill directory:

```bash
rm -rf .claude/skills/api-design
```

To remove all skills:

```bash
rm -rf .claude/skills
```

Spec files in `.claude/specs/` are separate and not affected.

## Browse All Skills

Use the sidebar to explore skills by category, or see the full list in the [README](https://github.com/szk-git/szk-git.github.io).
