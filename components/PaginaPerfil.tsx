import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { PaginaPerfil as Dados } from "@/data/paginas-perfil";
import { classesCor } from "@/lib/cores";
import { AvisoSaude, CabecalhoPagina, SetaCirculo, TituloSecao } from "./ui";

export function PaginaPerfil({ dados }: { dados: Dados }) {
  const cor = classesCor[dados.cor];
  return (
    <>
      <CabecalhoPagina rotulo={dados.rotulo} titulo={dados.titulo} icone={dados.icone} cor={dados.cor}>
        <p>{dados.intro}</p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <section aria-labelledby="comece-aqui">
          <TituloSecao id="comece-aqui" titulo="Comece por aqui" subtitulo="Os conteúdos mais úteis para você." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {dados.comeceAqui.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className={`group flex h-full gap-4 rounded-card p-5 no-underline hover:shadow-elevada ${cor.bg}`}>
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-titulo font-extrabold ${cor.circ} ${cor.tom}`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className="font-titulo font-bold text-marinho group-hover:underline">{item.titulo}</span>
                    <span className="mt-1 text-nota text-texto-suave">{item.texto}</span>
                    <SetaCirculo className="mt-3 self-end" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <AvisoSaude className="mt-8" />
        </section>

        <aside className="space-y-5">
          <section aria-labelledby="dicas-rapidas" className="card p-6">
            <h2 id="dicas-rapidas" className="text-h3">
              Dicas rápidas
            </h2>
            <ul className="mt-4 space-y-3">
              {dados.dicasRapidas.map((d) => (
                <li key={d} className="flex gap-2.5 text-nota">
                  <CheckCircle2 aria-hidden="true" className={`mt-0.5 h-5 w-5 shrink-0 ${cor.tom}`} />
                  {d}
                </li>
              ))}
            </ul>
          </section>
          <nav aria-labelledby="veja-tambem" className="card p-6">
            <h2 id="veja-tambem" className="text-h3">
              Veja também
            </h2>
            <ul className="mt-3 space-y-2">
              {dados.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-nota font-bold">
                    {l.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
