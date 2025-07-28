# Lab 18 — Stored XSS

## Objetivo
Demonstrar XSS persistente, onde o payload fica armazenado e é executado depois para outros usuários.

## Versão vulnerável
- comentário salvo e renderizado com `innerHTML`

## Impacto
- execução recorrente de payload
- roubo de sessão/tokens
- comprometimento de múltiplos usuários

## Correção
- escapar/sanitizar conteúdo persistido
- renderizar com `textContent`
- combinar com CSP forte
