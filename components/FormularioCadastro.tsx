"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  errosPorCampo,
  esquemaCadastro,
  perfis,
  ufs,
  type CampoCadastro,
  type ErrosCadastro,
} from "@/lib/validacao";

type Estado = "editando" | "enviando" | "sucesso";

const ordemCampos: CampoCadastro[] = ["nome", "email", "cidade", "uf", "perfil", "interesse", "consentimento"];

const rotulos: Record<CampoCadastro, string> = {
  nome: "Nome",
  email: "E-mail",
  cidade: "Cidade",
  uf: "Estado",
  perfil: "Você é",
  interesse: "Interesse",
  consentimento: "Consentimento",
};

export function FormularioCadastro({ ativo }: { ativo: boolean }) {
  const [estado, setEstado] = useState<Estado>("editando");
  const [erros, setErros] = useState<ErrosCadastro>({});
  const [mensagemGeral, setMensagemGeral] = useState("");
  const [tamanhoInteresse, setTamanhoInteresse] = useState(0);
  const iniciadoEm = useRef(0);
  const resumoRef = useRef<HTMLDivElement>(null);
  const sucessoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    iniciadoEm.current = Date.now();
  }, []);

  useEffect(() => {
    if (estado === "sucesso") sucessoRef.current?.focus();
  }, [estado]);

  function mostrarErros(novos: ErrosCadastro, geral: string) {
    setErros(novos);
    setMensagemGeral(geral);
    // Leva o foco para o resumo de erros, para quem usa leitor de tela ou teclado.
    requestAnimationFrame(() => resumoRef.current?.focus());
  }

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!ativo || estado === "enviando") return;

    const form = new FormData(evento.currentTarget);
    const dados = {
      nome: String(form.get("nome") ?? ""),
      email: String(form.get("email") ?? ""),
      cidade: String(form.get("cidade") ?? ""),
      uf: String(form.get("uf") ?? ""),
      perfil: String(form.get("perfil") ?? ""),
      interesse: String(form.get("interesse") ?? ""),
      consentimento: form.get("consentimento") === "sim",
    };

    const validacao = esquemaCadastro.safeParse(dados);
    if (!validacao.success) {
      mostrarErros(errosPorCampo(validacao.error), "Alguns campos precisam de atenção.");
      return;
    }

    setEstado("enviando");
    setErros({});
    setMensagemGeral("");

    try {
      const resposta = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...dados,
          site: String(form.get("site") ?? ""),
          iniciadoEm: iniciadoEm.current,
        }),
      });
      if (resposta.ok) {
        setEstado("sucesso");
        return;
      }
      const corpo = await resposta.json().catch(() => ({}));
      setEstado("editando");
      mostrarErros(corpo.erros ?? {}, corpo.mensagem ?? "Algo deu errado. Tente novamente.");
    } catch {
      setEstado("editando");
      mostrarErros({}, "Não foi possível conectar. Confira sua internet e tente novamente.");
    }
  }

  if (estado === "sucesso") {
    return (
      <div
        ref={sucessoRef}
        tabIndex={-1}
        role="status"
        className="border-t-4 border-sucesso bg-fundo-suave p-6 focus:outline-none sm:p-8"
      >
        <h2 className="text-h2">Cadastro feito. Obrigado!</h2>
        <p className="mt-4 max-w-texto">
          Recebemos seus dados. Quando houver novidades no Conexões que Acolhem, vamos avisar pelo e-mail que você
          informou.
        </p>
        <p className="mt-3 max-w-texto text-nota text-texto-suave">
          Você pode pedir a exclusão dos seus dados a qualquer momento. Veja como na{" "}
          <Link href="/privacidade">Política de Privacidade</Link>.
        </p>
        <p className="mt-6">
          <Link href="/biblioteca">Enquanto isso, explore a biblioteca →</Link>
        </p>
      </div>
    );
  }

  const listaErros = ordemCampos.filter((c) => erros[c]);
  const desabilitado = !ativo || estado === "enviando";

  const descricao = (campo: CampoCadastro, extra?: string) =>
    [extra, erros[campo] ? `erro-${campo}` : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <form noValidate onSubmit={enviar} className="space-y-7" aria-describedby={!ativo ? "aviso-inativo" : undefined}>
      {!ativo && (
        <div id="aviso-inativo" className="border-l-2 border-alerta-borda bg-fundo-suave px-4 py-3 text-nota">
          <p className="font-bold">O cadastro ainda não está ativo.</p>
          <p className="mt-1 text-texto-suave">
            Estamos terminando de configurar o sistema. Volte em breve. Você pode ver o formulário,
            mas o envio está desligado por enquanto.
          </p>
        </div>
      )}

      {mensagemGeral && (
        <div
          ref={resumoRef}
          tabIndex={-1}
          role="alert"
          className="border-l-4 border-erro bg-fundo-suave px-4 py-3 focus:outline-none"
        >
          <p className="font-bold text-erro">{mensagemGeral}</p>
          {listaErros.length > 0 && (
            <ul className="mt-2 space-y-1 text-nota">
              {listaErros.map((c) => (
                <li key={c}>
                  <a href={`#campo-${c}`} className="text-erro">
                    {rotulos[c]}: {erros[c]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Honeypot: invisível para pessoas, robôs costumam preencher. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="campo-site">Não preencha este campo</label>
        <input id="campo-site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Campo id="nome" rotulo="Nome" erro={erros.nome}>
        <input
          id="campo-nome"
          name="nome"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          disabled={desabilitado}
          aria-invalid={erros.nome ? true : undefined}
          aria-describedby={descricao("nome")}
          className="campo"
        />
      </Campo>

      <Campo id="email" rotulo="E-mail" erro={erros.email}>
        <input
          id="campo-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={254}
          disabled={desabilitado}
          aria-invalid={erros.email ? true : undefined}
          aria-describedby={descricao("email")}
          className="campo"
        />
      </Campo>

      <div className="grid gap-7 sm:grid-cols-[1fr_9rem] sm:gap-4">
        <Campo id="cidade" rotulo="Cidade" erro={erros.cidade}>
          <input
            id="campo-cidade"
            name="cidade"
            type="text"
            autoComplete="address-level2"
            required
            maxLength={100}
            disabled={desabilitado}
            aria-invalid={erros.cidade ? true : undefined}
            aria-describedby={descricao("cidade")}
            className="campo"
          />
        </Campo>
        <Campo id="uf" rotulo="Estado" erro={erros.uf}>
          <select
            id="campo-uf"
            name="uf"
            required
            defaultValue=""
            autoComplete="address-level1"
            disabled={desabilitado}
            aria-invalid={erros.uf ? true : undefined}
            aria-describedby={descricao("uf")}
            className="campo"
          >
            <option value="" disabled>
              Escolha
            </option>
            {ufs.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </Campo>
      </div>

      <fieldset
        id="campo-perfil"
        tabIndex={-1}
        aria-invalid={erros.perfil ? true : undefined}
        aria-describedby={descricao("perfil")}
        className="focus:outline-none"
      >
        <legend className="mb-2 font-bold">
          Você é <span className="font-normal text-texto-suave">(escolha uma opção)</span>
        </legend>
        <div className="divide-y divide-borda border-y border-borda">
          {perfis.map((p) => (
            <label
              key={p.id}
              className="flex min-h-11 cursor-pointer items-center gap-3 py-2 has-[:disabled]:cursor-not-allowed"
            >
              <input
                type="radio"
                name="perfil"
                value={p.id}
                disabled={desabilitado}
                className="h-5 w-5 shrink-0 accent-azul"
              />
              {p.nome}
            </label>
          ))}
        </div>
        {erros.perfil && <MensagemErro id="erro-perfil" texto={erros.perfil} />}
      </fieldset>

      <Campo
        id="interesse"
        rotulo={
          <>
            O que você gostaria de encontrar no Conexões que Acolhem?{" "}
            <span className="font-normal text-texto-suave">(opcional)</span>
          </>
        }
        erro={erros.interesse}
        dica={
          <span id="dica-interesse">
            Não escreva informações de saúde ou diagnósticos. {tamanhoInteresse}/500
          </span>
        }
      >
        <textarea
          id="campo-interesse"
          name="interesse"
          rows={4}
          maxLength={500}
          disabled={desabilitado}
          onChange={(e) => setTamanhoInteresse(e.target.value.length)}
          aria-invalid={erros.interesse ? true : undefined}
          aria-describedby={descricao("interesse", "dica-interesse")}
          className="campo resize-y"
        />
      </Campo>

      <div>
        <label className="flex cursor-pointer items-start gap-3 has-[:disabled]:cursor-not-allowed">
          <input
            id="campo-consentimento"
            type="checkbox"
            name="consentimento"
            value="sim"
            required
            disabled={desabilitado}
            aria-invalid={erros.consentimento ? true : undefined}
            aria-describedby={descricao("consentimento")}
            className="mt-1 h-5 w-5 shrink-0 accent-azul"
          />
          <span>
            Li e concordo com a{" "}
            <Link href="/privacidade" target="_blank" className="underline">
              Política de Privacidade
              <span className="sr-only"> (abre em nova aba)</span>
            </Link>
            . Autorizo o Conexões que Acolhem a guardar meus dados para enviar novidades do projeto.
          </span>
        </label>
        {erros.consentimento && (
          <MensagemErro id="erro-consentimento" texto={erros.consentimento} />
        )}
      </div>

      <div className="border-t border-borda pt-6">
        <button type="submit" className="botao botao-escuro" disabled={desabilitado}>
          {estado === "enviando" ? "Enviando…" : "Fazer cadastro"}
        </button>
      </div>
    </form>
  );
}

function Campo({
  id,
  rotulo,
  erro,
  dica,
  children,
}: {
  id: CampoCadastro;
  rotulo: ReactNode;
  erro?: string;
  dica?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`campo-${id}`} className="mb-1.5 block font-bold">
        {rotulo}
      </label>
      {children}
      {dica && <p className="mt-1.5 text-mini text-texto-suave">{dica}</p>}
      {erro && <MensagemErro id={`erro-${id}`} texto={erro} />}
    </div>
  );
}

function MensagemErro({ id, texto }: { id: string; texto: string }) {
  return (
    <p id={id} className="mt-1.5 text-nota font-bold text-erro">
      {texto}
    </p>
  );
}
