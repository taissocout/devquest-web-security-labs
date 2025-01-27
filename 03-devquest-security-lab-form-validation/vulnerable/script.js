// ╔══════════════════════════════════════════════════════╗
// ║  LAB 03 — VERSÃO VULNERÁVEL                         ║
// ║  ⚠️  Validação apenas no client-side                ║
// ╚══════════════════════════════════════════════════════╝

// VULNERABILIDADE: toda a lógica de validação está no JavaScript.
// Um atacante pode:
// 1. Desabilitar JS nas configurações do browser
// 2. Interceptar a requisição com Burp Suite e modificar os dados
// 3. Reescrever a função no console: validarESubmeter = () => enviarDados()
// 4. Submeter o form via fetch/curl bypassando o front-end completamente

function validarESubmeter(event) {
  event.preventDefault();
  let valido = true;

  const nome  = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = parseInt(document.getElementById('idade').value);
  const senha = document.getElementById('senha').value;

  // Limpa erros anteriores
  ['nome','email','idade','senha'].forEach(id => {
    document.getElementById('err-' + id).textContent = '';
    document.getElementById(id).classList.remove('error-field');
  });

  // ❌ Validações que só existem no client-side
  if (!nome || nome.length < 3) {
    mostrarErro('nome', 'Nome deve ter ao menos 3 caracteres');
    valido = false;
  }
  if (!email.includes('@')) {
    mostrarErro('email', 'E-mail inválido');
    valido = false;
  }
  if (isNaN(idade) || idade < 18) {
    mostrarErro('idade', 'Você precisa ter 18 anos ou mais');
    valido = false;
  }
  if (!senha || senha.length < 8) {
    mostrarErro('senha', 'Senha muito curta (mín. 8 caracteres)');
    valido = false;
  }

  if (valido) enviarDados({ nome, email, idade, senha });
}

function mostrarErro(campo, msg) {
  document.getElementById('err-' + campo).textContent = msg;
  document.getElementById(campo).classList.add('error-field');
}

function enviarDados(dados) {
  // Simula envio bem-sucedido
  const result = document.getElementById('result');
  result.className = 'result success';
  result.textContent = '✓ Cadastro realizado! (Mas qualquer dado teria passado se JS estivesse desabilitado)';
  result.classList.remove('hidden');
}