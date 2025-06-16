// ╔══════════════════════════════════════════════════════╗
// ║  LAB 14 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Cabeçalhos essenciais presentes                 ║
// ╚══════════════════════════════════════════════════════╝

const HEADERS = [
  {
    name: "Content-Security-Policy",
    status: "ok",
    desc: "CSP ajuda a limitar carregamentos e reduzir o impacto de XSS."
  },
  {
    name: "X-Content-Type-Options: nosniff",
    status: "ok",
    desc: "Evita sniffing indevido de conteúdo pelo navegador."
  },
  {
    name: "Referrer-Policy: strict-origin-when-cross-origin",
    status: "ok",
    desc: "Reduz vazamento de informações pelo cabeçalho Referer."
  },
  {
    name: "Strict-Transport-Security",
    status: "ok",
    desc: "Força uso de HTTPS após a primeira visita segura."
  }
];

function runAudit() {
  const list = document.getElementById('list');
  list.innerHTML = HEADERS.map(h => `
    <div class="item">
      <div class="item-head">
        <div class="item-name">${h.name}</div>
        <div class="badge ${h.status}">${h.status.toUpperCase()}</div>
      </div>
      <div class="item-desc">${h.desc}</div>
    </div>
  `).join('');
}
