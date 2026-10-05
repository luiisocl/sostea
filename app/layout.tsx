import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { scriptInicial } from "@/lib/preferencias";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SOSTEA — Informação que acolhe",
    template: "%s · SOSTEA",
  },
  description:
    "Orientações práticas, conteúdos educativos e uma rede de apoio para o dia a dia de crianças com Transtorno do Espectro Autista (TEA) em Teresina - PI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${atkinson.variable} ${caveat.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptInicial }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-marinho focus:px-5 focus:py-3 focus:text-branco"
        >
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}
