// ╔══════════════════════════════════════════════════════╗
// ║  LAB 15 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Autorização confiando em header manipulável    ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O cliente envia um cabeçalho X-User-Role.
// 2. A API "confia" nesse valor para liberar ação administrativa.
// 3. Qualquer usuário pode mudar user -> admin no DevTools.
// 4. Isso não é autenticação/autorização real.

function callApi() {
  const role = document.getElementById('roleInput').value.trim();

  // ❌ VULNERÁVEL:
  // Backend ingênuo confiando diretamente num header controlado pelo cliente.
  const response = role === 'admin'
    ? {
        status: 200,
        message: 'Acesso admin concedido',
        secret: 'financial-export-2026.csv'
      }
    : {
        status: 403,
        message: 'Acesso negado'
      };

  document.getElementById('responseOut').textContent =
    JSON.stringify(response, null, 2);
}

function setAdmin() {
  document.getElementById('roleInput').value = 'admin';
}
