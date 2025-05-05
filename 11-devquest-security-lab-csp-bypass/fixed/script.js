// ╔══════════════════════════════════════════════════════╗
// ║  LAB 11 — VERSÃO CORRIGIDA                          ║
// ║  ✅ CSP sem unsafe-inline + textContent             ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. A CSP não aceita script inline.
// 2. O conteúdo do usuário não é interpretado como HTML.
// 3. Mesmo que alguém insira tags ou handlers, tudo aparece como texto.

function renderComment() {
  const payload = document.getElementById('payloadInput').value;

  // ✅ CORRIGIDO:
  // O browser exibe apenas texto, não executa HTML.
  document.getElementById('output').textContent = payload;
}

function loadPayload() {
  document.getElementById('payloadInput').value =
    '<img src=x onerror="alert(\'não executa\')">';
}
