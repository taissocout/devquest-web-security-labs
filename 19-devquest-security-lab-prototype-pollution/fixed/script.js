// ╔══════════════════════════════════════════════════════╗
// ║  LAB 19 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Bloqueio de __proto__/constructor/prototype     ║
// ╚══════════════════════════════════════════════════════╝

const appConfig = {
  theme: "dark",
  debug: false
};

const BLOCKED_KEYS = ["__proto__", "constructor", "prototype"];

function safeMerge(target, source) {
  for (const key in source) {
    if (BLOCKED_KEYS.includes(key)) {
      continue;
    }

    if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key])) {
      if (!Object.prototype.hasOwnProperty.call(target, key) || typeof target[key] !== "object") {
        target[key] = {};
      }
      safeMerge(target[key], source[key]);
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
    safeMerge(appConfig, payload);

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
