# Lab 13 — CORS Misconfiguration

## Objetivo
Demonstrar como CORS excessivamente permissivo pode expor respostas sensíveis a origens maliciosas.

## Versão vulnerável
- origin refletida sem validação
- credenciais permitidas
- dados sensíveis retornados

## Impacto
- exfiltração cross-origin
- leitura indevida por site malicioso
- ampliação da superfície de ataque

## Correção
- usar allowlist explícita
- nunca refletir qualquer `Origin`
- expor apenas o mínimo necessário
- revisar uso de `Access-Control-Allow-Credentials`
