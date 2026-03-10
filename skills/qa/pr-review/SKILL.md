---
name: pr-review
description: Review a pull request or diff for $ARGUMENTS — correctness, safety, and team standards
allowed-tools: Read,Grep,Bash
version: 1.0
license: MIT
---

Review the pull request or diff for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/coding-standards.md` if it exists — apply PR standards (required tests, commit style, etc.)
- Read `.claude/specs/tech-stack.md` if it exists — apply relevant best practices for the tech stack

Then:
1. Read the PR description or commit messages to understand the intent
2. Read all changed files — understand what was added, removed, and modified
3. Verify the implementation matches the stated intent
4. Check for:
   - **Breaking changes** — API contract changes, removed exports, changed behavior
   - **Missing tests** — new logic without test coverage
   - **Security issues** — injection, auth gaps, sensitive data
   - **Performance regressions** — new database queries in hot paths, missing indexes
   - **Error handling** — new error paths without handling
   - **Documentation gaps** — public API changes without docs update
5. Check that the PR is appropriately scoped — flag unrelated changes
6. Note anything that needs manual testing (UI changes, integration behavior)

Format feedback as a structured review:
- Summary of what the PR does
- List of required changes (blocking)
- List of suggestions (non-blocking)
- Approval recommendation: Approve / Request Changes / Needs Discussion
