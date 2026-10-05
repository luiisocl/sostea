// Configuração das doações.
//
// HOJE: tudo desativado (doacoesAtivas = false). A página só mostra o layout.
// DEPOIS, para ativar:
//   1. Preencha "pix" com a chave real e coloque a imagem do QR code em /public/pix-qrcode.png.
//   2. Para pagamento por cartão/boleto, crie uma rota em app/api/doacao/route.ts que
//      fale com o provedor escolhido (ex.: Mercado Pago, Stripe, PagSeguro) e implemente
//      iniciarDoacao() abaixo chamando essa rota.
//   3. Mude doacoesAtivas para true.

export const doacoesAtivas = false;

export const valoresSugeridos = [10, 25, 50] as const;

export const valorMinimo = 5;

export const pix = {
  chave: "chave-pix-exemplo@sostea.org",
  tipo: "E-mail",
  favorecido: "Nome do favorecido (a definir)",
  qrCodeSrc: null as string | null, // ex.: "/pix-qrcode.png"
};

// Para onde vai o dinheiro. Edite quando houver definição do grupo.
export const destinos = [
  {
    titulo: "Manter o site no ar",
    texto: "Domínio, hospedagem e ferramentas necessárias para o Conexões que Incluem continuar funcionando.",
  },
  {
    titulo: "Revisão do conteúdo",
    texto: "Apoio à revisão dos textos por profissionais de saúde e por pessoas autistas.",
  },
  {
    titulo: "Materiais acessíveis",
    texto: "Produção de materiais em linguagem simples, com recursos visuais e versões para impressão.",
  },
];

export function formatarReais(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Ponto de integração com o meio de pagamento (ainda não implementado). */
export async function iniciarDoacao(valor: number): Promise<never> {
  throw new Error(`Doações ainda não estão ativas (valor solicitado: ${formatarReais(valor)}).`);
}
