import type { Metadata } from "next";
import Link from "next/link";
import { Brain, CircleCheck, CircleX } from "lucide-react";
import { AvisoSaude, CabecalhoPagina, Fontes, ListaMarcada, Nota, Passos, Secao, Sumario } from "@/components/ui";
import { classesCor, type Cor } from "@/lib/cores";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Entenda o TEA",
  description:
    "O que é o Transtorno do Espectro Autista, sinais comuns em diferentes idades, como é feito o diagnóstico e mitos e fatos.",
};

const secoesPagina = [
  { id: "o-que-e", titulo: "O que é" },
  { id: "sinais", titulo: "Sinais comuns" },
  { id: "diagnostico", titulo: "Diagnóstico" },
  { id: "mitos", titulo: "Mitos e fatos" },
];

const sinaisPorIdade: { fase: string; cor: Cor; itens: string[] }[] = [
  {
    fase: "Primeiros anos",
    cor: "azul",
    itens: [
      "Pouco contato visual ou pouca atenção ao rosto das pessoas.",
      "Não responder quando é chamado pelo nome, mesmo ouvindo bem.",
      "Poucos gestos, como apontar, acenar ou mostrar objetos.",
      "Atraso na fala, ou fala que aparece e depois diminui.",
      "Brincar de forma repetitiva, como enfileirar objetos ou girar rodas.",
    ],
  },
  {
    fase: "Infância e idade escolar",
    cor: "verde",
    itens: [
      "Dificuldade em entender regras sociais que não são ditas.",
      "Interesses muito intensos e específicos.",
      "Desconforto forte com mudanças na rotina.",
      "Reações intensas a sons, luzes, texturas ou cheiros, ou pouca reação a eles.",
      "Linguagem muito literal: ironias e expressões podem confundir.",
    ],
  },
  {
    fase: "Adolescência e vida adulta",
    cor: "lilas",
    itens: [
      "Cansaço intenso depois de situações sociais.",
      "Esforço para “disfarçar” o próprio jeito e se encaixar (chamado de camuflagem ou masking).",
      "Dificuldade com mudanças, imprevistos e ambientes barulhentos.",
      "Sensação de ser diferente desde a infância, sem saber explicar por quê.",
    ],
  },
];

const mitos = [
  { tipo: "Mito", frase: "Vacinas causam autismo.", explicacao: "Pesquisas feitas com grandes grupos de pessoas não encontraram relação entre vacinas e autismo. A OMS confirma isso." },
  { tipo: "Mito", frase: "Autismo é causado pela forma como os pais criam os filhos.", explicacao: "O autismo é uma condição do neurodesenvolvimento. Não é culpa da família nem resultado da criação." },
  { tipo: "Mito", frase: "Pessoas autistas não sentem afeto nem empatia.", explicacao: "Pessoas autistas sentem afeto. Às vezes elas o expressam de um jeito diferente do esperado, o que pode ser mal interpretado." },
  { tipo: "Mito", frase: "Toda pessoa autista tem uma habilidade extraordinária.", explicacao: "Cada pessoa é única. Algumas têm talentos marcantes, outras não. Esperar isso de todos cria pressão e estereótipo." },
  { tipo: "Fato", frase: "Adultos também podem receber o diagnóstico.", explicacao: "Muitas pessoas só são diagnosticadas na vida adulta. O diagnóstico pode trazer autoconhecimento e acesso a direitos." },
  { tipo: "Fato", frase: "Meninas e mulheres também são autistas.", explicacao: "Elas muitas vezes recebem o diagnóstico mais tarde, porque os sinais podem ser menos percebidos ou mais camuflados." },
  { tipo: "Fato", frase: "Apoio desde cedo faz diferença.", explicacao: "Segundo a OMS, intervenções baseadas em evidências, iniciadas cedo, podem melhorar a comunicação e a qualidade de vida." },
];

export default function Entenda() {
  return (
    <>
      <CabecalhoPagina rotulo="Informação" titulo="O que é o espectro autista" icone={Brain} cor="lilas">
        <p>
          Uma explicação direta sobre o Transtorno do Espectro Autista: o que é, como aparece em
          cada fase da vida, como se chega ao diagnóstico e o que é mito.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)_16rem]">
        <div>
          <Sumario itens={secoesPagina} />
        </div>

        <div>
          <AvisoSaude className="mb-10" />

          <Secao id="o-que-e" titulo="O que é">
            <p>
              O autismo é uma condição do neurodesenvolvimento. Ele muda a forma como a pessoa se
              comunica, se relaciona e percebe o mundo ao redor.
            </p>
            <p>
              Ele se chama <em>espectro</em> porque as características variam muito de uma pessoa
              para outra. Algumas pessoas autistas falam com fluência e vivem com autonomia. Outras
              não usam a fala e precisam de apoio em muitas tarefas do dia.
            </p>
            <p>De forma geral, o diagnóstico considera dois grupos de características:</p>
            <ListaMarcada
              itens={[
                <>
                  <strong className="text-marinho">Comunicação e interação social.</strong> Por exemplo:
                  diferenças no contato visual, na conversa e em entender sinais sociais.
                </>,
                <>
                  <strong className="text-marinho">Comportamentos, interesses e sensações.</strong> Por
                  exemplo: movimentos repetitivos, interesses intensos, preferência por rotina e
                  sensibilidade diferente a sons, luzes ou texturas.
                </>,
              ]}
            />
            <p>
              Os profissionais também descrevem o <strong>nível de suporte</strong> de que a pessoa
              precisa: nível 1, 2 ou 3, do menor para o maior. Esse nível pode mudar ao longo da vida.
            </p>
            <p>
              Autismo não é doença e não tem “cura”. O que existe é apoio: terapias, adaptações e
              respeito, que ajudam a pessoa a viver bem do seu jeito.
            </p>
          </Secao>

          <Secao id="sinais" titulo="Sinais comuns em diferentes idades">
            <p>
              A lista abaixo traz exemplos, não um teste. Ter um ou outro sinal não quer dizer que a
              pessoa é autista. Os sinais costumam aparecer juntos e de forma persistente.
            </p>
          </Secao>
          <div className="mt-6 grid max-w-4xl gap-4 xl:grid-cols-3">
            {sinaisPorIdade.map((g) => (
              <div key={g.fase} className={`rounded-card p-5 ${classesCor[g.cor].bg}`}>
                <h3 className="text-h4">{g.fase}</h3>
                <ul className="mt-3 space-y-2 text-nota">
                  {g.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-texto rounded-card border border-alerta-borda bg-alerta-bg p-4 text-nota">
            <strong className="text-marinho">Atenção:</strong> se uma criança perde habilidades que já
            tinha, como palavras ou formas de brincar, procure um profissional de saúde, em qualquer
            idade.
          </p>

          <Secao id="diagnostico" titulo="Como é o diagnóstico">
            <p>
              O diagnóstico é <strong>clínico</strong>. Isso quer dizer que ele é feito por observação
              e por conversa com a pessoa e a família. Não existe exame de sangue nem de imagem que
              confirme o autismo.
            </p>
            <p>
              Normalmente quem fecha o diagnóstico é um médico, como neuropediatra ou psiquiatra.
              Muitas vezes ele trabalha com uma equipe de psicologia, fonoaudiologia e terapia
              ocupacional.
            </p>
            <h3 className="pt-2 text-h3">Por onde começar no SUS</h3>
            <Passos
              itens={[
                "Procure a Unidade Básica de Saúde (UBS, o “posto de saúde”) e conte o que você observou.",
                "A equipe avalia e, se for o caso, encaminha para serviços especializados.",
                "Leve anotações: exemplos do dia a dia, desde quando você nota os sinais, vídeos curtos, relatórios da escola.",
              ]}
            />
            <p>
              Em Teresina, veja os serviços na página <Link href="/rede-de-apoio">Rede de apoio</Link>.
            </p>
          </Secao>

          <Secao id="mitos" titulo="Mitos e fatos">
            <p>Algumas ideias muito repetidas, e o que as fontes oficiais dizem sobre elas.</p>
          </Secao>
          <dl className="mt-6 grid max-w-4xl gap-3 md:grid-cols-2">
            {mitos.map((m) => {
              const mito = m.tipo === "Mito";
              const Icone = mito ? CircleX : CircleCheck;
              return (
                <div key={m.frase} className={`rounded-card p-5 ${mito ? "bg-rosa-bg" : "bg-verde-bg"}`}>
                  <dt>
                    <span className={`etiqueta gap-1 ${mito ? "bg-rosa-circ text-rosa-tom" : "bg-verde-circ text-verde-tom"}`}>
                      <Icone aria-hidden="true" className="h-3.5 w-3.5" />
                      {m.tipo}
                      <span className="sr-only">:</span>
                    </span>
                    <span className="mt-2 block font-titulo text-h4 font-bold text-marinho">{m.frase}</span>
                  </dt>
                  <dd className="mt-1.5 text-nota text-texto">{m.explicacao}</dd>
                </div>
              );
            })}
          </dl>

          <Fontes fontes={[fontes.msTea, fontes.omsAutismo, fontes.cdcSinais, fontes.cdcDiagnostico]} />
        </div>

        <aside className="space-y-4">
          <Nota titulo="Palavras" cor="lilas">
            <p>
              <strong>TEA</strong>: Transtorno do Espectro Autista.
            </p>
            <p>
              <strong>Neurodesenvolvimento</strong>: a forma como o cérebro se forma e funciona desde a
              infância.
            </p>
          </Nota>
          <Nota titulo="Leia também" cor="azul">
            <p><Link href="/dados">Entenda os dados</Link></p>
            <p><Link href="/direitos">Direitos da pessoa autista</Link></p>
            <p><Link href="/biblioteca">Biblioteca</Link></p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
