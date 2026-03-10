---
name: architect
description: Design system architecture and generate Architecture Decision Records (ADRs) for $ARGUMENTS
allowed-tools: Read,Write,Grep
version: 1.0
license: MIT
---

Design system architecture for: $ARGUMENTS

First, check for team context:
- Read `.claude/specs/tech-stack.md` if it exists — incorporate the listed technologies into architecture proposals
- Read `.claude/specs/architecture.md` if it exists — respect existing decisions and constraints; focus on the open questions

Then:
1. Read the existing codebase structure, key modules, and any existing architecture docs
2. Understand the problem scope: what is being built or changed, at what scale, with what constraints
3. Identify architectural concerns:
   - Scalability bottlenecks in the proposed or existing design
   - Single points of failure
   - Data consistency and transaction boundaries
   - Service boundaries and communication patterns (sync/async, REST/events)
   - Security boundaries and trust levels
4. Propose an architecture:
   - Component diagram (text-based, using ASCII or Mermaid)
   - Data flow for key scenarios
   - Technology choices with brief justification
   - Trade-offs explicitly stated
5. Generate Architecture Decision Records (ADRs) for each significant decision:
   - Title, Status, Context, Decision, Consequences
   - Save to `docs/adr/YYYY-MM-DD-title.md`
6. Identify what to build first (MVP slice) vs. what can be deferred
7. Flag risks and open questions that need input before implementation

Output architecture docs to `docs/architecture.md` and individual ADRs to `docs/adr/`.
