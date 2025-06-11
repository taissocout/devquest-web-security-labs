# Technical Pentest Report — Lab 13 CORS Misconfiguration

**Assessment Type:** Simulated Web Pentest Lab  
**Environment:** Local controlled training environment  
**Assessment Window:** 2025-06  
**Category:** Cross-Origin Security  
**Primary Weakness:** Overly Permissive CORS Policy  
**Severity:** High  
**Validation Status:** Vulnerable behavior reproduced / Fixed variant reviewed

---

## 1. Executive Summary
A security issue related to **Overly Permissive CORS Policy** was identified and reproduced in a controlled lab environment. The vulnerable implementation demonstrated unsafe application behavior that could plausibly impact confidentiality, integrity, or trust boundaries in a real-world web application context. The corrected implementation was then reviewed to validate that the mitigation direction reduced or removed the original attack surface.

## 2. Scope
The following components were considered in scope for this simulated assessment:

- 13-devquest-security-lab-cors
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
### Overly Permissive CORS Policy
**Severity:** High  
**Category:** Cross-Origin Security

## 5. Description
The vulnerable version allowed behavior associated with **Overly Permissive CORS Policy**. The application trusted data, state, or rendering paths in a way that introduced a security weakness. In the context of the lab, this behavior was sufficient to demonstrate the core vulnerability pattern and its practical impact.

## 6. Technical Details
The simulated API accepted or reflected untrusted origins in a way that enabled cross-origin reading of data that should not have been accessible to arbitrary sites.

## 7. Proof of Concept / Test Input
```text
Origin: https://evil.example
```

## 8. Security Impact
This can expose sensitive responses to attacker-controlled origins and enable cross-site data exfiltration when browser-enforced restrictions are weakened by server misconfiguration.

## 9. Risk Rating Rationale
The issue was rated **High** based on the following considerations:

- practical reproducibility in the lab scenario
- realistic attack pattern in web applications
- effect on user trust, authorization, or browser execution context
- ease of exploitation where applicable

## 10. Remediation Guidance
Use an explicit origin allowlist, avoid reflecting arbitrary Origin headers, and review credentialed cross-origin behavior carefully.

## 11. Validation After Fix
The fixed implementation was reviewed under the same test assumptions used for the vulnerable version. The original unsafe behavior was no longer reproducible in its prior form, and the revised implementation showed a more appropriate security posture for this scenario.

## 12. Analyst Conclusion
This simulated assessment confirmed the presence of **Overly Permissive CORS Policy** in the vulnerable version and validated the intended mitigation approach in the fixed version. The lab effectively demonstrates both the offensive behavior and the secure development correction pattern.

## 13. Disclosure Note
This report belongs to a controlled educational and portfolio project. It does **not** represent a claim of assessment against a production environment or third-party target.

### Review Note\nCORS explanation improved to distinguish response exposure from general request reachability.
