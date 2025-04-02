# Lab 08 — Sensitive Data Exposure

## Objetivo
Demonstrar vazamento de dados sensíveis para o navegador.

## Versão vulnerável
- chave interna exposta no bundle
- flags internas sem necessidade
- payload de cliente com dados excessivos
- notas internas visíveis ao usuário final

## Impacto
- enumeração de ambiente
- vazamento de lógica interna
- exposição de dados de negócio e PII
- aumento da superfície para ataques posteriores

## Correção
- data minimization
- separar config pública e privada
- filtrar payload no backend
- nunca enviar segredos reais ao browser
