import { GraduationCap, Heart, Users, type LucideIcon } from "lucide-react";
import type { Cor } from "@/lib/cores";

// Conteúdo das páginas "Para famílias", "Para educadores" e "Para cuidadores".
// Os links apontam para artigos da biblioteca (content/biblioteca) ou páginas do site.

export type PaginaPerfil = {
  rotulo: string;
  titulo: string;
  intro: string;
  icone: LucideIcon;
  cor: Cor;
  comeceAqui: { titulo: string; texto: string; href: string }[];
  dicasRapidas: string[];
  links: { rotulo: string; href: string }[];
};

export const paginasPerfil: Record<"familias" | "educadores" | "cuidadores", PaginaPerfil> = {
  familias: {
    rotulo: "Para famílias",
    titulo: "Para mães, pais e famílias",
    intro:
      "Um ponto de partida para quem convive com uma criança autista: primeiros passos, rotina, direitos e onde buscar apoio em Teresina.",
    icone: Users,
    cor: "azul",
    comeceAqui: [
      { titulo: "Cartilha para pais", texto: "Os primeiros passos após a suspeita ou o diagnóstico.", href: "/biblioteca/cartilha-para-pais" },
      { titulo: "Como montar uma rotina visual", texto: "Mais previsibilidade e menos ansiedade no dia a dia.", href: "/biblioteca/rotina-visual" },
      { titulo: "Crise e sobrecarga: o que fazer na hora", texto: "Como agir com calma quando a criança está sobrecarregada.", href: "/biblioteca/crise-e-sobrecarga-o-que-fazer" },
      { titulo: "Direitos da pessoa autista", texto: "Lei Berenice Piana, CIPTEA, atendimento prioritário e escola.", href: "/direitos" },
    ],
    dicasRapidas: [
      "Antecipe mudanças sempre que possível.",
      "Use frases curtas e apoio visual.",
      "Observe o que acontece antes de um comportamento difícil.",
      "Celebre as pequenas conquistas.",
      "Cuide também de você.",
    ],
    links: [
      { rotulo: "Conversando com a escola", href: "/biblioteca/conversando-com-a-escola" },
      { rotulo: "Cuidar de quem cuida", href: "/biblioteca/cuidar-de-quem-cuida" },
      { rotulo: "Rede de apoio em Teresina", href: "/rede-de-apoio" },
    ],
  },
  educadores: {
    rotulo: "Para educadores",
    titulo: "Para professores e equipes escolares",
    intro:
      "Estratégias simples para a sala de aula, comunicação com a família e o que diz a lei sobre a inclusão do estudante autista.",
    icone: GraduationCap,
    cor: "verde",
    comeceAqui: [
      { titulo: "Dicas para professores", texto: "Adaptações simples que fazem a diferença.", href: "/biblioteca/dicas-para-professores" },
      { titulo: "Conversando com a escola", texto: "Como construir um plano de apoio junto com a família.", href: "/biblioteca/conversando-com-a-escola" },
      { titulo: "Sensibilidade a sons", texto: "Como deixar ambientes barulhentos mais suportáveis.", href: "/biblioteca/sensibilidade-a-sons" },
      { titulo: "Direitos na escola", texto: "Matrícula, acompanhante especializado e adaptações.", href: "/direitos#escola" },
    ],
    dicasRapidas: [
      "Mostre a agenda do dia no quadro.",
      "Dê uma instrução de cada vez.",
      "Combine um sinal e um lugar para pausas.",
      "Use os interesses do estudante como ponte.",
      "Mantenha contato frequente com a família.",
    ],
    links: [
      { rotulo: "Formas de comunicação", href: "/biblioteca/formas-de-comunicacao" },
      { rotulo: "Quando a criança está muito agitada", href: "/biblioteca/muito-agitado" },
      { rotulo: "Entenda o TEA", href: "/entenda" },
    ],
  },
  cuidadores: {
    rotulo: "Para cuidadores",
    titulo: "Para cuidadoras e cuidadores",
    intro:
      "Orientações práticas para o cuidado diário — higiene, alimentação, sono e momentos de crise — e um lembrete importante: quem cuida também precisa de cuidado.",
    icone: Heart,
    cor: "lilas",
    comeceAqui: [
      { titulo: "Banho e higiene com mais previsibilidade", texto: "Pequenas adaptações para cuidados pessoais.", href: "/biblioteca/banho-e-higiene" },
      { titulo: "Seletividade alimentar", texto: "Como apoiar sem transformar a refeição em conflito.", href: "/biblioteca/seletividade-alimentar" },
      { titulo: "Checklist de rotina", texto: "Listas prontas para a manhã e a noite.", href: "/biblioteca/checklist-de-rotina" },
      { titulo: "Cuidar de quem cuida", texto: "Sinais de cansaço e onde buscar apoio.", href: "/biblioteca/cuidar-de-quem-cuida" },
    ],
    dicasRapidas: [
      "Siga a mesma sequência nas tarefas do dia.",
      "Avise antes de tocar ou ajudar.",
      "Respeite as sensibilidades sensoriais.",
      "Anote o que funciona e compartilhe com a família.",
      "Faça pausas para descansar.",
    ],
    links: [
      { rotulo: "Escovação dos dentes passo a passo", href: "/biblioteca/escovacao-dos-dentes" },
      { rotulo: "Quando a criança não consegue dormir", href: "/biblioteca/hora-de-dormir" },
      { rotulo: "Rede de apoio em Teresina", href: "/rede-de-apoio" },
    ],
  },
};
