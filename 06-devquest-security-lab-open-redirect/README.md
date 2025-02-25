# Lab 06 — Open Redirect

## Objetivo
Demonstrar como um parâmetro de redirecionamento como `?next=` pode ser abusado
quando a aplicação confia totalmente no valor fornecido pelo usuário.

## Versão vulnerável
A aplicação executa:
- leitura de `?next=`
- redirecionamento com `window.location.href = next`

Exemplo de payload:
?next=https://evil.example/phishing

## Impacto
- phishing
- quebra de confiança do domínio legítimo
- encadeamento com campanhas de roubo de credenciais

## Correção
- aceitar apenas rotas internas
- usar allowlist explícita
- aplicar fallback seguro
- validar no backend também
