// Menu principal: o mesmo em todas as páginas.
// O número é usado como "número de seção" no topo de cada página.
export const secoes = [
  { href: "/entenda", rotulo: "Entenda o TEA", numero: "01" },
  { href: "/dicas", rotulo: "Dicas", numero: "02" },
  { href: "/direitos", rotulo: "Direitos", numero: "03" },
  { href: "/profissionais", rotulo: "Profissionais", numero: "04" },
  { href: "/cadastro", rotulo: "Cadastro", numero: "05" },
  { href: "/doe", rotulo: "Doe", numero: "06" },
  { href: "/sobre", rotulo: "Sobre", numero: "07" },
] as const;

export const emergencia = [
  { nome: "SAMU", numero: "192", descricao: "Emergência médica" },
  { nome: "CVV", numero: "188", descricao: "Apoio emocional, 24 horas, gratuito" },
] as const;
