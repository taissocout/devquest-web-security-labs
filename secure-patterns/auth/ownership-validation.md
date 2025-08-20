# Ownership Validation Pattern

## Principle
Per-resource authorization must be enforced server-side for all user-owned objects.

## Anti-pattern
Returning any resource matching the supplied ID without checking ownership.
