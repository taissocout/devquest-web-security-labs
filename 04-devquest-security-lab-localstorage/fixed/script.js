// ╔══════════════════════════════════════════════════════╗
// ║  LAB 04 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Tokens em httpOnly cookies (simulado)           ║
// ╚══════════════════════════════════════════════════════╝

// CORREÇÃO: tokens de autenticação NÃO devem ir para localStorage.
// A solução correta é usar httpOnly cookies, que são invisíveis ao JS.
//
// Em produção, o servidor faz:
//   res.cookie('jwt', token, { httpOnly: true, secure: true, sameSite: 'Strict' })
//
// Neste lab simulamos o conceito mostrando o que PODE ser salvo
// no localStorage (preferências não sensíveis) vs o que não pode.

const SEGURO_NO_LOCALSTORAGE = ['theme', 'language', 'sidebar_collapsed'];

function fazerLogin() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  if (!user || !pass) return;

  // ✅ CORRETO: dados não-sensíveis podem ir para localStorage
  localStorage.setItem('ui_theme', 'dark');
  localStorage.setItem('ui_language', 'pt-BR');
  localStorage.setItem('last_user', user); // só o username, sem token

  // ✅ O token JWT vai para httpOnly cookie (gerenciado pelo servidor)
  // Simulamos aqui com sessionStorage (menos pior que localStorage)
  // Na realidade real: o servidor seta o cookie httpOnly
  const tokenSimulado = '[httpOnly cookie — inacessível ao JavaScript]';

  atualizarUI(user, tokenSimulado);
  atualizarStorage();
}

function atualizarUI(user, token) {
  document.getElementById('panelLogin').style.display = 'none';
  document.getElementById('panelUser').style.display = 'block';
  document.getElementById('panelUser').classList.remove('panel-hidden');
  document.getElementById('userInfo').innerHTML =
    'Bem-vindo, <span>' + user + '</span><br>' +
    'Token: <span>' + token + '</span><br>' +
    'localStorage: <span>apenas preferências de UI</span>';
  document.querySelector('.status-dot').classList.add('online');
  document.getElementById('statusText').textContent = user;
}

function atualizarStorage() {
  const view = document.getElementById('storageView');
  const keys = Object.keys(localStorage);
  if (keys.length === 0) {
    view.innerHTML = '<span class="empty-msg">Nenhum dado sensível armazenado</span>';
    return;
  }
  view.innerHTML = keys.map(k => {
    const seguro = SEGURO_NO_LOCALSTORAGE.some(s => k.includes(s.split('_')[0]));
    return '<div class="storage-item"><span class="s-key">' + k + ':</span>' +
           '<span class="s-val" style="color:' + (seguro ? '#10b981' : '#ef4444') + '">' +
           localStorage.getItem(k) + ' ' + (seguro ? '✅' : '⚠️') + '</span></div>';
  }).join('');
}

// ✅ Agora o "roubarDados" só encontra preferências — nada sensível
function roubarDados() {
  const dados = {};
  Object.keys(localStorage).forEach(k => dados[k] = localStorage.getItem(k));
  const log   = document.getElementById('attackLog');
  const panel = document.getElementById('panelLog');
  log.textContent =
    '// PAYLOAD XSS EXECUTADO\n' +
    '// Dados encontrados no localStorage:\n' +
    JSON.stringify(dados, null, 2) + '\n\n' +
    '// Resultado: nenhum token ou dado sensível encontrado!\n' +
    '// O JWT está em httpOnly cookie — inacessível ao JavaScript.\n' +
    '// Ataque de roubo de token via XSS: BLOQUEADO ✅';
  panel.style.display = 'block';
}

function fazerLogout() {
  localStorage.clear();
  location.reload();
}

atualizarStorage();