# Prototype Pollution Impact Analysis

## Core Risk
Modifying Object.prototype affects all objects derived from it,
creating hard-to-trace security side effects across the application.

## Dangerous Keys
- __proto__
- constructor
- prototype
