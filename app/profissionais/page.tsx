import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina, Colunas, NotaLateral } from "@/components/Editorial";
import { DiretorioProfissionais } from "@/components/DiretorioProfissionais";
import { listarProfissionais } from "@/lib/profissionais";

export const metadata: Metadata = {
  title: "Profissionais",
  description:
    "Diretório de profissionais de saúde que atendem pessoas autistas. Em construção.",
};

export default async function Profissionais() {
  const profissionais = await listarProfissionais();

  return (
    <>
      <CabecalhoPagina numero="04" secao="Profissionais" titulo="Diretório de profissionais">
        <p>
          Um lugar para encontrar profissionais de saúde que atendem pessoas autistas. Ainda
          estamos validando os parceiros. Por isso, os perfis abaixo são apenas exemplos.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          esquerda={
            <div className="border-l-2 border-argila pl-4 text-nota">
              <p className="font-bold">Em construção</p>
              <p className="mt-1 text-tinta-suave">
                Todos os nomes desta página são fictícios. Nenhum perfil corresponde a uma pessoa
                real.
              </p>
            </div>
          }
          lateral={
            <NotaLateral titulo="Quem faz o quê">
              <p>
                <strong className="text-tinta">Neuropediatria e psiquiatria:</strong> médicos que
                podem fazer o diagnóstico.
              </p>
              <p>
                <strong className="text-tinta">Psicologia, fono e TO:</strong> avaliação e
                terapias no dia a dia.
              </p>
            </NotaLateral>
          }
        >
          <DiretorioProfissionais profissionais={profissionais} />
          <p className="mt-10 max-w-texto text-nota text-tinta-suave">
            Pelo SUS, o caminho começa na Unidade Básica de Saúde, que pode encaminhar para
            serviços especializados. Veja mais em{" "}
            <Link href="/entenda#diagnostico">Como é o diagnóstico</Link>.
          </p>
        </Colunas>
      </div>
    </>
  );
}
