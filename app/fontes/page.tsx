import type { Metadata } from "next";
import { BookOpen, ExternalLink } from "lucide-react";
import { CabecalhoPagina, IconeCirculo } from "@/components/ui";
import { fontes } from "@/lib/fontes";
import type { Cor } from "@/lib/cores";
import type { Fonte } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fontes e referências",
  description: "Instituições, leis e materiais oficiais usados como base para os conteúdos do SOSTEA.",
};

const grupos: { titulo: string; descricao: string; cor: Cor; itens: Fonte[] }[] = [
  {
    titulo: "Saúde",
    descricao: "Órgãos oficiais de saúde, no Brasil e no mundo.",
    cor: "azul",
    itens: [fontes.msTea, fontes.omsAutismo, fontes.cdcSinais, fontes.cdcDiagnostico],
  },
  {
    titulo: "Dados",
    descricao: "Estatísticas oficiais sobre autismo no Brasil.",
    cor: "lilas",
    itens: [fontes.ibgeCenso, fontes.mdhCenso],
  },
  {
    titulo: "Legislação",
    descricao: "Texto completo das leis, no site da Presidência da República.",
    cor: "verde",
    itens: [
      fontes.lei12764,
      fontes.decreto8368,
      fontes.lei13977,
      fontes.lei10048,
      fontes.lei14626,
      fontes.lei13146,
      fontes.lei14624,
      fontes.lei9394,
      fontes.lei8213,
      fontes.lgpd,
    ],
  },
  {
    titulo: "Teresina e Piauí",
    descricao: "Instituições e serviços da rede de apoio local.",
    cor: "amarelo",
    itens: [fontes.amaPi, fontes.ceir, fontes.cetea, fontes.defensoriaPi],
  },
  {
    titulo: "Apoio emocional",
    descricao: "Atendimento gratuito, 24 horas.",
    cor: "rosa",
    itens: [fontes.cvv],
  },
];

export default function FontesReferencias() {
  return (
    <>
      <CabecalhoPagina rotulo="Dados e curiosidades" titulo="Fontes e referências" icone={BookOpen}>
        <p>
          Todo o conteúdo do SOSTEA se baseia em informações gerais e bem estabelecidas, de fontes
          oficiais. Aqui estão todas elas, organizadas por tema.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-5 lg:grid-cols-2">
        {grupos.map((g) => (
          <section key={g.titulo} aria-labelledby={`fonte-${g.titulo}`} className="card p-6">
            <div className="flex items-center gap-3">
              <IconeCirculo icone={BookOpen} cor={g.cor} tamanho="sm" />
              <div>
                <h2 id={`fonte-${g.titulo}`} className="text-h3">
                  {g.titulo}
                </h2>
                <p className="text-nota text-texto-suave">{g.descricao}</p>
              </div>
            </div>
            <ul className="mt-4 divide-y divide-borda">
              {g.itens.map((f) => (
                <li key={f.url} className="py-3">
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 no-underline">
                    <span className="flex-1">
                      <span className="block text-mini font-bold text-texto-suave uppercase">{f.orgao}</span>
                      <span className="text-nota font-bold group-hover:underline">{f.titulo}</span>
                    </span>
                    <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
