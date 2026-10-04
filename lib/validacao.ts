import { z } from "zod";

// Mensagens padrão do Zod em português (para casos não cobertos abaixo).
z.config(z.locales.pt());

// Regras do formulário de cadastro.
// Este arquivo é usado no navegador (validação imediata) E no servidor (validação final).

export const perfis = [
  { id: "pessoa-autista", nome: "Pessoa autista" },
  { id: "familiar-cuidador", nome: "Familiar ou cuidador(a)" },
  { id: "profissional", nome: "Profissional" },
  { id: "estudante", nome: "Estudante" },
  { id: "outro", nome: "Outro" },
] as const;

export const ufs = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA",
  "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

const idsPerfis = perfis.map((p) => p.id) as [string, ...string[]];

export const VERSAO_POLITICA = "2026-10-04";

export const esquemaCadastro = z.object({
  nome: z
    .string({ error: "Escreva seu nome." })
    .trim()
    .min(2, { error: "Escreva seu nome (pelo menos 2 letras)." })
    .max(120, { error: "O nome pode ter no máximo 120 caracteres." }),
  email: z
    .string({ error: "Escreva seu e-mail." })
    .trim()
    .toLowerCase()
    .max(254, { error: "E-mail muito longo." })
    .pipe(z.email({ error: "Confira o e-mail. Exemplo: nome@email.com" })),
  cidade: z
    .string({ error: "Escreva sua cidade." })
    .trim()
    .min(2, { error: "Escreva sua cidade." })
    .max(100, { error: "O nome da cidade pode ter no máximo 100 caracteres." }),
  uf: z.enum(ufs, { error: "Escolha o estado." }),
  perfil: z.enum(idsPerfis, { error: "Escolha a opção que mais combina com você." }),
  interesse: z
    .string()
    .trim()
    .max(500, { error: "Use no máximo 500 caracteres." })
    .optional()
    .default(""),
  consentimento: z.literal(true, {
    error: "Para se cadastrar, é preciso concordar com a Política de Privacidade.",
  }),
});

export type DadosCadastro = z.infer<typeof esquemaCadastro>;
export type CampoCadastro = keyof DadosCadastro;
export type ErrosCadastro = Partial<Record<CampoCadastro, string>>;

/** Transforma os erros do Zod em { campo: "mensagem" } (só a primeira de cada campo). */
export function errosPorCampo(erro: z.ZodError): ErrosCadastro {
  const erros: ErrosCadastro = {};
  for (const issue of erro.issues) {
    const campo = issue.path[0] as CampoCadastro;
    if (campo && !erros[campo]) erros[campo] = issue.message;
  }
  return erros;
}
