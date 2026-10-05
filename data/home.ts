import {
  BookOpen,
  CalendarCheck,
  ChartColumn,
  FileText,
  Frown,
  GraduationCap,
  Heart,
  Lightbulb,
  ListChecks,
  Moon,
  Toothbrush,
  Users,
  Utensils,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Cor } from "@/lib/cores";

// ---------------------------------------------------------------
// Conteúdo da página inicial. Edite aqui para trocar textos e links.
// ---------------------------------------------------------------

/** Botões de perfil logo abaixo do topo. */
export const perfis: { rotulo: string; href: string; icone: LucideIcon; cor: string }[] = [
  { rotulo: "Sou Pai/Mãe", href: "/para-familias", icone: Users, cor: "bg-azul-tom" },
  { rotulo: "Sou Professor", href: "/para-educadores", icone: GraduationCap, cor: "bg-verde-tom" },
  { rotulo: "Sou Cuidador", href: "/para-cuidadores", icone: Heart, cor: "bg-lilas-tom" },
];

/** Cards "Em destaque" (imagens em /public/images). */
export const destaques: {
  href: string;
  titulo: string;
  resumo: string;
  etiqueta: string;
  cor: Cor;
  imagem: string;
}[] = [
  {
    href: "/biblioteca/escovacao-dos-dentes",
    titulo: "Escovação dos dentes passo a passo",
    resumo: "Veja orientações práticas para tornar a higiene bucal mais tranquila.",
    etiqueta: "Saúde bucal",
    cor: "verde",
    imagem: "/images/destaque-saude-bucal.jpg",
  },
  {
    href: "/biblioteca/rotina-visual",
    titulo: "Como montar uma rotina visual",
    resumo: "Dicas e modelos para ajudar na autonomia e na organização do dia a dia.",
    etiqueta: "Rotina",
    cor: "lilas",
    imagem: "/images/destaque-rotina.jpg",
  },
  {
    href: "/biblioteca/crise-e-sobrecarga-o-que-fazer",
    titulo: "Acolhimento em momentos de sobrecarga",
    resumo: "Estratégias para lidar com crises e fortalecer o vínculo.",
    etiqueta: "Bem-estar",
    cor: "rosa",
    imagem: "/images/destaque-bem-estar.jpg",
  },
  {
    href: "/entenda",
    titulo: "O que sabemos sobre o TEA?",
    resumo: "Entenda o que é, suas características e como promover mais inclusão.",
    etiqueta: "Informação",
    cor: "azul",
    imagem: "/images/destaque-informacao.jpg",
  },
];

/** "Meu filho está..." — cada item leva a uma página de orientação. */
export const situacoes: { rotulo: string; href: string; icone: LucideIcon; cor: Cor }[] = [
  { rotulo: "Muito agitado", href: "/biblioteca/muito-agitado", icone: Zap, cor: "amarelo" },
  { rotulo: "Não quer escovar os dentes", href: "/biblioteca/escovacao-dos-dentes", icone: Toothbrush, cor: "azul" },
  { rotulo: "Tendo uma crise", href: "/biblioteca/crise-e-sobrecarga-o-que-fazer", icone: Frown, cor: "rosa" },
  { rotulo: "Não quer comer", href: "/biblioteca/seletividade-alimentar", icone: Utensils, cor: "amarelo" },
  { rotulo: "Não consegue dormir", href: "/biblioteca/hora-de-dormir", icone: Moon, cor: "azul" },
  { rotulo: "Com sensibilidade a sons", href: "/biblioteca/sensibilidade-a-sons", icone: Volume2, cor: "lilas" },
];

/** Passos da caixa "Precisa de ajuda agora?" */
export const passosAjuda = [
  "Mantenha a calma",
  "Reduza estímulos",
  "Dê espaço",
  "Fale pouco e de forma simples",
  "Observe possíveis gatilhos",
];

/** Faixa "Dados e curiosidades". */
export const atalhosDados: { titulo: string; texto: string; href: string; icone: LucideIcon }[] = [
  { titulo: "Entenda os dados", texto: "Informações de fonte confiável sobre o TEA.", href: "/dados", icone: FileText },
  { titulo: "Mitos e fatos", texto: "Desmistificando ideias comuns.", href: "/entenda#mitos", icone: Lightbulb },
  { titulo: "Fontes confiáveis", texto: "Conheça instituições e materiais recomendados.", href: "/fontes", icone: BookOpen },
];
export const iconeDados = ChartColumn;

/** "Guias rápidos". */
export const guias: { titulo: string; texto: string; href: string; icone: LucideIcon; cor: Cor }[] = [
  { titulo: "Rotina visual", texto: "Crie previsibilidade e reduza a ansiedade.", href: "/biblioteca/rotina-visual", icone: CalendarCheck, cor: "azul" },
  { titulo: "Checklist de rotina", texto: "Organize o dia a dia com mais facilidade.", href: "/biblioteca/checklist-de-rotina", icone: ListChecks, cor: "verde" },
  { titulo: "Dicas para professores", texto: "Adaptações simples que fazem a diferença.", href: "/biblioteca/dicas-para-professores", icone: GraduationCap, cor: "amarelo" },
  { titulo: "Cartilha para pais", texto: "Orientações completas em linguagem acessível.", href: "/biblioteca/cartilha-para-pais", icone: BookOpen, cor: "lilas" },
];
