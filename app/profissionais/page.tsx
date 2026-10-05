import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { DiretorioProfissionais } from "@/components/DiretorioProfissionais";
import { CabecalhoPagina, Nota } from "@/components/ui";
import { especialidades, listarProfissionais } from "@/lib/profissionais";

export const metadata: Metadata = {
  title: "Profissionais",
  description: "Diretório de profissionais e cuidadores que atuam com crianças com TEA em Teresina - PI. Em construção.",
};

export default async function Profissionais() {
  const profissionais = await listarProfissionais();

  return (
    <>
      <CabecalhoPagina rotulo="Profissionais" titulo="Encontre apoio especializado" icone={Users}>
        <p>
          Profissionais e cuidadores que atuam com crianças com TEA em Teresina e região. Estamos
          validando os parceiros: por enquanto, os perfis abaixo são apenas demonstrativos.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Nota titulo="Em construção" cor="amarelo">
            <p>
              Nomes e registros são fictícios. As fotos são de banco de imagens e não mostram
              profissionais reais. O contato será liberado quando os parceiros forem validados.
            </p>
          </Nota>
          <Nota titulo="Pelo SUS" cor="verde">
            <p>
              O caminho começa na Unidade Básica de Saúde, que pode encaminhar para serviços
              especializados. Veja a <Link href="/rede-de-apoio">rede de apoio em Teresina</Link>.
            </p>
          </Nota>
        </div>

        <h2 className="sr-only">Perfis de profissionais</h2>
        <DiretorioProfissionais
          profissionais={profissionais}
          filtros={especialidades.map((e) => e.id)}
          variante="completo"
        />

        <section aria-labelledby="quem-faz" className="mt-14 rounded-bloco bg-fundo-suave p-6 sm:p-8">
          <h2 id="quem-faz" className="text-h3">
            Quem faz o quê
          </h2>
          <dl className="mt-4 grid gap-4 text-nota sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Neuropediatria e psiquiatria", "Médicos que podem fazer o diagnóstico e acompanhar a saúde."],
              ["Psicologia", "Avaliação, terapias e orientação para a família."],
              ["Fonoaudiologia", "Comunicação, linguagem, fala e alimentação."],
              ["Terapia ocupacional", "Autonomia, questões sensoriais e atividades do dia a dia."],
              ["Odontologia", "Saúde bucal com atendimento adaptado."],
              ["Cuidadoras(es)", "Apoio nas atividades da rotina, em casa ou na escola."],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="font-titulo font-bold text-marinho">{t}</dt>
                <dd className="mt-0.5 text-texto-suave">{d}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
