// ╔══════════════════════════════════════════════════════╗
// ║  LAB 16 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Allowlist de campos                             ║
// ╚══════════════════════════════════════════════════════╝
//
// Tutorial:
// 1. O backend define quais campos podem ser alterados.
// 2. Tudo fora da allowlist é ignorado.
// 3. Campos sensíveis como isAdmin devem ser server-side only.

const userRecord = {
  id: 101,
  name: "João",
  email: "joao@empresa.com",
  plan: "basic",
  isAdmin: false,
  credits: 10
};

const ALLOWED_FIELDS = ["name", "email", "plan"];

function renderState() {
  document.getElementById("beforeOut").textContent = JSON.stringify(userRecord, null, 2);
}

function loadExploit() {
  document.getElementById("payloadInput").value = JSON.stringify({
    name: "João Premium",
    plan: "enterprise",
    isAdmin: true,
    credits: 9999
  }, null, 2);
}

function sanitizePayload(payload) {
  const safe = {};
  for (const key of ALLOWED_FIELDS) {
    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      safe[key] = payload[key];
    }
  }
  return safe;
}

function sendPayload() {
  const raw = document.getElementById("payloadInput").value;

  try {
    const payload = JSON.parse(raw);
    const cloned = JSON.parse(JSON.stringify(userRecord));
    const safePayload = sanitizePayload(payload);

    // ✅ CORRIGIDO:
    // Apenas campos aprovados entram na atualização.
    Object.assign(cloned, safePayload);

    document.getElementById("afterOut").textContent = JSON.stringify(cloned, null, 2);
  } catch (err) {
    document.getElementById("afterOut").textContent = "Erro ao interpretar JSON: " + err.message;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  renderState();
  loadExploit();
  document.getElementById("afterOut").textContent = "Aguardando envio...";
});
