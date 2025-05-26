# CSP Bypass Test Payloads

## Objective
Record simulated payloads tested against weak CSP configuration.

## Payloads Tested
- Inline event handler: `<img src=x onerror=alert(1)>`
- External script via allowed CDN
- Fallback injection through unsafe-inline

## Observation
Policy allowed inline execution due to missing strict directives.

## Revision\nPayload notes revised after comparing inline execution with stricter browser behavior.
