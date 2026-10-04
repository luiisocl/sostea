import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Conexão com o Supabase. Só é usada no servidor (rota app/api/cadastro).
// As chaves vêm das variáveis de ambiente (.env.local no seu computador,
// "Environment Variables" na Vercel).

export function supabaseConfigurado() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY);
}

let cliente: SupabaseClient | null = null;

export function obterSupabase(): SupabaseClient | null {
  if (!supabaseConfigurado()) return null;
  cliente ??= createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false },
  });
  return cliente;
}
