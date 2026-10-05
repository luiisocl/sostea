import {
  Apple,
  Bath,
  BookOpen,
  Headphones,
  MessageCircle,
  Moon,
  Toothbrush,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Cor } from "./cores";

// As 8 categorias da Biblioteca, na ordem em que aparecem no site.
export const categorias = [
  { id: "higiene-e-autonomia", nome: "Higiene e autonomia", descricao: "Cuidados pessoais e mais independência.", cor: "azul", icone: Bath },
  { id: "saude-bucal", nome: "Saúde bucal", descricao: "Dicas e orientações para uma boa higiene.", cor: "verde", icone: Toothbrush },
  { id: "alimentacao", nome: "Alimentação", descricao: "Estratégias para uma rotina alimentar saudável.", cor: "rosa", icone: Apple },
  { id: "sono-e-rotina", nome: "Sono e rotina", descricao: "Para noites mais tranquilas e dias mais organizados.", cor: "lilas", icone: Moon },
  { id: "comunicacao", nome: "Comunicação", descricao: "Formas de comunicação e interação.", cor: "rosa", icone: MessageCircle },
  { id: "crises-e-regulacao-sensorial", nome: "Crises e regulação sensorial", descricao: "Como identificar, prevenir e lidar.", cor: "amarelo", icone: Headphones },
  { id: "escola-e-inclusao", nome: "Escola e inclusão", descricao: "Adaptações, direitos e convívio escolar.", cor: "azul", icone: BookOpen },
  { id: "direitos-e-rede-de-apoio", nome: "Direitos e rede de apoio", descricao: "Informações e serviços em Teresina e região.", cor: "verde", icone: Users },
] as const satisfies readonly { id: string; nome: string; descricao: string; cor: Cor; icone: LucideIcon }[];

export type CategoriaId = (typeof categorias)[number]["id"];

export function obterCategoria(id: CategoriaId) {
  return categorias.find((c) => c.id === id)!;
}
