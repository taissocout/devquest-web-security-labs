# Lab 16 — Mass Assignment

## Objetivo
Demonstrar o risco de aplicar automaticamente no modelo todos os campos enviados pelo cliente.

## Versão vulnerável
- uso ingênuo de `Object.assign`
- campos sensíveis como `isAdmin` podem ser alterados

## Impacto
- privilege escalation
- alteração indevida de propriedades internas
- corrupção de regras de negócio

## Correção
- allowlist de campos
- DTOs específicos
- separação entre campos públicos e internos
