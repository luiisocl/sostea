import type { ReactNode } from "react";

/** Topo de cada página: número de seção, título e uma introdução curta. */
export function CabecalhoPagina({
  numero,
  secao,
  titulo,
  children,
}: {
  numero: string;
  secao: string;
  titulo: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-pagina px-5 pt-12 sm:px-8 lg:pt-16">
      <div className="grid gap-6 border-b border-fio pb-10 lg:grid-cols-12 lg:gap-8">
        <p className="rotulo flex items-baseline gap-3 lg:col-span-3 lg:pt-3">
          <span className="font-titulo text-h3 font-normal tracking-normal text-destaque normal-case">
            Nº {numero}
          </span>
          <span aria-hidden="true" className="h-px w-8 translate-y-[-0.3em] bg-fio-forte" />
          {secao}
        </p>
        <div className="lg:col-span-8">
          <h1 className="text-h1">{titulo}</h1>
          {children && (
            <div className="mt-5 max-w-texto text-lead text-tinta-suave">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Grade padrão: margem esquerda (sumário), coluna de leitura e notas laterais à direita.
 * No celular, tudo vira uma coluna só, na ordem: esquerda, texto, notas.
 */
export function Colunas({
  children,
  esquerda,
  lateral,
}: {
  children: ReactNode;
  esquerda?: ReactNode;
  lateral?: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-pagina gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
      {esquerda && <div className="lg:col-span-3">{esquerda}</div>}
      <div className="min-w-0 lg:col-span-7 lg:col-start-4">{children}</div>
      {lateral && <aside className="space-y-8 lg:col-span-2 lg:col-start-11">{lateral}</aside>}
    </div>
  );
}

/** Seção numerada dentro de uma página (ex.: 1.2 Sinais comuns). */
export function SecaoNumerada({
  id,
  numero,
  titulo,
  children,
}: {
  id: string;
  numero: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-titulo`} id={id} className="scroll-mt-8 pt-12 first:pt-10">
      <h2 id={`${id}-titulo`} className="flex items-baseline gap-4 text-h2">
        <span className="font-titulo text-lead text-destaque" aria-hidden="true">
          {numero}
        </span>
        {titulo}
      </h2>
      <div className="mt-6 max-w-texto space-y-4">{children}</div>
    </section>
  );
}

/** Nota curta na margem, com fio fino em cima. */
export function NotaLateral({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="border-t border-tinta pt-3 text-nota text-tinta-suave">
      <p className="rotulo text-tinta">{titulo}</p>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

/** Aviso obrigatório nas páginas de saúde. */
export function AvisoSaude() {
  return (
    <p className="max-w-texto border-l-2 border-argila py-1 pl-4 text-nota text-tinta">
      <strong className="font-bold">Aviso:</strong> Este conteúdo é informativo e não substitui
      avaliação de um profissional de saúde.
    </p>
  );
}

export type Fonte = { titulo: string; orgao: string; url: string };

/** Lista de fontes oficiais no fim da página. */
export function Fontes({ fontes }: { fontes: Fonte[] }) {
  return (
    <section aria-labelledby="fontes-titulo" className="mt-16 border-t border-tinta pt-6">
      <h2 id="fontes-titulo" className="rotulo text-tinta">
        Fontes
      </h2>
      <ol className="mt-4 space-y-3 text-nota">
        {fontes.map((f, i) => (
          <li key={f.url} className="grid grid-cols-[2rem_1fr]">
            <span className="font-titulo text-tinta-suave" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="text-tinta-suave">{f.orgao}. </span>
              <a href={f.url} rel="noopener noreferrer" target="_blank">
                {f.titulo}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Índice de seções da página (sumário). */
export function Sumario({ itens }: { itens: { id: string; numero: string; titulo: string }[] }) {
  return (
    <nav aria-label="Nesta página" className="text-nota lg:sticky lg:top-8">
      <p className="rotulo">Nesta página</p>
      <ol className="mt-3 border-t border-fio">
        {itens.map((i) => (
          <li key={i.id} className="border-b border-fio">
            <a
              href={`#${i.id}`}
              className="flex gap-3 py-2 text-tinta no-underline hover:text-destaque"
            >
              <span className="font-titulo text-tinta-suave">{i.numero}</span>
              {i.titulo}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
