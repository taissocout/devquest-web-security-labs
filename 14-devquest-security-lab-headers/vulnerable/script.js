// ╔══════════════════════════════════════════════════════╗
// ║  LAB 14 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Cabeçalhos de segurança ausentes               ║
// ╚══════════════════════════════════════════════════════╝

// Tutorial:
// 1. Esta tela simula uma auditoria de cabeçalhos.
// 2. Na versão vulnerável, vários headers importantes estão ausentes.
// 3. Em produção, esses headers normalmente são configurados no servidor ou proxy.

const HEADERS = [
  {
    name: "Content-Security-Policy",
    status: "missing",
    desc: "Sem CSP, XSS e carregamentos indevidos ficam menos controlados."
  },
  {
    name: "X-Content-Type-Options",
    status: "missing",
    desc: "Sem nosniff, o browser pode tentar inferir tipos indevidos."
  },
  {
    name: "Referrer-Policy",
    status: "missing",
    desc: "Referer pode vazar mais informação do que o necessário."
  },
  {
    name: "Strict-Transport-Security",
    status: "missing",
    desc: "Sem HSTS, a proteção contra downgrade de HTTPS não existe."
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
