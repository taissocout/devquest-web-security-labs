// ╔══════════════════════════════════════════════════════╗
// ║  LAB 01 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Este código é INTENCIONALENTE inseguro         ║
// ║     para fins educacionais                          ║
// ╚══════════════════════════════════════════════════════╝

// Mostra a URL atual na interface
document.getElementById('urlAtual').textContent = window.location.href;

// VULNERABILIDADE PRINCIPAL:
// A função lê o input do usuário e o insere diretamente
// via innerHTML — sem nenhum tipo de sanitização.
// Isso permite que HTML e scripts sejam injetados.

function mostrarSaudacao() {
  const nome = document.getElementById('nomeInput').value;

  // ❌ INSEGURO: innerHTML aceita qualquer HTML, incluindo <script> e event handlers
  document.getElementById('output').innerHTML = 'Olá, ' + nome + '!';

  // Atualiza a URL para simular o parâmetro sendo refletido
  const novaUrl = window.location.pathname + '?name=' + encodeURIComponent(nome);
  history.pushState({}, '', novaUrl);
  document.getElementById('urlAtual').textContent = window.location.href;
}

// Também lê parâmetro da URL automaticamente ao carregar
// (simula reflexão server-side no front-end)
window.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const nameParam = params.get('name');
  if (nameParam) {
    document.getElementById('nomeInput').value = nameParam;
    // ❌ INSEGURO: reflete o parâmetro da URL direto no DOM
    document.getElementById('output').innerHTML = 'Olá, ' + nameParam + '!';
  }
});

// Suporte à tecla Enter
document.getElementById('nomeInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') mostrarSaudacao();
});