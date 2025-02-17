// ╔══════════════════════════════════════════════════════╗
// ║  LAB 05 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Autorização deve ser validada no servidor       ║
// ╚══════════════════════════════════════════════════════╝

// CORREÇÃO: parâmetros de URL NUNCA devem controlar autorização.
// A verificação correta acontece no servidor, baseada em:
// 1. Token de sessão válido (httpOnly cookie)
// 2. Permissões do usuário no banco de dados
// 3. Middleware de autorização no backend

// Neste lab simulamos uma sessão com papel fixo "user"
// que NÃO pode ser alterado por parâmetros de URL.

const SESSAO_SIMULADA = {
  user: 'joao_dev',
  role: 'user',      // definido pelo servidor, não pela URL
  authenticated: true,
};

function verificarAcesso() {
  const params = new URLSearchParams(window.location.search);

  // ✅ CORRETO: lemos a URL mas IGNORAMOS parâmetros de autorização
  const user = params.get('user') || SESSAO_SIMULADA.user;

  // ✅ A role vem da sessão do servidor — nunca da URL
  const role = SESSAO_SIMULADA.role;

  document.getElementById('navRole').textContent = role;
  document.getElementById('navUser').textContent = user;
  document.getElementById('deniedUser').textContent = user;
  document.getElementById('deniedRole').textContent = role;
  document.getElementById('urlInput').value = window.location.href;

  // ✅ Acesso negado independentemente dos params da URL
  const temAcesso = false; // Simulando que este usuário não tem acesso admin

  if (temAcesso) {
    document.getElementById('viewDenied').style.display = 'none';
    document.getElementById('viewAdmin').style.display  = 'block';
  } else {
    // Mesmo com ?role=admin, acesso é negado
    const hint = document.querySelector('.hint p') || document.querySelector('.hint');
    if (hint) {
      hint.innerHTML = '✅ Tente adicionar <code>?role=admin</code> — não vai funcionar. ' +
                       'A autorização é verificada no servidor com base na sua sessão real.';
    }
  }
}

function setParam(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  document.getElementById('urlInput').value = url.toString();
  window.history.pushState({}, '', url);
  verificarAcesso(); // ✅ reprocessa mas ignora os params de autorização
}

function navigateTo() {
  const url = document.getElementById('urlInput').value;
  window.history.pushState({}, '', url);
  verificarAcesso();
}

verificarAcesso();