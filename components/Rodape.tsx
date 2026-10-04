import Link from "next/link";
import { emergencia, secoes } from "@/lib/navegacao";
import { Simbolo } from "./Simbolo";

export function Rodape() {
  return (
    <footer className="mt-24 border-t border-tinta bg-papel-escuro">
      <div className="mx-auto grid max-w-pagina gap-12 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <section aria-labelledby="rodape-emergencia" className="lg:col-span-5">
          <h2 id="rodape-emergencia" className="rotulo">
            Em caso de emergência
          </h2>
          <ul className="mt-4 divide-y divide-fio border-y border-fio">
            {emergencia.map((e) => (
              <li key={e.numero} className="flex items-baseline gap-4 py-3">
                <a
                  href={`tel:${e.numero}`}
                  className="font-titulo text-h2 leading-none text-tinta no-underline hover:text-destaque"
                >
                  <span className="sr-only">Ligar para {e.nome}, </span>
                  {e.numero}
                </a>
                <span className="text-nota">
                  <strong className="font-bold">{e.nome}</strong>
                  <span className="text-tinta-suave"> — {e.descricao}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-texto text-nota text-tinta-suave">
            Se houver risco imediato à vida, ligue para o SAMU (192). O SOSTEA é um projeto
            informativo e não oferece atendimento.
          </p>
        </section>

        <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-7">
          <h2 className="rotulo">Seções</h2>
          <ul className="mt-4 space-y-1.5 text-nota">
            <li>
              <Link href="/" className="text-tinta">
                Início
              </Link>
            </li>
            {secoes.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-tinta">
                  {s.rotulo}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacidade" className="text-tinta">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-nota text-tinta-suave lg:col-span-3">
          <h2 className="rotulo">Sobre o conteúdo</h2>
          <p className="mt-4">
            Este conteúdo é informativo e não substitui avaliação de um profissional de saúde.
          </p>
          <p className="mt-3">
            As informações se baseiam em fontes oficiais: Ministério da Saúde, Organização
            Mundial da Saúde (OMS), CDC e legislação brasileira. Cada página lista suas fontes.
          </p>
        </div>
      </div>

      <div className="border-t border-fio">
        <div className="mx-auto flex max-w-pagina flex-wrap items-center justify-between gap-3 px-5 py-5 text-mini text-tinta-suave sm:px-8">
          <span className="inline-flex items-center gap-2">
            <Simbolo className="h-3.5 w-7 text-tinta-suave" />
            SOSTEA — projeto acadêmico, {new Date().getFullYear()}
          </span>
          <Link href="/privacidade" className="text-tinta-suave">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
