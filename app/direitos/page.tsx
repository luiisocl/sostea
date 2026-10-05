import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { CabecalhoPagina, Fontes, ListaMarcada, Nota, Passos, Secao, Sumario } from "@/components/ui";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Direitos",
  description:
    "Lei Berenice Piana (Lei 12.764/2012), carteira CIPTEA, atendimento prioritário e direitos na escola, explicados de forma simples.",
};

const secoesPagina = [
  { id: "berenice-piana", titulo: "Lei Berenice Piana" },
  { id: "ciptea", titulo: "CIPTEA" },
  { id: "prioridade", titulo: "Atendimento prioritário" },
  { id: "escola", titulo: "Direitos na escola" },
  { id: "onde-buscar", titulo: "Se um direito for negado" },
];

function Lei({ children }: { children: ReactNode }) {
  return <strong className="whitespace-nowrap text-marinho">{children}</strong>;
}

export default function Direitos() {
  return (
    <>
      <CabecalhoPagina rotulo="Direitos e rede de apoio" titulo="Direitos da pessoa autista" icone={Scale} cor="verde">
        <p>
          O que a lei brasileira garante, explicado em linguagem simples. Os links para o texto
          completo de cada lei estão no fim da página.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)_16rem]">
        <div>
          <Sumario itens={secoesPagina} />
        </div>

        <div>
          <Secao id="berenice-piana" titulo="Lei Berenice Piana">
            <p>
              A <Lei>Lei 12.764/2012</Lei> criou a Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista. Ela leva o nome de Berenice Piana, mãe de um
              jovem autista que lutou pela sua aprovação.
            </p>
            <p>O ponto mais importante:</p>
            <blockquote className="rounded-card bg-verde-bg px-5 py-4 font-titulo text-lead font-bold text-marinho">
              A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais.
            </blockquote>
            <p>
              Na prática, isso quer dizer que a pessoa autista tem todos os direitos previstos para
              pessoas com deficiência, como os da Lei Brasileira de Inclusão (<Lei>Lei 13.146/2015</Lei>).
            </p>
            <p>A lei também garante, entre outros pontos:</p>
            <ListaMarcada
              cor="verde"
              itens={[
                "diagnóstico precoce e atendimento multiprofissional;",
                "acesso a medicamentos e nutrientes;",
                "acesso à educação, à moradia, ao trabalho e à previdência social;",
                "proteção contra qualquer forma de abuso e de discriminação.",
              ]}
            />
          </Secao>

          <Secao id="ciptea" titulo="CIPTEA: a carteira de identificação">
            <p>
              A <strong>CIPTEA</strong> (Carteira de Identificação da Pessoa com Transtorno do Espectro
              Autista) foi criada pela <Lei>Lei 13.977/2020</Lei>, conhecida como Lei Romeo Mion. Ela
              facilita a identificação da pessoa autista e o acesso a atendimento prioritário e a
              outros serviços.
            </p>
            <dl className="grid gap-3 sm:grid-cols-2">
              {[
                ["Quanto custa", "É gratuita."],
                ["Quem emite", "Órgãos do seu estado ou município. Procure a secretaria responsável pelos direitos da pessoa com deficiência."],
                ["O que é pedido", "Requerimento com relatório médico que indique o código CID. Cada local pode pedir documentos pessoais, foto e comprovante de endereço."],
                ["Validade", "5 anos, mantendo o mesmo número na renovação."],
              ].map(([termo, def]) => (
                <div key={termo} className="card p-4">
                  <dt className="font-titulo font-bold text-marinho">{termo}</dt>
                  <dd className="mt-1 text-nota">{def}</dd>
                </div>
              ))}
            </dl>
            <p className="text-nota text-texto-suave">
              A carteira ajuda, mas não é obrigatória para ter direitos. O laudo médico também comprova
              o diagnóstico.
            </p>
          </Secao>

          <Secao id="prioridade" titulo="Atendimento prioritário">
            <p>
              Pessoas com TEA têm direito a atendimento prioritário em órgãos públicos, bancos,
              comércio e serviços. Isso está na <Lei>Lei 10.048/2000</Lei>, que passou a citar o
              autismo de forma explícita com a <Lei>Lei 14.626/2023</Lei>.
            </p>
            <p>
              Onde não houver fila ou caixa especial, a pessoa deve ser atendida logo depois do
              atendimento que estiver em andamento, antes das demais. A mesma lei prevê assentos
              reservados e identificados no transporte coletivo.
            </p>
          </Secao>

          <Secao id="escola" titulo="Direitos na escola">
            <ListaMarcada
              cor="verde"
              itens={[
                <>
                  <strong className="text-marinho">A matrícula não pode ser recusada.</strong> O gestor
                  escolar que recusar a matrícula de aluno com TEA, ou de outra deficiência, pode ser
                  multado (Lei 12.764/2012, art. 7º).
                </>,
                <>
                  <strong className="text-marinho">Acompanhante especializado.</strong> Quando for
                  comprovada a necessidade, o estudante com TEA incluído em classe comum tem direito a
                  acompanhante especializado (Lei 12.764/2012, art. 3º, parágrafo único).
                </>,
                <>
                  <strong className="text-marinho">Sem cobrança extra.</strong> Escolas particulares
                  não podem cobrar valores adicionais pelas adaptações necessárias (Lei 13.146/2015,
                  art. 28).
                </>,
                <>
                  <strong className="text-marinho">Atendimento educacional especializado.</strong> A
                  educação especial é oferecida preferencialmente na rede regular de ensino (Lei
                  9.394/1996, LDB).
                </>,
              ]}
            />
            <p>
              Veja também <Link href="/biblioteca/conversando-com-a-escola">Conversando com a escola</Link> e{" "}
              <Link href="/biblioteca/dicas-para-professores">Dicas para professores</Link>.
            </p>
          </Secao>

          <Secao id="onde-buscar" titulo="Se um direito for negado">
            <Passos
              itens={[
                "Peça a negativa por escrito, com nome de quem atendeu, data e motivo.",
                "Tente resolver primeiro com a própria instituição: ouvidoria, direção ou gerência.",
                "Procure a Defensoria Pública, o Ministério Público ou o Conselho Tutelar, no caso de crianças e adolescentes. O Disque 100 recebe denúncias de violação de direitos humanos.",
              ]}
            />
            <p>
              Em Teresina, veja a <Link href="/rede-de-apoio">rede de apoio</Link>.
            </p>
          </Secao>

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
        </div>

        <aside className="space-y-4">
          <Nota titulo="Importante" cor="amarelo">
            <p>Este resumo não substitui orientação jurídica. Em caso de dúvida, procure a Defensoria Pública.</p>
          </Nota>
          <Nota titulo="Cordão de girassóis" cor="verde">
            <p>
              A <Lei>Lei 14.624/2023</Lei> reconhece o cordão verde com girassóis como forma de
              identificar deficiências ocultas, como o autismo. O uso é opcional e não substitui
              documentos.
            </p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
