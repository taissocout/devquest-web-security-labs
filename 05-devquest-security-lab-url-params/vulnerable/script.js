// ╔══════════════════════════════════════════════════════╗
// ║  LAB 05 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Controle de acesso baseado em params de URL    ║
// ╚══════════════════════════════════════════════════════╝

// VULNERABILIDADE: a aplicação usa parâmetros da URL
// para decidir o nível de acesso do usuário.
// Qualquer um pode adicionar ?role=admin na URL e
// obter acesso a recursos restritos.

const ADMIN_PARAMS = {
  role: 'admin',
  admin: 'true',
  privilege: 'superuser',
  access: 'full',
  debug: 'true',
};

function verificarAcesso() {
  const params = new URLSearchParams(window.location.search);

  // ❌ INSEGURO: confia em parâmetros da URL para controle de acesso
  const role      = params.get('role')      || 'user';
  const isAdmin   = params.get('admin')     === 'true';
  const privilege = params.get('privilege') || 'normal';
  const user      = params.get('user')      || 'visitante';

  document.getElementById('navRole').textContent = role;
  document.getElementById('navUser').textContent = user;
  document.getElementById('deniedUser').textContent = user;
  document.getElementById('deniedRole').textContent = role;
  document.getElementById('urlInput').value = window.location.href;

  // ❌ Lógica de autorização completamente no front-end
  const temAcesso = role === 'admin' || isAdmin || privilege === 'superuser';

  if (temAcesso) {
    document.getElementById('viewDenied').style.display = 'none';
    document.getElementById('viewAdmin').style.display  = 'block';

    const paramsUsados = [...params.entries()]
      .filter(([k,v]) => ADMIN_PARAMS[k] === v)
      .map(([k,v]) => '?' + k + '=' + v)
      .join(' + ');

    document.getElementById('exploitCode').textContent =
      '// Parâmetros que concederam acesso:\n' +
      paramsUsados + '\n\n' +
      '// URL completa:\n' + window.location.href + '\n\n' +
      '// Lição: nunca use query params para autorização!';
  }
}

function setParam(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  document.getElementById('urlInput').value = url.toString();
  window.history.pushState({}, '', url);
  verificarAcesso();
}

function navigateTo() {
  const url = document.getElementById('urlInput').value;
  try {
    window.location.href = url;
  } catch {
    alert('URL inválida');
  }
}

verificarAcesso();