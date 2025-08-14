// ╔══════════════════════════════════════════════════════╗
// ║  LAB 20 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Dashboard final com múltiplas falhas           ║
// ╚══════════════════════════════════════════════════════╝

const findings = [
  { title: "XSS / Stored XSS", desc: "Renderização insegura com innerHTML e persistência de payload." },
  { title: "IDOR", desc: "Recursos acessados por ID sem validação de ownership." },
  { title: "Mass Assignment", desc: "Campos internos atualizados diretamente pelo cliente." },
  { title: "Headers / CSP", desc: "Defesas ausentes ou fracas." },
  { title: "Auth / Session", desc: "Sessão, roles e autorização confiando no cliente." }
];

function renderFindings() {
  document.getElementById("findings").innerHTML = findings.map((f) => `
    <div class="item">
      <div class="item-title">${f.title}</div>
      <div class="item-desc">${f.desc}</div>
    </div>
  `).join("");
}

window.addEventListener("DOMContentLoaded", renderFindings);
