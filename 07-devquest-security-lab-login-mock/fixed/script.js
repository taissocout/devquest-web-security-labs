// ╔══════════════════════════════════════════════════════╗
// ║  LAB 07 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Front-end sem segredos de autenticação          ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O navegador coleta usuário e senha.
// 2. Em um sistema real, o envio iria para um endpoint HTTPS.
// 3. A validação de credenciais e autorização pertence ao backend.
// 4. O front-end não deve conhecer senhas reais nem roles internas.

function renderResult(ok, message) {
  const result = document.getElementById('result');
  result.className = 'result ' + (ok ? 'success' : 'fail');
  result.textContent = message;
}

async function login() {
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value.trim();

  if (!user || !pass) {
    renderResult(false, 'Preencha usuário e senha.');
    document.getElementById('result').classList.remove('hidden');
    return;
  }

  // ✅ CORRIGIDO:
  // Aqui existe apenas uma simulação didática.
  // Em produção seria algo como:
  // await fetch('/api/login', { method: 'POST', body: JSON.stringify({ user, pass }) })
  renderResult(true, 'Fluxo seguro: credenciais enviadas ao backend para validação.');
  document.getElementById('result').classList.remove('hidden');
}

function showHints() {
  document.getElementById('devPanel').textContent =
    'Segurança aplicada:\n' +
    '- sem credenciais hardcoded\n' +
    '- sem role exposta no bundle\n' +
    '- autenticação movida para o servidor\n' +
    '- ideal: sessão HttpOnly + rate limiting + MFA';
}
