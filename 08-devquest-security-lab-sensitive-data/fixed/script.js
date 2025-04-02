// ╔══════════════════════════════════════════════════════╗
// ║  LAB 08 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Minimização e segregação de dados               ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O front-end recebe somente informações públicas.
// 2. Chaves internas, notas privadas e IDs sensíveis não são expostos.
// 3. O servidor deve filtrar o payload conforme a necessidade da tela.

const PUBLIC_CONFIG = {
  environment: 'production',
  featureFlags: ['customer-dashboard']
};

const CUSTOMER_PAYLOAD_SAFE = {
  id: 418,
  nome: 'João da Silva',
  plano: 'enterprise'
};

function loadConfig() {
  document.getElementById('configOut').textContent =
    JSON.stringify(PUBLIC_CONFIG, null, 2);
}

function loadCustomer() {
  document.getElementById('customerOut').textContent =
    JSON.stringify(CUSTOMER_PAYLOAD_SAFE, null, 2);
}
