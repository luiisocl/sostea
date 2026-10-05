"use client";

import { useState } from "react";
import { doacoesAtivas, formatarReais, pix, valorMinimo, valoresSugeridos } from "@/lib/doacoes";

export function FormularioDoacao() {
  const [escolha, setEscolha] = useState<string>(String(valoresSugeridos[1]));
  const [outro, setOutro] = useState("");

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_16rem] md:gap-8">
      <form onSubmit={(e) => e.preventDefault()} aria-describedby="aviso-doacao">
        <fieldset>
          <legend className="font-titulo text-h3">Escolha um valor</legend>
          <p className="mt-1 text-nota text-texto-suave">Doação única, de qualquer valor.</p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[...valoresSugeridos.map(String), "outro"].map((v) => {
              const ativo = escolha === v;
              return (
                <label
                  key={v}
                  className={`relative flex min-h-16 cursor-pointer items-center justify-center rounded-campo border border-borda px-3 py-4 font-titulo text-h3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-azul ${
                    ativo ? "bg-marinho text-branco" : "bg-fundo text-texto hover:bg-fundo-suave"
                  }`}
                >
                  <input
                    type="radio"
                    name="valor"
                    value={v}
                    checked={ativo}
                    onChange={() => setEscolha(v)}
                    className="sr-only"
                  />
                  {v === "outro" ? "Outro" : formatarReais(Number(v)).replace(",00", "")}
                </label>
              );
            })}
          </div>

          {escolha === "outro" && (
            <div className="mt-5 max-w-60">
              <label htmlFor="valor-outro" className="mb-1.5 block text-nota font-bold">
                Valor em reais
              </label>
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="text-texto-suave">
                  R$
                </span>
                <input
                  id="valor-outro"
                  inputMode="decimal"
                  className="campo"
                  value={outro}
                  onChange={(e) => setOutro(e.target.value.replace(/[^\d,]/g, ""))}
                  aria-describedby="valor-outro-dica"
                />
              </div>
              <p id="valor-outro-dica" className="mt-1.5 text-mini text-texto-suave">
                Mínimo de {formatarReais(valorMinimo)}.
              </p>
            </div>
          )}
        </fieldset>

        <div className="mt-8">
          <button type="submit" className="botao botao-escuro" disabled={!doacoesAtivas}>
            Doar
          </button>
          <p id="aviso-doacao" className="mt-3 border-l-2 border-alerta-borda pl-3 text-nota">
            <strong className="font-bold">Doações em breve.</strong> Ainda não estamos recebendo
            valores. Nenhum pagamento será feito por esta página.
          </p>
        </div>
      </form>

      <section aria-labelledby="pix-titulo" className="border-t border-borda pt-3">
        <h3 id="pix-titulo" className="rotulo text-texto">
          Pix
        </h3>
        <div className="mt-4 flex aspect-square w-full max-w-48 items-center justify-center border border-dashed border-borda bg-fundo-suave p-4 text-center text-mini text-texto-suave">
          {pix.qrCodeSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={pix.qrCodeSrc} alt="QR code para doação via Pix" className="h-full w-full" />
          ) : (
            "Espaço reservado para o QR code"
          )}
        </div>
        <dl className="mt-4 space-y-2 text-nota">
          <div>
            <dt className="text-texto-suave">Chave ({pix.tipo})</dt>
            <dd className="break-all font-bold">{pix.chave}</dd>
          </div>
          <div>
            <dt className="text-texto-suave">Favorecido</dt>
            <dd>{pix.favorecido}</dd>
          </div>
        </dl>
        <p className="mt-3 text-mini text-alerta-titulo font-bold">
          Chave de exemplo. Não faça transferências.
        </p>
      </section>
    </div>
  );
}
