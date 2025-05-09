# Technical Pentest Report — Lab 11 Weak CSP / CSP Bypass

**Assessment Type:** Simulated Web Pentest Lab  
**Environment:** Local controlled training environment  
**Assessment Window:** 2025-05  
**Category:** Browser Security Controls  
**Primary Weakness:** Ineffective Content Security Policy  
**Severity:** Medium  
**Validation Status:** Vulnerable behavior reproduced / Fixed variant reviewed

---

## 1. Executive Summary
A security issue related to **Ineffective Content Security Policy** was identified and reproduced in a controlled lab environment. The vulnerable implementation demonstrated unsafe application behavior that could plausibly impact confidentiality, integrity, or trust boundaries in a real-world web application context. The corrected implementation was then reviewed to validate that the mitigation direction reduced or removed the original attack surface.

## 2. Scope
The following components were considered in scope for this simulated assessment:

- 11-devquest-security-lab-csp-bypass
- vulnerable/index.html
- vulnerable/script.js
- fixed/index.html
- fixed/script.js

This review focused on the lab-specific attack path and the intended mitigation strategy.

## 3. Methodology
The following approach was applied during the simulated review:

- manual browser-based testing
- payload crafting and input manipulation
- DOM inspection where relevant
- state and trust-boundary review
- validation of behavior in vulnerable implementation
- validation of intended remediation in fixed implementation

## 4. Finding Overview
### Ineffective Content Security Policy
**Severity:** Medium  
**Category:** Browser Security Controls

## 5. Description
The vulnerable version allowed behavior associated with **Ineffective Content Security Policy**. The application trusted data, state, or rendering paths in a way that introduced a security weakness. In the context of the lab, this behavior was sufficient to demonstrate the core vulnerability pattern and its practical impact.

## 6. Technical Details
A CSP was present but configured weakly enough to allow dangerous inline execution patterns. This reduced the policy’s effectiveness and created a false impression of protection.

## 7. Proof of Concept / Test Input
```text
Inline event handler payload under weak CSP
```

## 8. Security Impact
Weak CSP configuration may leave exploitable script execution paths open while obscuring the real residual risk.

## 9. Risk Rating Rationale
The issue was rated **Medium** based on the following considerations:

- practical reproducibility in the lab scenario
- realistic attack pattern in web applications
- effect on user trust, authorization, or browser execution context
- ease of exploitation where applicable

## 10. Remediation Guidance
Strengthen the policy by removing unsafe-inline where feasible, limiting script sources, and pairing CSP with safe rendering and sanitization practices.

## 11. Validation After Fix
The fixed implementation was reviewed under the same test assumptions used for the vulnerable version. The original unsafe behavior was no longer reproducible in its prior form, and the revised implementation showed a more appropriate security posture for this scenario.

## 12. Analyst Conclusion
This simulated assessment confirmed the presence of **Ineffective Content Security Policy** in the vulnerable version and validated the intended mitigation approach in the fixed version. The lab effectively demonstrates both the offensive behavior and the secure development correction pattern.

## 13. Disclosure Note
This report belongs to a controlled educational and portfolio project. It does **not** represent a claim of assessment against a production environment or third-party target.

### Review Note\nCSP observations refined after distinguishing nominal policy from meaningful browser protection.
