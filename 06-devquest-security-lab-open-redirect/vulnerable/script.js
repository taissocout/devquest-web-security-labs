// ╔══════════════════════════════════════════════════════╗
// ║  LAB 06 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Open Redirect usando ?next= sem validação      ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. A aplicação lê o parâmetro ?next= da URL.
// 2. Depois do "login", ela usa window.location.href = next.
// 3. Como não existe allowlist nem validação de origem,
//    qualquer domínio externo pode ser usado.
// 4. Isso permite phishing com aparência de link legítimo.

function getNextFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('next') || '/painel';
}

function updateUi() {
  const next = getNextFromUrl();
  document.getElementById('nextInput').value = next;

  const payload = window.location.origin + window.location.pathname +
    '?next=' + encodeURIComponent('https://evil.example/phishing');
  document.getElementById('payloadPreview').textContent = payload;
}

function continuar() {
  const next = getNextFromUrl();

  // ❌ VULNERÁVEL:
  // Redireciona para qualquer valor fornecido pelo usuário.
  // Se next = https://malicioso.tld, a vítima sai do domínio confiável.
  window.location.href = next;
}

function usarPayloadMalicioso() {
  const payload = '?next=' + encodeURIComponent('https://evil.example/phishing');
  history.replaceState({}, '', payload);
  updateUi();
}

function usarDestinoInterno() {
  const payload = '?next=' + encodeURIComponent('/painel');
  history.replaceState({}, '', payload);
  updateUi();
}

window.addEventListener('DOMContentLoaded', updateUi);
