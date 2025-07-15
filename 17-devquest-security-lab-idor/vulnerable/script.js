// ╔══════════════════════════════════════════════════════╗
// ║  LAB 17 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  IDOR                                           ║
// ╚══════════════════════════════════════════════════════╝
//
// Tutorial:
// 1. O cliente fornece diretamente o ID do recurso.
// 2. O backend retorna o recurso se o ID existir.
// 3. Não há verificação se o recurso pertence ao usuário logado.
// 4. Basta trocar o ID para acessar dados de terceiros.

const CURRENT_USER_ID = 1;

const ORDERS = {
  5001: { id: 5001, ownerId: 1, total: "R$ 129,90", item: "Teclado" },
  5002: { id: 5002, ownerId: 2, total: "R$ 4.999,00", item: "Notebook VIP" },
  5003: { id: 5003, ownerId: 3, total: "R$ 799,00", item: "Monitor" }
};

function fetchOrder() {
  const id = document.getElementById("orderIdInput").value.trim();
  const order = ORDERS[id];

  // ❌ VULNERÁVEL:
  // Retorna o pedido sem validar se pertence ao usuário atual.
  document.getElementById("output").textContent = order
    ? JSON.stringify({ currentUserId: CURRENT_USER_ID, order }, null, 2)
    : "Pedido não encontrado";
}

function switchToOtherUser() {
  document.getElementById("orderIdInput").value = "5002";
}
