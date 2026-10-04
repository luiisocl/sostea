import type { Metadata } from "next";
import Link from "next/link";
import { AvisoSaude, Colunas, Fontes, NotaLateral } from "@/components/Editorial";
import { formatarData, listarDicas, nomeCategoria, obterDica } from "@/lib/dicas";

export const dynamicParams = false;

export async function generateStaticParams() {
  const dicas = await listarDicas();
  return dicas.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dicas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await obterDica(slug);
  return { title: meta.titulo, description: meta.resumo };
}

export default async function Artigo({ params }: PageProps<"/dicas/[slug]">) {
  const { slug } = await params;
  const { Conteudo, meta } = await obterDica(slug);
  const outras = (await listarDicas()).filter(
    (d) => d.categoria === meta.categoria && d.slug !== slug,
  );

  return (
    <article>
      <div className="mx-auto max-w-pagina px-5 pt-12 sm:px-8 lg:pt-16">
        <div className="grid gap-6 border-b border-fio pb-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3 lg:pt-3">
            <nav aria-label="Trilha de navegação" className="text-nota">
              <ol className="flex flex-wrap gap-x-2 text-tinta-suave">
                <li>
                  <Link href="/dicas">Dicas</Link>
                  <span aria-hidden="true"> /</span>
                </li>
                <li>
                  <Link href={`/dicas#${meta.categoria}`}>{nomeCategoria(meta.categoria)}</Link>
                </li>
              </ol>
            </nav>
          </div>
          <div className="lg:col-span-8">
            <h1 className="text-h1">{meta.titulo}</h1>
            <p className="mt-5 max-w-texto text-lead text-tinta-suave">{meta.resumo}</p>
            <p className="mt-6 text-mini text-tinta-suave">
              Atualizado em <time dateTime={meta.atualizadoEm}>{formatarData(meta.atualizadoEm)}</time>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Colunas
          lateral={
            outras.length > 0 && (
              <NotaLateral titulo={`Mais em ${nomeCategoria(meta.categoria)}`}>
                {outras.map((d) => (
                  <p key={d.slug}>
                    <Link href={`/dicas/${d.slug}`}>{d.titulo}</Link>
                  </p>
                ))}
              </NotaLateral>
            )
          }
        >
          <AvisoSaude />
          <div className="artigo mt-8 max-w-texto">
            <Conteudo />
          </div>
          {meta.fontes && meta.fontes.length > 0 && <Fontes fontes={meta.fontes} />}
          <p className="mt-12 text-nota">
            <Link href="/dicas">← Voltar para todas as dicas</Link>
          </p>
        </Colunas>
      </div>
    </article>
  );
}
