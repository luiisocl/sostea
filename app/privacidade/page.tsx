import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina, Colunas, Fontes, SecaoNumerada } from "@/components/Editorial";
import { emailContato } from "@/data/equipe";
import { fontes } from "@/lib/fontes";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o SOSTEA trata os dados do cadastro, de acordo com a LGPD.",
};

export default function Privacidade() {
  return (
    <>
      <CabecalhoPagina numero="—" secao="Privacidade" titulo="Política de Privacidade">
        <p>
          Em poucas palavras: pedimos só o necessário, usamos apenas para falar com você sobre o
          SOSTEA e apagamos quando você pedir.
        </p>
      </CabecalhoPagina>

      <div className="mt-10">
        <Colunas>
          <p className="text-nota text-tinta-suave">Última atualização: 4 de outubro de 2026.</p>

          <SecaoNumerada id="quais-dados" numero="1" titulo="Quais dados coletamos">
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
          </SecaoNumerada>

          <SecaoNumerada id="para-que" numero="2" titulo="Para que usamos">
            <ul className="space-y-2 border-l border-fio pl-5">
              <li>Enviar novidades sobre o SOSTEA, como novos conteúdos e seções.</li>
              <li>Entender, de forma geral, quem usa o site e o que interessa a cada público.</li>
            </ul>
            <p>Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.</p>
          </SecaoNumerada>

          <SecaoNumerada id="base-legal" numero="3" titulo="Base legal">
            <p>
              Tratamos seus dados com base no seu <strong>consentimento</strong> (LGPD, art. 7º,
              inciso I), dado ao marcar a caixa de concordância no formulário.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="armazenamento" numero="4" titulo="Onde os dados ficam">
            <p>
              Os dados ficam guardados num banco de dados do serviço Supabase, com acesso restrito à
              equipe do projeto. Ficam guardados enquanto o projeto existir ou até você pedir para
              apagar.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="direitos" numero="5" titulo="Seus direitos">
            <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
            <ul className="space-y-2 border-l border-fio pl-5">
              <li>confirmação de que temos seus dados e acesso a eles;</li>
              <li>correção de dados errados;</li>
              <li>exclusão dos seus dados;</li>
              <li>revogação do consentimento.</li>
            </ul>
            <p>
              Para isso, escreva para <strong className="break-words">{emailContato}</strong>.
            </p>
          </SecaoNumerada>

          <SecaoNumerada id="cookies" numero="6" titulo="Cookies e preferências">
            <p>
              O SOSTEA não usa cookies de rastreamento nem de publicidade. As opções “Reduzir
              estímulos” e “Tamanho do texto” ficam salvas apenas no seu navegador e não são
              enviadas para nós.
            </p>
          </SecaoNumerada>

          <Fontes fontes={[fontes.lgpd]} />
        </Colunas>
      </div>
    </>
  );
}
