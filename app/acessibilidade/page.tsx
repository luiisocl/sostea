import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility } from "lucide-react";
import { PainelAcessibilidade } from "@/components/PainelAcessibilidade";
import { CabecalhoPagina, ListaMarcada, Secao } from "@/components/ui";
import { emailContato } from "@/data/equipe";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description: "Recursos de acessibilidade do SOSTEA: reduzir estímulos, tamanho do texto e navegação por teclado.",
};

export default function Acessibilidade() {
  return (
    <>
      <CabecalhoPagina rotulo="Acessibilidade" titulo="Um site para todas as pessoas" icone={Accessibility}>
        <p>
          O SOSTEA foi pensado para ter baixa carga sensorial e ser fácil de usar. Ajuste a leitura
          do seu jeito.
        </p>
      </CabecalhoPagina>

      <div className="container-pagina mt-10">
        <PainelAcessibilidade />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Secao id="o-que-fizemos" titulo="O que fizemos">
            <ListaMarcada
              itens={[
                "Sem vídeos ou sons que tocam sozinhos, sem carrosséis automáticos e sem janelas que surgem do nada.",
                "Animações mínimas. Se o seu dispositivo pede menos movimento, o site respeita.",
                "Contraste de cores no padrão WCAG AA.",
                "Navegação completa pelo teclado, com foco sempre visível. Use Tab para avançar.",
                "Link “Pular para o conteúdo” no início de cada página.",
                "Textos alternativos nas imagens que trazem informação.",
                "Fonte Atkinson Hyperlegible, criada para facilitar a leitura.",
                "Linguagem simples, frases curtas e termos técnicos explicados.",
                "Menu igual em todas as páginas.",
              ]}
            />
          </Secao>
          <Secao id="encontrou-problema" titulo="Encontrou um problema?">
            <p>
              Se algo estiver difícil de ler, de entender ou de usar, conte para a gente. Isso nos
              ajuda a melhorar.
            </p>
            <p>
              Escreva para <strong className="break-words text-marinho">{emailContato}</strong> ou veja{" "}
              <Link href="/sobre#contato">Fale conosco</Link>.
            </p>
          </Secao>
        </div>
      </div>
    </>
  );
}
