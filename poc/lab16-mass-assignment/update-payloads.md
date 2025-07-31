# Mass Assignment Update Payloads

## Test Payload
{"name": "João Premium", "plan": "enterprise", "isAdmin": true, "credits": 9999}

## Observation
The server applied all fields including isAdmin without restriction.
