import type { Fonte } from "@/components/Editorial";

// Fontes oficiais usadas no site. Reaproveite estas entradas nas páginas.
export const fontes = {
  msTea: {
    orgao: "Ministério da Saúde",
    titulo: "Transtorno do Espectro Autista (TEA)",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tea",
  },
  omsAutismo: {
    orgao: "Organização Mundial da Saúde (OMS)",
    titulo: "Autism — Fact sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders",
  },
  cdcSinais: {
    orgao: "CDC (Centros de Controle e Prevenção de Doenças, EUA)",
    titulo: "Signs and Symptoms of Autism Spectrum Disorder",
    url: "https://www.cdc.gov/autism/signs-symptoms/index.html",
  },
  cdcDiagnostico: {
    orgao: "CDC (Centros de Controle e Prevenção de Doenças, EUA)",
    titulo: "Clinical Screening and Diagnosis for Autism Spectrum Disorder",
    url: "https://www.cdc.gov/autism/hcp/diagnosis/index.html",
  },
  lei12764: {
    orgao: "Presidência da República",
    titulo: "Lei nº 12.764/2012 — Lei Berenice Piana",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm",
  },
  decreto8368: {
    orgao: "Presidência da República",
    titulo: "Decreto nº 8.368/2014 — regulamenta a Lei 12.764",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/decreto/d8368.htm",
  },
  lei13977: {
    orgao: "Presidência da República",
    titulo: "Lei nº 13.977/2020 — Lei Romeo Mion (CIPTEA)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm",
  },
  lei10048: {
    orgao: "Presidência da República",
    titulo: "Lei nº 10.048/2000 — atendimento prioritário",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l10048.htm",
  },
  lei14626: {
    orgao: "Presidência da República",
    titulo: "Lei nº 14.626/2023 — inclui pessoas com TEA no atendimento prioritário",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14626.htm",
  },
  lei14624: {
    orgao: "Presidência da República",
    titulo: "Lei nº 14.624/2023 — cordão de girassóis",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14624.htm",
  },
  lei13146: {
    orgao: "Presidência da República",
    titulo: "Lei nº 13.146/2015 — Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  lei9394: {
    orgao: "Presidência da República",
    titulo: "Lei nº 9.394/1996 — Lei de Diretrizes e Bases da Educação",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9394.htm",
  },
  lei8213: {
    orgao: "Presidência da República",
    titulo: "Lei nº 8.213/1991 — art. 93 (reserva de vagas para pessoas com deficiência)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
  },
  lgpd: {
    orgao: "Presidência da República",
    titulo: "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
  },
} satisfies Record<string, Fonte>;
