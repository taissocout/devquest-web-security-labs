// ╔══════════════════════════════════════════════════════╗
// ║  LAB 10 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Cookie emitido pelo servidor com flags seguras  ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O navegador não deve criar cookies de sessão críticos via JS.
// 2. O servidor deve responder com Set-Cookie.
// 3. HttpOnly não pode ser definido por JavaScript.
// 4. Secure + SameSite ajudam a mitigar roubo e CSRF.

function showSafeSetCookie() {
  document.getElementById('cookieOut').textContent =
    'Set-Cookie: session_id=sess_server_8ad92; Path=/; HttpOnly; Secure; SameSite=Lax';
  document.getElementById('analysisOut').textContent =
    'Configuração recomendada:\n' +
    '- HttpOnly: impede leitura por JS\n' +
    '- Secure: envio apenas em HTTPS\n' +
    '- SameSite=Lax ou Strict: reduz CSRF';
}

function simulateBrowserView() {
  document.getElementById('cookieOut').textContent =
    'document.cookie => (cookie HttpOnly não aparece aqui)';
  document.getElementById('analysisOut').textContent =
    'O front-end não consegue ler cookies HttpOnly.\n' +
    'Esse é um dos objetivos de segurança.';
}
