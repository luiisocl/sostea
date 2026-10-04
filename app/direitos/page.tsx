import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CabecalhoPagina,
  Colunas,
  Fontes,
  NotaLateral,
  SecaoNumerada,
  Sumario,
} from "@/components/Editorial";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Direitos",
  description:
    "Lei Berenice Piana (Lei 12.764/2012), carteira CIPTEA, atendimento prioritário e direitos na escola, explicados de forma simples.",
};

const secoesPagina = [
  { id: "berenice-piana", numero: "3.1", titulo: "Lei Berenice Piana" },
  { id: "ciptea", numero: "3.2", titulo: "CIPTEA" },
  { id: "prioridade", numero: "3.3", titulo: "Atendimento prioritário" },
  { id: "escola", numero: "3.4", titulo: "Direitos na escola" },
  { id: "onde-buscar", numero: "3.5", titulo: "Onde buscar ajuda" },
];

function Lei({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap font-bold text-tinta">{children}</span>;
}

export default function Direitos() {
  return (
    <>
      <CabecalhoPagina numero="03" secao="Direitos" titulo="Direitos da pessoa autista">
        <p>
          O que a lei brasileira garante, explicado em linguagem simples. Os links para o texto
          completo de cada lei estão no fim da página.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          esquerda={<Sumario itens={secoesPagina} />}
          lateral={
            <>
              <NotaLateral titulo="Importante">
                <p>
                  Este resumo não substitui orientação jurídica. Em caso de dúvida, procure a
                  Defensoria Pública.
                </p>
              </NotaLateral>
              <NotaLateral titulo="Cordão de girassóis">
                <p>
                  A <Lei>Lei 14.624/2023</Lei> reconhece o cordão verde com girassóis como forma
                  de identificar deficiências ocultas, como o autismo. O uso é opcional e não
                  substitui documentos.
                </p>
              </NotaLateral>
            </>
          }
        >
          <SecaoNumerada id="berenice-piana" numero="3.1" titulo="Lei Berenice Piana">
            <p>
              A <Lei>Lei 12.764/2012</Lei> criou a Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista. Ela leva o nome de Berenice Piana, mãe de
              um jovem autista que lutou pela sua aprovação.
            </p>
            <p>O ponto mais importante:</p>
            <blockquote className="border-l-2 border-destaque pl-5 font-titulo text-lead italic">
              A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.
            </blockquote>
            <p>
              Na prática, isso quer dizer que a pessoa autista tem todos os direitos previstos para
              pessoas com deficiência, como os da Lei Brasileira de Inclusão (<Lei>Lei 13.146/2015</Lei>).
            </p>
            <p>A lei também garante, entre outros pontos:</p>
            <ul className="space-y-2 border-l border-fio pl-5">
              <li>diagnóstico precoce e atendimento multiprofissional;</li>
              <li>acesso a medicamentos e nutrientes;</li>
              <li>acesso à educação, à moradia, ao trabalho e à previdência social;</li>
              <li>proteção contra qualquer forma de abuso e de discriminação.</li>
            </ul>
          </SecaoNumerada>

          <SecaoNumerada id="ciptea" numero="3.2" titulo="CIPTEA: a carteira de identificação">
            <p>
              A <strong>CIPTEA</strong> (Carteira de Identificação da Pessoa com Transtorno do
              Espectro Autista) foi criada pela <Lei>Lei 13.977/2020</Lei>, conhecida como Lei
              Romeo Mion.
            </p>
            <p>
              Ela facilita a identificação da pessoa autista e o acesso a atendimento prioritário
              e a outros serviços.
            </p>
            <dl className="divide-y divide-fio border-y border-fio">
              {[
                ["Quanto custa", "É gratuita."],
                ["Quem emite", "Órgãos do seu estado ou município. Procure a secretaria responsável pelos direitos da pessoa com deficiência."],
                ["O que é pedido", "Requerimento com relatório médico que indique o código CID. Cada local pode pedir documentos pessoais, foto e comprovante de endereço."],
                ["Validade", "5 anos, mantendo o mesmo número na renovação."],
              ].map(([termo, def]) => (
                <div key={termo} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="rotulo pt-1 text-tinta">{termo}</dt>
                  <dd>{def}</dd>
                </div>
              ))}
            </dl>
            <p className="text-nota text-tinta-suave">
              A carteira ajuda, mas não é obrigatória para ter direitos. O laudo médico também
              comprova o diagnóstico.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="prioridade" numero="3.3" titulo="Atendimento prioritário">
            <p>
              Pessoas com TEA têm direito a atendimento prioritário em órgãos públicos, bancos,
              comércio e serviços. Isso está na <Lei>Lei 10.048/2000</Lei>, que passou a citar o
              autismo de forma explícita com a <Lei>Lei 14.626/2023</Lei>.
            </p>
            <p>
              Onde não houver fila ou caixa especial, a pessoa deve ser atendida logo depois do
              atendimento que estiver em andamento, antes das demais.
            </p>
            <p>
              A mesma lei prevê assentos reservados e identificados no transporte coletivo.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="escola" numero="3.4" titulo="Direitos na escola">
            <ul className="space-y-4">
              <li className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden="true" className="text-destaque">—</span>
                <span>
                  <strong>A matrícula não pode ser recusada.</strong> O gestor escolar que recusar
                  a matrícula de aluno com TEA, ou de outra deficiência, pode ser multado (Lei
                  12.764/2012, art. 7º).
                </span>
              </li>
              <li className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden="true" className="text-destaque">—</span>
                <span>
                  <strong>Acompanhante especializado.</strong> Quando for comprovada a
                  necessidade, o estudante com TEA incluído em classe comum tem direito a
                  acompanhante especializado (Lei 12.764/2012, art. 3º, parágrafo único).
                </span>
              </li>
              <li className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden="true" className="text-destaque">—</span>
                <span>
                  <strong>Sem cobrança extra.</strong> Escolas particulares não podem cobrar
                  valores adicionais pelas adaptações necessárias (Lei 13.146/2015, art. 28).
                </span>
              </li>
              <li className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden="true" className="text-destaque">—</span>
                <span>
                  <strong>Atendimento educacional especializado.</strong> A educação especial é
                  oferecida preferencialmente na rede regular de ensino (Lei 9.394/1996, LDB).
                </span>
              </li>
            </ul>
            <p>
              Veja também a dica <Link href="/dicas/conversando-com-a-escola">Conversando com a
              escola</Link>.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="onde-buscar" numero="3.5" titulo="Se um direito for negado">
            <ol className="space-y-3">
              {[
                "Peça a negativa por escrito, com nome de quem atendeu, data e motivo.",
                "Tente resolver primeiro com a própria instituição: ouvidoria, direção ou gerência.",
                "Procure a Defensoria Pública, o Ministério Público ou o Conselho Tutelar, no caso de crianças e adolescentes. O Disque 100 recebe denúncias de violação de direitos humanos.",
              ].map((passo, i) => (
                <li key={passo} className="grid grid-cols-[2rem_1fr]">
                  <span className="font-titulo text-lead leading-none text-destaque">{i + 1}</span>
                  <span>{passo}</span>
                </li>
              ))}
            </ol>
          </SecaoNumerada>

          <Fontes
            fontes={[
              fontes.lei12764,
              fontes.decreto8368,
              fontes.lei13977,
              fontes.lei10048,
              fontes.lei14626,
              fontes.lei13146,
              fontes.lei9394,
              fontes.lei14624,
            ]}
          />
        </Colunas>
      </div>
    </>
  );
}
