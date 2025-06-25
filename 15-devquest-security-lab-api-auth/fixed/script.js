// ╔══════════════════════════════════════════════════════╗
// ║  LAB 15 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Autorização validada no servidor                ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O cliente não decide sua própria role.
// 2. O servidor valida sessão/token assinado.
// 3. Só depois disso retorna claims confiáveis.
// 4. O front-end apenas consome a decisão já validada.

let trustedServerRole = "user";

function callApi() {
  const response = trustedServerRole === 'admin'
    ? {
        status: 200,
        message: 'Acesso admin concedido',
        export: 'redacted-demo'
      }
    : {
        status: 403,
        message: 'Acesso negado para esta sessão'
      };

  document.getElementById('responseOut').textContent =
    JSON.stringify(response, null, 2);
}

function simulateServerAdmin() {
  // ✅ Aqui a role é tratada como vinda de validação server-side.
  trustedServerRole = 'admin';
  document.getElementById('roleInput').value = trustedServerRole;
}
