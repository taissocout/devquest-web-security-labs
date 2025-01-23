# Technical Pentest Report — Lab 02 innerHTML Injection

**Assessment Type:** Simulated Web Pentest Lab  
**Environment:** Local controlled training environment  
**Assessment Window:** 2025-01  
**Category:** Injection  
**Primary Weakness:** Unsafe HTML Rendering via innerHTML  
**Severity:** High  
**Validation Status:** Vulnerable behavior reproduced / Fixed variant reviewed

---

## 1. Executive Summary
A security issue related to **Unsafe HTML Rendering via innerHTML** was identified and reproduced in a controlled lab environment. The vulnerable implementation demonstrated unsafe application behavior that could plausibly impact confidentiality, integrity, or trust boundaries in a real-world web application context. The corrected implementation was then reviewed to validate that the mitigation direction reduced or removed the original attack surface.

## 2. Scope
The following components were considered in scope for this simulated assessment:

- 02-devquest-security-lab-innerhtml
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
### Unsafe HTML Rendering via innerHTML
**Severity:** High  
**Category:** Injection

## 5. Description
The vulnerable version allowed behavior associated with **Unsafe HTML Rendering via innerHTML**. The application trusted data, state, or rendering paths in a way that introduced a security weakness. In the context of the lab, this behavior was sufficient to demonstrate the core vulnerability pattern and its practical impact.

## 6. Technical Details
The application rendered user-controlled content using innerHTML. This caused the browser to parse attacker-supplied markup and enabled execution paths through embedded HTML constructs and event handlers.

## 7. Proof of Concept / Test Input
```text
<img src=x onerror=alert('XSS')>
```

## 8. Security Impact
The vulnerability could allow persistent or reflected script execution depending on usage context, undermining trust in rendered content and exposing downstream viewers to malicious payloads.

## 9. Risk Rating Rationale
The issue was rated **High** based on the following considerations:

- practical reproducibility in the lab scenario
- realistic attack pattern in web applications
- effect on user trust, authorization, or browser execution context
- ease of exploitation where applicable

## 10. Remediation Guidance
Use safe DOM construction APIs, escape untrusted content before display, and reserve HTML rendering only for content that has passed explicit sanitization requirements.

## 11. Validation After Fix
The fixed implementation was reviewed under the same test assumptions used for the vulnerable version. The original unsafe behavior was no longer reproducible in its prior form, and the revised implementation showed a more appropriate security posture for this scenario.

## 12. Analyst Conclusion
This simulated assessment confirmed the presence of **Unsafe HTML Rendering via innerHTML** in the vulnerable version and validated the intended mitigation approach in the fixed version. The lab effectively demonstrates both the offensive behavior and the secure development correction pattern.

## 13. Disclosure Note
This report belongs to a controlled educational and portfolio project. It does **not** represent a claim of assessment against a production environment or third-party target.

### Review Note\nClarified that unsafe HTML rendering was the primary weakness.
