import type { Metadata } from "next";
import Link from "next/link";
import { AvisoSaude, CabecalhoPagina, Colunas, Sumario } from "@/components/Editorial";
import { categorias, listarDicas } from "@/lib/dicas";

export const metadata: Metadata = {
  title: "Dicas",
  description:
    "Orientações práticas para o dia a dia: saúde, rotina e sono, alimentação, escola, família, crise e sobrecarga sensorial e vida adulta.",
};

export default async function Dicas() {
  const dicas = await listarDicas();
  const itensSumario = categorias.map((c, i) => ({
    id: c.id,
    numero: `2.${i + 1}`,
    titulo: c.nome,
  }));

  return (
    <>
      <CabecalhoPagina numero="02" secao="Dicas" titulo="Dicas para o dia a dia">
        <p>
          Orientações práticas, organizadas por assunto. Cada pessoa é diferente: use o que fizer
          sentido para você e adapte o resto.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas esquerda={<Sumario itens={itensSumario} />}>
          <AvisoSaude />

          {categorias.map((categoria, i) => {
            const daCategoria = dicas.filter((d) => d.categoria === categoria.id);
            return (
              <section
                key={categoria.id}
                id={categoria.id}
                aria-labelledby={`${categoria.id}-titulo`}
                className="scroll-mt-8 pt-12"
              >
                <h2
                  id={`${categoria.id}-titulo`}
                  className="flex items-baseline gap-4 border-b border-tinta pb-3 text-h2"
                >
                  <span className="font-titulo text-lead text-destaque" aria-hidden="true">
                    2.{i + 1}
                  </span>
                  {categoria.nome}
                </h2>

                {daCategoria.length === 0 ? (
                  <p className="py-5 text-nota text-tinta-suave">
                    Ainda não há artigos nesta categoria.
                  </p>
                ) : (
                  <ul>
                    {daCategoria.map((d) => (
                      <li key={d.slug} className="border-b border-fio">
                        <Link
                          href={`/dicas/${d.slug}`}
                          className="group block py-5 text-tinta no-underline hover:text-tinta"
                        >
                          <span className="font-titulo text-h3 group-hover:text-destaque group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                            {d.titulo}
                          </span>
                          <span className="mt-1.5 block max-w-texto text-nota text-tinta-suave">
                            {d.resumo}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

          <p className="mt-12 max-w-texto text-nota text-tinta-suave">
            Tem uma sugestão de assunto? Faça seu <Link href="/cadastro">cadastro</Link> e conte no
            campo de interesse.
          </p>
        </Colunas>
      </div>
    </>
  );
}
