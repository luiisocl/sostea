import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, ExternalLink, HeartHandshake, Hospital, Phone, Scale, School } from "lucide-react";
import { CabecalhoPagina, Fontes, IconeCirculo } from "@/components/ui";
import { fontes } from "@/lib/fontes";
import type { Cor } from "@/lib/cores";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Rede de apoio",
  description:
    "Serviços, instituições e canais de atendimento para pessoas autistas e suas famílias em Teresina - PI, incluindo a AMA-PI.",
};

type Servico = {
  nome: string;
  tipo: string;
  descricao: string;
  url?: string;
  icone: LucideIcon;
  cor: Cor;
};

// Informações verificadas em outubro de 2026. Confirme horários e documentos direto com cada instituição.
const servicos: Servico[] = [
  {
    nome: "AMA-PI — Associação de Amigos dos Autistas do Piauí",
    tipo: "Associação sem fins lucrativos",
    descricao:
      "Organização formada por famílias, amigos e pessoas autistas, em Teresina desde 2000. Oferece atendimento multiprofissional e ações para promover autonomia e dignidade da pessoa autista e da família.",
    url: "https://amapiaui.com.br/",
    icone: HeartHandshake,
    cor: "verde",
  },
  {
    nome: "CEIR — Centro Integrado de Reabilitação",
    tipo: "Atendimento pelo SUS",
    descricao:
      "Centro de reabilitação que atende pessoas com TEA com equipe multiprofissional. O acesso é por encaminhamento da rede pública de saúde, a partir da Unidade Básica de Saúde.",
    url: "https://www.reabilitar.org.br/ceir-acesse-nossos-servicos/",
    icone: Hospital,
    cor: "azul",
  },
  {
    nome: "Cetea — Centro Especializado de Atendimento às Pessoas com TEA",
    tipo: "Governo do Estado do Piauí",
    descricao:
      "Equipamento público estadual dedicado ao atendimento especializado de pessoas com autismo, em Teresina.",
    url: "https://www.pi.gov.br/centro-de-atendimento-para-pessoas-com-autismo-avanca-no-piaui/",
    icone: Building2,
    cor: "lilas",
  },
  {
    nome: "Unidade Básica de Saúde (UBS)",
    tipo: "Porta de entrada do SUS",
    descricao:
      "O primeiro passo para avaliação e encaminhamento. Procure a UBS mais perto de casa e conte o que você tem observado.",
    icone: Hospital,
    cor: "rosa",
  },
  {
    nome: "Defensoria Pública do Estado do Piauí",
    tipo: "Orientação jurídica gratuita",
    descricao: "Pode ajudar quando um direito for negado, como matrícula escolar, tratamento ou atendimento prioritário.",
    url: "https://www.defensoria.pi.def.br/",
    icone: Scale,
    cor: "amarelo",
  },
  {
    nome: "Secretaria de Educação e escola",
    tipo: "Inclusão escolar",
    descricao:
      "Para dúvidas sobre matrícula, atendimento educacional especializado e acompanhante em sala, procure a direção da escola e a secretaria de educação responsável.",
    icone: School,
    cor: "azul",
  },
];

export default function RedeDeApoio() {
  return (
    <>
      <CabecalhoPagina rotulo="Rede de apoio" titulo="Rede de apoio em Teresina" icone={HeartHandshake} cor="verde">
        <p>
          Serviços, instituições e canais que podem apoiar pessoas autistas e suas famílias em
          Teresina e região.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        <div className="grid overflow-hidden rounded-bloco bg-verde-bg md:grid-cols-[1fr_22rem]">
          <div className="p-6 sm:p-8">
            <p className="font-manuscrita text-manuscrito text-azul-escuro">Ninguém precisa caminhar sozinho.</p>
            <p className="mt-3 max-w-texto">
              A rede de apoio reúne serviços de saúde, educação, assistência e associações de
              famílias. Conhecer esses caminhos ajuda a encontrar atendimento, informação e
              acolhimento.
            </p>
          </div>
          <div className="relative h-48 md:h-auto">
            <Image src="/images/rede-de-apoio.jpg" alt="" fill sizes="(min-width: 768px) 22rem, 100vw" className="object-cover" />
          </div>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {servicos.map((s) => (
            <li key={s.nome} className="card flex gap-4 p-5">
              <IconeCirculo icone={s.icone} cor={s.cor} />
              <div>
                <p className="text-mini font-bold text-texto-suave uppercase">{s.tipo}</p>
                <h2 className="mt-1 text-h4">{s.nome}</h2>
                <p className="mt-2 text-nota text-texto">{s.descricao}</p>
                {s.url && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-nota font-bold">
                    Site oficial
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <section aria-labelledby="emergencia" className="mt-10 rounded-bloco border border-alerta-borda bg-alerta-bg p-6 sm:p-8">
          <h2 id="emergencia" className="flex items-center gap-3 text-h3">
            <Phone aria-hidden="true" className="h-6 w-6 text-alerta-titulo" />
            Em caso de emergência
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li>
              <a href="tel:192" className="font-titulo text-h3 font-extrabold no-underline">SAMU 192</a>
              <p className="text-nota">Emergência médica, 24 horas.</p>
            </li>
            <li>
              <a href="tel:188" className="font-titulo text-h3 font-extrabold no-underline">CVV 188</a>
              <p className="text-nota">Apoio emocional gratuito, 24 horas.</p>
            </li>
          </ul>
        </section>

        <p className="mt-8 max-w-texto text-nota text-texto-suave">
          Informações verificadas em outubro de 2026. Endereços, horários e documentos podem mudar:
          confirme diretamente com cada instituição. Conhece outro serviço que deveria estar aqui?{" "}
          <Link href="/sobre#contato">Fale conosco</Link>.
        </p>

        <Fontes fontes={[fontes.amaPi, fontes.ceir, fontes.cetea, fontes.defensoriaPi, fontes.cvv]} />
      </div>
    </>
  );
}
