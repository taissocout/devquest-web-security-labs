// ╔══════════════════════════════════════════════════════╗
// ║  LAB 09 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Bearer token em sessionStorage/localStorage    ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O app simula login e salva um token no browser.
// 2. Como o token está em storage JS-accessible,
//    qualquer XSS pode roubá-lo.
// 3. Este lab reforça o risco sobre persistência de bearer tokens.

function refreshStorageView() {
  const token = sessionStorage.getItem('access_token');
  document.getElementById('storageOut').textContent =
    token ? 'sessionStorage.access_token = ' + token : 'Vazio';
}

function login() {
  const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.' +
    Math.random().toString(36).slice(2);

  // ❌ VULNERÁVEL:
  // Token persistido em área legível por JavaScript.
  sessionStorage.setItem('access_token', fakeToken);
  refreshStorageView();
}

function logout() {
  sessionStorage.removeItem('access_token');
  refreshStorageView();
  document.getElementById('xssOut').textContent = 'Aguardando...';
}

function simulateXss() {
  // ❌ Simulação de código malicioso rodando na página.
  const stolen = sessionStorage.getItem('access_token');
  document.getElementById('xssOut').textContent =
    stolen ? '[XSS] token roubado = ' + stolen : '[XSS] nenhum token encontrado';
}

window.addEventListener('DOMContentLoaded', refreshStorageView);
