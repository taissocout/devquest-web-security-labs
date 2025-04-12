// ╔══════════════════════════════════════════════════════╗
// ║  LAB 09 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Sessão no servidor / cookie HttpOnly            ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. Em sistemas reais, o servidor define um cookie HttpOnly.
// 2. JavaScript do front-end não consegue ler esse cookie.
// 3. O navegador envia o cookie automaticamente nas requisições ao domínio.

let serverSessionActive = false;

function refreshStorageView() {
  document.getElementById('storageOut').textContent =
    serverSessionActive
      ? 'Sessão ativa no servidor (cookie HttpOnly simulado; não exposto ao JS)'
      : 'Vazio';
}

function login() {
  serverSessionActive = true;
  refreshStorageView();
}

function logout() {
  serverSessionActive = false;
  refreshStorageView();
  document.getElementById('xssOut').textContent = 'Aguardando...';
}

function simulateXss() {
  // ✅ CORRIGIDO:
  // Mesmo com script malicioso rodando, não há token legível em storage.
  document.getElementById('xssOut').textContent =
    serverSessionActive
      ? '[XSS] falha: nenhum bearer token disponível no JavaScript'
      : '[XSS] nenhuma sessão ativa';
}

window.addEventListener('DOMContentLoaded', refreshStorageView);
