# Data Exfiltration from XSS

## Concept
Once script execution exists in the browser, exposed storage material
and weak session tokens may be exfiltrated to attacker-controlled endpoints.

## Chain
XSS -> localStorage/token read -> exfiltration -> session replay
