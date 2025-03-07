// ╔══════════════════════════════════════════════════════╗
// ║  LAB 07 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Login mock com segredo e role no front-end     ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O front-end contém a base de usuários hardcoded.
// 2. O próprio navegador decide se a senha está correta.
// 3. A role também fica no JavaScript.
// 4. Um atacante pode ler o bundle, alterar funções no console
//    ou simplesmente descobrir as credenciais expostas.

const USERS = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'analista', password: 'soc2026', role: 'user' }
];

function renderResult(ok, message) {
  const result = document.getElementById('result');
  result.className = 'result ' + (ok ? 'success' : 'fail');
  result.textContent = message;
}

function login() {
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value.trim();

  // ❌ VULNERÁVEL:
  // Toda a autenticação ocorre no cliente.
  // As credenciais reais estão expostas no JS.
  const found = USERS.find(u => u.username === user && u.password === pass);

  if (found) {
    renderResult(true, 'Login realizado com sucesso. Role liberada: ' + found.role);
  } else {
    renderResult(false, 'Credenciais inválidas.');
  }

  document.getElementById('result').classList.remove('hidden');
}

function showHints() {
  document.getElementById('devPanel').textContent =
    'Usuários carregados no front-end:\n' +
    JSON.stringify(USERS, null, 2) + '\n\n' +
    'Exemplo de bypass via console:\n' +
    'login = () => renderResult(true, "Sessão simulada como admin");';
}
