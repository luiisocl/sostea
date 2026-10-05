import Link from "next/link";
import { MapPin } from "lucide-react";
import { redesSociais } from "@/data/equipe";
import { cidade, emergencia, linksRodape } from "@/lib/navegacao";
import { IconeInstagram, IconeSpotify, IconeYoutube } from "./IconesSociais";
import { Logo } from "./Logo";

const redes = [
  { nome: "Instagram", url: redesSociais.instagram, Icone: IconeInstagram },
  { nome: "YouTube", url: redesSociais.youtube, Icone: IconeYoutube },
  { nome: "Spotify", url: redesSociais.spotify, Icone: IconeSpotify },
];

export function Rodape() {
  return (
    <footer className="mt-20 bg-marinho-escuro text-branco">
      <div className="container-pagina flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:gap-10">
        <Link href="/" className="shrink-0 no-underline" aria-label="SOSTEA — página inicial">
          <Logo claro />
        </Link>

        <nav aria-label="Rodapé" className="flex-1">
          <ul className="flex flex-wrap gap-x-1 gap-y-2 lg:justify-center xl:flex-nowrap">
            {linksRodape.map((l, i) => (
              <li key={l.href} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="mx-3 hidden h-4 w-px bg-branco/25 sm:block" />}
                <Link
                  href={l.href}
                  className="inline-block py-1.5 pr-3 text-nota whitespace-nowrap text-branco no-underline hover:text-azul-circ hover:underline sm:pr-0"
                >
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex items-center gap-2" aria-label="Redes sociais">
            {redes.map(({ nome, url, Icone }) => (
              <li key={nome}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-branco hover:bg-branco/10 hover:text-branco"
                  >
                    <Icone className="h-5.5 w-5.5" />
                    <span className="sr-only">{nome} do SOSTEA (abre em nova aba)</span>
                  </a>
                ) : (
                  <span
                    title={`${nome}: em breve`}
                    className="flex h-10 w-10 items-center justify-center text-branco/80"
                  >
                    <Icone className="h-5.5 w-5.5" />
                    <span className="sr-only">{nome}: em breve</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="border-branco/25 text-nota sm:border-l sm:pl-6">
            <p className="flex items-center gap-1.5 font-bold">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {cidade}
            </p>
            <p className="text-mini text-branco/85">Informação para um futuro com mais inclusão.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-branco/15">
        <div className="container-pagina flex flex-col gap-3 py-5 text-mini text-branco/85 md:flex-row md:items-center md:justify-between">
          <p>
            <strong className="text-branco">Em emergência:</strong>{" "}
            {emergencia.map((e, i) => (
              <span key={e.numero}>
                {i > 0 && " · "}
                <a href={`tel:${e.numero}`} className="font-bold text-branco underline-offset-4 hover:text-azul-circ">
                  {e.nome} {e.numero}
                </a>{" "}
                ({e.descricao.toLowerCase()})
              </span>
            ))}
          </p>
          <p>
            Conteúdo informativo. Não substitui avaliação de profissionais de saúde. SOSTEA —
            projeto acadêmico, {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
}
