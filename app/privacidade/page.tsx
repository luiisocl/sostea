import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { CabecalhoPagina, Fontes, ListaMarcada, Secao, Sumario } from "@/components/ui";
import { emailContato } from "@/data/equipe";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Conexões que Acolhem trata os dados do cadastro, de acordo com a LGPD.",
};

const secoesPagina = [
  { id: "quais-dados", titulo: "Quais dados coletamos" },
  { id: "para-que", titulo: "Para que usamos" },
  { id: "base-legal", titulo: "Base legal" },
  { id: "armazenamento", titulo: "Onde os dados ficam" },
  { id: "direitos", titulo: "Seus direitos" },
  { id: "cookies", titulo: "Cookies e preferências" },
];

export default function Privacidade() {
  return (
    <>
      <CabecalhoPagina rotulo="Privacidade" titulo="Política de Privacidade" icone={ShieldCheck} cor="verde">
        <p>
          Em poucas palavras: pedimos só o necessário, usamos apenas para falar com você sobre o
          Conexões que Acolhem e apagamos quando você pedir.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div>
          <Sumario itens={secoesPagina} />
        </div>

        <div>
          <p className="mb-8 text-nota text-texto-suave">Última atualização: 5 de outubro de 2026.</p>

          <Secao id="quais-dados" titulo="Quais dados coletamos">
            <p>
              No <Link href="/cadastro">cadastro</Link>: nome, e-mail, cidade, estado, perfil (por
              exemplo, familiar ou estudante) e, se você quiser, um texto sobre seus interesses.
            </p>
            <p>
              <strong>Não pedimos diagnóstico nem qualquer dado de saúde.</strong> Pela Lei Geral de
              Proteção de Dados (LGPD), dados de saúde são sensíveis e precisam de cuidados
              especiais. Por isso, pedimos que você também não escreva informações de saúde no campo
              de interesse.
            </p>
          </Secao>

          <Secao id="para-que" titulo="Para que usamos">
            <ListaMarcada
              itens={[
                "Enviar novidades sobre o Conexões que Acolhem, como novos conteúdos e seções.",
                "Entender, de forma geral, quem usa o site e o que interessa a cada público.",
              ]}
            />
            <p>Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.</p>
          </Secao>

          <Secao id="base-legal" titulo="Base legal">
            <p>
              Tratamos seus dados com base no seu <strong>consentimento</strong> (LGPD, art. 7º,
              inciso I), dado ao marcar a caixa de concordância no formulário.
            </p>
          </Secao>

          <Secao id="armazenamento" titulo="Onde os dados ficam">
            <p>
              Os dados ficam guardados num banco de dados do serviço Supabase, com acesso restrito à
              equipe do projeto. Ficam guardados enquanto o projeto existir ou até você pedir para
              apagar.
            </p>
          </Secao>

          <Secao id="direitos" titulo="Seus direitos">
            <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
            <ListaMarcada
              cor="verde"
              itens={[
                "confirmação de que temos seus dados e acesso a eles;",
                "correção de dados errados;",
                "exclusão dos seus dados;",
                "revogação do consentimento.",
              ]}
            />
            <p>
              Para isso, escreva para <strong className="break-words">{emailContato}</strong>.
            </p>
          </Secao>

          <Secao id="cookies" titulo="Cookies e preferências">
            <p>
              O Conexões que Acolhem não usa cookies de rastreamento nem de publicidade. As preferências de
              tamanho do texto e de redução de estímulos ficam salvas apenas no seu navegador e não
              são enviadas para nós.
            </p>
          </Secao>

          <Fontes fontes={[fontes.lgpd]} />
        </div>
      </div>
    </>
  );
}
