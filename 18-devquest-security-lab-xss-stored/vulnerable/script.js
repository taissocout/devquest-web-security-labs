// ╔══════════════════════════════════════════════════════╗
// ║  LAB 18 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Stored XSS                                     ║
// ╚══════════════════════════════════════════════════════╝
//
// Tutorial:
// 1. O usuário grava um comentário no "banco".
// 2. Depois outros usuários visualizam esse conteúdo.
// 3. Como ele é renderizado com innerHTML, o payload executa.
// 4. Stored XSS tende a ter impacto maior por persistência.

const comments = [
  { author: "Sistema", message: "Bem-vindo ao mural." }
];

function renderFeed() {
  const feed = document.getElementById("feed");

  // ❌ VULNERÁVEL:
  // Conteúdo persistido é renderizado como HTML.
  feed.innerHTML = comments.map((c) => `
    <div class="comment">
      <div class="comment-author">${c.author}</div>
      <div class="comment-body">${c.message}</div>
    </div>
  `).join("");
}

function saveComment() {
  const author = document.getElementById("authorInput").value.trim() || "Anônimo";
  const message = document.getElementById("messageInput").value.trim();
  if (!message) return;

  comments.push({ author, message });
  renderFeed();

  document.getElementById("authorInput").value = "";
  document.getElementById("messageInput").value = "";
}

function loadPayload() {
  document.getElementById("authorInput").value = "Atacante";
  document.getElementById("messageInput").value = "<img src=x onerror=\"alert('Stored XSS')\">";
}

window.addEventListener("DOMContentLoaded", renderFeed);
