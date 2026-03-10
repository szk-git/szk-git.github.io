---
name: coverage
description: Analyze test coverage gaps in $ARGUMENTS and generate missing tests
allowed-tools: Read,Write,Grep,Bash
version: 1.0
license: MIT
---

Analyze and improve test coverage for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed test framework for correct coverage command
- Read `.claude/specs/testing-standards.md` if it exists — apply the listed coverage targets and priorities

Then:
1. Run existing tests with coverage enabled using the project's test runner (check package.json, Makefile, or equivalent for the correct command)
2. Identify files and branches with the lowest coverage — prioritize by risk (business-critical > utilities)
3. For each uncovered area, determine why it's uncovered:
   - Missing test cases (add them)
   - Dead code that should be removed (flag it)
   - Hard-to-test code that needs refactoring for testability
4. Write tests for the highest-priority gaps — focus on branches and error paths
5. For code that's hard to test, suggest a targeted refactor (e.g., extract a pure function, inject dependencies)
6. Report: coverage before → after, files improved, any remaining gaps with explanation

Do not chase 100% coverage — target meaningful coverage of business logic and error paths.
