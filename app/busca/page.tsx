import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { CabecalhoPagina, SetaCirculo } from "@/components/ui";
import { listarArtigos } from "@/lib/artigos";
import { categorias, obterCategoria } from "@/lib/categorias";
import { classesCor } from "@/lib/cores";
import { listarProfissionais } from "@/lib/profissionais";

export const metadata: Metadata = {
  title: "Busca",
  description: "Busque conteúdos, temas e serviços no Conexões que Acolhem.",
};

// Páginas do site que também aparecem na busca.
const paginas = [
  { titulo: "Entenda o TEA", resumo: "O que é o autismo, sinais, diagnóstico, mitos e fatos.", href: "/entenda" },
  { titulo: "Direitos da pessoa autista", resumo: "Lei Berenice Piana, CIPTEA, atendimento prioritário, escola.", href: "/direitos" },
  { titulo: "Rede de apoio em Teresina", resumo: "AMA-PI, CEIR, Cetea, UBS, Defensoria Pública e emergência.", href: "/rede-de-apoio" },
  { titulo: "Entenda os dados", resumo: "Dados do Censo 2022 do IBGE sobre autismo no Brasil.", href: "/dados" },
  { titulo: "Fontes e referências", resumo: "Instituições, leis e materiais oficiais.", href: "/fontes" },
  { titulo: "Para famílias", resumo: "Primeiros passos, rotina, direitos e apoio para mães e pais.", href: "/para-familias" },
  { titulo: "Para educadores", resumo: "Estratégias para professores e inclusão escolar.", href: "/para-educadores" },
  { titulo: "Para cuidadores", resumo: "Cuidado diário: higiene, alimentação, sono e crises.", href: "/para-cuidadores" },
  { titulo: "Profissionais", resumo: "Diretório de profissionais em Teresina (em construção).", href: "/profissionais" },
  { titulo: "Cadastro", resumo: "Receba novidades do Conexões que Acolhem.", href: "/cadastro" },
  { titulo: "Acessibilidade", resumo: "Reduzir estímulos e tamanho do texto.", href: "/acessibilidade" },
  { titulo: "Doe", resumo: "Como apoiar o projeto.", href: "/doe" },
];

// Ignora acentos e maiúsculas: "crianca" encontra "criança".
function normalizar(t: string) {
  return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export default async function Busca({ searchParams }: PageProps<"/busca">) {
  const { q } = await searchParams;
  const consulta = (Array.isArray(q) ? q[0] : q ?? "").trim().slice(0, 100);
  const palavras = normalizar(consulta).split(/\s+/).filter(Boolean);
  const casa = (texto: string) => palavras.length > 0 && palavras.every((p) => normalizar(texto).includes(p));

  const artigos = (await listarArtigos()).filter((a) =>
    casa([a.titulo, a.resumo, obterCategoria(a.categoria).nome].join(" ")),
  );
  const temas = categorias.filter((c) => casa(`${c.nome} ${c.descricao}`));
  const paginasEncontradas = paginas.filter((p) => casa(`${p.titulo} ${p.resumo}`));
  const profissionais = (await listarProfissionais()).filter((p) => casa(`${p.area} ${p.descricao} ${p.cidade}`));
  const total = artigos.length + temas.length + paginasEncontradas.length + profissionais.length;

  return (
    <>
      <CabecalhoPagina rotulo="Busca" titulo={consulta ? `Resultados para “${consulta}”` : "Buscar no Conexões que Acolhem"} icone={Search}>
        <form action="/busca" role="search" className="mt-2 flex max-w-xl gap-2">
          <label htmlFor="busca-pagina" className="sr-only">
            Buscar conteúdos, temas ou serviços
          </label>
          <input
            id="busca-pagina"
            name="q"
            type="search"
            defaultValue={consulta}
            placeholder="Ex.: escovar os dentes, escola, CIPTEA"
            className="campo flex-1 rounded-full"
          />
          <button type="submit" className="botao botao-escuro">
            Buscar
          </button>
        </form>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        {consulta && (
          <p role="status" className="text-texto-suave">
            {total === 0
              ? "Nenhum resultado. Tente outras palavras, como “sono”, “escola” ou “direitos”."
              : total === 1
                ? "1 resultado encontrado."
                : `${total} resultados encontrados.`}
          </p>
        )}

        {temas.length > 0 && (
          <section aria-labelledby="r-temas" className="mt-8">
            <h2 id="r-temas" className="text-h3">Temas</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {temas.map((c) => (
                <li key={c.id}>
                  <Link href={`/biblioteca#${c.id}`} className={`etiqueta py-2 no-underline ${classesCor[c.cor].etiqueta}`}>
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {artigos.length > 0 && (
          <section aria-labelledby="r-artigos" className="mt-8">
            <h2 id="r-artigos" className="text-h3">Conteúdos da biblioteca</h2>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {artigos.map((a) => (
                <li key={a.slug}>
                  <Link href={`/biblioteca/${a.slug}`} className="card group flex h-full items-center gap-3 p-4 no-underline hover:shadow-elevada">
                    <span className="flex-1">
                      <span className="block font-titulo font-bold text-marinho group-hover:underline">{a.titulo}</span>
                      <span className="text-nota text-texto-suave">{a.resumo}</span>
                    </span>
                    <SetaCirculo />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {paginasEncontradas.length > 0 && (
          <section aria-labelledby="r-paginas" className="mt-8">
            <h2 id="r-paginas" className="text-h3">Páginas</h2>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {paginasEncontradas.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="card group flex h-full items-center gap-3 p-4 no-underline hover:shadow-elevada">
                    <span className="flex-1">
                      <span className="block font-titulo font-bold text-marinho group-hover:underline">{p.titulo}</span>
                      <span className="text-nota text-texto-suave">{p.resumo}</span>
                    </span>
                    <SetaCirculo />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {profissionais.length > 0 && (
          <section aria-labelledby="r-prof" className="mt-8">
            <h2 id="r-prof" className="text-h3">Profissionais</h2>
            <p className="mt-2">
              {profissionais.length} perfil(is) demonstrativo(s) relacionado(s).{" "}
              <Link href="/profissionais">Ver diretório</Link>
            </p>
          </section>
        )}

        {!consulta && (
          <p className="text-texto-suave">
            Digite uma palavra no campo acima. Você também pode navegar pela{" "}
            <Link href="/biblioteca">biblioteca</Link>.
          </p>
        )}
      </div>
    </>
  );
}
