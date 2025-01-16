// ╔══════════════════════════════════════════════════════╗
// ║  LAB 02 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  innerHTML sem sanitização                     ║
// ╚══════════════════════════════════════════════════════╝

const comentarios = [];

function postar() {
  const autor = document.getElementById('autorInput').value.trim() || 'Anônimo';
  const msg   = document.getElementById('msgInput').value.trim();

  if (!msg) return;

  comentarios.push({ autor, msg });
  renderizarComentarios();

  document.getElementById('autorInput').value = '';
  document.getElementById('msgInput').value   = '';
}

function renderizarComentarios() {
  const container = document.getElementById('comentarios');

  if (comentarios.length === 0) {
    container.innerHTML = '<div class="empty-state">Nenhum comentário ainda.</div>';
    return;
  }

  // ❌ INSEGURO: innerHTML concatenado diretamente com dados do usuário.
  // Qualquer HTML na mensagem será renderizado pelo browser.
  // Payload: <img src=x onerror="alert('XSS via innerHTML!')">
  container.innerHTML = comentarios.map((c, i) => `
    <div class="comment-card">
      <div class="comment-autor">// ${c.autor}</div>
      <div class="comment-body">${c.msg}</div>
    </div>
  `).join('');
}