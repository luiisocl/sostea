"use client";

import { useSyncExternalStore } from "react";
import {
  assinar,
  definirPreferencia,
  lerEstimulos,
  lerTexto,
  type TamanhoTexto,
} from "@/lib/preferencias";

const tamanhos: { valor: TamanhoTexto; rotulo: string; nome: string; classe: string }[] = [
  { valor: "normal", rotulo: "A", nome: "Texto em tamanho normal", classe: "text-nota" },
  { valor: "grande", rotulo: "A+", nome: "Texto grande", classe: "text-corpo" },
  { valor: "maior", rotulo: "A++", nome: "Texto maior", classe: "text-lead" },
];

export function BarraAcessibilidade() {
  const estimulos = useSyncExternalStore(assinar, lerEstimulos, () => "normais" as const);
  const texto = useSyncExternalStore(assinar, lerTexto, () => "normal" as const);
  const reduzidos = estimulos === "reduzidos";

  return (
    <section aria-label="Preferências de leitura" className="border-b border-fio bg-papel-escuro">
      <div className="mx-auto flex max-w-pagina flex-wrap items-center gap-x-6 gap-y-2 px-5 py-2 sm:px-8">
        <button
          type="button"
          aria-pressed={reduzidos}
          onClick={() => definirPreferencia({ estimulos: reduzidos ? "normais" : "reduzidos" })}
          className="inline-flex min-h-9 cursor-pointer items-center gap-2.5 text-nota text-tinta hover:text-destaque"
        >
          <span
            aria-hidden="true"
            className={`relative inline-block h-4 w-7 rounded-full border border-tinta-suave transition-colors ${
              reduzidos ? "bg-destaque border-destaque" : "bg-papel"
            }`}
          >
            <span
              className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-[left] ${
                reduzidos ? "left-[0.8rem] bg-papel" : "left-0.5 bg-tinta-suave"
              }`}
            />
          </span>
          Reduzir estímulos
        </button>

        <div role="group" aria-label="Tamanho do texto" className="flex items-center gap-1">
          <span className="mr-1.5 text-nota text-tinta-suave" aria-hidden="true">
            Texto
          </span>
          {tamanhos.map((t) => (
            <button
              key={t.valor}
              type="button"
              aria-pressed={texto === t.valor}
              aria-label={t.nome}
              onClick={() => definirPreferencia({ texto: t.valor })}
              className={`min-h-9 min-w-9 cursor-pointer rounded-sutil border px-1.5 font-titulo leading-none ${t.classe} ${
                texto === t.valor
                  ? "border-tinta bg-tinta text-papel"
                  : "border-transparent text-tinta hover:border-fio-forte"
              }`}
            >
              {t.rotulo}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
