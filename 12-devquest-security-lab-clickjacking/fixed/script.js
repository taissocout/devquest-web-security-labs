// ╔══════════════════════════════════════════════════════╗
// ║  LAB 12 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Proteção contra carregamento em iframe          ║
// ╚══════════════════════════════════════════════════════╝

function transferMoney() {
  const result = document.getElementById('result');
  result.textContent =
    'Ação simulada. Em produção, a página deve usar frame-ancestors e idealmente confirmação forte.';
  result.classList.remove('hidden');
}

function showProtection() {
  const result = document.getElementById('result');
  result.textContent =
    'Proteção aplicada: frame-ancestors none. Em backend real: X-Frame-Options: DENY.';
  result.classList.remove('hidden');
}
