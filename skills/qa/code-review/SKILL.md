---
name: code-review
description: Perform a thorough code quality review of $ARGUMENTS with actionable feedback
allowed-tools: Read,Grep
version: 1.0
license: MIT
---

Perform a code quality review of: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/coding-standards.md` if it exists — apply the team's specific naming, style, and pattern rules
- Read `.claude/specs/tech-stack.md` if it exists — apply language and framework best practices

Review across these dimensions and provide specific, actionable feedback:

1. **Correctness** — logic errors, off-by-one errors, incorrect conditionals, race conditions
2. **Security** — input validation, injection risks, sensitive data exposure, auth bypass
3. **Performance** — unnecessary loops, missing memoization, synchronous blocking, large allocations
4. **Maintainability** — overly complex functions, missing abstractions, duplicated logic, unclear naming
5. **Error handling** — unhandled promises/exceptions, silent failures, missing validation
6. **Testing** — missing test coverage for new logic, untestable code structure
7. **Code style** — deviations from project conventions (not personal preference)

For each issue:
- Quote the specific code
- Explain why it's a problem
- Provide the corrected version

Severity levels: 🔴 Must fix (correctness/security) | 🟡 Should fix (quality/performance) | 🔵 Consider (style/minor improvement)

End with a summary: overall assessment and top 3 priority fixes.
