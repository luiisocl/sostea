// Menu principal: o mesmo em todas as páginas.
export const menu = [
  { href: "/", rotulo: "Início" },
  { href: "/biblioteca", rotulo: "Biblioteca" },
  { href: "/para-familias", rotulo: "Para famílias" },
  { href: "/para-educadores", rotulo: "Para educadores" },
  { href: "/profissionais", rotulo: "Profissionais" },
  { href: "/rede-de-apoio", rotulo: "Rede de apoio" },
] as const;

// Links do rodapé.
export const linksRodape = [
  { href: "/sobre", rotulo: "Sobre o projeto" },
  { href: "/acessibilidade", rotulo: "Acessibilidade" },
  { href: "/fontes", rotulo: "Fontes e referências" },
  { href: "/privacidade", rotulo: "Política de privacidade" },
  { href: "/sobre#contato", rotulo: "Fale conosco" },
  { href: "/doe", rotulo: "Doe" },
] as const;

export const emergencia = [
  { nome: "SAMU", numero: "192", descricao: "Emergência médica" },
  { nome: "CVV", numero: "188", descricao: "Apoio emocional, 24 horas, gratuito" },
] as const;

export const cidade = "Teresina - PI";
