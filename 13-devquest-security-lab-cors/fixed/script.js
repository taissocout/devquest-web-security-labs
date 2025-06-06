// ╔══════════════════════════════════════════════════════╗
// ║  LAB 13 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Allowlist explícita de origins                  ║
// ╚══════════════════════════════════════════════════════╝

const ALLOWED_ORIGINS = [
  "https://app.empresa.com",
  "https://portal.empresa.com"
];

function simulateCors() {
  const origin = document.getElementById('originInput').value.trim();
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  const response = isAllowed
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Credentials": "true",
        "body": {
          user: "admin@empresa.com",
          profile: "redacted-demo"
        }
      }
    : {
        "error": "Origin não autorizada"
      };

  document.getElementById('responseOut').textContent =
    JSON.stringify(response, null, 2);

  document.getElementById('attackOut').textContent = isAllowed
    ? "Origem confiável permitida pela policy."
    : "Origem maliciosa bloqueada. Nenhum dado sensível exposto.";
}

function loadTrusted() {
  document.getElementById('originInput').value = 'https://app.empresa.com';
}
