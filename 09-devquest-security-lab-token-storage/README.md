# Lab 09 — Token Storage Inseguro

## Objetivo
Mostrar o risco de armazenar bearer tokens em áreas acessíveis ao JavaScript.

## Versão vulnerável
- token salvo em `sessionStorage`
- leitura simples por XSS

## Impacto
- sequestro de sessão
- reutilização de token por atacante
- pivô para APIs internas

## Correção
- preferir sessão gerenciada pelo servidor
- usar cookie `HttpOnly` + `Secure` + `SameSite`
- reduzir janela de exposição
- combinar com CSP e prevenção de XSS
