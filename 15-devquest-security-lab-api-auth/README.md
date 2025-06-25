# Lab 15 — API Auth Fraca

## Objetivo
Demonstrar o erro de confiar em parâmetros ou headers manipuláveis pelo cliente para autorização.

## Versão vulnerável
- role enviada pelo cliente
- backend ingênuo confia em `X-User-Role`
- escalada simples para admin

## Impacto
- privilege escalation
- acesso indevido a funções administrativas
- exposição de dados e ações críticas

## Correção
- validar sessão/token no servidor
- derivar role de fonte confiável
- nunca confiar em header arbitrário do cliente como decisão de autorização
