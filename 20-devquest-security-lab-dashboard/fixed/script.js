// ╔══════════════════════════════════════════════════════╗
// ║  LAB 20 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Dashboard final de boas práticas                ║
// ╚══════════════════════════════════════════════════════╝

const findings = [
  { title: "Saída segura", desc: "Uso de textContent, criação de nós DOM e redução de innerHTML." },
  { title: "Autorização correta", desc: "Ownership por recurso e roles derivadas do servidor." },
  { title: "Sessão reforçada", desc: "Cookies HttpOnly/Secure/SameSite e menos segredos no front-end." },
  { title: "Headers e CSP", desc: "CSP mais forte, frame-ancestors, HSTS e no-sniff." },
  { title: "Validação de payload", desc: "Allowlists, bloqueio de chaves perigosas e minimização de dados." }
];

function renderFindings() {
  document.getElementById("findings").innerHTML = findings.map((f) => `
    <div class="item">
      <div class="item-title" style="color:#68ffb7">${f.title}</div>
      <div class="item-desc">${f.desc}</div>
    </div>
  `).join("");
}

window.addEventListener("DOMContentLoaded", renderFindings);
