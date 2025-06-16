# Lab 14 — Security Headers

## Objetivo
Demonstrar a importância de headers básicos de endurecimento.

## Versão vulnerável
- ausência de CSP
- ausência de `X-Content-Type-Options`
- ausência de `Referrer-Policy`
- ausência de HSTS

## Impacto
- aumento da superfície de ataque
- controle mais fraco sobre conteúdo e navegação
- pior postura defensiva geral

## Correção
- configurar headers no servidor/proxy
- revisar defaults do framework
- validar regularmente com auditoria
