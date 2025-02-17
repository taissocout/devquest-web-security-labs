# Technical Pentest Report — Lab 05 URL Parameter Abuse

**Assessment Type:** Simulated Web Pentest Lab  
**Environment:** Local controlled training environment  
**Assessment Window:** 2025-02  
**Category:** Authorization / Logic  
**Primary Weakness:** Privilege or State Manipulation via URL Parameters  
**Severity:** Medium  
**Validation Status:** Vulnerable behavior reproduced / Fixed variant reviewed

---

## 1. Executive Summary
A security issue related to **Privilege or State Manipulation via URL Parameters** was identified and reproduced in a controlled lab environment. The vulnerable implementation demonstrated unsafe application behavior that could plausibly impact confidentiality, integrity, or trust boundaries in a real-world web application context. The corrected implementation was then reviewed to validate that the mitigation direction reduced or removed the original attack surface.

## 2. Scope
The following components were considered in scope for this simulated assessment:

- 05-devquest-security-lab-url-params
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
### Privilege or State Manipulation via URL Parameters
**Severity:** Medium  
**Category:** Authorization / Logic

## 5. Description
The vulnerable version allowed behavior associated with **Privilege or State Manipulation via URL Parameters**. The application trusted data, state, or rendering paths in a way that introduced a security weakness. In the context of the lab, this behavior was sufficient to demonstrate the core vulnerability pattern and its practical impact.

## 6. Technical Details
The application trusted URL parameters as a meaningful source of privilege or application state. Because URL parameters are fully user-controlled, they must not be treated as authoritative security inputs.

## 7. Proof of Concept / Test Input
```text
?role=admin / ?admin=true
```

## 8. Security Impact
The weakness can enable privilege confusion, UI deception, or insecure state transitions when applications derive access behavior from tamperable query strings.

## 9. Risk Rating Rationale
The issue was rated **Medium** based on the following considerations:

- practical reproducibility in the lab scenario
- realistic attack pattern in web applications
- effect on user trust, authorization, or browser execution context
- ease of exploitation where applicable

## 10. Remediation Guidance
Move privilege and authorization decisions to trusted server-side logic and ensure query parameters only influence non-sensitive presentation state.

## 11. Validation After Fix
The fixed implementation was reviewed under the same test assumptions used for the vulnerable version. The original unsafe behavior was no longer reproducible in its prior form, and the revised implementation showed a more appropriate security posture for this scenario.

## 12. Analyst Conclusion
This simulated assessment confirmed the presence of **Privilege or State Manipulation via URL Parameters** in the vulnerable version and validated the intended mitigation approach in the fixed version. The lab effectively demonstrates both the offensive behavior and the secure development correction pattern.

## 13. Disclosure Note
This report belongs to a controlled educational and portfolio project. It does **not** represent a claim of assessment against a production environment or third-party target.

### Review Note\nReport language revised to better separate client-state abuse from access-control implications.
