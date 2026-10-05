# Conexões que Incluem

Site informativo sobre o Transtorno do Espectro Autista (TEA) para pessoas autistas, familiares, cuidadores e quem quer aprender. Projeto acadêmico.

Feito com Next.js (App Router) + TypeScript, Tailwind CSS e Supabase. Publicado na Vercel.

## Rodar no seu computador

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:3000
```

## Onde editar cada coisa

| O que | Arquivo |
|---|---|
| Cores, fontes e tamanhos (design tokens) | `app/globals.css` |
| Itens do menu e telefones de emergência | `lib/navegacao.ts` |
| Membros do grupo, instituição e e-mail de contato | `data/equipe.ts` |
| Artigos de dicas | `content/dicas/*.mdx` (veja o modelo `_modelo.mdx`) |
| Fontes oficiais citadas | `lib/fontes.ts` |
| Perfis do diretório de profissionais | `data/profissionais.ts` e `lib/profissionais.ts` |
| Valores e chave Pix das doações | `lib/doacoes.ts` |
| Regras do formulário de cadastro | `lib/validacao.ts` |

### Adicionar uma dica nova

1. Copie `content/dicas/_modelo.mdx` e renomeie (ex.: `banho-e-higiene.mdx`). Use só letras minúsculas, números e hífens.
2. Preencha o bloco `metadata` (título, resumo, categoria e data).
3. Escreva o texto em Markdown. A dica aparece sozinha na página Dicas.

## Cadastro (Supabase)

1. Crie um projeto em https://supabase.com.
2. No **SQL Editor**, cole o conteúdo de `supabase/cadastros.sql` e clique em **Run**.
3. Em **Project Settings → API Keys**, copie a URL do projeto e a **Publishable key**.
4. Preencha o arquivo `.env.local` (modelo em `.env.example`).
5. Reinicie o `npm run dev`.

Sem essas variáveis, o site funciona normalmente e o formulário mostra um aviso de que o cadastro ainda não está ativo.

Para ver os cadastros, use o **Table Editor** do Supabase, na tabela `cadastros`.

## Ainda não funcional (só visual)

- **Profissionais:** para conectar a um banco, troque o corpo de `listarProfissionais()` em `lib/profissionais.ts`.
- **Doações:** veja as instruções no topo de `lib/doacoes.ts`.

## Acessibilidade

- Botão "Reduzir estímulos" e controle de tamanho do texto em todas as páginas. A escolha fica salva no navegador.
- Respeita `prefers-reduced-motion`.
- Contraste WCAG AA verificado com axe-core nos modos normal, reduzido e texto maior.
- Link "Pular para o conteúdo", foco visível e HTML semântico.
