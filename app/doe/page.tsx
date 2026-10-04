import type { Metadata } from "next";
import { CabecalhoPagina, Colunas, NotaLateral, SecaoNumerada } from "@/components/Editorial";
import { FormularioDoacao } from "@/components/FormularioDoacao";
import { destinos } from "@/lib/doacoes";

export const metadata: Metadata = {
  title: "Doe",
  description: "Como apoiar o SOSTEA e para onde vão as doações. Doações em breve.",
};

export default function Doe() {
  return (
    <>
      <CabecalhoPagina numero="06" secao="Doe" titulo="Apoie o SOSTEA">
        <p>
          O SOSTEA é gratuito e vai continuar assim. As doações vão ajudar a manter o projeto e a
          melhorar o conteúdo. Esta página ainda não recebe valores.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          lateral={
            <NotaLateral titulo="Transparência">
              <p>
                Quando as doações forem abertas, vamos publicar aqui quanto foi arrecadado e como
                foi usado.
              </p>
            </NotaLateral>
          }
        >
          <SecaoNumerada id="para-onde" numero="6.1" titulo="Para onde vai a doação">
            <ol className="border-t border-tinta">
              {destinos.map((d, i) => (
                <li
                  key={d.titulo}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-fio py-4"
                >
                  <span aria-hidden="true" className="font-titulo text-lead text-tinta-suave">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong className="font-bold">{d.titulo}.</strong>{" "}
                    <span className="text-tinta-suave">{d.texto}</span>
                  </span>
                </li>
              ))}
            </ol>
          </SecaoNumerada>

          <section aria-label="Formulário de doação" className="mt-14 border-t border-fio pt-10">
            <FormularioDoacao />
          </section>
        </Colunas>
      </div>
    </>
  );
}
