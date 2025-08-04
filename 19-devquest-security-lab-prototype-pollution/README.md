# Lab 19 — Prototype Pollution

## Objetivo
Demonstrar risco de merge inseguro de objetos com propriedades especiais.

## Versão vulnerável
- merge recursivo sem bloquear `__proto__`
- poluição de objetos derivados

## Impacto
- alteração inesperada de comportamento
- bypass de lógica
- exploração indireta em componentes dependentes

## Correção
- bloquear `__proto__`, `constructor`, `prototype`
- usar libs/merge seguros
- validar estrutura do payload
