// ╔══════════════════════════════════════════════════════╗
// ║  LAB 17 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Checagem de ownership                           ║
// ╚══════════════════════════════════════════════════════╝

const CURRENT_USER_ID = 1;

const ORDERS = {
  5001: { id: 5001, ownerId: 1, total: "R$ 129,90", item: "Teclado" },
  5002: { id: 5002, ownerId: 2, total: "R$ 4.999,00", item: "Notebook VIP" },
  5003: { id: 5003, ownerId: 3, total: "R$ 799,00", item: "Monitor" }
};

function fetchOrder() {
  const id = document.getElementById("orderIdInput").value.trim();
  const order = ORDERS[id];

  // ✅ CORRIGIDO:
  // O backend precisa validar ownership/authorization.
  if (!order) {
    document.getElementById("output").textContent = "Pedido não encontrado";
    return;
  }

  if (order.ownerId !== CURRENT_USER_ID) {
    document.getElementById("output").textContent = JSON.stringify({
      currentUserId: CURRENT_USER_ID,
      error: "Acesso negado ao recurso solicitado"
    }, null, 2);
    return;
  }

  document.getElementById("output").textContent = JSON.stringify({ currentUserId: CURRENT_USER_ID, order }, null, 2);
}

function switchToOtherUser() {
  document.getElementById("orderIdInput").value = "5002";
}
