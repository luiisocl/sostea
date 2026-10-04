// Estrutura de dados do diretório de profissionais.
//
// HOJE: os perfis vêm de data/profissionais.ts (exemplos fictícios).
// DEPOIS: troque o corpo de listarProfissionais() por uma consulta ao Supabase,
// por exemplo:
//   const { data } = await supabase.from("profissionais").select("*").eq("validado", true);
//   return data ?? [];
// O resto do site não precisa mudar, desde que os campos sigam o tipo abaixo.

import { perfisIlustrativos } from "@/data/profissionais";

export const especialidades = [
  { id: "psiquiatria", nome: "Psiquiatria" },
  { id: "neuropediatria", nome: "Neuropediatria" },
  { id: "psicologia", nome: "Psicologia" },
  { id: "fonoaudiologia", nome: "Fonoaudiologia" },
  { id: "terapia-ocupacional", nome: "Terapia ocupacional" },
] as const;

export type EspecialidadeId = (typeof especialidades)[number]["id"];

export type Profissional = {
  id: string;
  nome: string;
  especialidade: EspecialidadeId;
  registro: string; // CRM, CRP, CRFa, CREFITO…
  cidade: string;
  uf: string;
  publico: ("criancas" | "adolescentes" | "adultos")[];
  modalidade: ("presencial" | "online")[];
  atendeSUS: boolean;
  contato: { telefone?: string; email?: string; site?: string };
  /** true para perfis de exemplo. Perfis reais só entram depois de validados. */
  ilustrativo: boolean;
};

export async function listarProfissionais(): Promise<Profissional[]> {
  return perfisIlustrativos;
}

export function nomeEspecialidade(id: EspecialidadeId) {
  return especialidades.find((e) => e.id === id)?.nome ?? id;
}
