"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { secoes } from "@/lib/navegacao";
import { Simbolo } from "./Simbolo";

export function Cabecalho() {
  const caminho = usePathname();

  return (
    <header className="border-b border-tinta">
      <div className="mx-auto flex max-w-pagina flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-6">
        <Link
          href="/"
          className="group inline-flex items-end gap-3 self-start text-tinta no-underline hover:text-tinta"
          aria-current={caminho === "/" ? "page" : undefined}
        >
          <Simbolo className="mb-1 h-6 w-11 text-destaque" />
          <span className="flex flex-col">
            <span className="font-titulo text-h3 leading-none font-semibold tracking-tight">
              SOSTEA
            </span>
            <span className="mt-1 text-mini text-tinta-suave">
              Informação sobre o espectro autista
            </span>
          </span>
        </Link>

        <nav aria-label="Principal">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {secoes.map((s) => {
              const ativo = caminho === s.href || caminho.startsWith(s.href + "/");
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    aria-current={ativo ? "page" : undefined}
                    className={`inline-block py-1.5 text-nota no-underline ${
                      ativo
                        ? "border-b-2 border-destaque font-bold text-tinta"
                        : "border-b-2 border-transparent text-tinta hover:border-fio-forte hover:text-tinta"
                    }`}
                  >
                    {s.rotulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
