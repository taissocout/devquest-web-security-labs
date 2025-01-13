# 🔴 Lab 01 — XSS Baseado em DOM

> **Série DevQuest Security Labs** · Nível 1 · Front-End


## Objetivo

Demonstrar como dados lidos da URL ou de inputs do usuário, quando inseridos no DOM via `innerHTML` sem sanitização, permitem a execução de código JavaScript arbitrário — o ataque conhecido como **DOM-based XSS**.


## A Vulnerabilidade

**Tipo:** DOM-based Cross-Site Scripting (XSS)
**CWE:** CWE-79 — Improper Neutralization of Input During Web Page Generation

O código vulnerável usa `innerHTML` para refletir o input do usuário:

// ❌ INSEGURO
document.getElementById('output').innerHTML = 'Olá, ' + nome + '!';

`innerHTML` interpreta a string como HTML. Se o valor contiver tags ou event handlers, o browser os executa.


## Como Reproduzir

1. Abra `vulnerable/index.html` no navegador
2. No campo de texto, cole o payload:
   <img src=x onerror=alert('XSS DISPARADO!')>
3. Clique em **EXEC**
4. Um `alert` será disparado — confirmando a execução de código

**Variação via URL:**
vulnerable/index.html?name=<script>alert('via URL')</script>


## Impacto

| Impacto | Descrição |
| Roubo de cookies | `document.cookie` exposto |
| Keylogging | Captura de teclado do usuário |
| Defacing | Alteração visual da página |
| Redirecionamento | Envio para site malicioso |
| Roubo de tokens | `localStorage` acessível |


## A Correção

// ✅ SEGURO — textContent trata tudo como texto puro
const span = document.createElement('span');
span.textContent = 'Olá, ' + nome + '!';
output.appendChild(span);

A versão corrigida também usa uma **Content Security Policy** via meta tag para bloquear scripts inline externos.


## Boas Práticas

- ✅ Sempre use `textContent` para inserir texto do usuário
- ✅ Use `createElement` + `textContent` em vez de `innerHTML`
- ✅ Configure CSP para bloquear `unsafe-inline`
- ✅ Valide e sanitize inputs no servidor, nunca só no cliente
- ✅ Use bibliotecas como [DOMPurify](https://github.com/cure53/DOMPurify) quando HTML for necessário


## 🌐 Live Demo

| Versão | Link |
| ⚠️ Vulnerável | [/vulnerable](./vulnerable/index.html) |
| ✅ Corrigida   | [/fixed](./fixed/index.html) |


*DevQuest Security Labs · Laboratório educacional — uso local apenas*
