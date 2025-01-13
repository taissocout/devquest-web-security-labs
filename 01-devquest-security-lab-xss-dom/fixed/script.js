// ╔══════════════════════════════════════════════════════╗
// ║  LAB 01 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Usa textContent em vez de innerHTML             ║
// ╚══════════════════════════════════════════════════════╝

document.getElementById('urlAtual').textContent = window.location.href;

function mostrarSaudacao() {
  const nome = document.getElementById('nomeInput').value;

  // ✅ SEGURO: textContent trata a string como texto puro.
  // Qualquer HTML ou JavaScript que o usuário tentar injetar
  // será exibido como texto literal — nunca interpretado.
  const output = document.getElementById('output');
  output.textContent = '';

  const span = document.createElement('span');
  span.textContent = 'Olá, ' + nome + '!';
  output.appendChild(span);

  const novaUrl = window.location.pathname + '?name=' + encodeURIComponent(nome);
  history.pushState({}, '', novaUrl);
  document.getElementById('urlAtual').textContent = window.location.href;
}

// ✅ Lê parâmetro da URL de forma segura
window.addEventListener('DOMContentLoaded', () => {
  const params    = new URLSearchParams(window.location.search);
  const nameParam = params.get('name');
  if (nameParam) {
    document.getElementById('nomeInput').value = nameParam;
    // ✅ textContent — nunca innerHTML
    document.getElementById('output').textContent = 'Olá, ' + nameParam + '!';
  }
});

document.getElementById('nomeInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') mostrarSaudacao();
});