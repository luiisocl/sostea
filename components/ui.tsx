import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ChevronRight, CircleAlert, type LucideIcon } from "lucide-react";
import { classesCor, type Cor } from "@/lib/cores";

/** Ícone de linha dentro de um círculo pastel. */
export function IconeCirculo({
  icone: Icone,
  cor,
  tamanho = "md",
}: {
  icone: LucideIcon;
  cor: Cor;
  tamanho?: "sm" | "md" | "lg";
}) {
  const c = classesCor[cor];
  const dim = { sm: "h-9 w-9", md: "h-12 w-12", lg: "h-16 w-16" }[tamanho];
  const ic = { sm: "h-4.5 w-4.5", md: "h-6 w-6", lg: "h-8 w-8" }[tamanho];
  return (
    <span aria-hidden="true" className={`flex shrink-0 items-center justify-center rounded-full ${dim} ${c.circ}`}>
      <Icone className={`${ic} ${c.tom}`} strokeWidth={1.8} />
    </span>
  );
}

/** Pequeno botão redondo com seta (decorativo dentro de cards clicáveis). */
export function SetaCirculo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fundo text-marinho shadow-suave ${className}`}
    >
      <ChevronRight className="h-4 w-4" strokeWidth={2.4} />
    </span>
  );
}

/** Link "Ver todos →" */
export function LinkSeta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="link-seta">
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

/** Título de seção com subtítulo e link opcional à direita. */
export function TituloSecao({
  id,
  titulo,
  subtitulo,
  link,
  icone,
  nivel = 2,
}: {
  id?: string;
  titulo: ReactNode;
  subtitulo?: ReactNode;
  link?: { href: string; rotulo: string };
  icone?: ReactNode;
  nivel?: 2 | 3;
}) {
  const H = nivel === 2 ? "h2" : "h3";
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="flex items-center gap-4">
        {icone}
        <div>
          <H id={id} className={nivel === 2 ? "text-h2" : "text-h3"}>
            {titulo}
          </H>
          {subtitulo && <p className="mt-1.5 text-texto-suave">{subtitulo}</p>}
        </div>
      </div>
      {link && <LinkSeta href={link.href}>{link.rotulo}</LinkSeta>}
    </div>
  );
}

/** Topo das páginas internas: faixa suave com rótulo, título e introdução. */
export function CabecalhoPagina({
  rotulo,
  titulo,
  children,
  icone,
  cor = "azul",
}: {
  rotulo: string;
  titulo: ReactNode;
  children?: ReactNode;
  icone?: LucideIcon;
  cor?: Cor;
}) {
  return (
    <div className="border-b border-borda bg-fundo-suave">
      <div className="container-pagina flex flex-col gap-6 py-12 sm:flex-row sm:items-center lg:py-14">
        {icone && <IconeCirculo icone={icone} cor={cor} tamanho="lg" />}
        <div className="max-w-3xl">
          <p className="rotulo">{rotulo}</p>
          <h1 className="mt-3 text-h1">{titulo}</h1>
          {children && <div className="mt-4 max-w-texto text-lead text-texto-suave">{children}</div>}
        </div>
      </div>
    </div>
  );
}

/** Aviso obrigatório nas páginas de saúde. */
export function AvisoSaude({ className = "" }: { className?: string }) {
  return (
    <p
      className={`flex max-w-texto items-start gap-3 rounded-card border border-alerta-borda bg-alerta-bg px-4 py-3 text-nota text-texto ${className}`}
    >
      <CircleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-alerta-titulo" />
      <span>
        <strong className="font-bold text-marinho">Lembre-se:</strong> este conteúdo é informativo e
        não substitui a avaliação de um profissional de saúde.
      </span>
    </p>
  );
}

export type Fonte = { titulo: string; orgao: string; url: string };

/** Lista de fontes oficiais no fim da página. */
export function Fontes({ fontes }: { fontes: Fonte[] }) {
  return (
    <section aria-labelledby="fontes-titulo" className="mt-14 rounded-card bg-fundo-suave p-6">
      <h2 id="fontes-titulo" className="text-h4">
        Fontes
      </h2>
      <ol className="mt-3 space-y-2 text-nota">
        {fontes.map((f) => (
          <li key={f.url} className="list-inside list-decimal marker:font-bold marker:text-azul">
            <span className="text-texto-suave">{f.orgao}. </span>
            <a href={f.url} rel="noopener noreferrer" target="_blank" className="underline">
              {f.titulo}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Sumário lateral "Nesta página". */
export function Sumario({ itens }: { itens: { id: string; titulo: string }[] }) {
  return (
    <nav aria-label="Nesta página" className="card p-5 text-nota lg:sticky lg:top-6">
      <p className="font-titulo font-bold text-marinho">Nesta página</p>
      <ol className="mt-3 space-y-1">
        {itens.map((i, n) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="flex gap-2.5 rounded-campo px-2 py-1.5 text-texto no-underline hover:bg-faixa hover:text-azul">
              <span className="font-titulo font-bold text-azul">{n + 1}</span>
              {i.titulo}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Seção de texto com título (usada nas páginas informativas). */
export function Secao({ id, titulo, children }: { id: string; titulo: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-titulo`} id={id} className="scroll-mt-6 pt-12 first:pt-0">
      <h2 id={`${id}-titulo`} className="text-h2">
        {titulo}
      </h2>
      <div className="mt-5 max-w-texto space-y-4">{children}</div>
    </section>
  );
}

/** Lista com marcador colorido. */
export function ListaMarcada({ itens, cor = "azul" }: { itens: ReactNode[]; cor?: Cor }) {
  return (
    <ul className="space-y-2.5">
      {itens.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className={`mt-2.5 h-2 w-2 shrink-0 rounded-full bg-current ${classesCor[cor].tom}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Lista de passos numerados. */
export function Passos({ itens }: { itens: ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {itens.map((p, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-azul-circ font-titulo text-mini font-extrabold text-azul-tom">
            {i + 1}
          </span>
          <span className="pt-0.5">{p}</span>
        </li>
      ))}
    </ol>
  );
}

/** Caixa de nota lateral simples. */
export function Nota({ titulo, children, cor = "azul" }: { titulo: string; children: ReactNode; cor?: Cor }) {
  return (
    <div className={`rounded-card p-5 text-nota ${classesCor[cor].bg}`}>
      <p className="font-titulo font-bold text-marinho">{titulo}</p>
      <div className="mt-2 space-y-2 text-texto">{children}</div>
    </div>
  );
}
