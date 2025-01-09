# Methodology Notes — 2025-01

**Assessment Type:** Simulated Web Pentest Lab  
**Environment:** Controlled educational environment  
**Period:** 2025-01  
**Reviewer Context:** Portfolio-oriented AppSec / Pentest study workflow

## Objective
Document the testing methodology applied to the web security labs reviewed during 2025-01, with emphasis on reproducibility, consistency, and vulnerability-to-remediation mapping.

## Assessment Principles
- Manual-first validation
- Reproducible browser-based testing
- Clear separation between vulnerable and fixed implementations
- Focus on root cause and mitigation, not only payload execution
- Documentation suitable for portfolio and study review

## Core Testing Activities
- Input manipulation
- Browser inspection and DOM analysis
- Validation of trust boundaries
- Review of authorization and ownership logic
- Review of session and browser storage behavior
- Review of security controls such as CSP, headers, and frame restrictions
- Validation of fixed implementation after mitigation

## Severity Considerations
Severity in these labs is assigned according to:
- exploitability in the scenario
- likely impact on confidentiality/integrity
- breadth of affected user interaction
- realism of the security weakness in modern web applications

## Deliverables Produced
- technical lab reports
- monthly summary
- findings tracking
- remediation notes

## Important Note
This methodology applies to a simulated and educational lab environment. It is not a claim of production penetration testing engagement.
