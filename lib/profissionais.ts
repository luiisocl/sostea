// Estrutura de dados do diretório de profissionais.
//
// HOJE: os perfis vêm de data/profissionais.ts (perfis demonstrativos).
// DEPOIS: troque o corpo de listarProfissionais() por uma consulta ao Supabase,
// por exemplo:
//   const { data } = await supabase.from("profissionais").select("*").eq("validado", true);
//   return data ?? [];
// O resto do site não precisa mudar, desde que os campos sigam o tipo abaixo.

import { perfisDemonstrativos } from "@/data/profissionais";

export const especialidades = [
  { id: "psicologia", nome: "Psicologia" },
  { id: "fonoaudiologia", nome: "Fonoaudiologia" },
  { id: "terapia-ocupacional", nome: "Terapia ocupacional" },
  { id: "odontologia", nome: "Odontologia" },
  { id: "cuidador", nome: "Cuidadoras(es)" },
  { id: "neuropediatria", nome: "Neuropediatria" },
  { id: "psiquiatria", nome: "Psiquiatria" },
] as const;

/** Filtros mostrados na página inicial (os demais aparecem na página Profissionais). */
export const especialidadesHome = ["psicologia", "fonoaudiologia", "terapia-ocupacional", "odontologia", "cuidador"];

export type EspecialidadeId = (typeof especialidades)[number]["id"];

export type Profissional = {
  id: string;
  nome: string;
  area: string; // ex.: "Psicóloga", "Fonoaudiólogo"
  especialidade: EspecialidadeId;
  descricao: string;
  registro: string;
  cidade: string;
  uf: string;
  foto?: string; // caminho em /public/images
  atendeSUS: boolean;
  contato: { telefone?: string; email?: string; site?: string };
  /** true para perfis de exemplo. Perfis reais só entram depois de validados. */
  demonstrativo: boolean;
};

export async function listarProfissionais(): Promise<Profissional[]> {
  return perfisDemonstrativos;
}

export function nomeEspecialidade(id: EspecialidadeId) {
  return especialidades.find((e) => e.id === id)?.nome ?? id;
}
