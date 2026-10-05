"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { menu } from "@/lib/navegacao";
import { assinar, definirPreferencia, lerTexto, type TamanhoTexto } from "@/lib/preferencias";
import { Logo } from "./Logo";

const proximoTamanho: Record<TamanhoTexto, TamanhoTexto> = {
  normal: "grande",
  grande: "maior",
  maior: "normal",
};
const nomeTamanho: Record<TamanhoTexto, string> = {
  normal: "normal",
  grande: "grande",
  maior: "maior",
};

function ativo(caminho: string, href: string) {
  if (href === "/") return caminho === "/";
  return caminho === href || caminho.startsWith(href + "/");
}

function BotaoTexto() {
  const texto = useSyncExternalStore(assinar, lerTexto, () => "normal" as const);
  return (
    <button
      type="button"
      onClick={() => definirPreferencia({ texto: proximoTamanho[texto] })}
      aria-label={`Tamanho do texto: ${nomeTamanho[texto]}. Clique para ${
        texto === "maior" ? "voltar ao normal" : "aumentar"
      }.`}
      title="Aumentar o tamanho do texto"
      className="relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full font-titulo font-bold text-marinho hover:bg-faixa"
    >
      <span aria-hidden="true" className="text-mini">a</span>
      <span aria-hidden="true" className="text-lead leading-none">A</span>
      {texto !== "normal" && (
        <span
          aria-hidden="true"
          className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-azul"
        />
      )}
    </button>
  );
}

function Busca({ id, className = "" }: { id: string; className?: string }) {
  return (
    <form action="/busca" role="search" className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">
        Buscar no site
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-texto-suave"
      />
      <input
        id={id}
        name="q"
        type="search"
        placeholder="Buscar conteúdos, temas ou serviços..."
        className="h-11 w-full rounded-full border border-transparent bg-faixa pr-4 pl-11 text-nota text-texto placeholder:text-texto-suave hover:border-borda"
      />
    </form>
  );
}

export function Cabecalho() {
  const caminho = usePathname();
  const [aberto, setAberto] = useState(false);
  const idMenu = useId();

  // Fecha o menu do celular ao trocar de página ou apertar Esc.
  useEffect(() => {
    const fechar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, []);
  const [caminhoAnterior, setCaminhoAnterior] = useState(caminho);
  if (caminho !== caminhoAnterior) {
    setCaminhoAnterior(caminho);
    setAberto(false);
  }

  return (
    <header className="border-b border-borda bg-fundo">
      <div className="container-pagina flex h-20 items-center gap-4 2xl:gap-6">
        <Link
          href="/"
          className="shrink-0 no-underline"
          aria-label="Conexões que Incluem — página inicial"
        >
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {menu.map((item) => {
              const atual = ativo(caminho, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={atual ? "page" : undefined}
                    className={`relative block px-2.5 py-2 font-titulo text-nota whitespace-nowrap no-underline ${
                      atual ? "font-bold text-marinho" : "font-semibold text-texto hover:text-azul"
                    }`}
                  >
                    {item.rotulo}
                    {atual && (
                      <span
                        aria-hidden="true"
                        className="absolute right-2.5 -bottom-[0.95rem] left-2.5 h-[3px] rounded-full bg-marinho"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <Busca id="busca-topo" className="hidden w-64 lg:block 2xl:w-72" />
          <BotaoTexto />
          <Link
            href="/cadastro"
            aria-hidden="true"
            tabIndex={-1}
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-faixa text-marinho sm:flex"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link href="/cadastro" className="botao botao-escuro hidden min-h-11 px-5 sm:inline-flex">
            Acessar
          </Link>
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls={idMenu}
            onClick={() => setAberto((a) => !a)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-marinho hover:bg-faixa xl:hidden"
          >
            {aberto ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
            <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      {/* Menu do celular / tablet */}
      <div id={idMenu} hidden={!aberto} className="border-t border-borda bg-fundo xl:hidden">
        <div className="container-pagina py-5">
          <Busca id="busca-menu" className="mb-4 lg:hidden" />
          <nav aria-label="Principal (celular)">
            <ul className="divide-y divide-borda">
              {menu.map((item) => {
                const atual = ativo(caminho, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={atual ? "page" : undefined}
                      className={`flex min-h-12 items-center font-titulo text-corpo no-underline ${
                        atual ? "font-extrabold text-marinho underline decoration-[3px] underline-offset-8" : "font-semibold text-texto"
                      }`}
                    >
                      {item.rotulo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Link href="/cadastro" className="botao botao-escuro mt-4 w-full sm:hidden">
            Acessar
          </Link>
        </div>
      </div>
    </header>
  );
}
