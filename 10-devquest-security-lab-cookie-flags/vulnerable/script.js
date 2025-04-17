// ╔══════════════════════════════════════════════════════╗
// ║  LAB 10 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Cookie sem flags de proteção                   ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O cookie abaixo é criado sem atributos importantes.
// 2. Falta Secure: pode trafegar sem HTTPS.
// 3. Falta SameSite: risco maior em cenários CSRF.
// 4. Como foi criado por JS, também não pode ser HttpOnly.

function setBadCookie() {
  // ❌ VULNERÁVEL:
  // Sem Secure, sem SameSite e ainda legível por JS.
  document.cookie = 'session_id=sess_demo_12345; path=/';
  readCookie();

  document.getElementById('analysisOut').textContent =
    'Cookie criado sem flags seguras.\n' +
    '- Secure: ausente\n' +
    '- SameSite: ausente\n' +
    '- HttpOnly: impossível via document.cookie';
}

function readCookie() {
  document.getElementById('cookieOut').textContent = document.cookie || '(vazio)';
}

function clearCookie() {
  document.cookie = 'session_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  readCookie();
  document.getElementById('analysisOut').textContent = 'Aguardando...';
}

window.addEventListener('DOMContentLoaded', readCookie);
