---
name: wireframe-critique
description: Critique wireframes or UI mockups for $ARGUMENTS — layout, hierarchy, flow, and feasibility
allowed-tools: Read,Grep
version: 1.0
license: MIT
---

Critique the wireframe or UI design for: $ARGUMENTS

Analyze the design across these dimensions:

1. **Information hierarchy** — is the visual weight correct? Does the most important content draw attention first?
2. **Layout and spacing** — is alignment consistent? Is whitespace used purposefully?
3. **User flow** — are the steps to complete key tasks intuitive? Are there dead ends or missing states?
4. **Missing states** — identify empty states, loading states, error states, and edge cases not shown
5. **Content fit** — will real content (long names, translated strings, overflow text) break the layout?
6. **Mobile/responsive** — how will this layout adapt to smaller screens?
7. **Consistency** — do patterns match the existing product or design system?
8. **Implementation feasibility** — flag any elements that are unusually complex to build with cost/effort notes

For each issue: describe the problem, why it matters to the user, and a concrete suggestion to fix it.

End with: top 3 changes that would most improve the design.
