// ╔══════════════════════════════════════════════════════╗
// ║  LAB 19 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Prototype Pollution                            ║
// ╚══════════════════════════════════════════════════════╝
//
// Tutorial:
// 1. O app faz merge de objetos recursivamente.
// 2. Propriedades especiais como __proto__ não são bloqueadas.
// 3. Isso pode alterar comportamento global de objetos.
// 4. Impacto real depende do uso posterior desses objetos.

const appConfig = {
  theme: "dark",
  debug: false
};

function vulnerableMerge(target, source) {
  for (const key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      if (!target[key]) target[key] = {};
      vulnerableMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

function updateStateView() {
  document.getElementById("stateOut").textContent = JSON.stringify(appConfig, null, 2);
}

function loadPayload() {
  document.getElementById("payloadInput").value = JSON.stringify({
    "__proto__": {
      "isAdmin": true
    }
  }, null, 2);
}

function applyPayload() {
  try {
    const payload = JSON.parse(document.getElementById("payloadInput").value);
    vulnerableMerge(appConfig, payload);

    const probe = {};
    document.getElementById("resultOut").textContent = JSON.stringify({
      appConfig,
      probeObjectIsAdmin: probe.isAdmin === true
    }, null, 2);

    updateStateView();
  } catch (err) {
    document.getElementById("resultOut").textContent = "Erro: " + err.message;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  updateStateView();
  loadPayload();
  document.getElementById("resultOut").textContent = "Aguardando merge...";
});
