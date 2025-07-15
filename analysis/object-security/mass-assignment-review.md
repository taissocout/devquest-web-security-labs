# Mass Assignment Review

## Core Issue
Unsafe binding of user-controlled properties directly into internal objects.

## Consequence
Sensitive fields like isAdmin or credits may be modified without authorization.
