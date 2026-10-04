import Link from "next/link";
import { emergencia, secoes } from "@/lib/navegacao";

const resumos: Record<string, string> = {
  "/entenda": "O que é o autismo, sinais em diferentes idades, como é o diagnóstico, mitos e verdades.",
  "/dicas": "Orientações práticas sobre saúde, rotina, sono, alimentação, escola, crise e vida adulta.",
  "/direitos": "Lei Berenice Piana, carteira CIPTEA, atendimento prioritário e direitos na escola.",
  "/profissionais": "Diretório de profissionais de saúde. Em construção.",
  "/cadastro": "Receba novidades do projeto. Pedimos só o essencial.",
  "/doe": "Como apoiar o SOSTEA. Em breve.",
  "/sobre": "Por que o projeto existe e quem está por trás dele.",
};

export default function Inicio() {
  return (
    <>
      {/* Abertura */}
      <div className="mx-auto max-w-pagina px-5 sm:px-8">
        {/* Ordem no celular: título, ajuda, texto. No computador, a ajuda fica à direita. */}
        <div className="grid gap-10 border-b border-fio pt-12 pb-16 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:pt-20 lg:pb-20">
          <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <p className="rotulo flex items-baseline gap-3">
              <span className="font-titulo text-h3 font-normal tracking-normal text-destaque normal-case">
                Nº 00
              </span>
              <span aria-hidden="true" className="h-px w-8 translate-y-[-0.3em] bg-fio-forte" />
              Início
            </p>
            <h1 className="mt-8 text-display">
              Informação clara sobre autismo, para quem vive, cuida e{" "}
              <em className="text-destaque">quer entender</em>.
            </h1>
          </div>

          <aside
            aria-labelledby="ajuda-titulo"
            className="self-start border-t-4 border-argila bg-papel-escuro p-6 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mt-24"
          >
            <h2 id="ajuda-titulo" className="font-titulo text-h3">
              Precisa de ajuda agora?
            </h2>
            <ul className="mt-5 divide-y divide-fio border-y border-fio">
              {emergencia.map((e) => (
                <li key={e.numero} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-nota">
                    <strong className="block font-bold">{e.nome}</strong>
                    <span className="text-tinta-suave">{e.descricao}</span>
                  </span>
                  <a
                    href={`tel:${e.numero}`}
                    className="font-titulo text-h2 leading-none text-tinta no-underline hover:text-argila"
                  >
                    <span className="sr-only">Ligar para {e.nome}, </span>
                    {e.numero}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-nota">
              Crise ou sobrecarga sensorial acontecendo agora?
            </p>
            <Link
              href="/dicas/crise-e-sobrecarga-o-que-fazer"
              className="mt-1 inline-block font-bold"
            >
              Veja o que fazer na hora →
            </Link>
          </aside>

          <div className="max-w-texto space-y-4 text-lead text-tinta-suave lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mt-8">
            <p>
              O SOSTEA reúne, em linguagem simples, o que se sabe sobre o Transtorno do Espectro
              Autista (TEA): o que é, como buscar diagnóstico, quais direitos existem e como
              organizar o dia a dia.
            </p>
            <p>
              Tudo aqui vem de fontes oficiais. Nada substitui a conversa com um profissional de
              saúde, mas informação boa ajuda a fazer as perguntas certas.
            </p>
          </div>
        </div>
      </div>

      {/* Índice */}
      <section aria-labelledby="indice-titulo" className="mx-auto max-w-pagina px-5 sm:px-8">
        <div className="grid gap-6 pt-14 lg:grid-cols-12 lg:gap-8">
          <h2 id="indice-titulo" className="rotulo lg:col-span-3 lg:pt-2">
            Índice
          </h2>
          <ol className="border-t border-tinta lg:col-span-9">
            {secoes.map((s) => (
              <li key={s.href} className="border-b border-fio">
                <Link
                  href={s.href}
                  className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 text-tinta no-underline hover:text-tinta sm:grid-cols-[3.5rem_minmax(0,16rem)_1fr_auto]"
                >
                  <span className="font-titulo text-lead text-tinta-suave group-hover:text-destaque">
                    {s.numero}
                  </span>
                  <span className="font-titulo text-h3 group-hover:text-destaque group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {s.rotulo}
                  </span>
                  <span className="col-start-2 text-nota text-tinta-suave sm:col-start-3">
                    {resumos[s.href]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-tinta-suave group-hover:text-destaque sm:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Princípios */}
      <section
        aria-labelledby="principios-titulo"
        className="mx-auto mt-20 max-w-pagina px-5 sm:px-8"
      >
        <div className="grid gap-10 border-t border-fio pt-14 lg:grid-cols-12 lg:gap-8">
          <h2 id="principios-titulo" className="rotulo lg:col-span-3 lg:pt-2">
            Como escrevemos
          </h2>
          <div className="lg:col-span-6">
            <p className="font-titulo text-h2 italic">
              “Pessoa autista” ou “pessoa no espectro”, nunca “portador de autismo”. Autismo não é
              algo que se carrega: é uma forma de existir.
            </p>
            <p className="mt-6 max-w-texto text-tinta-suave">
              Usamos frases curtas, explicamos termos técnicos quando eles aparecem e evitamos
              alarme. Este site foi pensado para ser calmo: sem animações, sem janelas que surgem
              do nada e com controle de estímulos no topo de cada página.
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="border-t border-tinta pt-3 text-nota text-tinta-suave">
              <p className="rotulo text-tinta">Nota</p>
              <p className="mt-2">
                Não usamos a peça de quebra-cabeça. Muitas pessoas autistas rejeitam esse símbolo
                porque ele sugere que falta algo nelas ou que são um enigma a ser resolvido.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
