---
name: ux-review
description: Evaluate UX of $ARGUMENTS against Nielsen's heuristics and suggest improvements
allowed-tools: Read,Grep
version: 1.0
license: MIT
---

Perform a UX heuristic review of: $ARGUMENTS

Evaluate against Nielsen's 10 Usability Heuristics:

1. **Visibility of system status** — does the UI keep users informed of what's happening?
2. **Match between system and real world** — does it use language and concepts familiar to the user?
3. **User control and freedom** — can users undo/redo and exit unwanted states?
4. **Consistency and standards** — are patterns consistent within the product and with platform conventions?
5. **Error prevention** — does the design prevent errors before they occur?
6. **Recognition rather than recall** — are options visible rather than requiring memory?
7. **Flexibility and efficiency of use** — are there shortcuts for expert users?
8. **Aesthetic and minimalist design** — is irrelevant information absent?
9. **Help users recognize, diagnose, and recover from errors** — are error messages helpful?
10. **Help and documentation** — is help easy to find when needed?

For each heuristic: rate severity (0=not applicable, 1=cosmetic, 2=minor, 3=major, 4=catastrophic), describe the issue, and suggest a specific fix.

Conclude with a prioritized list of top 3 improvements with the highest user impact.
