"use client";

import { useSyncExternalStore } from "react";
import {
  assinar,
  definirPreferencia,
  lerEstimulos,
  lerTexto,
  type TamanhoTexto,
} from "@/lib/preferencias";

const tamanhos: { valor: TamanhoTexto; rotulo: string; classe: string }[] = [
  { valor: "normal", rotulo: "Normal", classe: "text-nota" },
  { valor: "grande", rotulo: "Grande", classe: "text-corpo" },
  { valor: "maior", rotulo: "Maior", classe: "text-lead" },
];

// Controles de leitura. As escolhas ficam salvas só neste navegador.
export function PainelAcessibilidade() {
  const estimulos = useSyncExternalStore(assinar, lerEstimulos, () => "normais" as const);
  const texto = useSyncExternalStore(assinar, lerTexto, () => "normal" as const);
  const reduzidos = estimulos === "reduzidos";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card p-6">
        <h2 className="text-h3">Reduzir estímulos</h2>
        <p className="mt-2 text-nota text-texto-suave">
          Deixa as cores mais suaves, diminui a saturação das fotos e desliga qualquer movimento.
        </p>
        <button
          type="button"
          role="switch"
          aria-checked={reduzidos}
          onClick={() => definirPreferencia({ estimulos: reduzidos ? "normais" : "reduzidos" })}
          className="mt-5 inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border border-borda px-4 font-titulo text-nota font-bold text-marinho hover:border-azul"
        >
          <span
            aria-hidden="true"
            className={`relative inline-block h-6 w-11 rounded-full transition-colors ${reduzidos ? "bg-marinho" : "bg-borda"}`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-fundo shadow-suave transition-[left] ${reduzidos ? "left-6" : "left-1"}`}
            />
          </span>
          {reduzidos ? "Ativado" : "Desativado"}
        </button>
      </div>

      <div className="card p-6">
        <h2 id="titulo-tamanho" className="text-h3">Tamanho do texto</h2>
        <p className="mt-2 text-nota text-texto-suave">
          Também dá para mudar pelo botão “aA” no topo de todas as páginas.
        </p>
        <div role="group" aria-labelledby="titulo-tamanho" className="mt-5 flex flex-wrap gap-2">
          {tamanhos.map((t) => (
            <button
              key={t.valor}
              type="button"
              aria-pressed={texto === t.valor}
              onClick={() => definirPreferencia({ texto: t.valor })}
              className={`min-h-12 cursor-pointer rounded-full border px-5 font-titulo font-bold ${t.classe} ${
                texto === t.valor ? "border-marinho bg-marinho text-branco" : "border-borda text-marinho hover:border-azul"
              }`}
            >
              {t.rotulo}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
