// ╔══════════════════════════════════════════════════════╗
// ║  LAB 12 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Sem frame-ancestors / X-Frame-Options          ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. A página sensível pode ser aberta dentro de iframes.
// 2. Um atacante sobrepõe elementos falsos e induz o clique.
// 3. A vítima pensa que clicou numa coisa, mas aciona outra.
// 4. Este risco é comum em páginas de confirmação, transferência, etc.

function transferMoney() {
  const result = document.getElementById('result');
  result.textContent = 'Transferência simulada executada.';
  result.classList.remove('hidden');
}

function showAttack() {
  const result = document.getElementById('result');
  result.textContent =
    'Cenário: site malicioso embute esta página em um iframe invisível e ' +
    'alinha um botão falso por cima para capturar seu clique.';
  result.classList.remove('hidden');
}
