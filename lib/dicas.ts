import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import type { Fonte } from "@/components/Editorial";

// Categorias das dicas, na ordem em que aparecem no site.
export const categorias = [
  { id: "saude", nome: "Saúde" },
  { id: "rotina-e-sono", nome: "Rotina e sono" },
  { id: "alimentacao", nome: "Alimentação" },
  { id: "escola", nome: "Escola" },
  { id: "familia-e-cuidadores", nome: "Família e cuidadores" },
  { id: "crise-e-sobrecarga", nome: "Crise e sobrecarga sensorial" },
  { id: "vida-adulta", nome: "Vida adulta" },
] as const;

export type CategoriaId = (typeof categorias)[number]["id"];

/** Informações que todo artigo precisa exportar no topo do arquivo .mdx */
export type MetaDica = {
  titulo: string;
  resumo: string;
  categoria: CategoriaId;
  atualizadoEm: string; // formato AAAA-MM-DD
  fontes?: Fonte[];
};

export type Dica = MetaDica & { slug: string };

const PASTA = path.join(process.cwd(), "content", "dicas");

async function carregar(slug: string) {
  return (await import(`@/content/dicas/${slug}.mdx`)) as {
    default: ComponentType;
    metadata: MetaDica;
  };
}

/** Lista todos os artigos de content/dicas (arquivos que começam com _ são ignorados). */
export async function listarDicas(): Promise<Dica[]> {
  const arquivos = await fs.readdir(PASTA);
  const slugs = arquivos
    .filter((a) => a.endsWith(".mdx") && !a.startsWith("_"))
    .map((a) => a.replace(/\.mdx$/, ""));

  const dicas = await Promise.all(
    slugs.map(async (slug) => ({ slug, ...(await carregar(slug)).metadata })),
  );
  return dicas.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));
}

export async function obterDica(slug: string) {
  const modulo = await carregar(slug);
  return { Conteudo: modulo.default, meta: { slug, ...modulo.metadata } };
}

export function nomeCategoria(id: CategoriaId) {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}

export function formatarData(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
