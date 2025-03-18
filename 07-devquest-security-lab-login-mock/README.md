# Lab 07 — Login Mock Inseguro

## Objetivo
Mostrar por que autenticação e autorização não devem ser implementadas no front-end.

## Versão vulnerável
- usuários hardcoded no JS
- senha visível no bundle
- role definida pelo cliente
- bypass simples por DevTools

## Impacto
- descoberta de credenciais
- escalada de privilégios
- falsa sensação de segurança

## Correção
- autenticação no backend
- nenhum segredo real no front-end
- sessão gerenciada no servidor
- controles extras: rate limit, MFA, auditoria

## Observação
Front-end pode participar do fluxo, mas não pode ser a autoridade final.
