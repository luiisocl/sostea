import type { Metadata } from "next";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { CabecalhoPagina, Nota } from "@/components/ui";
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
      <CabecalhoPagina rotulo="Acessar" titulo="Faça parte do SOSTEA" icone={UserRound}>
        <p>
          Deixe seu contato para receber novidades: novos conteúdos, a abertura do diretório de
          profissionais e outras seções. Leva menos de um minuto.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
        <div className="card p-6 sm:p-8">
          <p className="mb-8 text-nota text-texto-suave">
            Todos os campos são obrigatórios, exceto quando indicado “opcional”.
          </p>
          <FormularioCadastro ativo={ativo} />
        </div>

        <aside className="space-y-4">
          <Nota titulo="O que pedimos" cor="azul">
            <p>Nome, e-mail, cidade, estado e como você se relaciona com o tema.</p>
          </Nota>
          <Nota titulo="O que não pedimos" cor="verde">
            <p>
              Diagnóstico, laudos ou qualquer dado de saúde. Pela LGPD, esses dados são sensíveis,
              e não precisamos deles.
            </p>
          </Nota>
          <Nota titulo="Seus dados" cor="lilas">
            <p>
              Você pode pedir para apagar seus dados quando quiser.{" "}
              <Link href="/privacidade">Saiba mais</Link>.
            </p>
          </Nota>
        </aside>
      </div>
    </>
  );
}
