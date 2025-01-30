// ╔══════════════════════════════════════════════════════╗
// ║  LAB 03 — VERSÃO CORRIGIDA                          ║
// ║  ✅ Validação robusta + simulação de check server   ║
// ╚══════════════════════════════════════════════════════╝

// LIÇÃO PRINCIPAL:
// Validação client-side é UX — serve para feedback rápido.
// A validação real DEVE estar no servidor.
// Nunca confie apenas no JavaScript do browser.

const REGRAS = {
  nome:  { min: 3,  regex: /^[A-Za-zÀ-ÿ\s]{3,}$/, msg: 'Nome deve ter ao menos 3 letras (sem números)' },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'E-mail inválido' },
  idade: { min: 18, max: 120, msg: 'Idade deve ser entre 18 e 120 anos' },
  senha: { min: 8, regex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/, msg: 'Senha: mín. 8 chars, com letra e número' },
};

function validarCampo(id, valor) {
  const regra = REGRAS[id];
  if (!valor || valor.trim() === '') return 'Campo obrigatório';

  if (id === 'nome' && !regra.regex.test(valor))   return regra.msg;
  if (id === 'email' && !regra.regex.test(valor))  return regra.msg;
  if (id === 'senha' && !regra.regex.test(valor))  return regra.msg;
  if (id === 'idade') {
    const n = parseInt(valor);
    if (isNaN(n) || n < regra.min || n > regra.max) return regra.msg;
  }
  return null; // sem erro
}

async function validarESubmeter(event) {
  event.preventDefault();
  let valido = true;

  const campos = ['nome','email','idade','senha'];
  campos.forEach(id => {
    document.getElementById('err-' + id).textContent = '';
    document.getElementById(id).classList.remove('error-field');
  });

  // ✅ Validação client-side para UX
  campos.forEach(id => {
    const erro = validarCampo(id, document.getElementById(id).value);
    if (erro) {
      document.getElementById('err-' + id).textContent = erro;
      document.getElementById(id).classList.add('error-field');
      valido = false;
    }
  });

  if (!valido) return;

  // ✅ Simula validação no servidor (onde a validação REAL deve estar)
  await simularValidacaoServidor({
    nome:  document.getElementById('nome').value,
    email: document.getElementById('email').value,
    idade: parseInt(document.getElementById('idade').value),
    senha: document.getElementById('senha').value,
  });
}

async function simularValidacaoServidor(dados) {
  // Em produção, aqui estaria um fetch() para /api/cadastro
  // O servidor revalida tudo independentemente do client
  const result = document.getElementById('result');
  result.className = 'result success';
  result.textContent = '✅ Cadastro validado no servidor e realizado com sucesso!';
  result.classList.remove('hidden');
}

// ✅ Feedback em tempo real por campo
['nome','email','idade','senha'].forEach(id => {
  document.getElementById(id)?.addEventListener('blur', (e) => {
    const erro = validarCampo(id, e.target.value);
    document.getElementById('err-' + id).textContent = erro || '';
    e.target.classList.toggle('error-field', !!erro);
  });
});