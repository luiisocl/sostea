import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina, Colunas, NotaLateral } from "@/components/Editorial";
import { FormularioCadastro } from "@/components/FormularioCadastro";
import { supabaseConfigurado } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Cadastro",
  description: "Cadastre-se para receber novidades do SOSTEA. Pedimos só o essencial.",
};

// Lê as variáveis de ambiente a cada acesso, para o aviso refletir a configuração atual.
export const dynamic = "force-dynamic";

export default function Cadastro() {
  const ativo = supabaseConfigurado();

  return (
    <>
      <CabecalhoPagina numero="05" secao="Cadastro" titulo="Faça parte do SOSTEA">
        <p>
          Deixe seu contato para receber novidades: novos conteúdos, a abertura do diretório de
          profissionais e outras seções. Leva menos de um minuto.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas
          esquerda={
            <div className="space-y-6 text-nota lg:pr-6">
              <NotaLateral titulo="O que pedimos">
                <p>Nome, e-mail, cidade, estado e como você se relaciona com o tema.</p>
              </NotaLateral>
              <NotaLateral titulo="O que não pedimos">
                <p>
                  Diagnóstico, laudos ou qualquer dado de saúde. Pela LGPD, esses dados são
                  sensíveis, e não precisamos deles.
                </p>
              </NotaLateral>
            </div>
          }
          lateral={
            <NotaLateral titulo="Seus dados">
              <p>
                Você pode pedir para apagar seus dados quando quiser.{" "}
                <Link href="/privacidade">Saiba mais</Link>.
              </p>
            </NotaLateral>
          }
        >
          <div className="max-w-texto">
            <p className="mb-8 text-nota text-tinta-suave">
              Todos os campos são obrigatórios, exceto quando indicado “opcional”.
            </p>
            <FormularioCadastro ativo={ativo} />
          </div>
        </Colunas>
      </div>
    </>
  );
}
