import type { Metadata } from "next";
import { CabecalhoPagina, Colunas, NotaLateral, SecaoNumerada } from "@/components/Editorial";
import { emailContato, equipe, instituicao, orientacao } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A missão do SOSTEA, seus princípios e quem faz o projeto.",
};

const principios = [
  {
    titulo: "Fontes oficiais",
    texto:
      "Só publicamos informação geral e bem estabelecida, com links para Ministério da Saúde, OMS, CDC e legislação brasileira. Não inventamos números.",
  },
  {
    titulo: "Linguagem respeitosa",
    texto:
      "Falamos “pessoa autista” ou “pessoa no espectro”. Evitamos termos que tratam o autismo como tragédia ou doença a ser curada.",
  },
  {
    titulo: "Baixa carga sensorial",
    texto:
      "Sem animações, carrosséis ou janelas que surgem sozinhas. Quem lê controla os estímulos e o tamanho do texto.",
  },
  {
    titulo: "Pouco dado pessoal",
    texto:
      "No cadastro pedimos só o essencial e nunca pedimos diagnóstico ou dados de saúde.",
  },
];

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina numero="07" secao="Sobre" titulo="Sobre o SOSTEA">
        <p>
          SOS + TEA. Um ponto de partida confiável para quem acabou de receber um diagnóstico, para
          quem cuida e para quem quer aprender.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          lateral={
            <NotaLateral titulo="Contato">
              <p className="break-words">{emailContato}</p>
            </NotaLateral>
          }
        >
          <SecaoNumerada id="missao" numero="7.1" titulo="Missão">
            <p>
              Informação sobre autismo existe, mas muitas vezes está espalhada, cheia de termos
              técnicos ou misturada com promessas sem base. O SOSTEA quer reunir o essencial num só
              lugar, com linguagem clara e fontes confiáveis.
            </p>
            <p>
              O projeto nasceu como trabalho acadêmico e está em fase inicial. Algumas seções, como
              o diretório de profissionais e as doações, ainda estão em construção.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="principios" numero="7.2" titulo="Princípios">
            <dl className="border-t border-tinta">
              {principios.map((p, i) => (
                <div
                  key={p.titulo}
                  className="grid gap-x-6 gap-y-1 border-b border-fio py-5 sm:grid-cols-[14rem_1fr]"
                >
                  <dt className="flex gap-4 font-titulo text-h3 leading-snug">
                    <span aria-hidden="true" className="w-7 shrink-0 text-lead text-tinta-suave">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.titulo}
                  </dt>
                  <dd className="text-tinta-suave">{p.texto}</dd>
                </div>
              ))}
            </dl>
          </SecaoNumerada>

          <SecaoNumerada id="quem-somos" numero="7.3" titulo="Quem somos">
            <p>
              Projeto acadêmico desenvolvido por estudantes
              {instituicao && <> de {instituicao}</>}
              {orientacao && <>, com orientação de {orientacao}</>}.
            </p>
            <ul className="border-t border-tinta">
              {equipe.map((membro) => (
                <li
                  key={membro.nome}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-fio py-4"
                >
                  <span className="font-titulo text-h3">{membro.nome}</span>
                  <span className="text-nota text-tinta-suave">
                    {[membro.funcao, membro.curso].filter(Boolean).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </SecaoNumerada>
        </Colunas>
      </div>
    </>
  );
}
