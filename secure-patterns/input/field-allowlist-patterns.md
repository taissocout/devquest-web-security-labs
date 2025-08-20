# Field Allowlist Patterns

## Principle
Use explicit field allowlists for all user-controlled object updates.

## Implementation
Define a list of mutable fields and ignore anything outside it.
Never use Object.assign(model, userInput) without filtering.
