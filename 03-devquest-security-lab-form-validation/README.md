# 🟡 Lab 03 — Validação Fraca de Formulário

> **Série DevQuest Security Labs** · Nível 1 · Front-End


## Objetivo

Demonstrar que **validação feita apenas no JavaScript do cliente** pode ser completamente ignorada por um atacante, permitindo o envio de dados inválidos, malformados ou maliciosos para o servidor.


## A Vulnerabilidade

**Tipo:** Client-side only validation bypass  
**CWE:** CWE-602 — Client-Side Enforcement of Server-Side Security

// ❌ INSEGURO — validação removível pelo atacante
function validarESubmeter(event) {
  event.preventDefault();
  if (idade < 18) { mostrarErro(...); return; }
  // ...
  enviarDados(dados); // servidor recebe sem revalidar
}


## Como Reproduzir

**Método 1 — Console do DevTools:**
// Remove a validação e submete direto
document.getElementById('form').onsubmit = null;
document.getElementById('form').submit();

**Método 2 — Desabilitar JavaScript:**
Configurações do browser → Desabilitar JS → Preencha o form com dados inválidos → Submit

**Método 3 — curl (ignora JS completamente):**
curl -X POST https://alvo.com/api/cadastro \
  -d '{"nome":"a","email":"nao-e-email","idade":5,"senha":"123"}'


## Impacto

- Registro de usuários menores de idade
- Dados malformados no banco de dados
- Bypass de regras de negócio críticas
- Injeção de dados que exploram vulnerabilidades no servidor


## A Correção

// ✅ CORRETO — validação replicada no servidor
// POST /api/cadastro
// servidor revalida TODOS os campos independentemente
app.post('/api/cadastro', (req, res) => {
  const { nome, email, idade, senha } = req.body;
  if (!email.match(/regex/)) return res.status(400).json({ erro: 'email inválido' });
  if (idade < 18) return res.status(400).json({ erro: 'menor de idade' });
  // ...
});


## Boas Práticas

- ✅ Validação client-side é **UX** — nunca é **segurança**
- ✅ O servidor DEVE revalidar todos os dados recebidos
- ✅ Nunca confie em qualquer dado vindo do cliente
- ✅ Use bibliotecas de validação no backend (Joi, Zod, Yup)


## 🌐 Live Demo

| Versão | Link |
| ⚠️ Vulnerável | [/vulnerable](./vulnerable/index.html) |
| ✅ Corrigida   | [/fixed](./fixed/index.html) |

*DevQuest Security Labs · Laboratório educacional*
