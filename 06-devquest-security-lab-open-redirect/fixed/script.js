// ╔══════════════════════════════════════════════════════╗
// ║  LAB 06 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Allowlist para destinos internos                ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. O parâmetro next ainda pode existir.
// 2. Porém o valor é validado contra uma allowlist de rotas internas.
// 3. URLs externas, absolutas, esquemas estranhos e valores fora da lista
//    são descartados.
// 4. Em caso de erro, o app envia o usuário para /painel.

const ALLOWED_PATHS = ['/painel', '/perfil', '/pedidos'];

function getNextFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('next') || '/painel';
}

function sanitizeNext(rawNext) {
  // Bloqueia URLs externas e só permite rotas internas conhecidas.
  if (!rawNext) return '/painel';
  if (!rawNext.startsWith('/')) return '/painel';
  if (!ALLOWED_PATHS.includes(rawNext)) return '/painel';
  return rawNext;
}

function updateUi() {
  const rawNext = getNextFromUrl();
  const safeNext = sanitizeNext(rawNext);

  document.getElementById('nextInput').value = rawNext;
  document.getElementById('decisionLog').textContent =
    'raw next = ' + rawNext + '\n' +
    'safe next = ' + safeNext + '\n' +
    'allowed paths = ' + ALLOWED_PATHS.join(', ');
}

function continuar() {
  const rawNext = getNextFromUrl();
  const safeNext = sanitizeNext(rawNext);

  // ✅ CORRIGIDO:
  // Mesmo que o atacante forneça domínio externo, o código ignora.
  window.location.href = safeNext;
}

function usarPayloadMalicioso() {
  const payload = '?next=' + encodeURIComponent('https://evil.example/phishing');
  history.replaceState({}, '', payload);
  updateUi();
}

function usarDestinoInterno() {
  const payload = '?next=' + encodeURIComponent('/perfil');
  history.replaceState({}, '', payload);
  updateUi();
}

window.addEventListener('DOMContentLoaded', updateUi);
