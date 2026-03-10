---
name: unit-tests
description: Generate comprehensive unit tests for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Generate unit tests for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed test framework and language
- Read `.claude/specs/testing-standards.md` if it exists — follow the file location, naming, and coverage conventions

Then:
1. Read the target function(s) or module(s) — understand inputs, outputs, and side effects
2. Identify the test framework in use from the project (match its import style, assertion API, and mock patterns)
3. Generate test cases covering:
   - **Happy path**: each documented use case with valid inputs
   - **Edge cases**: empty inputs, boundary values, null/undefined, max values
   - **Error cases**: invalid inputs, thrown exceptions, rejected promises
   - **Side effects**: spy/mock calls to dependencies, verify correct arguments passed
4. Mock external dependencies (database, HTTP calls, file system) — do not test them here
5. Aim for branch coverage — every `if`, `switch`, and ternary should be exercised
6. Keep each test focused: one assertion of behavior per test (multiple `expect` calls are fine if they describe a single behavior)
7. Use descriptive test names: `describe("functionName")` → `it("returns X when Y")`

Place tests in the location the project uses (co-located or `__tests__/` directory).
