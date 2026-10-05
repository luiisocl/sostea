import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AvisoSaude, Fontes, IconeCirculo, Nota, SetaCirculo } from "@/components/ui";
import { formatarData, listarArtigos, obterArtigo } from "@/lib/artigos";
import { obterCategoria } from "@/lib/categorias";
import { classesCor } from "@/lib/cores";

export const dynamicParams = false;

export async function generateStaticParams() {
  const artigos = await listarArtigos();
  return artigos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/biblioteca/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await obterArtigo(slug);
  return { title: meta.titulo, description: meta.resumo };
}

export default async function Artigo({ params }: PageProps<"/biblioteca/[slug]">) {
  const { slug } = await params;
  const { Conteudo, meta } = await obterArtigo(slug);
  const categoria = obterCategoria(meta.categoria);
  const cor = classesCor[categoria.cor];
  const outros = (await listarArtigos()).filter((a) => a.categoria === meta.categoria && a.slug !== slug);

  return (
    <article>
      <header className={`${cor.bg}`}>
        <div className="container-pagina py-10 lg:py-12">
          <nav aria-label="Trilha de navegação" className="text-nota">
            <ol className="flex flex-wrap items-center gap-1.5 text-texto-suave">
              <li>
                <Link href="/biblioteca">Biblioteca</Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link href={`/biblioteca#${categoria.id}`}>{categoria.nome}</Link>
              </li>
            </ol>
          </nav>
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <IconeCirculo icone={categoria.icone} cor={categoria.cor} tamanho="lg" />
            <div className="max-w-3xl">
              <h1 className="text-h1">{meta.titulo}</h1>
              <p className="mt-4 text-lead text-texto">{meta.resumo}</p>
              <p className="mt-4 text-mini text-texto-suave">
                Atualizado em <time dateTime={meta.atualizadoEm}>{formatarData(meta.atualizadoEm)}</time>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <div className="max-w-texto">
          <AvisoSaude />
          <div className="artigo mt-8">
            <Conteudo />
          </div>
          {meta.fontes && meta.fontes.length > 0 && <Fontes fontes={meta.fontes} />}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          {outros.length > 0 && (
            <nav aria-label={`Mais em ${categoria.nome}`} className="card p-5">
              <p className="font-titulo font-bold text-marinho">Mais em {categoria.nome}</p>
              <ul className="mt-3 space-y-2">
                {outros.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/biblioteca/${a.slug}`} className="group flex items-center gap-2 text-nota no-underline">
                      <span className="flex-1 group-hover:underline">{a.titulo}</span>
                      <SetaCirculo />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <Nota titulo="Precisa de ajuda agora?" cor="amarelo">
            <p>
              Em emergência, ligue <a href="tel:192" className="font-bold">SAMU 192</a>. Apoio emocional:{" "}
              <a href="tel:188" className="font-bold">CVV 188</a>.
            </p>
          </Nota>
          <p>
            <Link href="/biblioteca" className="link-seta">
              ← Voltar para a biblioteca
            </Link>
          </p>
        </aside>
      </div>
    </article>
  );
}
