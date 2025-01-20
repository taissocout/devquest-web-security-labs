// ╔══════════════════════════════════════════════════════╗
// ║  LAB 02 — VERSÃO CORRIGIDA                          ║
// ║  ✅ createElement + textContent em vez de innerHTML ║
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

function criarCardComentario(c) {
  // ✅ SEGURO: nunca usamos innerHTML com dados do usuário.
  // Cada nó é criado com createElement e populado com textContent.
  const card  = document.createElement('div');
  card.className = 'comment-card';

  const autor = document.createElement('div');
  autor.className = 'comment-autor';
  autor.textContent = '// ' + c.autor;  // textContent escapa HTML

  const body  = document.createElement('div');
  body.className = 'comment-body';
  body.textContent = c.msg;  // ✅ nunca innerHTML aqui

  card.appendChild(autor);
  card.appendChild(body);
  return card;
}

function renderizarComentarios() {
  const container = document.getElementById('comentarios');
  container.innerHTML = '';  // Limpa — sem dados do usuário, seguro

  if (comentarios.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'Nenhum comentário ainda.';
    container.appendChild(empty);
    return;
  }

  comentarios.forEach(c => container.appendChild(criarCardComentario(c)));
}