"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { especialidades, type Profissional } from "@/lib/profissionais";

type Props = {
  profissionais: Profissional[];
  /** ids de especialidade mostrados como pílulas */
  filtros: string[];
  /** "home": cards compactos em linha; "completo": cards com mais detalhes */
  variante?: "home" | "completo";
  /** máximo de cards (home) */
  limite?: number;
};

function iniciais(nome: string) {
  return nome
    .replace(/\(.*\)/, "")
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function DiretorioProfissionais({ profissionais, filtros, variante = "completo", limite }: Props) {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<string>("");
  const idBusca = useId();
  const idAviso = useId();

  const termo = busca.trim().toLowerCase();
  const filtrados = profissionais.filter(
    (p) =>
      (!filtro || p.especialidade === filtro) &&
      (!termo || [p.nome, p.area, p.descricao, p.cidade].join(" ").toLowerCase().includes(termo)),
  );
  const visiveis = limite ? filtrados.slice(0, limite) : filtrados;
  const pilulas = [{ id: "", nome: "Todos" }, ...especialidades.filter((e) => filtros.includes(e.id))];

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative lg:w-80">
          <label htmlFor={idBusca} className="sr-only">
            Buscar profissionais por nome, área ou palavra-chave
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-texto-suave" />
          <input
            id={idBusca}
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, área ou palavra-chave..."
            className="h-11 w-full rounded-full border border-borda bg-fundo pr-4 pl-11 text-nota placeholder:text-texto-suave"
          />
        </div>
        <div role="group" aria-label="Filtrar por área" className="flex flex-wrap gap-2">
          {pilulas.map((p) => {
            const atual = filtro === p.id;
            return (
              <button
                key={p.id || "todos"}
                type="button"
                aria-pressed={atual}
                onClick={() => setFiltro(p.id)}
                className={`min-h-10 cursor-pointer rounded-full border px-4 font-titulo text-mini font-bold ${
                  atual
                    ? "border-marinho bg-marinho text-branco"
                    : "border-borda bg-fundo text-marinho hover:border-azul hover:text-azul"
                }`}
              >
                {p.nome}
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtrados.length === 1 ? "1 perfil encontrado" : `${filtrados.length} perfis encontrados`}
      </p>
      <p id={idAviso} className="sr-only">
        Contato indisponível. Em breve: estamos validando os profissionais parceiros.
      </p>

      {visiveis.length === 0 ? (
        <p className="mt-6 rounded-card bg-fundo-suave p-6 text-texto-suave">
          Nenhum perfil encontrado. Tente outra palavra ou outro filtro.
        </p>
      ) : (
        <ul
          className={`mt-6 grid gap-4 ${
            variante === "home" ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {visiveis.map((p) => (
            <li key={p.id} className="card flex gap-4 p-3">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-campo bg-azul-bg">
                {p.foto ? (
                  <Image src={p.foto} alt="" fill sizes="80px" className="object-cover object-top" />
                ) : (
                  <span aria-hidden="true" className="flex h-full w-full items-center justify-center font-titulo text-h3 font-extrabold text-azul-tom">
                    {iniciais(p.nome)}
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                {p.demonstrativo && (
                  <span className="self-start rounded-full bg-fundo-suave px-2.5 py-0.5 text-[0.6875rem] font-bold whitespace-nowrap text-texto-suave ring-1 ring-borda">
                    Perfil demonstrativo
                  </span>
                )}
                <h3 className="mt-1.5 text-h4">{p.area}</h3>
                {variante === "completo" && <p className="text-nota text-texto">{p.nome}</p>}
                <p className="text-mini text-texto-suave">{p.descricao}</p>
                {variante === "completo" && (
                  <p className="mt-1 text-mini text-texto-suave">
                    {p.registro}
                    {p.atendeSUS && " · atende pelo SUS"}
                  </p>
                )}
                <p className="mt-auto flex items-center gap-1 pt-1.5 text-mini text-texto-suave">
                  <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-marinho" />
                  {p.cidade} - {p.uf}
                </p>
                {variante === "completo" && (
                  <div className="mt-3">
                    <button type="button" disabled aria-describedby={idAviso} className="botao min-h-10 px-4 text-mini">
                      Entrar em contato
                    </button>
                    <p className="mt-1.5 text-mini text-texto-suave">Em breve: estamos validando os profissionais parceiros.</p>
                  </div>
                )}
                {variante === "home" && (
                  <p className="mt-1 text-mini font-bold text-texto-suave">Contato: em breve</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
