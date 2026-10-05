import type { Metadata } from "next";
import { HandHeart } from "lucide-react";
import { CabecalhoPagina, Nota, Passos } from "@/components/ui";
import { FormularioDoacao } from "@/components/FormularioDoacao";
import { destinos } from "@/lib/doacoes";

export const metadata: Metadata = {
  title: "Doe",
  description: "Como apoiar o Conexões que Incluem e para onde vão as doações. Doações em breve.",
};

export default function Doe() {
  return (
    <>
      <CabecalhoPagina rotulo="Apoie" titulo="Apoie o Conexões que Incluem" icone={HandHeart} cor="rosa">
        <p>
          O Conexões que Incluem é gratuito e vai continuar assim. As doações vão ajudar a manter o projeto e a
          melhorar o conteúdo. Esta página ainda não recebe valores.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
        <div className="space-y-8">
          <section aria-labelledby="para-onde-titulo" className="card p-6 sm:p-8">
            <h2 id="para-onde-titulo" className="text-h2">
              Para onde vai a doação
            </h2>
            <div className="mt-5 max-w-texto">
              <Passos
                itens={destinos.map((d) => (
                  <>
                    <strong className="font-bold">{d.titulo}.</strong>{" "}
                    <span className="text-texto-suave">{d.texto}</span>
                  </>
                ))}
              />
            </div>
          </section>

          <section aria-label="Formulário de doação" className="card p-6 sm:p-8">
            <FormularioDoacao />
          </section>
        </div>

        <aside>
          <Nota titulo="Transparência" cor="amarelo">
            <p>
              Quando as doações forem abertas, vamos publicar aqui quanto foi arrecadado e como foi
              usado.
            </p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
