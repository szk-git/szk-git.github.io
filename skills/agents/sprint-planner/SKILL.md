---
name: sprint-planner
description: Break down $ARGUMENTS into sprint-ready tickets with estimates and dependencies
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Create a sprint plan for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/coding-standards.md` if it exists — use the listed sprint length, team size, and issue tracker format
- Read `.claude/specs/tech-stack.md` if it exists — factor tech stack complexity into estimates

Then:
1. Read relevant codebase context — understand the current state and what needs to change
2. Break down the work into user stories following the format:
   `As a [user type], I want [action] so that [benefit]`
3. For each user story, generate implementation tickets:
   - **Title**: Clear, action-oriented (e.g., "Add rate limiting to /auth/login endpoint")
   - **Description**: What needs to be built and why
   - **Acceptance criteria**: Specific, testable conditions for "done"
   - **Technical notes**: Key implementation considerations, files to modify, approaches
   - **Estimate**: Story points (1/2/3/5/8 Fibonacci) with brief justification
   - **Dependencies**: Which tickets must complete first
4. Identify and call out:
   - Technical debt that must be addressed before new features can proceed
   - Tickets that can be parallelized by different developers
   - Any spikes needed (uncertainty requiring investigation before estimation)
5. Propose a sprint order — what to tackle in week 1 vs. week 2
6. Flag scope items that should be deferred to keep the sprint achievable

Output as `docs/sprint-plan.md` with tickets formatted for easy copy-paste into GitHub Issues or Jira.
