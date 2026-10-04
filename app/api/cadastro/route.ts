import { errosPorCampo, esquemaCadastro, VERSAO_POLITICA } from "@/lib/validacao";
import { obterSupabase } from "@/lib/supabase";

// Tempo mínimo (em ms) entre abrir o formulário e enviar. Robôs costumam ser instantâneos.
const TEMPO_MINIMO = 2500;

export async function POST(request: Request) {
  let corpo: Record<string, unknown>;
  try {
    corpo = await request.json();
  } catch {
    return Response.json({ mensagem: "Não foi possível ler os dados enviados." }, { status: 400 });
  }

  // Proteção contra spam: o campo "site" é invisível para pessoas.
  // Se vier preenchido, ou se o envio for rápido demais, fingimos sucesso e descartamos.
  const iniciadoEm = Number(corpo.iniciadoEm);
  if (
    (typeof corpo.site === "string" && corpo.site.trim() !== "") ||
    (Number.isFinite(iniciadoEm) && Date.now() - iniciadoEm < TEMPO_MINIMO)
  ) {
    return Response.json({ ok: true }, { status: 201 });
  }

  const resultado = esquemaCadastro.safeParse(corpo);
  if (!resultado.success) {
    return Response.json(
      { mensagem: "Alguns campos precisam de atenção.", erros: errosPorCampo(resultado.error) },
      { status: 400 },
    );
  }

  const supabase = obterSupabase();
  if (!supabase) {
    return Response.json(
      { mensagem: "O cadastro ainda não está ativo. Tente novamente mais tarde." },
      { status: 503 },
    );
  }

  const dados = resultado.data;
  const { error } = await supabase.from("cadastros").insert({
    nome: dados.nome,
    email: dados.email,
    cidade: dados.cidade,
    uf: dados.uf,
    perfil: dados.perfil,
    interesse: dados.interesse || null,
    consentimento: true,
    versao_politica: VERSAO_POLITICA,
  });

  if (error) {
    // 23505 = e-mail já cadastrado (índice único)
    if (error.code === "23505") {
      return Response.json(
        {
          mensagem: "Este e-mail já está cadastrado.",
          erros: { email: "Este e-mail já está cadastrado. Você não precisa se cadastrar de novo." },
        },
        { status: 409 },
      );
    }
    console.error("[cadastro] erro no Supabase:", error.code, error.message);
    return Response.json(
      { mensagem: "Não conseguimos salvar seu cadastro agora. Tente de novo em alguns minutos." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
