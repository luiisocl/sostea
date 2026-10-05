"use client";

import { useId, useState } from "react";

// Lista de verificação interativa usada dentro de artigos MDX.
// As marcações ficam só na tela (não são salvas).
export function Checklist({ titulo, itens }: { titulo: string; itens: string[] }) {
  const [marcados, setMarcados] = useState<boolean[]>(() => itens.map(() => false));
  const id = useId();
  const feitos = marcados.filter(Boolean).length;

  return (
    <div className="not-prose my-6 rounded-card border border-borda bg-fundo p-5 shadow-suave">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p id={id} className="font-titulo font-bold text-marinho">
          {titulo}
        </p>
        <p className="text-mini text-texto-suave" aria-live="polite">
          {feitos} de {itens.length} feitos
        </p>
      </div>
      <ul aria-labelledby={id} className="mt-3 space-y-1" style={{ listStyle: "none", paddingLeft: 0 }}>
        {itens.map((item, i) => (
          <li key={item} style={{ marginTop: 0 }}>
            <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-campo px-2 hover:bg-fundo-suave">
              <input
                type="checkbox"
                checked={marcados[i]}
                onChange={() => setMarcados((m) => m.map((v, j) => (j === i ? !v : v)))}
                className="h-5 w-5 shrink-0 accent-azul"
              />
              <span className={marcados[i] ? "text-texto-suave line-through" : ""}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      {feitos > 0 && (
        <button
          type="button"
          onClick={() => setMarcados(itens.map(() => false))}
          className="mt-3 cursor-pointer text-nota font-bold text-azul underline"
        >
          Desmarcar tudo
        </button>
      )}
    </div>
  );
}
