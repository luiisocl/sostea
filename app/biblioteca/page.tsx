import type { Metadata } from "next";
import Link from "next/link";
import { Library } from "lucide-react";
import { CardCategoria } from "@/components/CardCategoria";
import { AvisoSaude, CabecalhoPagina, IconeCirculo, SetaCirculo } from "@/components/ui";
import { listarArtigos } from "@/lib/artigos";
import { categorias } from "@/lib/categorias";
import { classesCor } from "@/lib/cores";

export const metadata: Metadata = {
  title: "Biblioteca",
  description:
    "Conteúdos organizados por tema: higiene, saúde bucal, alimentação, sono, comunicação, crises, escola e direitos.",
};

export default async function Biblioteca() {
  const artigos = await listarArtigos();

  return (
    <>
      <CabecalhoPagina rotulo="Biblioteca" titulo="Explore a biblioteca" icone={Library}>
        <p>
          Conteúdos organizados por temas, com orientações práticas para o dia a dia. Cada criança é
          única: use o que fizer sentido para a sua realidade.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        <AvisoSaude />

        <nav aria-label="Temas da biblioteca" className="mt-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categorias.map((c) => (
              <li key={c.id}>
                <CardCategoria categoria={c} total={artigos.filter((a) => a.categoria === c.id).length} />
              </li>
            ))}
          </ul>
        </nav>

        {categorias.map((c) => {
          const daCategoria = artigos.filter((a) => a.categoria === c.id);
          const cor = classesCor[c.cor];
          return (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-titulo`} className="mt-14 scroll-mt-6">
              <div className="flex items-center gap-4">
                <IconeCirculo icone={c.icone} cor={c.cor} />
                <div>
                  <h2 id={`${c.id}-titulo`} className="text-h2">
                    {c.nome}
                  </h2>
                  <p className="text-texto-suave">{c.descricao}</p>
                </div>
              </div>

              {daCategoria.length === 0 ? (
                <p className="mt-5 rounded-card bg-fundo-suave p-5 text-texto-suave">
                  Em breve teremos conteúdos sobre este tema.
                </p>
              ) : (
                <ul className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {daCategoria.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/biblioteca/${a.slug}`}
                        className="card group flex h-full flex-col p-5 no-underline hover:shadow-elevada"
                      >
                        <span className={`etiqueta self-start ${cor.etiqueta}`}>{c.nome}</span>
                        <span className="mt-3 font-titulo text-h4 font-bold text-marinho group-hover:underline">
                          {a.titulo}
                        </span>
                        <span className="mt-1.5 text-nota text-texto-suave">{a.resumo}</span>
                        <SetaCirculo className="mt-auto self-end" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <p className="mt-14 rounded-card bg-faixa p-5 text-nota">
          Tem uma sugestão de tema? Faça seu <Link href="/cadastro">cadastro</Link> e conte no
          campo de interesse.
        </p>
      </div>
    </>
  );
}
