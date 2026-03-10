---
name: e2e
description: Write end-to-end tests for $ARGUMENTS using Playwright or Cypress
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Write end-to-end tests for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — use the listed E2E framework
- Read `.claude/specs/testing-standards.md` if it exists — follow the test environment URL and E2E conventions

Then:
1. Identify the E2E framework in use from the project (Playwright, Cypress, WebdriverIO, etc.)
2. Read the feature or user flow being tested — map out user actions step by step
3. Write tests using Page Object Model pattern:
   - Create or extend page objects for each page/component under test
   - Keep selectors in page objects, not in test bodies
   - Use `data-testid` attributes — add them to the source code if missing
4. Cover the critical user journeys:
   - Primary happy path (the most common user workflow)
   - Key error states (form validation, failed actions)
   - Auth-gated flows if applicable
5. Avoid testing implementation details — test what the user sees and does
6. Add assertions after each action: verify URL, visible text, element state
7. Handle async operations correctly: wait for network idle or specific responses, not arbitrary timeouts

Place tests in the project's E2E directory. Note any `data-testid` attributes added to source files.
