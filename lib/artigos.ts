import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import type { Fonte } from "@/components/ui";
import type { CategoriaId } from "./categorias";

/** Informações que todo artigo precisa exportar no topo do arquivo .mdx */
export type MetaArtigo = {
  titulo: string;
  resumo: string;
  categoria: CategoriaId;
  atualizadoEm: string; // formato AAAA-MM-DD
  fontes?: Fonte[];
};

export type Artigo = MetaArtigo & { slug: string };

const PASTA = path.join(process.cwd(), "content", "biblioteca");

async function carregar(slug: string) {
  return (await import(`@/content/biblioteca/${slug}.mdx`)) as {
    default: ComponentType;
    metadata: MetaArtigo;
  };
}

/** Lista todos os artigos de content/biblioteca (arquivos que começam com _ são ignorados). */
export async function listarArtigos(): Promise<Artigo[]> {
  const arquivos = await fs.readdir(PASTA);
  const slugs = arquivos
    .filter((a) => a.endsWith(".mdx") && !a.startsWith("_"))
    .map((a) => a.replace(/\.mdx$/, ""));

  const artigos = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await carregar(slug)).metadata })),
  );
  return artigos.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));
}

export async function obterArtigo(slug: string) {
  const modulo = await carregar(slug);
  return { Conteudo: modulo.default, meta: { slug, ...modulo.metadata } };
}

export function formatarData(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
