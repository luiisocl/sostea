import type { Metadata } from "next";
import Link from "next/link";
import { ChartColumn } from "lucide-react";
import { CabecalhoPagina, Fontes, ListaMarcada, Nota, Secao } from "@/components/ui";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Entenda os dados",
  description: "O que os dados oficiais dizem sobre o autismo no Brasil e como interpretar esses números.",
};

export default function Dados() {
  return (
    <>
      <CabecalhoPagina rotulo="Dados e curiosidades" titulo="Entenda os dados" icone={ChartColumn}>
        <p>
          Números ajudam a enxergar o tamanho de um tema, mas precisam ser lidos com cuidado. Aqui
          mostramos só dados de fontes oficiais, com o link para cada uma.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <section aria-labelledby="censo" className="rounded-bloco bg-faixa p-6 sm:p-8">
            <p className="rotulo">IBGE · Censo Demográfico 2022</p>
            <h2 id="censo" className="mt-2 text-h2">
              Pela primeira vez, o Censo perguntou sobre autismo
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <p className="font-titulo text-h1 font-extrabold text-azul">2,4 milhões</p>
                <p className="mt-1 text-nota">de pessoas no Brasil com diagnóstico de autismo informado no Censo.</p>
              </div>
              <div className="card p-5">
                <p className="font-titulo text-h1 font-extrabold text-azul">1,2%</p>
                <p className="mt-1 text-nota">da população residente no país.</p>
              </div>
            </div>
            <p className="mt-4 text-nota text-texto-suave">
              Fonte: IBGE, Censo Demográfico 2022, divulgado em 2025.
            </p>
          </section>

          <Secao id="como-ler" titulo="Como ler esse número">
            <ListaMarcada
              itens={[
                <>
                  <strong className="text-marinho">É sobre diagnóstico.</strong> O Censo perguntou se
                  algum morador já tinha recebido diagnóstico de autismo de um profissional de saúde.
                  Pessoas autistas sem diagnóstico não aparecem nessa conta.
                </>,
                <>
                  <strong className="text-marinho">Uma pergunta não mede tudo.</strong> O próprio IBGE
                  explica que a avaliação do TEA é complexa e que uma única pergunta não permite saber,
                  por exemplo, o nível de suporte de cada pessoa.
                </>,
                <>
                  <strong className="text-marinho">Mais diagnóstico não quer dizer “epidemia”.</strong>{" "}
                  Quando o número de diagnósticos cresce, isso costuma refletir mais informação, mais
                  acesso à avaliação e critérios mais claros.
                </>,
              ]}
            />
          </Secao>

          <Secao id="por-que-importa" titulo="Por que esses dados importam">
            <p>
              Saber quantas pessoas autistas existem, onde vivem e como estudam e trabalham ajuda a
              planejar políticas públicas: vagas em serviços de saúde, apoio nas escolas e
              atendimento especializado.
            </p>
            <p>
              Quer entender melhor o que é o TEA? Veja <Link href="/entenda">Entenda o TEA</Link> e{" "}
              <Link href="/entenda#mitos">Mitos e fatos</Link>.
            </p>
          </Secao>

          <Fontes fontes={[fontes.ibgeCenso, fontes.mdhCenso, fontes.omsAutismo]} />
        </div>

        <aside className="space-y-4">
          <Nota titulo="Nosso compromisso" cor="verde">
            <p>
              Não inventamos números. Todo dado deste site vem de uma fonte oficial, citada logo
              abaixo da informação.
            </p>
          </Nota>
          <Nota titulo="Veja também" cor="azul">
            <p><Link href="/fontes">Fontes e referências</Link></p>
            <p><Link href="/direitos">Direitos da pessoa autista</Link></p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
