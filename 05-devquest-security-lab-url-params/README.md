# 🩵 Lab 05 — Manipulação de Parâmetros de URL

> **Série DevQuest Security Labs** · Nível 1 · Front-End


## Objetivo

Demonstrar como aplicações que usam **parâmetros de URL para controle de acesso** podem ser facilmente exploradas por qualquer usuário para obter privilégios de administrador.


## A Vulnerabilidade

**Tipo:** Client-side Authorization Bypass / Parameter Tampering  
**CWE:** CWE-285 — Improper Authorization

// ❌ INSEGURO — autorização pela URL
const role = params.get('role') || 'user';
if (role === 'admin') mostrarPainelAdmin();


## Como Reproduzir

Acesse a versão vulnerável e adicione qualquer um desses parâmetros:

vulnerable/index.html?role=admin
vulnerable/index.html?admin=true
vulnerable/index.html?privilege=superuser
vulnerable/index.html?access=full

Ou clique nos botões de atalho na interface do laboratório.


## Impacto

- Acesso a painéis administrativos sem autenticação
- Visualização de dados restritos
- Alteração de comportamento da aplicação
- Bypass de fluxos de negócio (ex: pular etapas de checkout)


## A Correção

// ✅ CORRETO — autorização verificada no servidor
// O token httpOnly cookie é enviado automaticamente ao servidor
// O servidor valida a sessão e retorna os dados conforme a permissão real

// Middleware no Express:
function requireAdmin(req, res, next) {
  if (req.session?.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
}
app.get('/api/admin/dashboard', requireAdmin, handler);


## Boas Práticas

- ✅ Autorização SEMPRE no servidor — nunca no cliente
- ✅ Nunca confie em cookies, headers ou params que o usuário possa modificar
- ✅ Use sessões server-side com tokens opacos
- ✅ Implemente RBAC (Role-Based Access Control) no backend
- ✅ Audite todas as rotas sensíveis com middleware de autenticação


## 🌐 Live Demo

| Versão | Link |
| ⚠️ Vulnerável | [/vulnerable](./vulnerable/index.html) |
| ✅ Corrigida   | [/fixed](./fixed/index.html) |

*DevQuest Security Labs · Laboratório educacional*
