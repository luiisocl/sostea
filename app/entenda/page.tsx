import type { Metadata } from "next";
import Link from "next/link";
import {
  AvisoSaude,
  CabecalhoPagina,
  Colunas,
  Fontes,
  NotaLateral,
  SecaoNumerada,
  Sumario,
} from "@/components/Editorial";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Entenda o TEA",
  description:
    "O que é o Transtorno do Espectro Autista, sinais comuns em diferentes idades, como é feito o diagnóstico e mitos e verdades.",
};

const secoesPagina = [
  { id: "o-que-e", numero: "1.1", titulo: "O que é" },
  { id: "sinais", numero: "1.2", titulo: "Sinais comuns" },
  { id: "diagnostico", numero: "1.3", titulo: "Diagnóstico" },
  { id: "mitos", numero: "1.4", titulo: "Mitos e verdades" },
];

const sinaisPorIdade = [
  {
    fase: "Primeiros anos",
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
    itens: [
      "Cansaço intenso depois de situações sociais.",
      "Esforço para “disfarçar” o próprio jeito e se encaixar (chamado de camuflagem ou masking).",
      "Dificuldade com mudanças, imprevistos e ambientes barulhentos.",
      "Sensação de ser diferente desde a infância, sem saber explicar por quê.",
    ],
  },
];

const mitos = [
  {
    tipo: "Mito",
    frase: "Vacinas causam autismo.",
    explicacao:
      "Pesquisas feitas com grandes grupos de pessoas não encontraram relação entre vacinas e autismo. A OMS confirma isso.",
  },
  {
    tipo: "Mito",
    frase: "Autismo é causado pela forma como os pais criam os filhos.",
    explicacao:
      "O autismo é uma condição do neurodesenvolvimento. Não é culpa da família nem resultado da criação.",
  },
  {
    tipo: "Mito",
    frase: "Pessoas autistas não sentem afeto nem empatia.",
    explicacao:
      "Pessoas autistas sentem afeto. Às vezes elas o expressam de um jeito diferente do esperado, o que pode ser mal interpretado.",
  },
  {
    tipo: "Mito",
    frase: "Toda pessoa autista tem uma habilidade extraordinária.",
    explicacao:
      "Cada pessoa é única. Algumas têm talentos marcantes, outras não. Esperar isso de todos cria pressão e estereótipo.",
  },
  {
    tipo: "Verdade",
    frase: "Adultos também podem receber o diagnóstico.",
    explicacao:
      "Muitas pessoas só são diagnosticadas na vida adulta. O diagnóstico pode trazer autoconhecimento e acesso a direitos.",
  },
  {
    tipo: "Verdade",
    frase: "Meninas e mulheres também são autistas.",
    explicacao:
      "Elas muitas vezes recebem o diagnóstico mais tarde, porque os sinais podem ser menos percebidos ou mais camuflados.",
  },
  {
    tipo: "Verdade",
    frase: "Apoio desde cedo faz diferença.",
    explicacao:
      "Segundo a OMS, intervenções baseadas em evidências, iniciadas cedo, podem melhorar a comunicação e a qualidade de vida.",
  },
];

export default function Entenda() {
  return (
    <>
      <CabecalhoPagina numero="01" secao="Entenda o TEA" titulo="O que é o espectro autista">
        <p>
          Uma explicação direta sobre o Transtorno do Espectro Autista: o que é, como aparece em
          cada fase da vida, como se chega ao diagnóstico e o que é mito.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          esquerda={<Sumario itens={secoesPagina} />}
          lateral={
            <>
              <NotaLateral titulo="Palavras">
                <p>
                  <strong className="text-tinta">TEA</strong>: Transtorno do Espectro Autista.
                </p>
                <p>
                  <strong className="text-tinta">Neurodesenvolvimento</strong>: a forma como o
                  cérebro se forma e funciona desde a infância.
                </p>
              </NotaLateral>
              <NotaLateral titulo="Leia também">
                <p>
                  <Link href="/direitos">Direitos da pessoa autista</Link>
                </p>
                <p>
                  <Link href="/dicas">Dicas para o dia a dia</Link>
                </p>
              </NotaLateral>
            </>
          }
        >
          <AvisoSaude />

          <SecaoNumerada id="o-que-e" numero="1.1" titulo="O que é">
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
            <ul className="space-y-3 border-l border-fio pl-5">
              <li>
                <strong className="font-bold">Comunicação e interação social.</strong> Por exemplo:
                diferenças no contato visual, na conversa e em entender sinais sociais.
              </li>
              <li>
                <strong className="font-bold">Comportamentos, interesses e sensações.</strong> Por
                exemplo: movimentos repetitivos, interesses intensos, preferência por rotina e
                sensibilidade diferente a sons, luzes ou texturas.
              </li>
            </ul>
            <p>
              Os profissionais também descrevem o <strong>nível de suporte</strong> de que a pessoa
              precisa: nível 1, 2 ou 3, do menor para o maior. Esse nível pode mudar ao longo da
              vida.
            </p>
            <p>
              Autismo não é doença e não tem “cura”. O que existe é apoio: terapias, adaptações e
              respeito, que ajudam a pessoa a viver bem do seu jeito.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="sinais" numero="1.2" titulo="Sinais comuns em diferentes idades">
            <p>
              A lista abaixo traz exemplos, não um teste. Ter um ou outro sinal não quer dizer que a
              pessoa é autista. Os sinais costumam aparecer juntos e de forma persistente.
            </p>
          </SecaoNumerada>
          <div className="mt-8 max-w-texto">
            {sinaisPorIdade.map((grupo) => (
              <div key={grupo.fase} className="border-t border-fio py-6">
                <h3 className="text-h3">{grupo.fase}</h3>
                <ul className="mt-3 space-y-2">
                  {grupo.itens.map((item) => (
                    <li key={item} className="grid grid-cols-[1.25rem_1fr]">
                      <span aria-hidden="true" className="text-destaque">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="border-y border-argila py-4 text-nota">
              <strong className="font-bold">Atenção:</strong> se uma criança perde habilidades que
              já tinha, como palavras ou formas de brincar, procure um profissional de saúde, em
              qualquer idade.
            </p>
          </div>

          <SecaoNumerada id="diagnostico" numero="1.3" titulo="Como é o diagnóstico">
            <p>
              O diagnóstico é <strong>clínico</strong>. Isso quer dizer que ele é feito por
              observação e por conversa com a pessoa e a família. Não existe exame de sangue nem de
              imagem que confirme o autismo.
            </p>
            <p>
              Normalmente quem fecha o diagnóstico é um médico, como neuropediatra ou psiquiatra.
              Muitas vezes ele trabalha com uma equipe de psicologia, fonoaudiologia e terapia
              ocupacional.
            </p>
            <h3 className="pt-4 text-h3">Por onde começar no SUS</h3>
            <ol className="space-y-3">
              {[
                "Procure a Unidade Básica de Saúde (UBS, o “posto de saúde”) e conte o que você observou.",
                "A equipe avalia e, se for o caso, encaminha para serviços especializados, como um Centro Especializado em Reabilitação (CER) ou um Centro de Atenção Psicossocial (CAPS).",
                "Leve anotações: exemplos do dia a dia, desde quando você nota os sinais, vídeos curtos, relatórios da escola.",
              ].map((passo, i) => (
                <li key={passo} className="grid grid-cols-[2rem_1fr]">
                  <span className="font-titulo text-lead leading-none text-destaque">{i + 1}</span>
                  <span>{passo}</span>
                </li>
              ))}
            </ol>
            <p>
              O diagnóstico pode acontecer em qualquer idade. Quanto antes vier o apoio, melhor,
              mas nunca é tarde para entender a si mesmo ou a alguém da família.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="mitos" numero="1.4" titulo="Mitos e verdades">
            <p>Algumas ideias muito repetidas, e o que as fontes oficiais dizem sobre elas.</p>
          </SecaoNumerada>
          <dl className="mt-8 max-w-texto border-t border-tinta">
            {mitos.map((m) => (
              <div key={m.frase} className="border-b border-fio py-5">
                <dt className="grid gap-x-6 gap-y-1 sm:grid-cols-[5.5rem_1fr]">
                  <span
                    className={`rotulo pt-1 ${m.tipo === "Mito" ? "text-argila" : "text-destaque"}`}
                  >
                    {m.tipo}
                    <span className="sr-only">:</span>
                  </span>
                  <span className="font-titulo text-h3">{m.frase}</span>
                </dt>
                <dd className="mt-1 text-tinta-suave sm:pl-[7rem]">{m.explicacao}</dd>
              </div>
            ))}
          </dl>

          <Fontes
            fontes={[fontes.msTea, fontes.omsAutismo, fontes.cdcSinais, fontes.cdcDiagnostico]}
          />
        </Colunas>
      </div>
    </>
  );
}
