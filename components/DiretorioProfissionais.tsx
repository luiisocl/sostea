"use client";

import { useId, useState } from "react";
import {
  especialidades,
  nomeEspecialidade,
  type Profissional,
} from "@/lib/profissionais";

const nomesPublico = { criancas: "crianças", adolescentes: "adolescentes", adultos: "adultos" };

export function DiretorioProfissionais({ profissionais }: { profissionais: Profissional[] }) {
  const [especialidade, setEspecialidade] = useState("");
  const [cidade, setCidade] = useState("");
  const avisoId = useId();

  const cidades = [...new Set(profissionais.map((p) => `${p.cidade} — ${p.uf}`))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  const filtrados = profissionais.filter(
    (p) =>
      (!especialidade || p.especialidade === especialidade) &&
      (!cidade || `${p.cidade} — ${p.uf}` === cidade),
  );

  return (
    <div>
      <form
        role="search"
        aria-label="Filtrar profissionais"
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 border-y border-tinta bg-papel-escuro px-4 py-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
      >
        <div>
          <label htmlFor="filtro-especialidade" className="mb-1.5 block text-nota font-bold">
            Especialidade
          </label>
          <select
            id="filtro-especialidade"
            className="campo"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
          >
            <option value="">Todas</option>
            {especialidades.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filtro-cidade" className="mb-1.5 block text-nota font-bold">
            Cidade
          </label>
          <select
            id="filtro-cidade"
            className="campo"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          >
            <option value="">Todas</option>
            {cidades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="min-h-11 cursor-pointer px-2 text-nota text-destaque underline underline-offset-4 disabled:cursor-default disabled:text-tinta-suave disabled:no-underline"
          onClick={() => {
            setEspecialidade("");
            setCidade("");
          }}
          disabled={!especialidade && !cidade}
        >
          Limpar filtros
        </button>
      </form>

      <h2 className="sr-only">Perfis</h2>
      <p aria-live="polite" className="mt-6 text-nota text-tinta-suave">
        {filtrados.length === 1
          ? "1 perfil encontrado"
          : `${filtrados.length} perfis encontrados`}
      </p>

      <p id={avisoId} className="sr-only">
        Contato indisponível. Em breve: estamos validando os profissionais parceiros.
      </p>

      {filtrados.length === 0 ? (
        <p className="mt-4 border-t border-fio py-8">
          Nenhum perfil com esses filtros. Tente outra combinação.
        </p>
      ) : (
        <ul className="mt-4 border-t border-tinta">
          {filtrados.map((p) => (
            <li key={p.id} className="grid gap-4 border-b border-fio py-6 md:grid-cols-[1fr_15rem] md:gap-8">
              <div>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rotulo text-destaque">{nomeEspecialidade(p.especialidade)}</span>
                  {p.ilustrativo && (
                    <span className="rounded-sutil border border-argila px-1.5 py-px text-mini font-bold text-argila">
                      Perfil ilustrativo
                    </span>
                  )}
                </p>
                <h3 className="mt-2 text-h3">{p.nome}</h3>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-nota">
                  <dt className="text-tinta-suave">Local</dt>
                  <dd>
                    {p.cidade} — {p.uf}
                  </dd>
                  <dt className="text-tinta-suave">Atende</dt>
                  <dd>{p.publico.map((x) => nomesPublico[x]).join(", ")}</dd>
                  <dt className="text-tinta-suave">Formato</dt>
                  <dd>
                    {p.modalidade.map((m) => (m === "online" ? "on-line" : m)).join(" e ")}
                    {p.atendeSUS && " · atende pelo SUS"}
                  </dd>
                  <dt className="text-tinta-suave">Registro</dt>
                  <dd>{p.registro}</dd>
                </dl>
              </div>
              <div className="md:pt-8">
                <button type="button" className="botao w-full" disabled aria-describedby={avisoId}>
                  Entrar em contato
                </button>
                <p className="mt-2 text-mini text-tinta-suave">
                  Em breve: estamos validando os profissionais parceiros.
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
