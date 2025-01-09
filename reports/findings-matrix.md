# Findings Matrix — Consolidated View

**Assessment Type:** Simulated Lab Findings Register  
**Environment:** Local training labs  
**Purpose:** Consolidated portfolio-ready overview of the 20 security scenarios

| Lab | Title | Category | Severity | Core Weakness | Mitigation Theme |
|-----|-------|----------|----------|---------------|------------------|
| 01 | DOM XSS | Injection | High | Unsafe DOM rendering | Safe output handling |
| 02 | innerHTML Injection | Injection | High | Unsafe HTML rendering | Safe DOM APIs |
| 03 | Weak Form Validation | Validation | Medium | Client-only enforcement | Server-side validation |
| 04 | Insecure localStorage | Storage | High | Sensitive data in browser storage | Server-managed session |
| 05 | URL Parameter Abuse | Authorization / Logic | Medium | Trust in URL parameters | Server-side trust model |
| 06 | Open Redirect | Navigation | Medium | Unvalidated redirect target | Allowlist redirects |
| 07 | Insecure Login Mock | Authentication | High | Client-side auth trust | Backend authentication |
| 08 | Sensitive Data Exposure | Data Exposure | High | Excessive frontend payload | Data minimization |
| 09 | Insecure Token Storage | Session Security | High | JS-readable token storage | HttpOnly session model |
| 10 | Missing Cookie Flags | Session Security | Medium | Weak cookie attributes | Secure cookie settings |
| 11 | Weak CSP | Browser Security | Medium | Ineffective CSP | Stronger CSP policy |
| 12 | Clickjacking | Browser Security | Medium | No frame protection | frame-ancestors / DENY |
| 13 | CORS Misconfiguration | Cross-Origin | High | Overly permissive origin policy | Explicit allowlist |
| 14 | Missing Security Headers | Hardening | Medium | Missing browser protections | Secure header baseline |
| 15 | Weak API Authorization | Authorization | High | Trust in client-controlled role | Server-derived auth |
| 16 | Mass Assignment | Object Security | High | Unsafe object binding | Field allowlists |
| 17 | IDOR | Authorization | High | No ownership check | Per-resource auth |
| 18 | Stored XSS | Injection | High | Persisted unsafe rendering | Safe rendering/sanitization |
| 19 | Prototype Pollution | Object Security | High | Unsafe deep merge | Dangerous key blocking |
| 20 | Security Dashboard | Governance | Informational | Consolidated weak posture | Centralized remediation view |

## Notes
This document consolidates simulated findings from a controlled training project. It is intended for educational and portfolio purposes.
