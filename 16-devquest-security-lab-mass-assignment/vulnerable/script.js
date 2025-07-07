// ╔══════════════════════════════════════════════════════╗
// ║  LAB 16 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Mass Assignment                                ║
// ╚══════════════════════════════════════════════════════╝
//
// Tutorial:
// 1. O servidor recebe um JSON do cliente.
// 2. Em vez de selecionar campos permitidos, ele aplica tudo no objeto.
// 3. Um atacante adiciona propriedades não previstas como isAdmin.
// 4. Resultado: privilege escalation / alteração indevida de dados.

const userRecord = {
  id: 101,
  name: "João",
  email: "joao@empresa.com",
  plan: "basic",
  isAdmin: false,
  credits: 10
};

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

function sendPayload() {
  const raw = document.getElementById("payloadInput").value;

  try {
    const payload = JSON.parse(raw);
    const cloned = JSON.parse(JSON.stringify(userRecord));

    // ❌ VULNERÁVEL:
    // Tudo o que vem do cliente é aplicado no objeto.
    Object.assign(cloned, payload);

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
