import type { Metadata } from "next";
import { BookOpenCheck, Info, MessageCircleHeart, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { CabecalhoPagina, IconeCirculo, Nota, Secao, Sumario } from "@/components/ui";
import type { Cor } from "@/lib/cores";
import { emailContato, equipe, instituicao, orientacao } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Sobre o projeto",
  description: "A missão do SOSTEA, seus princípios e quem faz o projeto.",
};

const secoesPagina = [
  { id: "missao", titulo: "Missão" },
  { id: "principios", titulo: "Princípios" },
  { id: "quem-somos", titulo: "Quem somos" },
];

const principios: { titulo: string; texto: string; icone: LucideIcon; cor: Cor }[] = [
  {
    titulo: "Fontes oficiais",
    texto:
      "Só publicamos informação geral e bem estabelecida, com links para Ministério da Saúde, OMS, CDC e legislação brasileira. Não inventamos números.",
    icone: BookOpenCheck,
    cor: "azul",
  },
  {
    titulo: "Linguagem respeitosa",
    texto:
      "Falamos “pessoa autista” ou “pessoa no espectro”. Evitamos termos que tratam o autismo como tragédia ou doença a ser curada.",
    icone: MessageCircleHeart,
    cor: "rosa",
  },
  {
    titulo: "Baixa carga sensorial",
    texto:
      "Sem carrosséis, sons ou janelas que surgem sozinhas. Quem lê controla o tamanho do texto e os estímulos.",
    icone: Sparkles,
    cor: "lilas",
  },
  {
    titulo: "Pouco dado pessoal",
    texto: "No cadastro pedimos só o essencial e nunca pedimos diagnóstico ou dados de saúde.",
    icone: ShieldCheck,
    cor: "verde",
  },
];

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina rotulo="Sobre" titulo="Sobre o SOSTEA" icone={Info}>
        <p>
          SOS + TEA. Um ponto de partida confiável, feito em Teresina - PI, para quem acabou de
          receber um diagnóstico, para quem cuida e para quem quer aprender.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)_16rem]">
        <div>
          <Sumario itens={secoesPagina} />
        </div>

        <div>
          <Secao id="missao" titulo="Missão">
            <p>
              Informação sobre autismo existe, mas muitas vezes está espalhada, cheia de termos
              técnicos ou misturada com promessas sem base. O SOSTEA quer reunir o essencial num só
              lugar, com linguagem clara e fontes confiáveis.
            </p>
            <p>
              O projeto nasceu como trabalho acadêmico e está em fase inicial. Algumas seções, como
              o diretório de profissionais e as doações, ainda estão em construção.
            </p>
          </Secao>

          <Secao id="principios" titulo="Princípios">
            <ul className="grid gap-4 sm:grid-cols-2">
              {principios.map((p) => (
                <li key={p.titulo} className="card flex flex-col gap-3 p-5">
                  <IconeCirculo icone={p.icone} cor={p.cor} tamanho="sm" />
                  <h3 className="text-h4">{p.titulo}</h3>
                  <p className="text-nota text-texto-suave">{p.texto}</p>
                </li>
              ))}
            </ul>
          </Secao>

          <Secao id="quem-somos" titulo="Quem somos">
            <p>
              Projeto acadêmico desenvolvido por estudantes
              {instituicao && <> de {instituicao}</>}
              {orientacao && <>, com orientação de {orientacao}</>}.
            </p>
            <ul className="divide-y divide-borda rounded-card border border-borda bg-fundo">
              {equipe.map((membro) => (
                <li
                  key={membro.nome}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4"
                >
                  <span className="font-titulo font-bold text-marinho">{membro.nome}</span>
                  <span className="text-nota text-texto-suave">
                    {[membro.funcao, membro.curso].filter(Boolean).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </Secao>
        </div>

        <aside>
          <Nota titulo="Fale conosco">
            <p className="break-words">{emailContato}</p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
