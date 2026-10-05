-- Conexões que Incluem — tabela de cadastros
-- Cole tudo no SQL Editor do Supabase e clique em "Run".

create table if not exists public.cadastros (
  id               uuid primary key default gen_random_uuid(),
  criado_em        timestamptz not null default now(),
  nome             text not null check (char_length(nome) between 2 and 120),
  email            text not null check (char_length(email) between 3 and 254),
  cidade           text not null check (char_length(cidade) between 2 and 100),
  uf               char(2) not null,
  perfil           text not null check (perfil in (
                     'pessoa-autista', 'familiar-cuidador', 'profissional', 'estudante', 'outro'
                   )),
  interesse        text check (char_length(interesse) <= 500),
  consentimento    boolean not null check (consentimento = true),
  consentimento_em timestamptz not null default now(),
  versao_politica  text not null
);

comment on table public.cadastros is
  'Cadastros do site Conexões que Incluem. Não armazenar dados de saúde (LGPD, dados sensíveis).';

-- Um cadastro por e-mail (sem diferenciar maiúsculas/minúsculas)
create unique index if not exists cadastros_email_unico on public.cadastros (lower(email));

-- Segurança (Row Level Security):
-- o site só consegue INSERIR. Ninguém de fora consegue LER, alterar ou apagar.
-- Para ver os cadastros, use o Table Editor do painel do Supabase.
alter table public.cadastros enable row level security;

drop policy if exists "Visitantes podem se cadastrar" on public.cadastros;
create policy "Visitantes podem se cadastrar"
  on public.cadastros
  for insert
  to anon
  with check (consentimento = true);

grant insert on table public.cadastros to anon;
