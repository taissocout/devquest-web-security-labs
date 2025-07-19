# Lab 17 — IDOR

## Objetivo
Mostrar o risco de acessar recursos diretamente por ID sem validar autorização.

## Versão vulnerável
- pedido buscado por ID
- sem checagem de ownership

## Impacto
- leitura de dados de terceiros
- exposição de informações sensíveis
- quebra de segregação entre usuários

## Correção
- validar ownership no backend
- usar checagem de autorização por recurso
- não confiar apenas em IDs previsíveis
