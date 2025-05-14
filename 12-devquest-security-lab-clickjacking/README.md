# Lab 12 — Clickjacking

## Objetivo
Demonstrar risco de páginas sensíveis serem carregadas em `iframe` por sites maliciosos.

## Versão vulnerável
- sem `frame-ancestors`
- sem `X-Frame-Options`
- ação sensível clicável

## Impacto
- cliques induzidos
- aprovações indevidas
- transferência / ação sensível sem percepção da vítima

## Correção
- `Content-Security-Policy: frame-ancestors 'none'`
- `X-Frame-Options: DENY`
- confirmar operações sensíveis
