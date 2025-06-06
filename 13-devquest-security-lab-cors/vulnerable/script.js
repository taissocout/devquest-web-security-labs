// ╔══════════════════════════════════════════════════════╗
// ║  LAB 13 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  CORS amplo demais para dados sensíveis         ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O browser envia uma requisição cross-origin.
// 2. O servidor responde com Access-Control-Allow-Origin refletindo o Origin.
// 3. Assim, uma origem maliciosa pode ler dados sigilosos.
// 4. Aqui simulamos o comportamento didático no front-end.

function simulateCors() {
  const origin = document.getElementById('originInput').value.trim();

  // ❌ VULNERÁVEL:
  // Reflete qualquer origin e permite leitura.
  const response = {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Credentials": "true",
    "body": {
      user: "admin@empresa.com",
      role: "admin",
      apiKeyPreview: "sk_prod_demo_****",
      internalReport: "finance-quarterly"
    }
  };

  document.getElementById('responseOut').textContent =
    JSON.stringify(response, null, 2);

  document.getElementById('attackOut').textContent =
    "Origem atacante conseguiu ler:\n" +
    JSON.stringify(response.body, null, 2);
}

function loadTrusted() {
  document.getElementById('originInput').value = 'https://app.empresa.com';
}
