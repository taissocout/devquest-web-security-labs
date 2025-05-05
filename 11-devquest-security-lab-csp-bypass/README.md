# Lab 11 — CSP Fraca / CSP Bypass

## Objetivo
Mostrar que apenas "ter CSP" não basta. Uma política fraca, especialmente com
`'unsafe-inline'`, perde grande parte do valor defensivo.

## Versão vulnerável
- `script-src 'unsafe-inline'`
- renderização com `innerHTML`
- payload inline executa com facilidade

## Impacto
- XSS facilitado
- bypass de defesa mal configurada
- falsa sensação de segurança

## Correção
- remover `unsafe-inline` de `script-src`
- usar `textContent` ou sanitização segura
- adicionar diretivas úteis como:
  - `object-src 'none'`
  - `base-uri 'self'`
  - `frame-ancestors 'none'`
