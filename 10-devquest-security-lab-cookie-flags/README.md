# Lab 10 — Cookie Flags Ausentes

## Objetivo
Mostrar o risco de criar cookies de sessão sem flags de proteção.

## Versão vulnerável
- cookie criado via `document.cookie`
- sem `Secure`
- sem `SameSite`
- não pode ser `HttpOnly`

## Impacto
- maior risco em HTTP inseguro
- aumento da exposição a CSRF
- leitura por scripts do front-end

## Correção
- emitir cookie no backend
- usar `HttpOnly; Secure; SameSite=Lax/Strict`
- evitar controle de sessão crítico via JavaScript
