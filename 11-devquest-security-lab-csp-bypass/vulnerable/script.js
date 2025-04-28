// ╔══════════════════════════════════════════════════════╗
// ║  LAB 11 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  CSP fraca com 'unsafe-inline'                  ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. A página permite scripts inline via CSP.
// 2. O conteúdo do usuário é renderizado com innerHTML.
// 3. Mesmo com CSP, o uso de 'unsafe-inline' facilita execução de payload.
// 4. Este é um caso clássico de "CSP presente, mas mal configurada".

function renderComment() {
  const payload = document.getElementById('payloadInput').value;

  // ❌ VULNERÁVEL:
  // Renderiza HTML controlado pelo usuário no DOM.
  // Como a CSP permite 'unsafe-inline', handlers como onerror disparam.
  document.getElementById('output').innerHTML = payload;
}

function loadPayload() {
  document.getElementById('payloadInput').value =
    '<img src=x onerror="alert(\'CSP fraca permitiu XSS\')">';
}
