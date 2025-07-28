// ╔══════════════════════════════════════════════════════╗
// ║  LAB 18 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Renderização segura                             ║
// ╚══════════════════════════════════════════════════════╝

const comments = [
  { author: "Sistema", message: "Bem-vindo ao mural." }
];

function renderFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  for (const c of comments) {
    const comment = document.createElement("div");
    comment.className = "comment";

    const author = document.createElement("div");
    author.className = "comment-author";
    author.textContent = c.author;

    const body = document.createElement("div");
    body.className = "comment-body";

    // ✅ CORRIGIDO:
    // O browser exibe o texto, não interpreta como HTML.
    body.textContent = c.message;

    comment.appendChild(author);
    comment.appendChild(body);
    feed.appendChild(comment);
  }
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
  document.getElementById("messageInput").value = "<img src=x onerror=\"alert('não executa')\">";
}

window.addEventListener("DOMContentLoaded", renderFeed);
