// ╔══════════════════════════════════════════════════════╗
// ║  LAB 08 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Dados sensíveis expostos ao navegador          ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. Esta aplicação simula configuração interna sendo entregue ao cliente.
// 2. Também expõe payloads com dados excessivos.
// 3. Mesmo que algo "não apareça visualmente", o DevTools consegue ler.
// 4. O problema aqui é excesso de confiança no front-end.

const FRONTEND_CONFIG = {
  apiBaseUrl: 'https://api.interna.exemplo.local',
  internalApiKey: 'sk-live-internal-demo-key',
  sentryDsn: 'https://public@sentry.example/123',
  environment: 'production',
  featureFlags: ['beta-admin-export', 'internal-reporting']
};

const CUSTOMER_PAYLOAD = {
  id: 418,
  nome: 'João da Silva',
  email: 'joao@empresa.com',
  plano: 'enterprise',
  notasInternas: 'cliente VIP - priorizar suporte executivo',
  billingCustomerId: 'cus_internal_123456',
  partialCard: '4111 **** **** 1111'
};

function loadConfig() {
  // ❌ VULNERÁVEL:
  // Configuração interna é enviada para o front-end sem necessidade.
  document.getElementById('configOut').textContent =
    JSON.stringify(FRONTEND_CONFIG, null, 2);
}

function loadCustomer() {
  // ❌ VULNERÁVEL:
  // O payload contém mais dados do que a interface realmente precisa.
  document.getElementById('customerOut').textContent =
    JSON.stringify(CUSTOMER_PAYLOAD, null, 2);
}
